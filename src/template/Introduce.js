import React from 'react';

const Introduce  = () => {
    return(
        <div className="section_second">
            <div className="section_title">
                Introduce_
            </div>
            <div className="section_text">
            안녕하세요. 2년차 풀스택 엔지니어 조승희입니다.
            <br/>
            <br/>
            * 기술스택<br/>
            {'\u00A0\u00A0\u00A0\u00A0'}Front : React, React Native, JavaScript<br/>
            {'\u00A0\u00A0\u00A0\u00A0'}Back : Node.js, Docker, AWS(EC2, S3, RDS)<br/>
            {'\u00A0\u00A0\u00A0\u00A0'}DB    : MySQL
            <br/>
            <br/>
            * Develop Process<br/>
            {'\u00A0\u00A0\u00A0\u00A0'}Agile : Trello<br/>
            {'\u00A0\u00A0\u00A0\u00A0'}Repo : Git
            </div>
        </div>
    );
}

export default Introduce;