import React from 'react'

import '../../../styles/audit/auditPages/epicPages/fallRiskAssessed.css';

const FallRiskAssessed = ({ fallRiskAssessed, setFallRiskAssessed }) => {
  return (
      <>
        <div className='fra-container'>
            <p className='fra-header'>
                Was the fall risk assessed upon admission, and documented within 8 hours?
            </p>
            <div className='fra-selections'>
                {/* <button className={fallRiskAssessed.fallRiskAssessed === 'true' ? 'fra-selected-true fra-item' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, fallRiskAssessed: 'true'})} >Yes</button> */}
                <button className={fallRiskAssessed.fallRiskAssessed === 'true' ? 'fra-selected-true' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, fallRiskAssessed: 'true'})} >Yes</button>
                <button className={fallRiskAssessed.fallRiskAssessed === 'false' ? 'fra-selected-false' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, fallRiskAssessed: 'false'})} >No</button>
                {/* {fallRiskAssessed.fallRiskAssessed.toString()} */}
            </div>
            <div className='fra-selections fra-date'>
                <div className='fra-header'>
                    Date of assessment
                </div>
                <div>
                    <input className='fra-date-picker' type='date' value={fallRiskAssessed.dateAssessed} onChange={e => setFallRiskAssessed({...fallRiskAssessed, dateAssessed: e.target.value})}/>
                </div>
            </div>
        </div>
      </>
  )
}

export default FallRiskAssessed