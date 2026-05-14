import { useCallback, useEffect, useRef, useState } from 'react';

const FLY_SIZE = 112;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPosition() {
  // Pro deti nechavame cil dal od kraju, at se dobre trefuje.
  return {
    x: randomInt(12, 78),
    y: randomInt(22, 72),
  };
}

export function useFlyGame({ targetScore, difficulty, onFinish }) {
  const [score, setScore] = useState(0);
  const [flyVisible, setFlyVisible] = useState(false);
  const [isSmashed, setIsSmashed] = useState(false);
  const [flyPosition, setFlyPosition] = useState(randomPosition);

  const timeoutRef = useRef(null);
  const finishedRef = useRef(false);

  const clearTimer = useCallback(() => {
    if (!timeoutRef.current) return;

    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }, []);

  const scheduleNextFly = useCallback(() => {
    clearTimer();

    if (finishedRef.current) return;

    setFlyVisible(false);
    setIsSmashed(false);

    timeoutRef.current = setTimeout(() => {
      if (finishedRef.current) return;

      setFlyPosition(randomPosition());
      setFlyVisible(true);

      timeoutRef.current = setTimeout(() => {
        if (finishedRef.current) return;

        setFlyVisible(false);
        setIsSmashed(false);
        scheduleNextFly();
      }, randomInt(difficulty.minVisibleMs, difficulty.maxVisibleMs));
    }, randomInt(difficulty.minWaitMs, difficulty.maxWaitMs));
  }, [
    clearTimer,
    difficulty.minWaitMs,
    difficulty.maxWaitMs,
    difficulty.minVisibleMs,
    difficulty.maxVisibleMs,
  ]);

  const smashFly = useCallback(() => {
    if (!flyVisible || isSmashed || finishedRef.current) return;

    clearTimer();
    setIsSmashed(true);

    setScore((currentScore) => {
      const nextScore = currentScore + 1;

      if (nextScore >= targetScore) {
        finishedRef.current = true;
        timeoutRef.current = setTimeout(() => {
          onFinish(nextScore);
        }, 700);
      } else {
        timeoutRef.current = setTimeout(scheduleNextFly, 650);
      }

      return nextScore;
    });
  }, [clearTimer, flyVisible, isSmashed, onFinish, scheduleNextFly, targetScore]);

  useEffect(() => {
    finishedRef.current = false;

    setScore(0);
    setFlyVisible(false);
    setIsSmashed(false);
    setFlyPosition(randomPosition());

    scheduleNextFly();

    return () => {
      finishedRef.current = true;
      clearTimer();
    };
  }, [clearTimer, difficulty.id, scheduleNextFly]);

  return {
    score,
    flyVisible,
    isSmashed,
    flyPosition,
    smashFly,
    flySize: FLY_SIZE,
  };
}
