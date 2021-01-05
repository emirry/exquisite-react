import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

// const TEMP_FIELDS = [
//   'The',
//   {
//     key: 'goofy',
//     placeholder: 'adjective',
//   },
//   {
//     key: 'golden',
//     placeholder: 'noun',
//   },
//   {
//     key: 'quickly',
//     placeholder: 'adverb',
//   },
//   {
//     key: 'ate',
//     placeholder: 'verb',
//   },
//   'the',
//   {
//     key: 'crunchy',
//     placeholder: 'adjective',
//   },
//   {
//     key: 'broccoli',
//     placeholder: 'noun',
//   },
//   '.',
// ];

const PlayerSubmissionForm = (props) => {
  const [inputFields, setInputFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const onInputChange = (event) => {
    const {name, value} = event.target;

    const newFormFieldValues = {
      ...inputFields,
    }
    newFormFieldValues[name] = value;
    setInputFields(newFormFieldValues);
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    props.onSubmitCallback(inputFields)

    setInputFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',

    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          <h3>The</h3>
          <label htmlFor="adj1"></label>
          <input 
            name='adj1'
            type='text'
            placeholder="adjective"
            value={inputFields.adj1}
            onChange={onInputChange}
          />
          <input 
            name='noun1'
            type='text'
            placeholder="noun"
            value={inputFields.noun1}
            onChange={onInputChange}
          />
          <input 
            name='adv'
            type='text'
            placeholder="adverb"
            value={inputFields.adv}
            onChange={onInputChange}
          />
          <input 
            name='verb'
            type='text'
            placeholder="verb"
            value={inputFields.verb}
            onChange={onInputChange}
          />
          <h3>the</h3>
          <input 
            name='adj2'
            type='text'
            placeholder="adjective"
            value={inputFields.adj2}
            onChange={onInputChange}
          />
          <input 
            name='noun2'
            type='text'
            placeholder="noun"
            value={inputFields.noun2}
            onChange={onInputChange}
          />
          {/* {  }
          <input
            placeholder="hm..."
            type="text" 
          /> */}

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
};

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
