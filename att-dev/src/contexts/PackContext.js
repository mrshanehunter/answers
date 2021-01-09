import React, { useState, useEffect } from "react"

const PackContext = React.createContext();

export function PackProvider({ children }) {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("order");
    if (stored) {
      setOrder(JSON.parse(stored))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));

  });
 
  return (
    <PackContext.Provider value={[order, setOrder]}>
      {children}
    </PackContext.Provider>
  );
}

export default PackContext;