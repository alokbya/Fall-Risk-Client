import React from 'react'
import OrgUnit from './orgUnit'

const JoinOrgUnitList = ({units, filteredUnits, joinUnit}) => {
  return (
      <>
        <ul>
          {/* {orgUnits.map(unit => <OrgUnit unit={unit}/>)} */}
          {filteredUnits.map(unit => <OrgUnit unit={unit} units={units} joinUnit={joinUnit}/>)}
        </ul>
      </>
  )
}

export default JoinOrgUnitList