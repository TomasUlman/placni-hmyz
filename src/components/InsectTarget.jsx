export default function InsectTarget({
  insect,
  visible,
  smashed,
  position,
  size,
  onSmash,
}) {
  if (!visible && !smashed) return null;

  const style = {
    left: `${position.x}%`,
    top: `${position.y}%`,
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <button
      className={`target-hitbox target-${insect.id} ${smashed ? "is-smashed" : ""}`}
      style={style}
      type="button"
      onClick={onSmash}
      aria-label={insect.actionLabel}
    >
      {smashed ? <Splat /> : <InsectDrawing insectId={insect.id} />}
    </button>
  );
}

function InsectDrawing({ insectId }) {
  if (insectId === "spider") return <SpiderDrawing />;
  if (insectId === "mosquito") return <MosquitoDrawing />;
  return <FlyDrawing />;
}

function FlyDrawing() {
  return (
    <svg
      className="insect-svg fly-svg"
      viewBox="0 0 120 120"
      role="img"
      aria-hidden="true"
    >
      <ellipse className="wing left-wing" cx="42" cy="42" rx="24" ry="16" />
      <ellipse className="wing right-wing" cx="78" cy="42" rx="24" ry="16" />
      <ellipse className="body" cx="60" cy="66" rx="22" ry="28" />
      <circle className="head" cx="60" cy="36" r="18" />
      <circle className="eye" cx="53" cy="32" r="4" />
      <circle className="eye" cx="67" cy="32" r="4" />
      <path className="smile" d="M52 42 Q60 49 68 42" />
      <path className="leg" d="M42 66 L24 56" />
      <path className="leg" d="M42 76 L24 82" />
      <path className="leg" d="M78 66 L96 56" />
      <path className="leg" d="M78 76 L96 82" />
    </svg>
  );
}

function SpiderDrawing() {
  return (
    <svg
      className="insect-svg spider-svg"
      viewBox="0 0 120 120"
      role="img"
      aria-hidden="true"
    >
      <path className="spider-thread" d="M60 2 V28" />
      <circle className="spider-body" cx="60" cy="66" r="25" />
      <circle className="spider-head" cx="60" cy="35" r="18" />
      <circle className="spider-eye" cx="53" cy="32" r="4" />
      <circle className="spider-eye" cx="67" cy="32" r="4" />
      <path className="spider-leg" d="M42 52 C24 42 17 34 11 23" />
      <path className="spider-leg" d="M40 62 C21 61 13 58 5 51" />
      <path className="spider-leg" d="M42 74 C24 82 17 90 11 102" />
      <path className="spider-leg" d="M78 52 C96 42 103 34 109 23" />
      <path className="spider-leg" d="M80 62 C99 61 107 58 115 51" />
      <path className="spider-leg" d="M78 74 C96 82 103 90 109 102" />
      <path className="spider-smile" d="M51 42 Q60 48 69 42" />
    </svg>
  );
}

function MosquitoDrawing() {
  return (
    <svg
      className="insect-svg mosquito-svg"
      viewBox="0 0 120 120"
      role="img"
      aria-hidden="true"
    >
      <ellipse
        className="mosquito-wing"
        cx="42"
        cy="46"
        rx="24"
        ry="14"
        transform="rotate(-28 42 46)"
      />
      <ellipse
        className="mosquito-wing"
        cx="78"
        cy="46"
        rx="24"
        ry="14"
        transform="rotate(28 78 46)"
      />
      <path className="mosquito-antenna" d="M52 28 Q45 18 39 20" />
      <path className="mosquito-antenna" d="M68 28 Q75 18 81 20" />
      <circle className="mosquito-head" cx="60" cy="36" r="14" />
      <ellipse className="mosquito-thorax" cx="60" cy="60" rx="16" ry="18" />
      <ellipse className="mosquito-abdomen" cx="60" cy="86" rx="14" ry="22" />
      <path className="mosquito-stripe" d="M50 76 Q60 73 70 76" />
      <path className="mosquito-stripe" d="M49 84 Q60 81 71 84" />
      <path className="mosquito-stripe" d="M50 92 Q60 89 70 92" />
      <circle className="mosquito-eye" cx="55" cy="35" r="3.4" />
      <circle className="mosquito-eye" cx="65" cy="35" r="3.4" />
      <path className="mosquito-smile" d="M54 42 Q60 47 66 42" />
      <path className="mosquito-leg" d="M49 58 Q35 60 24 54" />
      <path className="mosquito-leg" d="M48 67 Q34 72 22 72" />
      <path className="mosquito-leg" d="M50 78 Q38 88 28 95" />
      <path className="mosquito-leg" d="M71 58 Q85 60 96 54" />
      <path className="mosquito-leg" d="M72 67 Q86 72 98 72" />
      <path className="mosquito-leg" d="M70 78 Q82 88 92 95" />
    </svg>
  );
}

function Splat() {
  return (
    <div className="splat" aria-hidden="true">
      <span>PLÁC!</span>
    </div>
  );
}
