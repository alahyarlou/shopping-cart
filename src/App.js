import React from "react";
import Store from "./components/Store";
import DataProvider from "./context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <Store />
    </DataProvider>
  );
};

export default App;
