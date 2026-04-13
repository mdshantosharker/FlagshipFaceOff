import React, { useState } from "react";

import PhoneCard from "./PhoneCard";
import MyButton from "./Shared/MyButton";

const PhonesContainer = ({ phones }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div
        className="grid grid-cols-1 gap-8 mb-8
     md:grid-cols-2 lg:grid-cols-3"
      >
        {showAll
          ? phones.map((phone) => <PhoneCard key={phone.id} phone={phone} />)
          : phones
              .slice(0, 6)
              .map((phone) => <PhoneCard key={phone.id} phone={phone} />)}
      </div>
      <div
        onClick={() => {
          setShowAll(!showAll);
          if (showAll) {
            window.scrollTo({
              top: (0, 400),
              behavior: "smooth",
            });
          }
        }}
        className="text-center"
      >
        <MyButton> {showAll ? "Show Less" : "Show All"}</MyButton>
      </div>
    </div>
  );
};

export default PhonesContainer;
