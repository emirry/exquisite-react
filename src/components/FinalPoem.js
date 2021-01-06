import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';
import Game from './Game';

const FinalPoem = (props) => {
  const onButtonClick = () => {
    const allSubmissions = {
      adj1: props.adj1,
      noun1: props.noun1,
      adv: props.adv,
      verb: props.verb,
      adj2: props.adj2,
      noun2: props.noun2
    }
    props.onUpdatePoem(allSubmissions);
    console.log(allSubmissions)
  }

  // const onPlayerChange = (event, currentPlayer) => {
  //   const updatedPlayer = {
  //    const currentPlayer = event.target.value;
  //    props.onUpdatePoem({
  //     adj1: props.adj1,
  //     noun1: props.noun1,
  //     adv: props.adv,
  //     verb: props.verb,
  //     adj2: props.adj2,
  //     noun2: props.noun2
  //    })

  //   }
  // }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input onClick={onButtonClick} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
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
