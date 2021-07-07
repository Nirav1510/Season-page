import React from "react";

export default function spinner(props) {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
}

spinner.defaultProps = {
    message: "Loading..."
};
