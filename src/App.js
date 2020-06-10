import React from 'react';

function App() {

    const app = {
        title: 'Indecision App',
        subtitle: 'Put your life in the hands of a computer',
        options: []
    }

    const onFormSubmit = (e) => {
        // stop full page refresh on form submit.
        e.preventDefault();

        // get the value in the option input field
        const option = e.target.elements.option.value;

        if (option) {
            // add the option to the array
            app.options.push(option);
            // clear the input field
            e.target.elements.option.value = '';
        }
    };

    const onMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNum];
    }


    const onRemoveAll = () => {
        app.options = [];
    }

    return (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Your Options' : 'No Options'}</p>
{/*
            disable button if options length is 0
*/}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
}

export default App;
