import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Predict from './pages/Predict';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"/>
        <Route path="/predict" element={<Predict/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
