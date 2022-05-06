import React, { useEffect } from 'react'

const BedAlarm = ({ localRoomData, setLocalRoomData }) => {

  useEffect(() => {
    if (!!localRoomData.bedAlarm === true) { 
      document.getElementById('fra-ba-yes').checked = true; 
    } else if (localRoomData.bedAlarm === false) { 
        document.getElementById('fra-ba-no').checked = true;
    } else {
      document.getElementById('fra-ba-no').checked = false;
      document.getElementById('fra-ba-yes').checked = false; 
    }
  }, [localRoomData.bedAlarm])

  return (
      <>
        <div className='fra-container'>
                <p className='fra-header'>
                Bed alarm on?
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-ba-yes" name="fra-ba" value="yes" onClick={e => setLocalRoomData({...localRoomData, bedAlarm: true})}/>
                            <label className='fra-label' for="fra-ba-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-ba-no" name="fra-ba" value="no" onClick={e => setLocalRoomData({...localRoomData, bedAlarm: false})}/>
                            <label className='fra-label' for="fra-ba-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default BedAlarm