import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { getAllCategories } from "./utils/api";

import Home from "./pages/Home";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((categoryData) => {
      setCategories(categoryData);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
      </Routes>
    </div>
  );
};

export default App;
