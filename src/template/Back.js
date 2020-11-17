import React from 'react';
import  '../css/style.css';
import upper_back from '../assets/upper_back.jpg';
import MainBox from './MainBox';

const Back = () => {
    return(
        <>
            <div className="back_upper"></div>
            <div className="title">
                SeungHei's Resume <span role="img" aria-label="paper">📝</span>
            </div>
            <div className="back_container">
                <MainBox/>

            </div>
        </>
    );
}

export default Back;