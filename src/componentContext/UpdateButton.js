import React from "react";
import { CommonContext } from "./CommonContext";

export default function UpdateButton() {
  return (
    <div>
      <CommonContext.Consumer>
        {({ updateColor }) => (
          <div>
            <button onClick={() => updateColor("yellow")}>Update yellow Color</button>
            <button onClick={() => updateColor("pink")}>Update pink Color</button>
            <button onClick={() => updateColor("blue")}>Update blue Color</button>
          </div>
        )}
      </CommonContext.Consumer>
    </div>
  );
}
