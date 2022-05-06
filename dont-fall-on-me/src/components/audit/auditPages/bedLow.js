import React, { useEffect } from 'react'

const BedLow = ({ localRoomData, setLocalRoomData }) => {

  useEffect(() => {
    if (!!localRoomData.bedLow === true) { 
      document.getElementById('fra-bl-yes').checked = true; 
    } else if (localRoomData.bedLow === false) { 
        document.getElementById('fra-bl-no').checked = true;
    } else {
      document.getElementById('fra-bl-no').checked = false;
      document.getElementById('fra-bl-yes').checked = false; 
    }
  }, [localRoomData.bedLow]);

  return (
      <>
        <div className='fra-container'>
                <p className='fra-header'>
                Bed in low position?
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-bl-yes" name="fra-bl" value="yes" onClick={e => setLocalRoomData({...localRoomData, bedLow: true})}/>
                            <label className='fra-label' for="fra-bl-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-bl-no" name="fra-bl" value="no" onClick={e => setLocalRoomData({...localRoomData, bedLow: false})}/>
                            <label className='fra-label' for="fra-bl-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default BedLow