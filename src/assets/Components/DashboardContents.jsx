import React from "react";
import CardItem from "./CardItem";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import Table from "./Table";

const DashboardContent = () => {
  return (
    <div className="p-6 md:p-16 w-full">
      <div className="space-y-8 min-w-full">
        <p className="md:text-[24px] ml-2 font-bold">Users</p>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-12">
            <CardItem src={one} description="USERS" figures="100" />
            <CardItem src={two} description="ACTIVE USERS" figures="100" />
            <CardItem
              src={three}
              description="USERS WITH LOANS"
              figures="100"
            />
            <CardItem
              src={four}
              description="USERS WITH SAVINGS"
              figures="100"
            />
          </div>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
