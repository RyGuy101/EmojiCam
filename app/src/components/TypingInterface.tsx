import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Input } from "reactstrap";

import { AppState } from "redux/store";
import * as actions from "redux/actions/actions";
import { ExtractPropsType } from "utils/reduxUtils";

const mapStateToProps = (state: AppState) => {
  return {
    message: state.main.data,
  };
};

const mapDispatchToProps = actions;

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
type Props = ExtractPropsType<typeof connectComponent>;

const TypingInterface = (props: Props) => {
  const [input, setInput] = useState("");

  return (
    <div className="TypingInterface">
      <h1>{props.message}</h1>
      <div>
        <Input
          onChange={(event) => setInput(event.target.value)}
          value={input}
        ></Input>
        <Button onClick={() => props.exampleAction(input)}>
          Dispatch Action!
        </Button>
      </div>
    </div>
  );
};

export default connectComponent(TypingInterface);
