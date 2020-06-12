import React from 'react';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        // must bind these functions to the this context.
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        // check to see if json is valid
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // Do nothing at all
        }

    }

    componentDidUpdate(prevProps, prevState) {
        // convert options to json string and save to local storage
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
    }

    handleDeleteOptions() {
        /*
                this.setState(() => {
                    return {
                        options: []
                    }
                })
        */

        // alternative syntax to implicitly return an object (does same thing as above)
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            // mdn filter
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add item";
            // check to see if option already exists
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        /*
                this.setState((prevState) => {
                    return {
                        // mdn concat:  adds the option to end of array
                        options: prevState.options.concat([option])
                    }
                })
        */

        // alternative syntax to implicitly return an object (does same thing as above)
        this.setState((prevState) => ({options: prevState.options.concat([option])}));

    }

    render() {
        const title = "Indecision App"
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// stateless functional React component (does not use THIS)
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'some default'
};

// stateless functional React component (does not use THIS)
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
}

// stateless functional React component (does not use THIS)
const Options = (props) => {

    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                    />)
                )
            }
        </div>
    );
}

// stateless functional React component (does not use THIS)
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
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
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

export default IndecisionApp;
