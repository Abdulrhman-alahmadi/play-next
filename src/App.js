import React from "react";
import Header from "./components/Header";
import GameDetails from "./components/GameDetails";
import GenersList from "./components/GenersList";
import "./style/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header></Header>
              <GenersList></GenersList>
            </div>
          }
        ></Route>
        <Route path="/:id" element={<GameDetails></GameDetails>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
