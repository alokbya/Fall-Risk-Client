import React from 'react'
import '../../../styles/audit/auditPages/epicPages/lastDocumentedFallRiskAssessment.css';

const LastDocumentedFallRiskAssessment = ({ fallRiskAssessed, setFallRiskAssessed }) => {
  return (
      <>
        <div className='fra-container'>
            <p className='fra-header'>
                Last documented fall risk assessment.
            </p>
            <div className='fra-selections'>
                    <button className={fallRiskAssessed.lastDoc === 'high' ? 'fra-selected-high' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, lastDoc: 'high'})} >High</button>
                    <button className={fallRiskAssessed.lastDoc === 'low-mod' ? 'fra-selected-low-mod' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, lastDoc: 'low-mod'})} >Low / Moderate</button>
            </div>
        </div>
      </>
  )
}

export default LastDocumentedFallRiskAssessment