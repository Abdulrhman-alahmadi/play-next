import React from "react";
import "../style/genres.css";

export default function Genra({ name, url }) {
  return (
    <div className="genre">
      <h1>{name}</h1>
      <img src={url} alt="" />
    </div>
  );
}
