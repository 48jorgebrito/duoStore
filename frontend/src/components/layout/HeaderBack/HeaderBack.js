import './HeaderBack.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'


export default function HeaderBack(){
    return(
        <div className='headerback'>
            <div className='container-headerback'>
                <Link to="/" className='imgIcon'>
                    <IoArrowBackCircleOutline/>
                </Link> 
            </div>
        </div>
    )
}