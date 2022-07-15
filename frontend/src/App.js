import './App.css';

import Feed from './components/pages/Feed/Feed'
import ProductPost from './components/pages/Post/ProductPost'
import Edit from './components/pages/Edit/Edit'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  return (
    <div className="App">
            
      

      <Router>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path= 'post' element={<ProductPost/>}/>
          <Route path='edit/:id' element={<Edit/>}/>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
