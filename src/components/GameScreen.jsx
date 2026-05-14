import InsectTarget from './InsectTarget.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import { useFlyGame } from '../hooks/useFlyGame.js';

export default function GameScreen({ targetScore, difficulty, insect, onFinish, onExit }) {
  const game = useFlyGame({ targetScore, difficulty, onFinish });

  return (
    <section className={`game-screen scene-${insect.id}`}>
      <ScoreBoard
        score={game.score}
        targetScore={targetScore}
        icon={insect.emoji}
        onExit={onExit}
      />

      <div className="playground" aria-label="Herní plocha">
        <SceneDecorations insectId={insect.id} />

        <InsectTarget
          insect={insect}
          visible={game.flyVisible}
          smashed={game.isSmashed}
          position={game.flyPosition}
          size={game.flySize}
          onSmash={game.smashFly}
        />
      </div>
    </section>
  );
}

function SceneDecorations({ insectId }) {
  if (insectId === 'spider') {
    return (
      <>
        <div className="attic-beam beam-one" />
        <div className="attic-beam beam-two" />
        <div className="attic-window" />
        <div className="web web-one" />
        <div className="web web-two" />
        <div className="attic-floor" />
      </>
    );
  }

  if (insectId === 'mosquito') {
    return (
      <>
        <div className="moon" />
        <div className="night-cloud night-cloud-one" />
        <div className="night-cloud night-cloud-two" />
        <div className="star star-one" />
        <div className="star star-two" />
        <div className="star star-three" />
        <div className="night-grass" />
      </>
    );
  }

  return (
    <>
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />
      <div className="sun" />
      <div className="grass" />
    </>
  );
}
