import axios from "axios";
let apiKey = "83835aea38b94f3c9cffc5a1cdb04809";

export async function fetchRandomGameByGeners(generId) {
  let tempArr = [];
  let idk = [];
  await fetch(`https://rawg.io/api/games?genres=${generId}&key=${apiKey}`)
    .then((res) => res.json())
    .then((data) => (tempArr = data));
  return tempArr;
}

let getDetails = async (gameName) => {
  let tempGameObj = null;
  await fetch(`https://rawg.io/api/games/${gameName}?key=${apiKey}`)
    .then((res) => res.json())
    .then((data) => (tempGameObj = data));

  return tempGameObj;
};

export async function fetchGameDataByName(gameName) {
  let tempGame = null;
  await fetch(`https://rawg.io/api/games/${gameName}?key=${apiKey}`)
    .then((res) => res.json())
    .then((data) => (tempGame = data));

  return tempGame;
}
