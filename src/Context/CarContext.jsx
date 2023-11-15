import { createContext, useMemo, useState } from "react";

export const CarContext = createContext({
  saveItemInCar: (item) => {},
  carItems: [],
});

export const CarProvider = ({ children }) => {
  const [carItems, setCarItems] = useState([]);

  const saveItemInCar = (item) => {
    setCarItems([...carItems, item]);
  };

  const carContextValue = useMemo(
    () => ({
      saveItemInCar,
      carItems,
    }),
    [carItems]
  );

  return (
    <CarContext.Provider value={carContextValue}>
      {children}
    </CarContext.Provider>
  );
};
