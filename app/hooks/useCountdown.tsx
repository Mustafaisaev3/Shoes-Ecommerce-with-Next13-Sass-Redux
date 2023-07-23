
import { useEffect, useState } from 'react'

interface useCountdownInterface {
    day: number,
    month: string,
    year: number
}

const useCountdown = ({day, month, year}: useCountdownInterface) => {
  const [Days, setDays] = useState<number>();
  const [Hours, setHours] = useState<number>();
  const [Minutes, setMinutes] = useState<number>();
  const [Seconds, setSeconds] = useState<number>();

  let interval: any;

  const startTimer = () => {
    const countDownDate = new Date(`${month.toUpperCase()} ${day},${year} `).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  

  return { Days, Hours, Minutes, Seconds }
}

export default useCountdown