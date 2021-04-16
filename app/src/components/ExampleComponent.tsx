import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Input } from "reactstrap";

import { AppState, selectors } from "redux/store";
import * as exampleActions from "redux/actions/exampleActions";
import { ExtractPropsType } from "utils/reduxUtils";

interface OwnProps {
  exampleProp: string;
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  return {
    message: state.example.data,
    messageWithEmphasis: selectors.example.exampleDerivedData(state),
  };
};

const mapDispatchToProps = exampleActions;

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
type Props = ExtractPropsType<typeof connectComponent>;

const ExampleComponent = (props: Props) => {
  const [input, setInput] = useState("");

  return (
    <div className="ExampleComponent">
      <h1>{props.message}</h1>
      <h1>
        <b>{props.messageWithEmphasis}</b>
      </h1>
      <p>{props.exampleProp}</p>
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

export default connectComponent(ExampleComponent);
