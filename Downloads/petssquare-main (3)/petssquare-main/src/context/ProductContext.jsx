import React, { createContext, useContext, useState } from "react";

// Create context
const ProductData = createContext();

// Provider component
export const ProductDataProvider = ({ children }) => {
  // Example state values (replace with your actual state)
  const [userData, setUserData] = useState(null);

  return (
    <ProductData.Provider
      value={{
        userData,
      }}
    >
      {children}
    </ProductData.Provider>
  );
};

// Consumer hook
export const useProductData = () => {
  return useContext(ProductData);
};
