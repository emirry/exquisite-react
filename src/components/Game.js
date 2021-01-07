import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [submission, setSubmission] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  // console.log(submission)
 const [isSubmitted, setIsSubmitted] = useState(false);

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const addSubmissionInput = (input) => {
    const newFormValues = [...submission];

    const nextPlayer = currentPlayer + 1;
    // console.log(nextPlayer)

    newFormValues.push(input);

    setSubmission(newFormValues);
    setCurrentPlayer(nextPlayer);
  };

  const revealLastSubmission = submission[submission.length - 1]

  const revealPoem = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      { (isSubmitted) || (submission.length === 0) ? null : <RecentSubmission submission={revealLastSubmission} /> }
      
      { isSubmitted ? null : <PlayerSubmissionForm sendSubmission={addSubmissionInput} index={currentPlayer} fields={FIELDS} />}

      <FinalPoem isSubmitted={isSubmitted} submissions={submission} revealPoem={revealPoem} />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
