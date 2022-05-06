import React, { useEffect } from 'react'

const YellowSocks = ({ localRoomData, setLocalRoomData }) => {

  useEffect(() => {
    if (!!localRoomData.yellowSocks === true) { 
      document.getElementById('fra-ys-yes').checked = true; 
    } else if (localRoomData.yellowSocks === false) { 
        document.getElementById('fra-ys-no').checked = true;
    } else {
      document.getElementById('fra-ys-no').checked = false;
      document.getElementById('fra-ys-yes').checked = false; 
    }
  }, [localRoomData.yellowSocks])

  return (
      <>
        <div className='fra-container'>
                <p className='fra-header'>
                Yellow socks or shoes accessible?
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-ys-yes" name="fra-ys" value="yes" onClick={e => setLocalRoomData({...localRoomData, yellowSocks: true})}/>
                            <label className='fra-label' for="fra-ys-yes">Yes</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-ys-no" name="fra-ys" value="no" onClick={e => setLocalRoomData({...localRoomData, yellowSocks: false})}/>
                            <label className='fra-label' for="fra-ys-no">No</label>
                        </div>
                    </div>
            </div>
      </>
  )
}

export default YellowSocks