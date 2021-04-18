import React, { useState, useRef, ComponentProps } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { AppState } from "redux/store";
import * as actions from "redux/actions/actions";
import { ExtractPropsType } from "utils/reduxUtils";

const mapStateToProps = (state: AppState) => {
  return {
    currentWord: state.main.currentWord,
  };
};

const mapDispatchToProps = actions;

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
type Props = ExtractPropsType<typeof connectComponent>;

const Key = ({
  char,
  display,
  parentProps,
  setShift,
  setShowPunctuation,
  tappedCharacter,
  ...rest
}: {
  char: string;
  display?: string;
  parentProps: Props;
  setShift: (val: boolean) => void;
  setShowPunctuation: (val: boolean) => void;
  tappedCharacter: React.MutableRefObject<string | null>;
} & ComponentProps<typeof Button>) => (
  <Button
    {...rest}
    outline
    onTouchStart={(e) => {
      tappedCharacter.current = char;

      if (rest.onTouchStart) {
        rest.onTouchStart(e);
      }
    }}
    onClick={(e) => {
      char = tappedCharacter.current ? tappedCharacter.current : char; // Fix weird bug on mobile where the wrong button gets clicked
      tappedCharacter.current = null;
      if (/\s/.test(parentProps.currentWord.slice(-1)) && !/\s/.test(char)) {
        parentProps.pushCurrentWord();
        parentProps.setCurrentWord(char);
      } else {
        parentProps.setCurrentWord(parentProps.currentWord + char);
      }
      setShift(false);
      setShowPunctuation(char === " ");

      if (rest.onClick) {
        rest.onClick(e);
      }
    }}
  >
    {display ? display : char}
  </Button>
);

const LetterKey = ({
  upperChar,
  shift,
  caps,
  ...keyProps
}: {
  upperChar: string;
  shift: boolean;
  caps: boolean;
} & ComponentProps<typeof Key>) =>
  shift || caps ? (
    <Key {...keyProps} char={upperChar} />
  ) : (
    <Key {...keyProps} />
  );

