import React, { useEffect, useState } from 'react';
import ActiveCategoryLink from './ActiveCategoryLink';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    console.log(categories);

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

            <div className='fs-5 fw-semibold d-grid gap-3'>
                {categories.map(category => <ActiveCategoryLink
                    key={category.id}
                    to={`/category/${category.id}`}
                
                >
                    {category.name}
                </ActiveCategoryLink>         
                )}
            </div>
            
        </div>
    );
};

export default LeftNav;