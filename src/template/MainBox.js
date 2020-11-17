import React from 'react';
import  '../css/style.css';
import main_photo from '../assets/main_photo.jpg';
const MainBox = () => {
    return(
        <>
            <div className="main_box">
                <div className="box_name">
                    조승희
                </div>
            </div>
            <img className="trapezoid" src={main_photo}/>
        </>
    );
}

export default MainBox;