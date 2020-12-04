import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {projects} from '../assets/project';

const Work = () => {
    return(
        <div className="section_second">
            <div className="section_title">
                Work Experience_
            </div>
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
                            return(<div>{line}<br/></div>)
                        })
                    }
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
            </Accordion>
            <div className="section_mid_title">
                개인 프로젝트
            </div>
            <div className="section_strong">
                <a className="project_click" href="https://github.com/ChoSeungHei/matda" target="_blank">🍔 맛집 다이어리 [Matda]</a>
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