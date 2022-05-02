import React, { useEffect } from 'react'
import '../../../styles/audit/auditPages/epicPages/patientFamilyEducated.css';

const PatientFamilyEducated = ({ localRoomData, setLocalRoomData, globalRoomData, setGlobalRoomData, room}) => {
  useEffect(() => {
    if (!!localRoomData.patientFamilyEducated === true) { 
      document.getElementById('fra-pfe-yes').checked = true; 
    } else if (localRoomData.patientFamilyEducated === false) { 
        document.getElementById('fra-pfe-no').checked = true;
    } else {
      document.getElementById('fra-pfe-no').checked = false;
      document.getElementById('fra-pfe-yes').checked = false; 
    }
  }, [localRoomData.patientFamilyEducated])
  return (
      <>
         <div className='fra-container'>
                <p className='fra-header'>
                Patient and family education regarding Fall Policy documented.
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-pfe-yes" name="fra-pfe" value="high" onClick={e => setLocalRoomData({...localRoomData, patientFamilyEducated: true})}/>
                            <label className='fra-label' for="fra-pfe-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-pfe-no" name="fra-pfe" value="low-mod" onClick={e => setLocalRoomData({...localRoomData, patientFamilyEducated: false})}/>
                            <label className='fra-label' for="fra-pfe-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default PatientFamilyEducated