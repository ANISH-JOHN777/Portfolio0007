import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Heart, Star, CheckCircle } from 'lucide-react';
import ScoreBoard from './ScoreBoard';
import useTheme from '../../hooks/useTheme';
import './TypingGame.css';

const TypingGame = ({ onClose }) => {
  const { theme } = useTheme();
  const [gameState, setGameState] = useState('start'); // start, playing, gameOver
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [inputValue, setInputValue] = useState('');
  const [currentWord, setCurrentWord] = useState(null);
  const [catchAnimation, setCatchAnimation] = useState(false);
  const inputRef = useRef(null);
  const levelRef = useRef(1);
  
  const gameDataRef = useRef({
    words: [],
    fallingWords: [],
    nextWordId: 0,
    spawnTimer: 0,
    nextSpawnTime: 60,
    level: 1,
    wordsPerLevel: 10,
    wordsCompleted: 0,
  });

  // Word list - medium difficulty words
  const wordList = [
    'react', 'javascript', 'typing', 'game', 'speed', 'focus',
    'challenge', 'score', 'player', 'keyboard', 'words', 'falling',
    'catch', 'quick', 'brain', 'type', 'faster', 'level',
    'success', 'points', 'amazing', 'awesome', 'skill', 'expert',
    'pattern', 'rhythm', 'tempo', 'rapid', 'swift', 'cascade',
    'descent', 'gravity', 'motion', 'dynamic', 'progress', 'advance',
    'victory', 'triumph', 'ascend', 'climb', 'master', 'python',
  ];

  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Get a random word
  const getRandomWord = useCallback(() => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  }, []);

  // Spawn falling word
  const spawnWord = useCallback(() => {
    const word = getRandomWord();
    const canvasWidth = canvasRef.current?.width || 800;
    
    const fallingWord = {
      id: gameDataRef.current.nextWordId++,
      text: word,
      x: Math.random() * (canvasWidth - 200) + 100,
      y: -50,
      vx: (Math.random() - 0.5) * 0.5, // Reduced horizontal drift
      vy: 1 + gameDataRef.current.level * 0.2, // Speed increases with level (reduced)
      fontSize: 24,
      width: 0, // Will be calculated during draw
    };
    
    gameDataRef.current.fallingWords.push(fallingWord);
  }, [getRandomWord]);

  // Draw game
  const drawGame = useCallback(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    
    // Clear with gradient - theme aware
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    if (theme === 'light') {
      gradient.addColorStop(0, '#f8f9fa');
      gradient.addColorStop(0.5, '#f0f3f6');
      gradient.addColorStop(1, '#e8ecf1');
    } else {
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(0.5, '#16213e');
      gradient.addColorStop(1, '#0f3460');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw decorative circles in background
    if (theme === 'light') {
      ctx.fillStyle = 'rgba(2, 132, 199, 0.08)';
    } else {
      ctx.fillStyle = 'rgba(56, 189, 248, 0.05)';
    }
    for (let i = 0; i < 3; i++) {
      const x = ((Date.now() / 100 + i * 300) % (width + 200)) - 100;
      ctx.beginPath();
      ctx.arc(x, height / 3 + i * 150, 80, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw falling words
    gameDataRef.current.fallingWords.forEach(word => {
      ctx.font = `bold ${word.fontSize}px 'Orbitron', monospace`;
      ctx.textAlign = 'center';
      
      // Calculate text width
      const metrics = ctx.measureText(word.text);
      word.width = metrics.width;
      
      // Determine color - highlight if it matches current typing
      let textColor, glowColor;
      if (theme === 'light') {
        textColor = '#7c3aed'; // Purple default
        glowColor = 'rgba(124, 58, 237, 0.8)';
        
        if (inputValue.length > 0 && word.text.startsWith(inputValue)) {
          textColor = '#059669'; // Green if partially correct
          glowColor = 'rgba(5, 150, 105, 0.8)';
        }
      } else {
        textColor = '#a78bfa'; // Purple default
        glowColor = 'rgba(167, 139, 250, 0.8)';
        
        if (inputValue.length > 0 && word.text.startsWith(inputValue)) {
          textColor = '#4ade80'; // Green if partially correct
          glowColor = 'rgba(74, 222, 128, 0.8)';
        }
      }
      
      // Draw glow
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 20;
      ctx.fillStyle = textColor;
      ctx.fillText(word.text, word.x, word.y);
      
      // Draw outline for better readability
      ctx.shadowColor = 'transparent';
      ctx.strokeStyle = theme === 'light' ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.strokeText(word.text, word.x, word.y);
    });

    // Draw input hint
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = theme === 'light' ? 'rgba(31, 41, 55, 0.6)' : 'rgba(255, 255, 255, 0.6)';
    ctx.shadowColor = 'transparent';
    ctx.fillText('Type the words to catch them!', width / 2, 30);
  }, [inputValue, theme]);

  // Update game
  const updateGame = useCallback(() => {
    const { fallingWords, spawnTimer, nextSpawnTime, level } = gameDataRef.current;
    const canvasHeight = canvasRef.current?.height || 600;
    const canvasWidth = canvasRef.current?.width || 800;

    // Spawn new words
    if (spawnTimer >= nextSpawnTime) {
      spawnWord();
      gameDataRef.current.spawnTimer = 0;
      // Increase spawn rate with level (faster spawning = harder)
      gameDataRef.current.nextSpawnTime = Math.max(30, 60 - level * 5);
    }
    gameDataRef.current.spawnTimer++;

    // Update falling words
    for (let i = fallingWords.length - 1; i >= 0; i--) {
      const word = fallingWords[i];
      word.x += word.vx;
      word.y += word.vy;

      // Check if word reached bottom
      if (word.y > canvasHeight + 50) {
        fallingWords.splice(i, 1);
        
        // Lose a life
        setLives(prev => {
          const newLives = prev - 1;
          if (newLives <= 0) {
            setGameState('gameOver');
          }
          return newLives;
        });
      }
      // Keep words in horizontal bounds (bounce back instead of wrap)
      if (word.x < 50) {
        word.x = 50;
        word.vx = Math.abs(word.vx); // Bounce right
      } else if (word.x > canvasWidth - 50) {
        word.x = canvasWidth - 50;
        word.vx = -Math.abs(word.vx); // Bounce left
      }
    }

    drawGame();
  }, [spawnWord, drawGame]);

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const animate = () => {
      updateGame();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameState, updateGame]);

  // Handle typing
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setInputValue(value);

    if (gameState !== 'playing' || !value) return;

    // Check for word match
    const { fallingWords } = gameDataRef.current;
    
    for (let i = fallingWords.length - 1; i >= 0; i--) {
      const word = fallingWords[i];
      if (word.text === value) {
        // Word matched!
        setCatchAnimation(true);
        setCurrentWord(word.text);
        
        // Add score (bonus for catching early)
        const yProgress = word.y / (canvasRef.current?.height || 600);
        const bonus = Math.max(10, Math.floor(100 * (1 - yProgress)));
        setScore(prev => prev + bonus);

        // Remove word
        gameDataRef.current.fallingWords.splice(i, 1);
        gameDataRef.current.wordsCompleted++;

        // Check for level up
        if (gameDataRef.current.wordsCompleted >= gameDataRef.current.wordsPerLevel) {
          gameDataRef.current.level++;
          levelRef.current = gameDataRef.current.level;
          gameDataRef.current.wordsCompleted = 0;
          gameDataRef.current.wordsPerLevel += 3;
        }

        // Clear input with slight delay for animation
        setTimeout(() => {
          setInputValue('');
          setCatchAnimation(false);
          inputRef.current?.focus();
        }, 300);
        
        break;
      }
    }
  };

  // Ensure input stays focused
  const handleInputBlur = () => {
    if (gameState === 'playing') {
      inputRef.current?.focus();
    }
  };

  // Resize canvas
  useEffect(() => {
    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      
      const container = canvasRef.current.parentElement;
      if (!container) return;
      
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      
      if (width > 0 && height > 0) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };

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

  // Start game
  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLives(3);
    setInputValue('');
    levelRef.current = 1;
    gameDataRef.current = {
      words: [],
      fallingWords: [],
      nextWordId: 0,
      spawnTimer: 0,
      nextSpawnTime: 60,
      level: 1,
      wordsPerLevel: 10,
      wordsCompleted: 0,
    };
    inputRef.current?.focus();
  };

  return (
    <div className={`game-container ${theme === 'light' ? 'light-theme' : ''}`}>
      <div className="game-header">
        <button className="close-btn" onClick={onClose}>
          <X size={18} />
        </button>
        <h2>Type Rush</h2>
        {gameState === 'playing' && (
          <div className="header-stats">
            <div className="stat-item score-stat">
              <ScoreBoard score={score} />
            </div>
            <div className="stat-item">
              <span><Heart size={16} fill="currentColor" /> {lives}</span>
            </div>
            <div className="stat-item">
              <span><Star size={16} fill="currentColor" /> Level {levelRef.current}</span>
            </div>
          </div>
        )}
      </div>

      {gameState === 'start' && (
        <div className="overlay start-screen">
          <div className="start-content">
            <h1>Type Rush</h1>
            <p>Catch falling words by typing them!</p>
            <div className="instructions">
              <p>
                Words fall from the top and you have 3 lives. Type each word to catch it before it reaches the bottom. 
                Complete levels to unlock harder challenges and increase your score!
              </p>
            </div>
            <button className="play-btn" onClick={startGame}>Play</button>
          </div>
        </div>
      )}

      {gameState === 'gameOver' && (
        <div className="overlay game-over-screen">
          <div className="game-over-content">
            <h1>Game Over!</h1>
            <p className="final-score">Final Score: {score}</p>
            <p className="level-reached">Level Reached: {levelRef.current}</p>
            <button className="play-btn" onClick={startGame}>Play Again</button>
            <button className="close-btn-alt" onClick={onClose}>Close</button>
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="game-canvas"
      />

      {gameState === 'playing' && (
        <div className="taskbar">
          <div className="taskbar-content">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="Type words here..."
              className="typing-input"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
            <div className="input-hint">
              {catchAnimation && currentWord && (
                <span className="word-caught">
                  <CheckCircle size={16} /> {currentWord}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypingGame;
