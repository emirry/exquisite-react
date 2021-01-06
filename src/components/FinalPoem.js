import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';
import Game from './Game';

const FinalPoem = (props) => {
  const allSubmissions = props.submission.map((playerSubmission, i) => {
    return (
      <li key={i}>
      {/* <Game
        adj1={playerSubmission.adj1}
        noun1={playerSubmission.noun1}
        adv={playerSubmission.adv}
        verb={playerSubmission.verb}
        adj2={playerSubmission.adj2}
        noun2={playerSubmission.adj2} */}
        onUpdatePoem={props.onUpdatePoem}
      {/* /> */}
      </li>
    )
  })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {allSubmissions}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
