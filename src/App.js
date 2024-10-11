import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Character from "./components/detailspageComponents/Character";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import { Navigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState({});
  const [params, setParams] = useState({});

  useEffect(() => {
    const savedParams = localStorage.getItem("searchParams");
    if (savedParams && savedParams !== "{}") {
      setParams(JSON.parse(savedParams));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchParams", JSON.stringify(params));
  }, [params]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character",
        { params }
      );
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Ошибка при загрузке персонажей:", error);
    }
  };

  return (
    <div className="root max-w-4xl text-white flex flex-col border border-white rounded-2xl m-3 md:m-auto md:mt-5 p-5">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            element={
              <Homepage
                onSubmit={fetchCharacters}
                params={params}
                setParams={setParams}
                characters={characters}
              />
            }
          />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
