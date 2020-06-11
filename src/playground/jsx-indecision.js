import React from "react";

const jsxIndecision = {
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
        jsxIndecision.options.push(option);
        // clear the input field
        e.target.elements.option.value = '';
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * jsxIndecision.options.length);
    const option = jsxIndecision.options[randomNum];
}


const onRemoveAll = () => {
    jsxIndecision.options = [];
}

return (
    <div>
        <h1>{jsxIndecision.title}</h1>
        <p>{jsxIndecision.subtitle}</p>
        <p>{jsxIndecision.options.length > 0 ? 'Your Options' : 'No Options'}</p>
        {/*
            disable button if options length is 0
*/}
        <button disabled={jsxIndecision.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
            {
                jsxIndecision.options.map((option) => {
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
