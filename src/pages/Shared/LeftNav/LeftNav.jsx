import React, { useEffect, useState } from 'react';
import ActiveCategoryLink from './ActiveCategoryLink';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import { CiCalendar } from "react-icons/ci";

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            <h4 className='fw-bolder mb-3'>All Caterogy</h4>

            <div className='fs-5 fw-semibold d-grid gap-3 mb-5'>
                {categories.map(category => <ActiveCategoryLink
                    key={category.id}
                    to={`/category/${category.id}`}
                
                >
                    {category.name}
                </ActiveCategoryLink>         
                )}
            </div>

            <div>
                <div className='mb-4'>
                    <img className='w-100 mb-2' src={img1} alt="" />
                    <h5>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
                    <div className='d-flex align-items-center justify-content-between'>
                        <span>Sports</span>

                        <span className='text-secondary d-flex align-items-center gap-2 my-2'>
                            <CiCalendar/>
                            Jan 4, 2022
                        </span>
                    </div>
                </div>
                <div className='mb-4'>
                    <img className='w-100 mb-2' src={img2} alt="" />
                    <h5>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
                    <div className='d-flex align-items-center justify-content-between'>
                        <span>Sports</span>

                        <span className='text-secondary d-flex align-items-center gap-2 my-2'>
                            <CiCalendar/>
                            Jan 4, 2022
                        </span>
                    </div>
                </div>
                <div className='mb-4'>
                    <img className='w-100 mb-2' src={img3} alt="" />
                    <h5>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
                    <div className='d-flex align-items-center justify-content-between'>
                        <span>Sports</span>

                        <span className='text-secondary d-flex align-items-center gap-2 my-2'>
                            <CiCalendar/>
                            Jan 4, 2022
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LeftNav;