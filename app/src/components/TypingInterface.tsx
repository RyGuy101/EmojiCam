import React, { useState, useRef, ComponentProps } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { AppState } from "redux/store";
import * as actions from "redux/actions/actions";
import { ExtractPropsType } from "utils/reduxUtils";
import { useConstRefFunc, useTimeout, useInterval } from "utils/customHooks";
import GraphemeSplitter from "grapheme-splitter";

const splitter = new GraphemeSplitter();

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const OneDollar = require("one-dollar");
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const recognizer = OneDollar();

function makePoints(pointList: [number, number][]) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return pointList.map(function (point) {
    if (Array.isArray(point)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      return new OneDollar.Point(point[0], point[1]);
    }
  });
}

// Custom Gestures
type Gesture = "smiley" | "frowny" | "open_smile" | "tear" | "up";
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("smiley", makePoints([[161,433],[161,435],[161,437],[161,441],[163,445],[165,450],[169,456],[174,462],[179,469],[190,480],[197,485],[210,492],[226,499],[230,500],[264,503],[267,503],[271,503],[275,503],[278,502],[281,501],[283,499],[286,497],[294,481],[295,476],[299,466],[302,460],[305,454],[308,447],[309,443],[311,440],[312,438],[313,437],[313,436],[313,435],[314,435],[314,435],[314,435]]));
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("frowny", makePoints([[155,420],[155,419],[155,418],[155,417],[157,414],[159,412],[161,409],[164,407],[168,403],[172,400],[176,397],[181,395],[185,393],[190,391],[196,389],[200,387],[206,385],[210,384],[216,383],[220,382],[224,382],[228,381],[232,381],[236,381],[239,380],[242,380],[246,380],[249,380],[254,380],[257,380],[259,380],[262,381],[265,382],[268,383],[270,384],[271,385],[275,386],[278,388],[280,389],[283,391],[286,393],[288,394],[291,397],[293,400],[296,402],[298,405],[300,407],[302,409],[303,411],[306,415],[308,419],[308,420],[309,422],[310,425],[311,427],[312,428],[312,430],[313,431],[313,433],[313,434],[314,436],[314,437],[314,438],[314,440],[315,441],[315,442],[315,442],[315,442],[315,443],[315,443],[315,443]]));
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("open_smile", makePoints([[147,370],[148,372],[154,377],[161,382],[165,385],[168,387],[174,390],[179,393],[183,396],[198,403],[203,405],[233,409],[247,410],[272,410],[278,409],[282,407],[287,405],[290,404],[293,401],[295,400],[300,396],[302,394],[304,392],[307,389],[308,387],[309,384],[321,363],[321,363],[321,363],[321,363],[321,364],[321,364],[321,364],[321,364],[321,365],[321,365],[321,365],[321,366],[321,366],[321,367],[320,368],[320,368],[320,369],[320,370],[319,371],[317,376],[316,379],[314,383],[312,389],[310,394],[307,401],[304,408],[301,414],[298,420],[296,424],[295,425],[293,428],[290,431],[286,434],[284,436],[282,437],[279,439],[275,440],[271,442],[267,443],[257,446],[250,448],[246,449],[237,451],[228,452],[216,453],[206,454],[202,454],[193,454],[185,453],[179,451],[172,447],[167,443],[161,437],[149,420],[147,415],[145,408],[143,400],[142,393],[142,391],[142,390],[142,389],[142,388],[142,388],[142,388]]));
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("tear", makePoints([[224,368],[224,369],[224,370],[224,372],[224,373],[224,374],[224,376],[224,378],[224,380],[224,382],[224,385],[224,387],[224,389],[224,390],[225,392],[225,394],[225,395],[225,397],[225,399],[225,400],[225,402],[225,404],[225,406],[224,407],[224,409],[223,410],[221,414],[219,416],[217,418],[215,420],[210,426],[208,429],[206,432],[205,434],[204,437],[202,440],[201,442],[199,447],[198,449],[198,451],[197,455],[197,458],[197,461],[197,465],[197,468],[197,472],[198,474],[199,477],[200,480],[202,482],[204,485],[207,487],[210,488],[212,489],[215,489],[219,489],[222,489],[226,489],[239,489],[243,487],[246,486],[248,485],[250,483],[251,482],[252,482],[252,481],[252,480],[252,479],[252,477],[251,476],[250,475],[249,474],[245,470],[242,465],[240,461],[238,458],[236,452],[235,446],[234,439],[232,428],[231,419],[230,405],[230,396],[230,388],[230,380],[230,377],[230,372],[230,369],[230,366],[230,365],[230,364],[230,364]]));
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("up", makePoints([[232,475],[232,472],[232,463],[232,453],[232,430],[232,415],[232,406],[232,390],[232,373],[232,367],[232,353],[232,341],[232,332],[232,323],[232,318],[232,314],[232,308]]));

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const Typo = require("typo-js");
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const dictionary = new Typo("en_US", false, false, {
  dictionaryPath: "dictionaries",
});

