import React from 'react';
import {add, square, isAdult } from "./utils";

console.log('app is running');
console.log(square(4));
console.log(add(1,3))
console.log(isAdult(17));

class IndecisionApp extends React.Component {

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default IndecisionApp;
