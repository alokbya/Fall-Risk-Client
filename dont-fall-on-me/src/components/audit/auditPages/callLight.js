import React, { useEffect } from 'react'

const CallLight = ({ localRoomData, setLocalRoomData }) => {

  useEffect(() => {
    if (!!localRoomData.callLight === true) { 
      document.getElementById('fra-cl-yes').checked = true; 
    } else if (localRoomData.callLight === false) { 
        document.getElementById('fra-cl-no').checked = true;
    } else {
      document.getElementById('fra-cl-no').checked = false;
      document.getElementById('fra-cl-yes').checked = false; 
    }
  }, [localRoomData.callLight]);

  return (
      <>
        <div className='fra-container'>
                <p className='fra-header'>
                Call light in reach?
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-cl-yes" name="fra-cl" value="yes" onClick={e => setLocalRoomData({...localRoomData, callLight: true})}/>
                            <label className='fra-label' for="fra-cl-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-cl-no" name="fra-cl" value="no" onClick={e => setLocalRoomData({...localRoomData, callLight: false})}/>
                            <label className='fra-label' for="fra-cl-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default CallLight