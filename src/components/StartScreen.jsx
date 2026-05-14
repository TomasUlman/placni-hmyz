import { useState } from 'react';

export default function StartScreen({
  difficulties,
  insects,
  defaultDifficultyId,
  defaultInsectId,
  onStart,
  targetScore,
}) {
  const [selectedDifficultyId, setSelectedDifficultyId] = useState(defaultDifficultyId);
  const [selectedInsectId, setSelectedInsectId] = useState(defaultInsectId);

  const selectedDifficulty = difficulties.find((difficulty) => difficulty.id === selectedDifficultyId) ?? difficulties[0];
  const selectedInsect = insects.find((insect) => insect.id === selectedInsectId) ?? insects[0];

  return (
    <section className="screen start-screen">
      <div className="card hero-card">
        <div className="logo-fly" aria-hidden="true">{selectedInsect.emoji}</div>
        <h1>Plácni hmyz</h1>
        <p className="lead">
          Vyber, co bude dítě plácat, nastav rychlost a tref cíl dřív, než zmizí.
        </p>
        <p className="hint">Kolo končí po {targetScore} trefách.</p>

        <div className="menu-section">
          <h2>Co budeme plácat?</h2>
          <div className="choice-list insect-list" aria-label="Výběr hmyzu">
            {insects.map((insect) => (
              <button
                key={insect.id}
                className={`choice-button insect-button ${selectedInsectId === insect.id ? 'is-selected' : ''}`}
                type="button"
                onClick={() => setSelectedInsectId(insect.id)}
              >
                <span className="choice-emoji" aria-hidden="true">{insect.emoji}</span>
                <strong>{insect.name}</strong>
                <small>{insect.description}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="menu-section">
          <h2>Rychlost</h2>
          <div className="choice-list difficulty-list" aria-label="Výběr rychlosti">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.id}
                className={`choice-button difficulty-button ${selectedDifficultyId === difficulty.id ? 'is-selected' : ''}`}
                type="button"
                onClick={() => setSelectedDifficultyId(difficulty.id)}
              >
                <strong>{difficulty.name}</strong>
                <small>{difficulty.description}</small>
              </button>
            ))}
          </div>
        </div>

        <button className="primary-button" type="button" onClick={() => onStart(selectedDifficulty, selectedInsect)}>
          Start
        </button>
      </div>
    </section>
  );
}
