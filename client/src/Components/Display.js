import React from "react";

const Display = props => {
    const result = props.error ? <div className="display__error" >{ props.error }</div> : <div className="display__result">{props.sum }</div>
    return (
      <div className="display">
        <div className="display__current">
          {props.calculation}
        </div>
        { result }
      </div>
    );
}

export default Display;
