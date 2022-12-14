import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <TodoContainer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);