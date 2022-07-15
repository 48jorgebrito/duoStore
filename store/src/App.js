import './App.css';
import Header from './components/layout/Header/Header'
import Carrousel from './components/layout/Carrousel/Carrousel';
import PayBar from './components/layout/PayBar/PayBar';
import SectionProducts from './components/layout/SectionProducts/SectionProducts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carrousel/>
      <PayBar/>
      <SectionProducts/>

    </div>
  );
}

export default App;
