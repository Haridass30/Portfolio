import { useMemo } from 'react';
import './StarField.css';

const StarField = () => {
  const stars = useMemo(() => {
    const count = 200;
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random();
      // 3 tiers: tiny (70%), medium (20%), bright (10%)
      let tier;
      if (size < 0.7) tier = 'tiny';
      else if (size < 0.9) tier = 'medium';
      else tier = 'bright';

      const isGreen = Math.random() < 0.12;

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        tier,
        isGreen,
        delay: `${Math.random() * 6}s`,
        duration: `${2 + Math.random() * 4}s`,
      };
    });
  }, []);

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star star--${star.tier}${star.isGreen ? ' star--green' : ''}`}
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
