import React from 'react';
import  '../css/style.css';
import main_photo from '../assets/main_photo.jpg';
const MainBox = () => {
    return(
        <div className="section_first">
            <div className="main_box">
                <div className="box_name">
                    조승희(Cho SeungHei)
                </div>
                <div className="box_position">
                    Fullstack Enginner
                </div>
                <div className="box_email">
                    kwa0403261@gmail.com
                </div>
                <div className="box_git">
                    <a href="https://github.com/ChoSeungHei" target="_blank">https://github.com/ChoSeungHei</a>
                </div>
                <div className="box_blog">
                <a href="http://kawa-it-diary.tistory.com" target="_blank">http://kawa-it-diary.tistory.com</a>
                </div>
            </div>
            <img className="trapezoid" src={main_photo}/>
            
        </div>
    );
}

export default MainBox;