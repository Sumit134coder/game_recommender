import React, { useState } from "react";
import "./styles.css";

var GameDatabase = {
  Action: [
    { game: "BATMAN: Arkham Knight", rating: "10/10" },
    { game: "Grand Theft Auto 5", rating: "10/10" },
    { game: "God Of War", rating: "10/10" },
    { game: "Devil may Cry 5", rating: "9/10" }
  ],

  Adventure: [
    { game: "Amnesia : Rebirth", rating: "10/10" },
    { game: "Kentucky : Route zero", rating: "9.5/10" },
    { game: "Legend of zelda", rating: "9.5/10" },
    {game: "Tomb Raider", rating:"9.5/10"}
  ],

  Roleplay: [
    { game: "The Witcher 3: Wild hunt", rating: "10/10" },
    { game: "Divinity: Original sin", rating: "9/10" },
    { game: "Outward", rating: "9/10" },
    { game: "Southpark: The Stick of truth", rating: "8.5/10" }
  ],
  Simulation: [
    { game: "Microsoft Flight Simulator", rating: "10/10" },
    { game: "Minecraft", rating: "10/10" },
    { game: "No Man's sky", rating: "9.5/10" },
    { game: "The SIMS 3", rating: "9/10" }
  ]
};

var GameKey = Object.keys(GameDatabase);

export default function App() {
  const [gameType, setgameType] = useState("Action");
  const [bg, setbg] = useState("");

  function clickhandler(gametype) {
    setgameType(gametype);
  }

  function getbg(index) {
    if (index % 2 == 0) {
      return {
        bg: "linear-gradient(to bottom,#6600cc,#26004d)",
        bgclr: "#d5f4e6"
      };
    } else {
      return {
        bg: "linear-gradient(#000033,#8080ff)",
        bgclr: "#1aff1a"
      };
    }
  }

  return (
    <div className="App">
      <h1>WHAT TO PLAY!!</h1>
      <p style={{ color: "#ccccff", fontWeight: "bold" }}>
        Welcome to WHAT TO PLAY!!🎮A game recommender🎮 . Here you can find best video games recommendation
        based on their genre. The ratings are from IGN review team.
      </p>
      <div className="GameTypes">
        {GameKey.map(function (game) {
          return (
            <span
              onClick={() => clickhandler(game)}
              key={game}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "1.5rem",
                cursor: "pointer",
                margin: "5px",
                color: "blue",
                backgroundColor: "white",
                fontWeight: "bolder",
                color: gameType === game ? "white" : "blue",
                backgroundColor: gameType === game ? "blue" : "white"
              }}
            >
              {game}
            </span>
          );
        })}
      </div>
      <div className="div_cover">
        {GameDatabase[gameType].map(function (type, index) {
          return (
            <div
              className="flex-div"
              key={index}
              style={{ background: getbg(index).bg }}
            >
              <h4
                style={{ color: "white", fontsize: "18px", fontWeight: "bold" }}
              >
                {type.game}
              </h4>
              <p
                style={{
                  color: getbg(index).bgclr,
                  fontWeight: "bolder"
                }}
              >
                RATING👉
                {type.rating}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
