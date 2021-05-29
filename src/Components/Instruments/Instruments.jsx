import React, { useEffect, useState } from "react";

import images from "./data";
import { SRLWrapper } from "simple-react-lightbox";
import "./Instruments.css";

const options = {
  // settings: {
  // 	overlayColor: 'rgb(25, 136, 124)',
  // 	autoplaySpeed: 1500,
  // 	transitionSpeed: 900
  // },
  // buttons: {
  // 	backgroundColor: 'red',
  // 	iconColor: 'rgba(126, 172, 139, 0.8)'
  // },
  // caption: {
  // 	captionColor: '#a6cfa5',
  // 	captionFontFamily: 'Raleway, sans-serif',
  // 	captionFontWeight: '300',
  // 	captionTextTransform: 'uppercase'
  // },
  // progressBar: {
  // 	height: '20px',
  // 	fillColor: 'blue',
  // 	backgroundColor: 'white'
  // }
};

function Instruments() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="App">
      <div className="tags">
        <div className="tags-wrapper">
          <TagButton
            name="Frontend"
            tagActive={tag === "frontend" ? true : false}
            handleSetTag={setTag}
          />

          <TagButton
            name="Backend"
            tagActive={tag === "Backend" ? true : false}
            handleSetTag={setTag}
          />

          <TagButton
            name="Devops"
            tagActive={tag === "Devops" ? true : false}
            handleSetTag={setTag}
          />

          <TagButton
            name="Testing"
            tagActive={tag === "Testing" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            name="UI/UX"
            tagActive={tag === "UI/UX" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            name="Infrastructure"
            tagActive={tag === "Infrastructure" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            name="Mobile"
            tagActive={tag === "Mobile" ? true : false}
            handleSetTag={setTag}
          />
        </div>
      </div>
      <SRLWrapper options={options}>
        <div className="container">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-card">
              <img className="image" src={`${image.imageName}`} alt="" />
              <p key={image.id} className="image-nomi">{`${image.name}`}</p>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
      id="filter-btn"
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Instruments;
