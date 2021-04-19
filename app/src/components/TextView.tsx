import React from "react";
import { connect } from "react-redux";

import { AppState } from "redux/store";
import { ExtractPropsType } from "utils/reduxUtils";

const mapStateToProps = (state: AppState) => {
  return {
    text: state.main.text,
    currentWord: state.main.currentWord,
  };
};

const connectComponent = connect(mapStateToProps);
type Props = ExtractPropsType<typeof connectComponent>;

const TextView = (props: Props) => {
  return <div className="TextView">{props.text + props.currentWord + "▋"}</div>;
};

export default connectComponent(TextView);
