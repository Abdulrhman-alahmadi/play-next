import React from "react";
import Genra from "./Genre";
import "../style/genres.css";
import { Link } from "react-router-dom";

const genres = [
  { name: "Action", id: 4, url: "./icons/genres-icons/action.png" },
  { name: "Shooter", id: 2, url: "./icons/genres-icons/shooter.png" },
  { name: "Adventure", id: 3, url: "./icons/genres-icons/adventure.png" },
  { name: "Simulation", id: 14, url: "./icons/genres-icons/simulation.png" },
  { name: "Platformer", id: 83, url: "./icons/genres-icons/platform.png" },
  { name: "Arcade", id: 11, url: "./icons/genres-icons/arcade.png" },
  { name: "Family", id: 19, url: "./icons/genres-icons/family.png" },
  { name: "RPG", id: 5, url: "./icons/genres-icons/swordsman.png" },
];

let renderedGenra = () => {
  return genres.map((genre, index) => {
    return (
      <Link to={`/${genre.name}`} state={{ genreId: genre.id }} key={index}>
        <Genra name={genre.name} url={genre.url} id={genre.id}></Genra>
      </Link>
    );
  });
};
export default function GenersList() {
  return (
    <div className="genres-main-cont">
      <div className="genre-list">{renderedGenra()}</div>
    </div>
  );
}
