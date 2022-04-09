import React from 'react'

export const SpreadsheetAdd = () => {
    
    const onChange = (e) => {
        e.preventDefault();
        console.log('file submitted')
    }

    return (
    <div className='spreadsheetAdd'>
        <details>
            <summary>add csv</summary>
            <input type="file" onChange={onChange} placeholder='' className='fileInput'/>
        </details>
    </div>
  )
}
