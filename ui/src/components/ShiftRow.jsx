import React from 'react'

const ShiftRow = ({ shift }) => {  
    const [ start, end ] = [ shift.start, shift.end ];
    return (
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
  )
}

export default ShiftRow