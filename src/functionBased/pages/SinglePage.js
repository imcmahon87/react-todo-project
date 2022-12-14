import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
    const aboutData = [
        {
            slug: 'about-app',
            title: 'About the app',
            description: 'In this app, you can add, delete, submit and edit items.'
        },
        {
            slug: 'about-author',
            title: 'About the author',
            description: 'This app was developed by Ian McMahon. He is learning to code React.'
        }
    ];
    const { slug } = useParams();
    const aboutContent = aboutData.find(item => item.slug === slug);
    const { title, description } = aboutContent;

    return (
        <div className="main__content">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default SinglePage;