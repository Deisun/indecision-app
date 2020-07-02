import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        // remove whole page refresh
        e.preventDefault();

        // get text from the form and trim the extra spaces
        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);

        /*
                this.setState(() => {
                    return {error}
                });
        */

        // alternative syntax to implicitly return an object (does same thing as above)
        this.setState(() => ({error}));

        if (!error) {
            // if no error when submitting, clear the box
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}

