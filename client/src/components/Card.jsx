import React from "react";

const Card = ({event}) => {
    const {id, name, first, last, image} = event;
  return (
    <div className="max-w-sm lg:max-w-full lg:flex p-2 h-full">
      <div
        className="h-full lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden"
        style={{ backgroundImage: `url(${image})`}}
        title="Card Image"
      ></div>


      <div className=" rounded-b-none lg:rounded-b-none lg:rounded-r pl-4 flex flex-col justify-between leading-normal w-72 gap-0">
        <div className="mb-1 font-roadRage">
          <p className="text-white  text-3xl">
            {name}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-white text-base">
            {first}
          </p>
        </div>
        {/* <div className="text-sm">
          <p className="text-blue-500 font-semibold cursor-pointer">
            VIEW DETAILS
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
