import React, { useState } from "react";
import location from "../assets/Icons/location.svg";
import plus from "../assets/Icons/plus.svg";
import minus from "../assets/Icons/minus.svg";

const DetailBox = ({ productData }) => {
  const product = {
    name: "Donkey Shape Corduroy Chew",
    price: "Au$5.99",
    shipping: {
      cost: "USD10.31",
      details: "Item Above 30$ perches will recive free shipping",
    },
    tags: ["Pet Toy", "Chew Toy", "Squeaker", "Plush Toy", "Dog Accessories"],
    colors: ["white", "brown", "grey"],
  };

  const { name, price, shipping, tags, colors } = product;
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    console.log(
      `Added ${name} to cart with color ${selectedColor} and quantity ${qty}`
    );
  };

  return (
    <div className="flex flex-col max-w-md p-4 bg-white rounded-lg shadow-md">
      {/* Product Name */}
      <h1 className="text-xl font-bold text-gray-800 mb-4">
        {productData.name}
      </h1>

      {/* Product Details Discription */}

      <div className="items-center mb-4">
        <p className="text-gray-600 text-sm">{productData.description}</p>
      </div>

      {/* Price and Shipping */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-bold text-red-600">
          {productData.price}
        </div>
      </div>

      {/* Shipping Info */}
      <div className="items-center mb-4">
        <img src={location} alt="location" className="w-4 h-4 mr-2" />
        <div className="text-sm font-semibold text-red-600">
          {shipping.cost}
        </div>
        <p className="text-gray-600 text-sm">{shipping.details}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap mb-4">
        {productData.texts.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Colors */}
      <div className="mb-4">
        <h2 className="font-semibold text-gray-800 text-lg mb-2">Colors</h2>
        <div className="flex space-x-3">
          {productData.colors.map((color, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                selectedColor === color ? "border-red-600" : "border-gray-300"
              }`}
              style={{ background: color }}
              onClick={() => handleColorSelect(color)}
            >
              {selectedColor === color && (
                <div className="w-3 h-3 rounded-full bg-red-600 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <h2 className="font-semibold text-gray-800 text-lg mb-2">Quantity</h2>
        <div className="flex items-center">
          <img
            src={minus}
            alt="decrease"
            className="cursor-pointer"
            onClick={() => qty > 1 && setQty(qty - 1)}
          />
          <h3 className="text-xl font-semibold mx-4">{qty}</h3>
          <img
            src={plus}
            alt="increase"
            className="cursor-pointer"
            onClick={() => setQty(qty + 1)}
          />
          <div className="ml-auto text-gray-600 text-sm">Pieces available</div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div>
        <button
          className="w-full py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailBox;
