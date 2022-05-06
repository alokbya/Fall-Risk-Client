import React, { useEffect } from 'react'

import '../../../styles/audit/auditPages/epicPages/fallRiskAssessed.css';

const FallRiskAssessed = ({ localRoomData, setLocalRoomData }) => {
    useEffect(() => {
        if (localRoomData.fallRiskAssessed === 'true') { 
            document.getElementById('fra-yes').checked = true; 
        } else if (localRoomData.fallRiskAssessed === 'false') { 
            document.getElementById('fra-no').checked = true;
        } else {
            document.getElementById('fra-no').checked = false;
            document.getElementById('fra-yes').checked = false; 
        }
    }, [localRoomData.fallRiskAssessed]);
  return (
      <>
        <div className='fra-container'>
            <p className='fra-header'>
                Was the fall risk assessed upon admission, and documented within 8 hours?
            </p>
            <div className='fra-selections fra-radio'>
                <div className='fra-radio-item'>
                    {/* <input className='fra-input' type="radio" id="fra-yes" name="fra" value="yes" onClick={e => setFallRiskAssessed({...fallRiskAssessed, fallRiskAssessed: 'true'})}/> */}
                    <input className='fra-input' type="radio" id="fra-yes" name="fra" value="yes" onClick={e => setLocalRoomData({...localRoomData, fallRiskAssessed: 'true'})}/>
                    <label className='fra-label' for="fra-yes">Yes</label>
                </div>
                <div className='fra-radio-item'>
                    <input className='fra-input' type="radio" id="fra-no" name="fra" value="false" onClick={e => setLocalRoomData({...localRoomData, fallRiskAssessed: 'false'})}/>
                    <label className='fra-label' for="fra-no">No</label>
                </div>
            </div>
            <div className='fra-date-time'>
                    <label className='fra-header date-time-header' for='fra-date'>
                        Date of Fall Risk Assessment
                    </label>
                    <input id='fra-date' className='fra-date-picker' for='fra-date-time' type='date' value={localRoomData.dateAssessed} onChange={e => setLocalRoomData({...localRoomData, dateAssessed: e.target.value})}/>
                    <br/>
                    <label className='fra-header date-time-header' for='fra-time'>
                        Time of Fall Risk Assessment
                    </label>
                    <input id='fra-time' className='fra-time-picker' for='fra-date-time' type='time' value={localRoomData.timeAssessed} onChange={e => setLocalRoomData({...localRoomData, timeAssessed: e.target.value})}/>
            </div>
        </div>
      </>
  )
}

export default FallRiskAssessed