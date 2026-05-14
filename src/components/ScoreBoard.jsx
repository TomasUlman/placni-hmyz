export default function ScoreBoard({ score, targetScore, icon, onExit }) {
  return (
    <header className="game-hud" aria-label="Herní ovládání">
      <div className="score-pill" aria-label={`Skóre ${score} z ${targetScore}`}>
        <span aria-hidden="true">{icon}</span>
        <strong>{score}</strong>
        <small>/ {targetScore}</small>
      </div>

      <button className="home-button" type="button" onClick={onExit} aria-label="Zpět do menu">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 10.8 12 3l9 7.8" />
          <path d="M5.5 10.2V21h13V10.2" />
          <path d="M9.5 21v-6h5v6" />
        </svg>
      </button>
    </header>
  );
}
