import React, { useEffect } from 'react'

const ChairAlarm = ({ localRoomData, setLocalRoomData }) => {

  useEffect(() => {
    if (!!localRoomData.chairAlarm === true) { 
      document.getElementById('fra-ca-yes').checked = true; 
    } else if (localRoomData.chairAlarm === false) { 
        document.getElementById('fra-ca-no').checked = true;
    } else {
      document.getElementById('fra-ca-no').checked = false;
      document.getElementById('fra-ca-yes').checked = false; 
    }
  }, [localRoomData.chairAlarm]);

  return (
      <>
        <div className='fra-container'>
                <p className='fra-header'>
                Chair alarm on and set to zero seconds?
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-ca-yes" name="fra-ca" value="yes" onClick={e => setLocalRoomData({...localRoomData, chairAlarm: true})}/>
                            <label className='fra-label' for="fra-ca-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-ca-no" name="fra-ca" value="no" onClick={e => setLocalRoomData({...localRoomData, chairAlarm: false})}/>
                            <label className='fra-label' for="fra-ca-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default ChairAlarm