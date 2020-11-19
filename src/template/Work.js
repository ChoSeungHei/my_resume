import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Work = () => {
    const items = [{uuid:1, heading: '프로젝트1',content: '설명설명설명'},{uuid:2, heading: '프로젝트1',content: '설명설명설명'},{uuid:3, heading: '프로젝트1',content: '설명설명설명'}];
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
            {items.map((item) => (
                <AccordionItem key={item.uuid}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="menu">
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    {item.content}
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
    );
}

export default Work;