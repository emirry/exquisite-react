import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Game from './Game';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({sendSubmission, index, fields}) => {
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

    sendSubmission(inputFields);

    setInputFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }

  const poemFields = fields.map((field, i) => {
    if (typeof field === 'string') {
      return (
        <div key={i}>
          {field}
        </div>
      )
    }
    else {
      return (
      <div key={i}>
        <input name={field.key} type='text' placeholder={field.placeholder} value={inputFields[field.key]} onChange={onInputChange} />
      </div>
      )
    }
  });

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {poemFields}

          {/* The
          <label htmlFor="adj1"></label>
          <input 
            name='adj1'
            type='text'
            placeholder="adjective1"
            value={inputFields.adj1}
            onChange={onInputChange}
          />
          <input 
            name='noun1'
            type='text'
            placeholder="noun1"
            value={inputFields.noun1}
            onChange={onInputChange}
          />
          <input 
            name='adv'
            type='text'
            placeholder="adverb1"
            value={inputFields.adv}
            onChange={onInputChange}
          />
          <input 
            name='verb'
            type='text'
            placeholder="verb1"
            value={inputFields.verb}
            onChange={onInputChange}
          />
          the
          <input 
            name='adj2'
            type='text'
            placeholder="adjective2"
            value={inputFields.adj2}
            onChange={onInputChange}
          />
          <input 
            name='noun2'
            type='text'
            placeholder="noun2"
            value={inputFields.noun2}
            onChange={onInputChange}
          />. */}
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
