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
        </div>
    );
}

export default Work;