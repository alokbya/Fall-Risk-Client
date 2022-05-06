import React, { useEffect } from 'react'

const WhiteboardMobility = ({ localRoomData, setLocalRoomData }) => {

  useEffect(() => {
    if (!!localRoomData.whiteboardMobility === true) { 
      document.getElementById('fra-wm-yes').checked = true; 
    } else if (localRoomData.whiteboardMobility === false) { 
        document.getElementById('fra-wm-no').checked = true;
    } else {
      document.getElementById('fra-wm-no').checked = false;
      document.getElementById('fra-wm-yes').checked = false; 
    }
  }, [localRoomData.whiteboardMobility]);

  return (
      <>
        <div className='fra-container'>
                <p className='fra-header'>
                Patient whiteboard mobility status updated?
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-wm-yes" name="fra-wm" value="yes" onClick={e => setLocalRoomData({...localRoomData, whiteboardMobility: true})}/>
                            <label className='fra-label' for="fra-wm-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-wm-no" name="fra-wm" value="no" onClick={e => setLocalRoomData({...localRoomData, whiteboardMobility: false})}/>
                            <label className='fra-label' for="fra-wm-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default WhiteboardMobility