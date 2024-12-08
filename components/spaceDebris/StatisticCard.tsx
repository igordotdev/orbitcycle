import React, { useState, useEffect, useRef } from "react";

interface StatisticCardProps {
  value: string;
  description: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({ value, description }) => {
  const [count, setCount] = useState<number>(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, ""));
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasStarted, target]);

  const startCounting = () => {
    const duration = 4000;
    const incrementTime = 15;
    const totalSteps = duration / incrementTime;
    const stepSize = (target / totalSteps) * 3;
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += stepSize;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(currentCount.toFixed(2)));
      }
    }, incrementTime);
  };

  const formattedCount = count.toLocaleString('fr-FR');

  return (
    <div ref={ref} className="flex overflow-hidden flex-col self-stretch px-4 py-0.5 my-auto statistic-card">
      <div className="text-3xl font-semibold leading-none value">{formattedCount}+</div>
      <div className="mt-2 text-2xl leading-6 description">{description}</div>
    </div>
  );
};
