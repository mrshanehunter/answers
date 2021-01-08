import React, { useState } from "react"

const PackContext = React.createContext();

export function PackProvider({ children }) {
  const [order, setOrder] = useState([]);

  return (
    <PackContext.Provider value={[order, setOrder]}>
      {children}
    </PackContext.Provider>
  );
}

export default PackContext;