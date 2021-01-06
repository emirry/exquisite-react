import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';
import Game from './Game';

const FinalPoem = ({isSubmitted, submissions, revealPoem}) => {
  console.log(submissions)

  if (isSubmitted) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {
            submissions.map((submission, i) => (
              <p key={i}>{submission}</p>
            ))
          }
        </section>
      </div>
    );
  }
  else {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>
  
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={revealPoem}/>
        </div>
      </div>
    );
  };
};

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
