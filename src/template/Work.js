import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {projects ,mnt_projects, pedal_projects} from '../assets/project';

const Work = () => {
    return(
        <div className="section_second">
            <div className="section_title">
                Work Experience_
            </div>
            <div className="section_mid_title">
                페달파이낸셜테크놀로지(2022.03 ~)
            </div>
            <div className="section_strong">
                어린이 경제교육 커뮤니티 개발
            </div>
            <Accordion>
            {pedal_projects.map((item) => (
                <AccordionItem key={item.uuid}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="menu">
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    {item.period}<br/><br/>
                    {
                        item.content.split('\n').map(line=>{
                            return(<div className="contents_detail">{line}<br/></div>)
                        })
                    }
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
            </Accordion>
            <div className="section_mid_title">
                엠엔티(2021.01 ~ 2021.12)
            </div>
            <div className="section_strong">
                웹하드 서비스 개발 및 운영
            </div>
            <Accordion>
            {mnt_projects.map((item) => (
                <AccordionItem key={item.uuid}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="menu">
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    {item.period}<br/><br/>
                    {
                        item.content.split('\n').map(line=>{
                            return(<div className="contents_detail">{line}<br/></div>)
                        })
                    }
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
            </Accordion>

            <div className="section_mid_title">
                AD4TH Insight(2019.09 ~ 2020.12)
            </div>
            <div className="section_strong">
                애플리케이션, 웹사이트 등의 프론트엔드 개발자
            </div>
            <Accordion>
            {projects.map((item) => (
                <AccordionItem key={item.uuid}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="menu">
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    {item.period}<br/><br/>
                    {
                        item.content.split('\n').map(line=>{
                            return(<div className="contents_detail">{line}<br/></div>)
                        })
                    }
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
            </Accordion>
            <div className="section_mid_title">
                개인 프로젝트
            </div>
            {/* <div className="section_strong">
                <a className="project_click" href="http://www.seunghei.kr/" target="_blank">🍳 오늘 뭐 먹지?[Today Lunch]</a>
                <div className="project_desc">방문일자, 별점등을 고려해서 최적의 밥집을 추천하는 사이트</div>
            </div> */}
            <div className="section_strong">
                <a className="project_click" href="https://github.com/ChoSeungHei/matda" target="_blank">🍔 맛집 다이어리 [Matda]</a>
                <div className="project_desc">위치기반 나의 맛집 기록 웹앱</div>
            </div>
            <div className="section_strong">
                <a className="project_click" href="https://choseunghei.github.io/ReactTodoList/" target="_blank">📃 동적인 투두리스트[Animated TodoList]</a>
            </div>
            <div className="section_strong">
                <a className="project_click" href="https://choseunghei.github.io/react_korean_pay_calc/" target="_blank">💰 내 월급 작고 소듕해[My Samll Pay]</a>
            </div>
        </div>
    );
}

export default Work;