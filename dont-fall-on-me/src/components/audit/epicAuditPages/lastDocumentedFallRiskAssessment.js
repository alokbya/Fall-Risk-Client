import React from 'react'
import '../../../styles/audit/auditPages/epicPages/lastDocumentedFallRiskAssessment.css';

const LastDocumentedFallRiskAssessment = ({ fallRiskAssessed, setFallRiskAssessed }) => {
  return (
      <>
        <div className='fall-risk-assessed-last-documented fra-ld epic-container'>
            <p className='question-set-description fra-section'>
                Last documented fall risk assessment.
            </p>
            <div className='fall-risk-last-documented-selections'>
                    <button className={fallRiskAssessed.lastDoc === 'high' ? 'fra-selected-high fra-item' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, lastDoc: 'high'})} >High</button>
                    <button className={fallRiskAssessed.lastDoc === 'low-mod' ? 'fra-selected-low-mod fra-item' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, lastDoc: 'low-mod'})} >Low / Moderate</button>
            </div>
        </div>
      </>
  )
}

export default LastDocumentedFallRiskAssessment