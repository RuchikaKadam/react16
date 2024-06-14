import React, { useEffect, useState } from 'react'

const ProgressBar = ({value=0}) => {
    const [percent, setPercent] = useState(value)
    useEffect(()=>{
        if(percent < 100){
            setTimeout(() => setPercent(newVal => newVal+1),10)
        }
    },[percent])
  return (
    <React.Fragment>
        <div className='progressBar'>
            <div className='fill' style={{width:`${percent}%`}}>
                {percent}%
            </div>
            <br />
            <p>{percent<70 ? 'Loading...'  : 'Complete!'}</p>
        </div>
    </React.Fragment>
  )
}

export default ProgressBar