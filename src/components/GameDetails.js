import React, { useEffect } from "react";
import { useLocation } from "react-router";
import "../style/game_details.css";
import {
  fetchRandomGameByGeners,
  fetchGameDataByName,
} from "../api/rawgApi.js";
import { Link } from "react-router-dom";

import { useState } from "react";

let platforms = [
  { name: "PC", id: 4, url: "/icons/steam.png", alt: "Steam" },
  { name: "Xbox", id: 14, url: "/icons/xbox.png", alt: "xbox 360" },
  { name: "XboxOne", id: 1, url: "/icons/xbox.png", alt: "xbox one" },
  {
    name: "playstation",
    id: 16,
    url: "/icons/playstation.png",
    alt: " playstion 4",
  },
  {
    name: "playstation",
    id: 18,
    url: "/icons/playstation.png",
    alt: "playstion 5",
  },
  {
    name: "playstation",
    id: 187,
    url: "/icons/playstation.png",
    active: false,
    alt: "playstion 5",
  },
  {
    name: "Switch",
    id: 7,
    url: "/icons/nintendo-switch.png",
    alt: "Nintendo Switch",
  },
];
export default function GameDetails(props) {
  const [gamesArr, setgamesArr] = useState([]);
  const [gameData, setgameData] = useState(null);

  const location = useLocation();

  const handleOnClickTryAgain = (e) => {
    e.preventDefault();
    let randomNumber = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
    let randomGame = gamesArr[randomNumber];
    fetchGameDataByName(randomGame.slug).then((gamedata) => {
      setgameData(gamedata);
    });
  };

  const renderPlatforms = (element) => {
    let redneredPlat = gameData.platforms.map((plat) => {
      for (let index = 0; index < platforms.length; index++) {
        if (plat.platform.id === platforms[index].id) {
          return (
            <img
              title={platforms[index].alt}
              src={platforms[index].url}
              alt={platforms[index].alt}
              key={platforms[index].id}
            />
          );
        }
      }
    });

    return redneredPlat;
  };

  useEffect(() => {
    if (location.state) {
      const { genreId } = location.state;
      fetchRandomGameByGeners(genreId).then((data) => {
        setgamesArr(data.results);
        fetchGameDataByName(
          data.results[Math.floor(Math.random() * (20 - 1 + 1)) + 1].slug
        ).then((gameData) => {
          setgameData(gameData);
        });
      });
    }
  }, [location.state]);

  if (gameData == null) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  } else {
    return (
      <div className="main-column">
        <div className="game-main-container">
          <div className="column">
            <img
              className="poster-img"
              src={gameData.background_image}
              alt=""
            />
          </div>
          <div className="column">
            <div className="title-container">
              <h1>{gameData.name}</h1>
              <div className="review-row">
                <img src="/icons/favourite.png" alt="" className="icon" />
                {gameData.metacritic ? (
                  <h1>{`${gameData.metacritic}/100`}</h1>
                ) : (
                  <h1>{`none/100`}</h1>
                )}
              </div>
            </div>
            <p>{gameData.description_raw}</p>
            <div className="platform-row">{renderPlatforms()}</div>
            <div className="try-again-row">
              <Link to={"/"}>
                <button>HomePage</button>
              </Link>
              <button
                onClick={(e) => {
                  handleOnClickTryAgain(e);
                }}
              >
                Try again
              </button>
            </div>
          </div>
        </div>
        <div className="attribute">
          Platforms Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }
}
