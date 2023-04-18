import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-light mt-5 py-3 px-2'>
            <h4 className=' mb-4'>Q Zone</h4>

            <img className='mb-2 w-100' src={qZone1} alt="" />
            <img className='mb-2 w-100' src={qZone2} alt="" />
            <img className='w-100' src={qZone3} alt="" />
        </div>
    );
};

export default QZone;