import './Home.css'
import Header from '../../layout/Header/Header'
import Carrousel from '../../layout/Carrousel/Carrousel';
import PayBar from '../../layout/PayBar/PayBar';
import SectionProducts from '../../layout/SectionProducts/SectionProducts';
import Menu from '../../layout/Menu/Menu';
import { MenuProvider } from '../../Context/MenuContext';

import FooterFeed from '../../layout/FooterFeed/FooterFeed';


export default function Home() {
   
    return(
        <div className='HomeContainer'>
        <MenuProvider>
            <Header/>
            <Menu/>
        </MenuProvider>
        <Carrousel/>
        <PayBar/>
        <SectionProducts/> 
        <FooterFeed/>
        </div>
    )
}