import { useState } from "react";
import StartScreen from "./components/StartScreen.jsx";
import GameScreen from "./components/GameScreen.jsx";
import EndScreen from "./components/EndScreen.jsx";

const TARGET_SCORE = 10;

const DIFFICULTIES = [
  {
    id: "slow",
    name: "Pomalá",
    description: "Nejjednodušší režim pro menší děti.",
    minVisibleMs: 4200,
    maxVisibleMs: 5600,
    minWaitMs: 900,
    maxWaitMs: 1800,
  },
  {
    id: "medium",
    name: "Střední",
    description: "Normální tempo, pořád bez stresu.",
    minVisibleMs: 2400,
    maxVisibleMs: 3600,
    minWaitMs: 550,
    maxWaitMs: 1200,
  },
  {
    id: "fast",
    name: "Rychlá",
    description: "Rychlejší varianta pro trénink postřehu.",
    minVisibleMs: 1300,
    maxVisibleMs: 2200,
    minWaitMs: 300,
    maxWaitMs: 800,
  },
];

const INSECTS = [
  {
    id: "fly",
    name: "Moucha",
    emoji: "🪰",
    actionLabel: "Plácni mouchu",
    scoreLabel: "much",
    description: "Klasická zahradní scéna.",
  },
  {
    id: "spider",
    name: "Pavouk",
    emoji: "🕷️",
    actionLabel: "Plácni pavouka",
    scoreLabel: "pavouků",
    description: "Půda domu s pavučinami.",
  },
  {
    id: "mosquito",
    name: "Komár",
    emoji: "🦟",
    actionLabel: "Plácni komára",
    scoreLabel: "komárů",
    description: "Noční scéna za svitu měsíce.",
  },
];

const DEFAULT_DIFFICULTY = DIFFICULTIES[0];
const DEFAULT_INSECT = INSECTS[0];

export default function App() {
  const [screen, setScreen] = useState("start");
  const [finalScore, setFinalScore] = useState(0);
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
  const [insect, setInsect] = useState(DEFAULT_INSECT);

  function startGame(selectedDifficulty, selectedInsect) {
    setFinalScore(0);
    setDifficulty(selectedDifficulty);
    setInsect(selectedInsect);
    setScreen("game");
  }

  function finishGame(score) {
    setFinalScore(score);
    setScreen("end");
  }

  function returnToMenu() {
    setFinalScore(0);
    setScreen("start");
  }

  function restartGame() {
    setFinalScore(0);
    setScreen("game");
  }

  return (
    <main className="app-shell">
      {screen === "start" && (
        <StartScreen
          difficulties={DIFFICULTIES}
          insects={INSECTS}
          defaultDifficultyId={difficulty.id}
          defaultInsectId={insect.id}
          onStart={startGame}
          targetScore={TARGET_SCORE}
        />
      )}

      {screen === "game" && (
        <GameScreen
          difficulty={difficulty}
          insect={insect}
          targetScore={TARGET_SCORE}
          onFinish={finishGame}
          onExit={returnToMenu}
        />
      )}

      {screen === "end" && (
        <EndScreen
          score={finalScore}
          difficulty={difficulty}
          insect={insect}
          onRestart={restartGame}
          onMenu={returnToMenu}
        />
      )}
    </main>
  );
}
