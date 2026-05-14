export default function EndScreen({ score, difficulty, insect, onRestart, onMenu }) {
  return (
    <section className="screen end-screen">
      <div className="card hero-card celebration">
        <div className="stars" aria-hidden="true">⭐ ⭐ ⭐</div>
        <h1>Hotovo!</h1>
        <p className="lead">Super práce. Plácl/a jsi {score} {insect.scoreLabel}.</p>
        <p className="hint">Režim: {difficulty.name} · {insect.name}</p>

        <div className="button-row">
          <button className="primary-button" type="button" onClick={onRestart}>
            Znovu
          </button>
          <button className="secondary-button" type="button" onClick={onMenu}>
            Menu
          </button>
        </div>
      </div>
    </section>
  );
}
