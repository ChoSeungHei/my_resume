import React from 'react';
import  '../css/style.css';
import upper_back from '../assets/upper_back.jpg';
import MainBox from './MainBox';
import Introduce from './Introduce';
import Education from './Education';
import Work from './Work';
import Skill from './Skill';

const Back = () => {
    return(
        <>
            <div className="back_upper"></div>
            <div className="title">
                SeungHei's Resume <span role="img" aria-label="paper">👩‍💻</span>
            </div>
            <div className="back_container">
                <MainBox/>
                <Introduce/>
                <Education/>
                <Work/>
                <Skill/>
            </div>
        </>
    );
}

export default Back;