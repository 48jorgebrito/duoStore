import './BtnHome.css'
import { useNavigate } from 'react-router-dom'


export default function BtnHome({text}){

    const navigate = useNavigate()
    const redirectHome =()=>{
        navigate('/')
    }

    return(
        <div className='BtnHome-Container' onClick={redirectHome}>
            {text}
        </div>
    )
}