const mapStateToProps = (state: AppState) => {
  return {
    currentWord: state.main.currentWord,
  };
};

const mapDispatchToProps = actions;

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
type Props = ExtractPropsType<typeof connectComponent>;

const TypingInterface = (props: Props) => {
  const [shift, setShift] = useState(true);
  const [caps, setCaps] = useState(false);
  const [showPunctuation, setShowPunctuation] = useState(false);
  const [numberKeyboard, setNumberKeyboard] = useState(false);
  const [autoCorrected, setAutoCorrected] = useState("");
  const [dontAutoCorrect, setDontAutoCorrect] = useState(false);
  const tappedCharacter = useRef<string | null>(null);
  const repeatedBackspace = useRef(false);
  const repeatedSpace = useRef(false);
  const mouseDown = useRef(false);
  const currentStroke = useRef<[number, number][]>([]);
  const strokeLength = useRef(0);

  const Key = useConstRefFunc(
    ({
      char,
      display,
      ...buttonProps
    }: {
      char: string;
      display?: string;
    } & ComponentProps<typeof Button>) => (
      <Button
        {...buttonProps}
        outline
        onTouchStart={(e) => {
          if (buttonProps.onTouchStart) {
            buttonProps.onTouchStart(e);
            if (e.defaultPrevented) {
              return;
            }
          }

          tappedCharacter.current = char;
        }}
        onClick={(e) => {
          if (buttonProps.onClick) {
            buttonProps.onClick(e);
            if (e.defaultPrevented) {
              return;
            }
          }

          if (strokeLength.current > 100) {
            return;
          }

          const clickedChar = tappedCharacter.current
            ? tappedCharacter.current
            : char; // Fix weird bug on mobile where the wrong button gets clicked
          tappedCharacter.current = null;
          let autoCorrectedWord = "";
          if (
            /\s/.test(props.currentWord.slice(-1)) &&
            !/\s/.test(clickedChar)
          ) {
            props.pushCurrentWord();
            props.setCurrentWord(clickedChar);
            setDontAutoCorrect(false);
          } else {
            let word = props.currentWord;
            if (clickedChar === " ") {
              if (
                !dontAutoCorrect &&
                word.trim() === word &&
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                !dictionary.check(word)
              ) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
                const suggestions = dictionary.suggest(word, 1);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (suggestions.length > 0) {
                  autoCorrectedWord = word + clickedChar;
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                  word = suggestions[0];
                }
              }
            }
            props.setCurrentWord(word + clickedChar);
          }
          setShift(false);
          setShowPunctuation(clickedChar === " ");
          setAutoCorrected(autoCorrectedWord);
        }}
      >
        {display ? display : char}
      </Button>
    )
  );

  const LetterKey = useConstRefFunc(
    ({
      upperChar,
      lowerChar,
      ...buttonProps
    }: {
      upperChar: string;
      lowerChar: string;
    } & ComponentProps<typeof Button>) => (
      <Key char={shift || caps ? upperChar : lowerChar} {...buttonProps} />
    )
  );

  const PunctuationKey = useConstRefFunc(({ char }: { char: string }) => (
    <Button
      outline
      onClick={() => {
        props.setCurrentWord(
          props.currentWord.slice(0, -1) + char + (numberKeyboard ? "" : " ")
        );
        setShift(
          numberKeyboard ? false : char === "." || char === "?" || char === "!"
        );
        if (autoCorrected !== "") {
          setAutoCorrected(
            autoCorrected.slice(0, -1) + char + (numberKeyboard ? "" : " ")
          );
        }
        setShowPunctuation(false);
      }}
    >
      {char}
    </Button>
  ));

  const backspace = () => {
    if (props.currentWord.length) {
      if (autoCorrected !== "") {
        if (props.currentWord.slice(-1) === " ") {
          setAutoCorrected(autoCorrected.slice(0, -1));
        } else {
          setAutoCorrected("");
          setDontAutoCorrect(true);
        }
      }
      props.setCurrentWord(
        splitter.splitGraphemes(props.currentWord).slice(0, -1).join("")
      );
    } else {
      props.popLastWord();
      setDontAutoCorrect(false);
    }
    setShift(false);
  };

  const [startBackspaceInterval, clearBackspaceInterval] = useInterval(() => {
    backspace();
  }, 50);

  const [startBackspaceTimeout, clearBackspaceTimeout] = useTimeout(() => {
    backspace();
    repeatedBackspace.current = true;
    startBackspaceInterval();
  }, 500);

  const [startSpaceInterval, clearSpaceInterval] = useInterval(() => {
    props.setCurrentWord(props.currentWord + " ");
    setShift(false);
  }, 50);

  const [startSpaceTimeout, clearSpaceTimeout] = useTimeout(() => {
    props.setCurrentWord(props.currentWord + " ");
    setShift(false);
    repeatedSpace.current = true;
    startSpaceInterval();
  }, 500);

  return (
    <div
      className="TypingInterface"
      onMouseDown={() => {
        mouseDown.current = true;
        currentStroke.current = [];
        strokeLength.current = 0;
        document.addEventListener(
          "mouseup",
          () => {
            mouseDown.current = false;
            if (strokeLength.current > 100) {
              console.log(JSON.stringify(currentStroke.current));
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
              const gesture = recognizer.recognize(
                makePoints(currentStroke.current)
              ).Name as Gesture | "No match.";
              console.log(gesture);
              if (gesture !== "No match.") {
                const emojiChar = {
                  smiley: String.fromCodePoint(0x1f642), //🙂
                  frowny: String.fromCodePoint(0x1f625), //😥
                  open_smile: String.fromCodePoint(0x1f604), //😄
                  tear: String.fromCodePoint(0x1f602), //😂
                  up: String.fromCodePoint(0x1f44d), //👍
                  circle: String.fromCodePoint(0x1f62e), //😮
                }[gesture];
                if (/\s/.test(props.currentWord.slice(-1))) {
                  props.pushCurrentWord();
                  props.setCurrentWord(emojiChar);
                  setDontAutoCorrect(false);
                } else {
                  props.setCurrentWord(props.currentWord + emojiChar);
                }
                setShift(false);
                setShowPunctuation(false);
                setDontAutoCorrect(true);
              }
            }
          },
          { once: true }
        );
      }}
      onMouseMove={(e) => {
        if (mouseDown.current) {
          if (currentStroke.current.length) {
            const lastPoint = currentStroke.current.slice(-1)[0];
            const dx = e.clientX - lastPoint[0];
            const dy = e.clientY - lastPoint[1];
            strokeLength.current += Math.sqrt(dx * dx + dy * dy);
          }
          currentStroke.current.push([e.clientX, e.clientY]);
        }
      }}
    >
      <div id="top_bar">
        <Button
          outline
          id="switch_keyboard"
          onClick={() => setNumberKeyboard(!numberKeyboard)}
        >
          {numberKeyboard ? "ABC" : "123"}
        </Button>
        <div
          id="word_container"
          onClick={() => {
            if (autoCorrected !== "") {
              props.setCurrentWord(autoCorrected);
              setAutoCorrected("");
              setDontAutoCorrect(true);
            }
          }}
        >
          <span
            id="word"
            dir="ltr"
            className={autoCorrected !== "" ? "auto-corrected" : ""}
          >
            {props.currentWord.replaceAll("\n", " ") + "▋"}
          </span>
        </div>
        <Key char={"\n"} display="⏎" id="enter" />
      </div>

      {numberKeyboard ? (
        <div>
          <div>
            <Key char="7" />
            <Key char="8" />
            <Key char="9" />
            <Key char="@" />
            <Key char="-" />
          </div>
          <div>
            <Key char="4" />
            <Key char="5" />
            <Key char="6" />
            <Key char="$" />
            <Key char="%" />
          </div>
          <div>
            <Key char="1" />
            <Key char="2" />
            <Key char="3" />
            <Key char="'" onClick={() => setNumberKeyboard(false)} />
            <Key char="/" />
          </div>
        </div>
      ) : (
        <div id="qwerty">
          <div>
            <LetterKey upperChar="Q" lowerChar="q" />
            <LetterKey upperChar="W" lowerChar="w" />
            <LetterKey upperChar="E" lowerChar="e" />
            <LetterKey upperChar="R" lowerChar="r" />
            <LetterKey upperChar="T" lowerChar="t" />
            <LetterKey upperChar="Y" lowerChar="y" />
            <LetterKey upperChar="U" lowerChar="u" />
            <LetterKey upperChar="I" lowerChar="i" />
            <LetterKey upperChar="O" lowerChar="o" />
            <LetterKey upperChar="P" lowerChar="p" />
          </div>
          <div>
            <LetterKey upperChar="A" lowerChar="a" />
            <LetterKey upperChar="S" lowerChar="s" />
            <LetterKey upperChar="D" lowerChar="d" />
            <LetterKey upperChar="F" lowerChar="f" />
            <LetterKey upperChar="G" lowerChar="g" />
            <LetterKey upperChar="H" lowerChar="h" />
            <LetterKey upperChar="J" lowerChar="j" />
            <LetterKey upperChar="K" lowerChar="k" />
            <LetterKey upperChar="L" lowerChar="l" />
          </div>
          <div>
            <LetterKey upperChar="Z" lowerChar="z" />
            <LetterKey upperChar="X" lowerChar="x" />
            <LetterKey upperChar="C" lowerChar="c" />
            <LetterKey upperChar="V" lowerChar="v" />
            <LetterKey upperChar="B" lowerChar="b" />
            <LetterKey upperChar="N" lowerChar="n" />
            <LetterKey upperChar="M" lowerChar="m" />
          </div>
        </div>
      )}

      <div>
        {numberKeyboard ? (
          <Key char="0" />
        ) : (
          <Button
            outline={!shift && !caps}
            id="shift"
            onClick={caps ? () => setCaps(false) : () => setShift(!shift)}
            onDoubleClick={() => {
              setCaps(true);
              setShift(false);
            }}
          >
            {caps ? "⇪" : "⇧"}
          </Button>
        )}
        {showPunctuation ? (
          <span id="punctuation">
            <PunctuationKey char="." />
            <PunctuationKey char="," />
            <PunctuationKey char="?" />
            <PunctuationKey char="!" />
          </span>
        ) : (
          <span>
            <Key
              char=" "
              display="⎵"
              id="space"
              onClick={(e) => {
                if (repeatedSpace.current) {
                  e.preventDefault();
                }
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                repeatedSpace.current = false;
                startSpaceTimeout();
                document.addEventListener(
                  "touchend",
                  () => {
                    clearSpaceTimeout();
                    clearSpaceInterval();
                  },
                  { once: true }
                );
              }}
              onMouseDown={() => {
                repeatedSpace.current = false;
                startSpaceTimeout();
                document.addEventListener(
                  "mouseup",
                  () => {
                    clearSpaceTimeout();
                    clearSpaceInterval();
                  },
                  { once: true }
                );
              }}
            />
            <Button
              outline
              id="backspace"
              onClick={() => {
                if (repeatedBackspace.current) {
                  return;
                }
                backspace();
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                repeatedBackspace.current = false;
                startBackspaceTimeout();
                document.addEventListener(
                  "touchend",
                  () => {
                    clearBackspaceTimeout();
                    clearBackspaceInterval();
                  },
                  { once: true }
                );
              }}
              onMouseDown={() => {
                repeatedBackspace.current = false;
                startBackspaceTimeout();
                document.addEventListener(
                  "mouseup",
                  () => {
                    clearBackspaceTimeout();
                    clearBackspaceInterval();
                  },
                  { once: true }
                );
              }}
            >
              ⌫
            </Button>
          </span>
        )}
      </div>
    </div>
  );
};

export default connectComponent(TypingInterface);
