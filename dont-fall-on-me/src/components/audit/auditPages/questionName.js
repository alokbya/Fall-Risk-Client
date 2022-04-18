import React from 'react'

import '../../../styles/audit/auditPages/questionName.css';

const QuestionName = ({ name, setName }) => {
  return (
      <>
        <div className='question-set-name'>
            <span className='question-set-description'>
              Give this question set a name.
            </span>
            <input
                className='question-set-name-input question-set-input'
                type='text'
                value={name}
                placeholder='Question set name'
                onChange={e => setName(e.target.value)}>
            </input>
        </div>
      </>
  )
}

export default QuestionName