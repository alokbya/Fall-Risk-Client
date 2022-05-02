import React, { useEffect, useState, useContext } from 'react'
import EpicAuditRoom from './epicAuditRoom'
import { UserContext } from '../../context/global/userState';
const EpicAuditRooms = ({ rooms }) => {

  const { globalUser } = useContext(UserContext);
  const [ roomCollection, setRoomCollection ] = useState([]);
  const [ roomCounter, setRoomCounter ] = useState(0);
  const [ roomsTracker, setRoomsTracker ] = useState({test:'test'});
  const [ globalRoomData, setGlobalRoomData ] = useState([]);

  const incrementRoom = () => {
    if (roomCounter === roomCollection.length - 1) {
      setRoomCounter(roomCollection.length - 1);
    } else {
      setRoomCounter(roomCounter + 1);
    }
    // setRoomCounter(roomCounter >= roomCollection.length - 1 ? roomCounter : roomCounter + 1);
  }

  const decrementRoom = () => {
    if (roomCounter === 0) {
      setRoomCounter(0);
    } else {
      setRoomCounter(roomCounter - 1);
    }
    // setRoomCounter(roomCounter <= 0 ? roomCounter : roomCounter - 1);
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
          {Object.keys(globalRoomData).length === 0 ? 'NOTHING' : `GLOBAL: ${JSON.stringify(globalRoomData)}`}
          <br></br>
          <br></br>
            {roomCollection.length > 0 ? <EpicAuditRoom unitName={globalUser.unit.name} globalRoomData={globalRoomData} setGlobalRoomData={setGlobalRoomData} room={roomCollection[roomCounter]} rooms={rooms} roomCounter={roomCounter} incrementRoom={incrementRoom} decrementRoom={decrementRoom} setRoomsTracker={setRoomsTracker} roomsTracker={roomsTracker} /> : ''}
        </div>
      </>
  )
}

export default EpicAuditRooms;