const TypingInterface = (props: Props) => {
  const propsRef = useRef(props);
  propsRef.current = props;

  const [shift, setShift] = useState(true);
  const [caps, setCaps] = useState(false);
  const [showPunctuation, setShowPunctuation] = useState(false);
  const [numberKeyboard, setNumberKeyboard] = useState(false);
  const repeatSpaceHandle = useRef<number | undefined>(undefined);
  const repeatBackspaceHandle = useRef<number | undefined>(undefined);
  const tappedCharacter = useRef<string | null>(null);

  const keyProps = {
    parentProps: props,
    setShift,
    setShowPunctuation,
    tappedCharacter,
  };

  const letterKeyProps = {
    shift,
    caps,
    ...keyProps,
  };

  const PunctuationKey = ({ char }: { char: string }) => (
    <Button
      outline
      onClick={() => {
        props.setCurrentWord(
          props.currentWord.slice(0, -1) + char + (numberKeyboard ? "" : " ")
        );
        setShift(
          numberKeyboard ? false : char === "." || char === "?" || char === "!"
        );
        setShowPunctuation(false);
      }}
    >
      {char}
    </Button>
  );

  const backspace = (currentWord: string) => {
    if (currentWord.length) {
      props.setCurrentWord(currentWord.slice(0, -1));
    } else {
      props.popLastWord();
    }
    setShift(false);
  };

  const repeatBackspace = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (repeatBackspaceHandle.current === undefined) {
      repeatBackspaceHandle.current = window.setTimeout(() => {
        backspace(propsRef.current.currentWord);
        repeatBackspaceHandle.current = window.setInterval(() => {
          backspace(propsRef.current.currentWord);
        }, 50);
      }, 500);
    }
  };

  const repeatSpace = (e: React.MouseEvent | React.TouchEvent) => {
    // console.log("repeat"); // TODO debug
    e.preventDefault();
    if (repeatSpaceHandle.current === undefined) {
      repeatSpaceHandle.current = window.setTimeout(() => {
        props.setCurrentWord(propsRef.current.currentWord + " ");
        setShift(false);
        repeatSpaceHandle.current = window.setInterval(() => {
          props.setCurrentWord(propsRef.current.currentWord + " ");
          setShift(false);
        }, 50);
      }, 500);
    }
  };

  const clearTimeoutOrInterval = (
    handleRef: React.MutableRefObject<number | undefined>
  ) => {
    console.log("touch end!");
    clearTimeout(handleRef.current);
    clearInterval(handleRef.current);
    handleRef.current = undefined;
  };

  return (
    <div className="TypingInterface">
      <div id="top_bar">
        <Button
          outline
          id="switch_keyboard"
          onClick={() => setNumberKeyboard(!numberKeyboard)}
        >
          {numberKeyboard ? "ABC" : "123"}
        </Button>
        <div id="word_container">
          <span id="word" dir="ltr">
            {props.currentWord.replaceAll("\n", " ") + "▋"}
          </span>
        </div>
        <Key char={"\n"} display="⏎" {...keyProps} id="enter" />
      </div>

      {numberKeyboard ? (
        <div>
          <div>
            <Key char="7" {...keyProps} />
            <Key char="8" {...keyProps} />
            <Key char="9" {...keyProps} />
            <Key char="@" {...keyProps} />
            <Key char="-" {...keyProps} />
          </div>
          <div>
            <Key char="4" {...keyProps} />
            <Key char="5" {...keyProps} />
            <Key char="6" {...keyProps} />
            <Key char="$" {...keyProps} />
            <Key char="%" {...keyProps} />
          </div>
          <div>
            <Key char="1" {...keyProps} />
            <Key char="2" {...keyProps} />
            <Key char="3" {...keyProps} />
            <Key char="'" {...keyProps} />
            <Key char="/" {...keyProps} />
          </div>
        </div>
      ) : (
        <div id="qwerty">
          <div>
            <LetterKey upperChar="Q" char="q" {...letterKeyProps} />
            <LetterKey upperChar="W" char="w" {...letterKeyProps} />
            <LetterKey upperChar="E" char="e" {...letterKeyProps} />
            <LetterKey upperChar="R" char="r" {...letterKeyProps} />
            <LetterKey upperChar="T" char="t" {...letterKeyProps} />
            <LetterKey upperChar="Y" char="y" {...letterKeyProps} />
            <LetterKey upperChar="U" char="u" {...letterKeyProps} />
            <LetterKey upperChar="I" char="i" {...letterKeyProps} />
            <LetterKey upperChar="O" char="o" {...letterKeyProps} />
            <LetterKey upperChar="P" char="p" {...letterKeyProps} />
          </div>
          <div>
            <LetterKey upperChar="A" char="a" {...letterKeyProps} />
            <LetterKey upperChar="S" char="s" {...letterKeyProps} />
            <LetterKey upperChar="D" char="d" {...letterKeyProps} />
            <LetterKey upperChar="F" char="f" {...letterKeyProps} />
            <LetterKey upperChar="G" char="g" {...letterKeyProps} />
            <LetterKey upperChar="H" char="h" {...letterKeyProps} />
            <LetterKey upperChar="J" char="j" {...letterKeyProps} />
            <LetterKey upperChar="K" char="k" {...letterKeyProps} />
            <LetterKey upperChar="L" char="l" {...letterKeyProps} />
          </div>
          <div>
            <LetterKey upperChar="Z" char="z" {...letterKeyProps} />
            <LetterKey upperChar="X" char="x" {...letterKeyProps} />
            <LetterKey upperChar="C" char="c" {...letterKeyProps} />
            <LetterKey upperChar="V" char="v" {...letterKeyProps} />
            <LetterKey upperChar="B" char="b" {...letterKeyProps} />
            <LetterKey upperChar="N" char="n" {...letterKeyProps} />
            <LetterKey upperChar="M" char="m" {...letterKeyProps} />
          </div>
        </div>
      )}

      <div>
        {numberKeyboard ? (
          <Key char="0" {...keyProps} />
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
              {...keyProps}
              id="space"
              onMouseDown={repeatSpace}
              onTouchStart={repeatSpace}
              onMouseUp={() => clearTimeoutOrInterval(repeatSpaceHandle)}
              onTouchEnd={() => clearTimeoutOrInterval(repeatSpaceHandle)}
            />
            <Button
              outline
              id="backspace"
              onClick={() => backspace(props.currentWord)}
              onMouseDown={repeatBackspace}
              onTouchStart={repeatBackspace}
              onMouseUp={() => clearTimeoutOrInterval(repeatBackspaceHandle)}
              onTouchEnd={() => clearTimeoutOrInterval(repeatBackspaceHandle)}
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
