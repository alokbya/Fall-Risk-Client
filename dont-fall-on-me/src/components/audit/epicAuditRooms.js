import React, { useEffect, useState } from 'react'
import EpicAuditRoom from './epicAuditRoom'

const EpicAuditRooms = ({ rooms }) => {

  const [ roomCollection, setRoomCollection ] = useState([]);
  const [ roomCounter, setRoomCounter ] = useState(0);
  const [ roomsTracker, setRoomsTracker ] = useState({test:'test'});

  const incrementRoom = () => {
    setRoomCounter(roomCounter >= roomCollection.length - 1 ? roomCounter : roomCounter + 1);
  }

  const decrementRoom = () => {
    setRoomCounter(roomCounter <= 0 ? roomCounter : roomCounter - 1);
  }

  useEffect(() => {
    setRoomCollection(rooms);

    const tracker = {};
    roomCollection.map(room => {
        tracker[room._id] = {
            name: '',
            fallRiskAssessed: {},
            lastDocumentedAssessment: {},
            patientAndFamilyEdu: false,
        }
    });
    setRoomsTracker(tracker);

  }, [rooms]);
  
  return (
      <>
        <div className='audit-rooms'>
          {JSON.stringify(roomsTracker)}
          {/* {JSON.stringify(roomsTracker)} */}
            {roomCollection.length > 0 ? <EpicAuditRoom room={roomCollection[roomCounter]} incrementRoom={incrementRoom} decrementRoom={decrementRoom} setRoomsTracker={setRoomsTracker} roomsTracker={roomsTracker} /> : ''}
            {/* {roomCollection.map(room => <EpicAuditRoom room={room} incrementRoom={incrementRoom} decrementRoom={decrementRoom} />)} */}
        </div>
      </>
  )
}

export default EpicAuditRooms;