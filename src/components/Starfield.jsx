import { useEffect, useRef } from 'react';
import './Starfield.css';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 75);

      for (let i = 0; i < particleCount; i++) {
        const isGold = Math.random() < 0.35;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: isGold ? Math.random() * 1.8 + 1 : Math.random() * 1.2 + 0.5,
          color: isGold ? '#D4AF37' : '#A1A1AA',
          alpha: Math.random() * 0.5 + 0.2,
          isGold
        });
      }
    };

    const drawBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle architecture grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 80;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw particle nodes and connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce screen edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold ? `rgba(212, 175, 55, ${p.alpha})` : `rgba(161, 161, 170, ${p.alpha * 0.6})`;
        ctx.fill();

        if (p.isGold) {
          ctx.shadowColor = '#D4AF37';
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowBlur = 0;
        }

        // Draw connections between nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 130) * 0.12;
            const isGoldConn = p.isGold || p2.isGold;
            ctx.strokeStyle = isGoldConn ? `rgba(212, 175, 55, ${lineAlpha})` : `rgba(255, 255, 255, ${lineAlpha * 0.5})`;
            ctx.lineWidth = isGoldConn ? 0.8 : 0.5;
            ctx.stroke();
          }
        }

        // Mouse interaction connection
        if (mouse.x && mouse.y) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const mAlpha = (1 - mdist / mouse.radius) * 0.2;
            ctx.strokeStyle = `rgba(244, 201, 93, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.shadowBlur = 0; // reset
      animationFrameId = requestAnimationFrame(drawBackground);
    };

    resizeCanvas();
    drawBackground();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" />;
};

export default Starfield;
