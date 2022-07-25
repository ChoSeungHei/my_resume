import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "./assets/image";

const ProjectDetail = () => {
  return (
    <div className="section_second">
      <div className="section_title">블록체인 기반 광고 보상 애플리케이션</div>
      <div className="contents_detail">
        - 참여형/링크형 광고 제공 서비스
        <br />
        - 광고 참여 시 블록체인 토큰을 리워드로 지급함
        <br />
        - 지급된 토큰을 기프티콘으로 교환가능
        <br />
        <ImageList className="list-size" cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.key}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default ProjectDetail;
