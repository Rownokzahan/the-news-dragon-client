import moment from 'moment/moment';
import React from 'react';
import { BsBookmark, BsFillEyeFill, BsFillStarFill, BsShare, BsStar, BsStarHalf } from "react-icons/bs";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, author, title, image_url, details, total_view, rating } = news;

    return (
        <div className='border border-3 rounded-3 mb-4'>
            <div className='bg-light p-3 rounded-3 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-3'>
                    <div>
                        <img style={{ width: "70px" }} className='rounded-circle' src={author.img ? author.img : "Not avaiable"} alt="" />
                    </div>

                    <div>
                        <h5>{author.name ? author.name : "Not avaiable"} </h5>
                        <p className='text-secondary mb-0'>
                            {author.published_date
                                ? moment(author.published_date).format('YYYY-MM-DD')
                                : "Not avaiable"}
                        </p>
                    </div>
                </div>

                <div className='text-secondary'>
                    <BsBookmark className='me-2' />
                    <BsShare />
                </div>
            </div>

            <div className='p-3'>
                <h5 className='fw-bolder mb-3'>{title ? title : "Not Avaiable"}</h5>
                <img className='w-100 h-25' src={image_url ? image_url : "Not Avaiable"} alt="" />
                <p className='text-secondary mt-3'>
                    {details.length > 250 ?
                        <>
                            {details.slice(0, 250)}...
                            <Link
                                to={`/news/${_id}`}
                                className='text-danger fw-semibold text-decoration-none'
                            >Read More</Link>
                        </>
                        : details
                    }
                </p>
                <hr className='my-3' />

                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Rating className='text-danger'
                            placeholderRating={rating?.number}
                            readonly
                            emptySymbol={<BsStar/>}
                            placeholderSymbol={<BsFillStarFill />}
                            fullSymbol={<BsFillStarFill/>}
                        />
                        <span className='text-secondary mt-1 ms-2'>{rating.number ? rating.number : "Not Avaiable"}</span>
                    </div>

                    <div className='text-secondary d-flex align-items-center'>
                        <BsFillEyeFill className='me-2' />
                        <span>{total_view ? total_view : "Not Avaiable"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;