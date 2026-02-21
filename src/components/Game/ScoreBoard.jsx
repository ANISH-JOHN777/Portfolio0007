import './ScoreBoard.css';

const ScoreBoard = ({ score, combo }) => {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span className="score-label">Score</span>
        <span className="score-value">{score}</span>
      </div>
      {combo > 0 && (
        <div className="score-item combo">
          <span className="score-label">Combo</span>
          <span className="score-value">{combo}x</span>
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;
