import React from "react";
import ReactModal from 'react-modal';

const OptionModal = (props) => (
    <ReactModal
        // !! converts valid string to TRUE and undefined to FALSE
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </ReactModal>
);

export default OptionModal;