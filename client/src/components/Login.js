import { dividerClasses } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function Login(){
    const navigate=useNavigate();
    const f=()=>{
        navigate('/dashboard')
    }
return (
    
    <div>
    
        <button onClick={f}>Proceed to My dashborad</button>
    </div>
)
}

export default Login