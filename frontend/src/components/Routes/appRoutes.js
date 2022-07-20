import { useContext } from 'react';

import Feed from '../pages/Feed/Feed'
import ProductPost from '../pages/Post/ProductPost'
import Edit from '../pages/Edit/Edit'
import Login from '../pages/Login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import { AuthProvider, AuthContext } from '../context/auth';


export default function AppRoutes(){

const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext)

    if(loading){
        return <div className='loading'>Carrregando...</div>
    }


    if( !authenticated){
         return <Navigate to='/login'/>
    }
    return children
}



    return(
        <div className='appRoutes'>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={<Private> <Feed/> </Private>}/>
                        <Route path= 'post' element={<Private> <ProductPost/> </Private>}/>
                        <Route path='edit/:id' element={<Private> <Edit/> </Private>}/>
                        <Route path='login' element={< Login/>}/>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    )
}