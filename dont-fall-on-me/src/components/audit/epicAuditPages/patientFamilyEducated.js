import React from 'react'
import '../../../styles/audit/auditPages/epicPages/patientFamilyEducated.css';

const PatientFamilyEducated = ({ fallRiskAssessed, setFallRiskAssessed }) => {
  return (
      <>
        <div className='fra-container'>
            <p className='fra-header'>
                Patient and family education regarding Fall Policy documented.
            </p>
            <div className='fra-selections'>
                    <button className={fallRiskAssessed.patientFamEdu === 'true' ? 'fra-selected-true fra-item' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, patientFamEdu: 'true'})} >Yes</button>
                    <button className={fallRiskAssessed.patientFamEdu === 'false' ? 'fra-selected-false fra-item' : 'fra-item'} onClick={e => setFallRiskAssessed({...fallRiskAssessed, patientFamEdu: 'false'})} >No</button>
            </div>
        </div>
      </>
  )
}

export default PatientFamilyEducated