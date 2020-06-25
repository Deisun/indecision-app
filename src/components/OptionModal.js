import React from "react";
import ReactModal from 'react-modal';

const OptionModal = (props) => (
    <ReactModal
        // !! converts valid string to TRUE and undefined to FALSE
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p> }
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </ReactModal>
);

export default OptionModal;