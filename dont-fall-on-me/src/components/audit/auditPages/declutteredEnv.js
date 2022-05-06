import React, { useEffect } from 'react'

const DeclutteredEnv = ({ localRoomData, setLocalRoomData }) => {

  useEffect(() => {
    if (!!localRoomData.declutteredEnv === true) { 
      document.getElementById('fra-de-yes').checked = true; 
    } else if (localRoomData.declutteredEnv === false) { 
        document.getElementById('fra-de-no').checked = true;
    } else {
      document.getElementById('fra-de-no').checked = false;
      document.getElementById('fra-de-yes').checked = false; 
    }
  }, [localRoomData.declutteredEnv]);

  return (
      <>
        <div className='fra-container'>
                <p className='fra-header'>
                Decluttered environment?
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-de-yes" name="fra-de" value="yes" onClick={e => setLocalRoomData({...localRoomData, declutteredEnv: true})}/>
                            <label className='fra-label' for="fra-de-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-de-no" name="fra-de" value="no" onClick={e => setLocalRoomData({...localRoomData, declutteredEnv: false})}/>
                            <label className='fra-label' for="fra-de-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default DeclutteredEnv