import React from "react";

const CardItem = (props) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start pl-4 pb-4 pt-4">
        <img src={props.src} alt="icon" />
        <p>{props.description}</p>
        <p>{props.figures}</p>
      </div>
    </>
  );
};

export default CardItem;
