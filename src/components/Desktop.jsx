import React from "react";
import { getdesktopicons } from "./imageHelper";

function Desktop() {
  return (
    <div className="desktop pt-1">
      <div>
        {getdesktopicons().map((item) => {
          return (
            <div className="item py-1">
              <img src={item.image} alt="img" width="40px" height="40px" />
              <div className="color-root-900 font-size-8">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Desktop;
