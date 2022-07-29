import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
    return (
        <div className="about__content">
            <ul className="about__list">
                <li>
                    <Link to="about-app">About Apps</Link>
                </li>
                <li>
                    <Link to="about-author">About Authors</Link>
                </li>
            </ul>
            <Routes>
                <Route path=":slug" element={
                    <SinglePage />}>
                </Route>
            </Routes>
        </div>
    );
};

export default About;