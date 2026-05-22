import { useEffect, useState } from 'react';

function getTimeRemaining(targetDate) {
  const targetTime = new Date(targetDate).getTime();
  const difference = Math.max(targetTime - Date.now(), 0);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

