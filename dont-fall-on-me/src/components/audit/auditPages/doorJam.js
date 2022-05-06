import React, { useEffect } from 'react'

const DoorJam = ({ localRoomData, setLocalRoomData }) => {

  useEffect(() => {
    if (!!localRoomData.whiteboardMobility === true) { 
      document.getElementById('fra-dj-yes').checked = true; 
    } else if (localRoomData.whiteboardMobility === false) { 
        document.getElementById('fra-dj-no').checked = true;
    } else {
      document.getElementById('fra-dj-no').checked = false;
      document.getElementById('fra-dj-yes').checked = false; 
    }
  }, [localRoomData.whiteboardMobility]);

  return (
      <>
        <div className='fra-container'>
                <p className='fra-header'>
                Fall risk marker on door jam?
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-dj-yes" name="fra-dj" value="yes" onClick={e => setLocalRoomData({...localRoomData, doorJam: true})}/>
                            <label className='fra-label' for="fra-dj-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-dj-no" name="fra-dj" value="no" onClick={e => setLocalRoomData({...localRoomData, doorJam: false})}/>
                            <label className='fra-label' for="fra-dj-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default DoorJam