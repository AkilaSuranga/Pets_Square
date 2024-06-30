import React from "react";
import { Link, useNavigate } from "react-router-dom";
import paw from "../assets/paw.svg";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${props.id}`)}
      className="sm:w-96 border cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
    >
      <img
        src={props.img}
        className="w-full sm:w-96 h-96 object-cover"
        alt={props.name}
      />
      <div className="flex flex-col items-center p-4">
        <h5 className="mt-4 text-center font-sans text-lg">{props.name}</h5>
        <h4 className="text-center font-bold text-lg text-red-600 mt-2">
          {props.price}Aus$
        </h4>
        <div className="flex justify-between w-full px-4 mt-4">
          <img
            src={paw}
            alt="paw"
            className="w-16 rotate-45 transform transition-transform duration-200 hover:rotate-0"
          />
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 mt-2 transform transition-transform duration-200 hover:scale-110">
            Buy Now
          </button>
          <img
            src={paw}
            alt="paw"
            className="w-16 -rotate-45 transform transition-transform duration-200 hover:rotate-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
