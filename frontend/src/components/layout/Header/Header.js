import './Header.css'
import { Link } from "react-router-dom"


export default function Headers(){
    return(
        <div className='header'>
            <div className='container-header'>
                <h1 className='logo'>
                    FutStore 
                </h1>

                <Link to="post">
                    <button>Add Produto</button>
                </Link>

            </div>

        </div>
    )

}