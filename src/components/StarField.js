import { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    resize();

    const starCount = Math.floor((canvas.width * canvas.height) / 8000);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.3,
        baseOpacity: Math.random() * 0.6 + 0.2,
        opacity: 0,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        // Some stars get a green tint to match theme
        isGreen: Math.random() < 0.15,
      });
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        star.opacity = star.baseOpacity * (0.5 + 0.5 * twinkle);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        if (star.isGreen) {
          ctx.fillStyle = `rgba(34, 197, 94, ${star.opacity})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        }

        ctx.fill();

        // Add subtle glow for brighter stars
        if (star.radius > 1.2 && star.opacity > 0.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          if (star.isGreen) {
            ctx.fillStyle = `rgba(34, 197, 94, ${star.opacity * 0.1})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.08})`;
          }
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(document.documentElement);

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default StarField;
