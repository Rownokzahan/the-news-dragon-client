import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {

    const { id } = useParams();
    
    const categoryNews = useLoaderData()
    console.log(categoryNews);
    return (
        <div>
            <h4 className='fw-bolder mb-3'>All Caterogy</h4>
            {categoryNews.map(news => <NewsCard key={news._id} news={news} />)}
            
        </div>
    );
};

export default Category;