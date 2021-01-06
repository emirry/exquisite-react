import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  // // const onButtonClick = () => {
  //   const updatedPoem = {
  //     adj1: props.adji,
  //     noun1: props.noun1,
  //     adv: props.adv,
  //     verb: props.verb,
  //     adj2: props.adj2,
  //     noun2: props.noun2,
  //   };

  //   props.onUpdateSubmission(updatedPoem);
  // // }

  // const onInputChange = (event) => {
  //   const currentPlayer = event.target.value;
  //   props.onUpdateSubmission({
  //     adj1: props.adji,
  //     noun1: props.noun1,
  //     adv: props.adv,
  //     verb: props.verb,
  //     adj2: props.adj2,
  //     noun2: props.noun2,
  //     currentPlayer,
  //   });
  

  // }


  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{  }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  submission: PropTypes.string.isRequired,
};

export default RecentSubmission;
