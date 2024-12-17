import React from "react";

const Card = ({event}) => {
    const {id, name, description, image} = event;
  return (
    <div className="max-w-sm lg:max-w-full lg:flex p-2">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden"
        style={{ backgroundImage: "url('./workshop1.png')" }}
        title="Card Image"
      ></div>


      <div className=" rounded-b-none lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-52">
        <div className="mb-4">
          <p className="text-white text-base">
            {name}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-white text-base">
            {description}
          </p>
        </div>
        <div className="text-sm">
          <p className="text-blue-500 font-semibold cursor-pointer">
            VIEW DETAILS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
