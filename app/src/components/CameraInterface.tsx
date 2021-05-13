/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { AppState } from "redux/store";
import * as actions from "redux/actions/actions";
import { ExtractPropsType } from "utils/reduxUtils";
import { useConstRefFunc } from "utils/customHooks";
import { recognizeEmoji } from "utils/emojiRecognizer";

const handTrack = require("handtrackjs");

let video = null as any;
let canvas = null as any;
let context = null as any;

let model: any = null;

let detectionCallback = null as any;

const modelParams = {
  flipHorizontal: true, // flip e.g for video
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
};

// Load the model.
handTrack.load(modelParams).then((lmodel: any) => {
  // detect objects in the image.
  model = lmodel;
  console.log(model);
});

function startVideo(callback: any) {
  video = document.getElementById("myvideo");
  canvas = document.getElementById("canvas") as any;
  context = canvas.getContext("2d");
  detectionCallback = callback;

  handTrack.startVideo(video).then(function (status: any) {
    console.log("video started", status);
    if (status) {
      runDetection();
    }
  });
}

function runDetection() {
  if (model) {
    model.detect(video).then((predictions: any) => {
      // console.log("Predictions: ", predictions);
      detectionCallback(predictions);
      const showPredictions = [];
      for (const prediction of predictions) {
        if (prediction.label === "open" || prediction.label === "closed") {
          showPredictions.push(prediction);
        }
      }
      model.renderPredictions(showPredictions, canvas, context, video);
      requestAnimationFrame(runDetection);
    });
  } else {
    requestAnimationFrame(runDetection);
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    currentWord: state.main.currentWord,
  };
};

const mapDispatchToProps = actions;

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
type Props = ExtractPropsType<typeof connectComponent>;

const CameraInterface = (props: Props) => {
  const currentGesture = useRef<[number, number][]>([]);
  const gestureLength = useRef(0);
  const handIsClosed = useRef(false);
  const skippedFrames = useRef(0);

  const detectionCallback = useConstRefFunc((predictions: any) => {
    let handIsNowClosed = false;
    for (const prediction of predictions) {
      if (prediction.label === "closed") {
        handIsNowClosed = true;
        skippedFrames.current = 0;
        if (!handIsClosed.current) {
          handIsClosed.current = true;
          currentGesture.current = [];
          gestureLength.current = 0;
        }
        if (currentGesture.current.length) {
          const lastPoint = currentGesture.current.slice(-1)[0];
          const dx = prediction.bbox[0] - lastPoint[0];
          const dy = prediction.bbox[1] - lastPoint[1];
          gestureLength.current += Math.sqrt(dx * dx + dy * dy);
        }
        currentGesture.current.push([prediction.bbox[0], prediction.bbox[1]]);
        break;
      }
    }

    if (handIsClosed.current && !handIsNowClosed) {
      skippedFrames.current++;
      if (skippedFrames.current >= 4) {
        handIsClosed.current = false;
        if (gestureLength.current >= 100) {
          const emojiChar = recognizeEmoji(currentGesture.current);
          if (emojiChar) {
            if (/\s/.test(props.currentWord.slice(-1))) {
              props.pushCurrentWord();
              props.setCurrentWord(emojiChar);
            } else {
              props.setCurrentWord(props.currentWord + emojiChar);
            }
          }
        }
      }
    }
  });

  useEffect(() => startVideo(detectionCallback), []);

  return (
    <div className="CameraInterface">
      <video className="videobox" autoPlay id="myvideo"></video>
      <canvas id="canvas" className="canvasbox"></canvas>
    </div>
  );
};

export default connectComponent(CameraInterface);
