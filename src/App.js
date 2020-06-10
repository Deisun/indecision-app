import React from 'react';

function App() {

    const app = {
        title: 'Indecision App',
        subtitle: 'Put your life in the hands of a computer',
        options: ['One', 'Two']
    }


    return (
        <div>
            <h1>{app.title}</h1>
        </div>
    );
}

export default App;
