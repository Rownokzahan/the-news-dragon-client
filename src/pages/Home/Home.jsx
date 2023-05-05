import React from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import NewsCard from './NewsCard';

const Home = () => {

    useTitle("Home");
    const allNews = useLoaderData();

    return (
        <div>
            <h4 className='fw-bolder mb-3'>Home</h4>
            {allNews.map(news => <NewsCard key={news._id} news={news} />)}

        </div>
    );
};

export default Home;