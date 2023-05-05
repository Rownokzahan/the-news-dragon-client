import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";
import EditorsInsight from './EditorsInsight';
import useTitle from '../../hooks/useTitle';

const News = () => {

    useTitle("News Detail");
    const news = useLoaderData();
    const { image_url, title, details, category_id } = news;
    return (
        <div>
            <h4 className='fw-bolder mb-3'>Dragon News</h4>

            <div className='border rounded-3 p-3 mb-5'>
                <img src={image_url} alt="" className="w-100 rounded-3 mb-3" />
                <h4>{title}</h4>
                <p className='text-secondary mt-3'>{details}</p>
                
                <Link to={`/category/${category_id}`} className='text-decoration-none'>
                    <button className="btn btn-danger d-flex align-items-center gap-1">
                        <BsArrowLeftShort className='fs-4' />
                        All news in this category
                    </button>
                </Link>
            </div>

            <EditorsInsight/>
        </div>
    );
};

export default News;