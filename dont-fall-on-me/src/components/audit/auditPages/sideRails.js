import React, { useEffect } from 'react'

const SideRails = ({ localRoomData, setLocalRoomData }) => {

  useEffect(() => {
    if (!!localRoomData.sideRails === true) { 
      document.getElementById('fra-sr-yes').checked = true; 
    } else if (localRoomData.sideRails === false) { 
        document.getElementById('fra-sr-no').checked = true;
    } else {
      document.getElementById('fra-sr-no').checked = false;
      document.getElementById('fra-sr-yes').checked = false; 
    }
  }, [localRoomData.sideRails])

  return (
      <>
        <div className='fra-container'>
                <p className='fra-header'>
                Three of four side rails up on bed?
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-sr-yes" name="fra-sr" value="yes" onClick={e => setLocalRoomData({...localRoomData, sideRails: true})}/>
                            <label className='fra-label' for="fra-sr-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-sr-no" name="fra-sr" value="no" onClick={e => setLocalRoomData({...localRoomData, sideRails: false})}/>
                            <label className='fra-label' for="fra-sr-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default SideRails