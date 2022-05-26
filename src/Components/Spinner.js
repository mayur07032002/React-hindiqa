import React from 'react'
import loader from './loader.gif'

const Spinner=()=>{
        return (
            <div className="text-center">
                <img src={loader} alt="loading" className="my-3" />
            </div>
        )
    
}
 export default Spinner;