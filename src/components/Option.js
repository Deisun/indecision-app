// stateless functional React component (does not use THIS)
import React from "react";

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
)

export default Option;
