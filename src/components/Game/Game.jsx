import { useState, useEffect, useRef, useCallback } from 'react';
import Cannon from './Cannon';
import Bird from './Bird';
import Bullet from './Bullet';
import ScoreBoard from './ScoreBoard';
import useGameLoop from '../../hooks/useGameLoop';
import './Game.css';

const Game = ({ onClose }) => {
  const canvasRef = useRef(null);
  const canvasDimensionsRef = useRef({ width: 800, height: 600 });
  const [gameState, setGameState] = useState('start'); // start, playing, gameOver
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [cannonAngle, setCannonAngle] = useState(Math.PI / 2);
  
  const gameDataRef = useRef({
    birds: [],
    bullets: [],
    particles: [],
    combos: 0,
    doubleScore: false,
    birdSpawnTimer: 60, // Start at 60 so first bird spawns immediately
    nextSpawnTime: 60,
  });

  const canvas = canvasRef.current;
  const canvasWidth = canvasDimensionsRef.current.width;
  const canvasHeight = canvasDimensionsRef.current.height;

  // Mouse tracking for cannon rotation
  const handleMouseMove = useCallback((e) => {
    if (gameState !== 'playing' || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const cannonX = width / 2;
    const cannonY = height - 50;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const angle = Math.atan2(mouseY - cannonY, mouseX - cannonX);
    setCannonAngle(angle);
  }, [gameState]);

  // Touch tracking for mobile
  const handleTouchMove = useCallback((e) => {
    if (gameState !== 'playing' || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const cannonX = width / 2;
    const cannonY = height - 50;
    
    const touch = e.touches[0];
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    const angle = Math.atan2(touchY - cannonY, touchX - cannonX);
    setCannonAngle(angle);
  }, [gameState]);

  // Shoot bullet
  const handleClick = useCallback(() => {
    if (gameState !== 'playing' || !canvasRef.current) return;
    
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const cannonX = width / 2;
    const cannonY = height - 50;
    const speed = 8;
    
    const newBullet = {
      id: Date.now(),
      x: cannonX,
      y: cannonY,
      vx: Math.cos(cannonAngle) * speed,
      vy: Math.sin(cannonAngle) * speed,
      radius: 6,
    };
    
    gameDataRef.current.bullets.push(newBullet);
    console.log('🔫 Bullet fired at angle:', cannonAngle, 'Total bullets:', gameDataRef.current.bullets.length);
  }, [gameState, cannonAngle]);

  // Spawn birds
  const spawnBird = useCallback(() => {
    // Get canvas or use safe defaults
    let w = 400;
    let h = 600;
    
    if (canvasRef.current && canvasRef.current.width > 0) {
      w = canvasRef.current.width;
    }
    if (canvasRef.current && canvasRef.current.height > 0) {
      h = canvasRef.current.height;
    }
    
    const side = Math.random() > 0.5 ? 'left' : 'right';
    
    // Calculate y with absolute safety - start simple
    const minY = 50;
    const maxY = h * 0.4;
    const yRange = maxY - minY;
    const randomPercent = Math.random();
    const yValue = minY + (randomPercent * yRange);
    
    const bird = {
      id: Date.now() + Math.random(),
      x: side === 'left' ? -40 : (w + 40),
      y: yValue || 200, // Fallback to 200 if something goes wrong
      vx: side === 'left' ? 2.5 + Math.random() : -(2.5 + Math.random()),
      radius: 18,
      isGolden: Math.random() < 0.1,
      rotation: 0,
    };
    
    gameDataRef.current.birds.push(bird);
    console.log('✓ Bird spawned at y:', bird.y);
  }, []);

  // Create particle effect
  const createParticles = useCallback((x, y) => {
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      const speed = 2 + Math.random() * 2;
      
      const particle = {
        id: Date.now() + Math.random(),
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        size: 3,
      };
      
      gameDataRef.current.particles.push(particle);
    }
  }, []);

  // Collision detection
  const checkCollisions = useCallback(() => {
    const { bullets, birds } = gameDataRef.current;
    
    for (let i = bullets.length - 1; i >= 0; i--) {
      for (let j = birds.length - 1; j >= 0; j--) {
        const bullet = bullets[i];
        const bird = birds[j];
        
        // Ensure valid positions
        if (!Number.isFinite(bullet.x) || !Number.isFinite(bullet.y) || 
            !Number.isFinite(bird.x) || !Number.isFinite(bird.y)) {
          continue;
        }
        
        const dx = bullet.x - bird.x;
        const dy = bullet.y - bird.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < bullet.radius + bird.radius) {
          // Hit!
          console.log('🎯 HIT! Distance:', distance, 'Bullet radius:', bullet.radius, 'Bird radius:', bird.radius);
          createParticles(bird.x, bird.y);
          
          const points = bird.isGolden ? 50 : 10;
          const finalPoints = gameDataRef.current.doubleScore ? points * 2 : points;
          
          setScore(prev => prev + finalPoints);
          console.log('✨ Score +', finalPoints, 'Total:', score + finalPoints);
          
          // Update combos
          gameDataRef.current.combos++;
          if (gameDataRef.current.combos >= 3) {
            gameDataRef.current.doubleScore = true;
            gameDataRef.current.combos = 0;
            setTimeout(() => {
              gameDataRef.current.doubleScore = false;
            }, 3000);
          }
          
          bullets.splice(i, 1);
          birds.splice(j, 1);
          break;
        }
      }
    }
  }, [createParticles, score]);

  // Main game update loop
  const updateGame = useCallback(() => {
    const { birds, bullets, particles, birdSpawnTimer, nextSpawnTime } = gameDataRef.current;

    // Spawn birds
    if (birdSpawnTimer >= nextSpawnTime) {
      spawnBird();
      gameDataRef.current.birdSpawnTimer = 0;
      gameDataRef.current.nextSpawnTime = 40 + Math.random() * 60; // More frequent spawning
    }
    gameDataRef.current.birdSpawnTimer++;

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      const bullet = bullets[i];
      bullet.x += bullet.vx;
      bullet.y += bullet.vy;
      
      // Use actual canvas dimensions
      const canvasWidth = canvasRef.current?.width || 800;
      const canvasHeight = canvasRef.current?.height || 600;
      
      if (bullet.x < -50 || bullet.x > canvasWidth + 50 || 
          bullet.y < -50 || bullet.y > canvasHeight + 50) {
        bullets.splice(i, 1);
      }
    }

    // Update birds
    for (let i = birds.length - 1; i >= 0; i--) {
      const bird = birds[i];
      
      // Fix invalid positions
      if (!Number.isFinite(bird.x)) bird.x = width / 2;
      if (!Number.isFinite(bird.y)) bird.y = height * 0.3;
      
      bird.x += bird.vx;
      bird.y += bird.vy;
      bird.rotation += 0.05;
      
      // Use actual canvas dimensions from ref
      const canvasWidth = canvasRef.current?.width || 800;
      const canvasHeight = canvasRef.current?.height || 600;
      
      if (bird.x < -100 || bird.x > canvasWidth + 100) {
        birds.splice(i, 1);
      }
    }

    // Update particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 0.02;
      particle.vy += 0.1; // gravity
      
      if (particle.life <= 0) {
        particles.splice(i, 1);
      }
    }

    // Collision detection
    checkCollisions();

    // Draw everything
    drawGame();
  }, [spawnBird, checkCollisions]);

  const drawGame = useCallback(() => {
    if (!canvasRef.current) {
      console.warn('Canvas ref not available');
      return;
    }
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) {
      console.warn('Canvas context not available');
      return;
    }
    
    // Use actual canvas dimensions not ref
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    
    // Also update the ref for other functions
    canvasDimensionsRef.current = { width, height };
    
    if (width === 0 || height === 0) {
      console.warn('Canvas has 0 dimensions:', { width, height });
      return;
    }
    
    // Clear with gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(0.5, '#16213e');
    gradient.addColorStop(1, '#0f3460');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw clouds
    drawClouds(ctx, width, height);

    // Draw birds
    const { birds } = gameDataRef.current;
    if (birds.length > 0) {
      birds.forEach((bird, idx) => {
        // Fix birds with invalid positions by assigning safe defaults
        if (!Number.isFinite(bird.x)) bird.x = width / 2;
        if (!Number.isFinite(bird.y)) bird.y = height * 0.3;
        
        drawBird(ctx, bird);
      });
    }

    // Draw bullets
    const { bullets } = gameDataRef.current;
    if (bullets.length > 0) {
      console.log('Drawing', bullets.length, 'bullets');
      gameDataRef.current.bullets.forEach(bullet => {
        drawBullet(ctx, bullet);
      });
    }

    // Draw particles
    gameDataRef.current.particles.forEach(particle => {
      drawParticle(ctx, particle);
    });

    // Draw cannon
    const cannonX = width / 2;
    const cannonY = height - 50;
    drawCannon(ctx, cannonX, cannonY, cannonAngle);
  }, [cannonAngle]);

  const drawCannon = (ctx, x, y, angle) => {
    // Cannon base
    ctx.fillStyle = '#a78bfa';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    // Cannon barrel
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * 40, y + Math.sin(angle) * 40);
    ctx.stroke();
  };

  const drawBird = (ctx, bird) => {
    try {
      ctx.save();
      ctx.translate(bird.x, bird.y);
      ctx.rotate(bird.rotation);

      if (bird.isGolden) {
        // Golden bird
        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 15;
      } else {
        // Regular bird
        ctx.fillStyle = '#ec4899';
        ctx.shadowColor = '#f472b6';
        ctx.shadowBlur = 10;
      }

      // Bird body
      ctx.beginPath();
      ctx.ellipse(0, 0, 24, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      // Bird eye
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(10, -4, 5, 0, Math.PI * 2);
      ctx.fill();

      // Wing
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 15, Math.PI * 0.3, Math.PI * 0.7);
      ctx.stroke();

      ctx.restore();
    } catch (err) {
      console.error('Error drawing bird:', err, bird);
    }
  };

  const drawBullet = (ctx, bullet) => {
    ctx.save();
    
    // Glow effect
    ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius * 2, 0, Math.PI * 2);
    ctx.fill();

    // Bullet
    ctx.fillStyle = '#38bdf8';
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  };

  const drawParticle = (ctx, particle) => {
    ctx.save();
    ctx.globalAlpha = particle.life;
    ctx.fillStyle = '#a78bfa';
    ctx.shadowColor = '#a78bfa';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const drawClouds = (ctx, width, height) => {
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    
    for (let i = 0; i < 3; i++) {
      const x = ((Date.now() / 50 + i * 300) % (width + 200)) - 100;
      const y = 80 + i * 120;
      
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.arc(x + 35, y - 10, 50, 0, Math.PI * 2);
      ctx.arc(x + 70, y, 40, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.restore();
  };

  // Game loop
  useGameLoop(updateGame, gameState === 'playing');

  // Start game
  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(60);
    gameDataRef.current = {
      birds: [],
      bullets: [],
      particles: [],
      combos: 0,
      doubleScore: false,
      birdSpawnTimer: 60, // Start at 60 so first bird spawns immediately
      nextSpawnTime: 60,
    };
  };

  // Timer - removed for unlimited play
  // Collision detection now happens on every frame
  // Game only ends when user closes it

  // Resize canvas
  useEffect(() => {
    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      
      const container = canvasRef.current.parentElement;
      if (!container) return;
      
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      
      // Only set if we have valid dimensions
      if (width > 0 && height > 0) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        
        // Update dimensions ref
        canvasDimensionsRef.current = {
          width: width,
          height: height,
        };
        
        console.log('Canvas resized:', { width, height });
      }
    };

    // Initial resize - with slight delay to ensure DOM is ready
    resizeCanvas();
    
    const resizeObserver = new ResizeObserver(resizeCanvas);
    if (canvasRef.current?.parentElement) {
      resizeObserver.observe(canvasRef.current.parentElement);
    }
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="game-container">
      <div className="game-header">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>SkyPop</h2>
      </div>

      {gameState === 'start' && (
        <div className="start-screen overlay">
          <div className="start-content">
            <h1>SkyPop</h1>
            <p>Shoot the birds and relax!</p>
            <button className="play-btn" onClick={startGame}>Play</button>
          </div>
        </div>
      )}

      {gameState === 'gameOver' && (
        <div className="game-over-screen overlay">
          <div className="game-over-content">
            <h1>Game Over!</h1>
            <p className="final-score">Final Score: {score}</p>
            <button className="play-btn" onClick={startGame}>Play Again</button>
            <button className="close-btn-alt" onClick={onClose}>Close</button>
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="game-canvas"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
        onTouchStart={handleClick}
      />

      {gameState === 'playing' && (
        <div className="hud">
          <ScoreBoard score={score} />
        </div>
      )}
    </div>
  );
};

export default Game;
