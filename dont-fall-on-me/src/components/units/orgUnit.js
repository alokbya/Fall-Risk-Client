import React, {useContext, useEffect, useState} from 'react'
import { UserContext } from '../../context/global/userState';
import { MdCheckCircle, MdAddCircle } from 'react-icons/md'
import '../../styles/units/orgUnit.css';

const OrgUnit = ({unit, units, joinUnit}) => {
    const { globalUser } = useContext(UserContext);
    const [ joinedUnits, setJoinedUnits ] = useState(false);

    const joinNewUnit = async () => {
        return await joinUnit(unit._id);
    }

    useEffect(() => {
        const x = globalUser.user.units.map(u => u._id === unit._id);
        setJoinedUnits(x.includes(true));
    }, [units])
  
    return (
      <>
        <li>
            <div className='org-unit-list-item'>
                <div className='org-unit-name'>{unit.name}</div>
                {joinedUnits ? <div className='org-unit-joined'>Joined <MdCheckCircle className='icon'/> </div>: <div className='org-unit-join' onClick={joinNewUnit}>Join <MdAddCircle className='icon'/></div>}
            </div>
        </li>
      </>
  )
}

export default OrgUnit