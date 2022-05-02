import React, { useEffect } from 'react'
import '../../../styles/audit/auditPages/epicPages/lastDocumentedFallRiskAssessment.css';

const LastDocumentedFallRiskAssessment = ({ localRoomData, setLocalRoomData, globalRoomData, setGlobalRoomData, room}) => {

    useEffect(() => {
        if (localRoomData.lastDoc === 'high') { 
            document.getElementById('fra-high').checked = true; 
        } else if (localRoomData.lastDoc === 'low-mod'){ 
            document.getElementById('fra-low-mod').checked = true;
        } else {
            document.getElementById('fra-low-mod').checked = false;
            document.getElementById('fra-high').checked = false; 
        }
    }, [localRoomData.lastDoc]);
    return (
        <>
            <div className='fra-container'>
                <p className='fra-header'>
                    Last documented fall risk assessment.
                </p>
                    <div className='fra-radio'>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-high" name="fra-ld" value="high" onClick={e => setLocalRoomData({...localRoomData, lastDoc: 'high'})}/>
                            <label className='fra-label' for="fra-high">High</label>
                        </div>
                        <div className='fra-radio-item'>
                            <input className='fra-input' type="radio" id="fra-low-mod" name="fra-ld" value="low-mod" onClick={e => setLocalRoomData({...localRoomData, lastDoc: 'low-mod'})}/>
                            <label className='fra-label' for="fra-low-mod">Low / Moderate</label>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default LastDocumentedFallRiskAssessment