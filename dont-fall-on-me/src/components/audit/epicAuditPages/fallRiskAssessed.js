import React from 'react'

import '../../../styles/audit/auditPages/epicPages/fallRiskAssessed.css';

const FallRiskAssessed = ({ fallRiskAssessed, setFallRiskAssessed }) => {
  return (
      <>
        <div className='question-set-fall-risk-assessed'>
            <p className='question-set-description fra-section'>
                Was the fall risk assessed upon admission, and documented within 8 hours?
            </p>
            <div className='fall-risk-assessed-selections fra-section'>
                {/* <button className={fallRiskAssessed.fallRiskAssessed === 'true' ? 'fra-selected-true fra-item' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, fallRiskAssessed: 'true'})} >Yes</button> */}
                <button className={fallRiskAssessed.fallRiskAssessed === 'true' ? 'fra-selected-true' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, fallRiskAssessed: 'true'})} >Yes</button>
                <button className={fallRiskAssessed.fallRiskAssessed === 'false' ? 'fra-selected-false' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, fallRiskAssessed: 'false'})} >No</button>
                {/* {fallRiskAssessed.fallRiskAssessed.toString()} */}
            </div>
            <div className='fall-risk-assessed-date fra-section'>
                <span className='question-set-description'>
                    Date of assessment
                </span>
                <input type='date' value={fallRiskAssessed.dateAssessed} onChange={e => setFallRiskAssessed({...fallRiskAssessed, dateAssessed: e.target.value})}/>
            </div>
        </div>
      </>
  )
}

export default FallRiskAssessed