import React from "react";

const CardItem = (props) => {
  return (
    <div className="flex flex-col items-start bg-white pt-6 pb-6 pl-6 justify-start w-full rounded space-y-2">
      <img src={props.src} className="w-12 h-12" alt="icon" />
      <p className="uppercase text-[14px]">{props.description}</p>
      <p className="text-[24px] font-bold">{props.figures}</p>
    </div>
  );
};

export default CardItem;
