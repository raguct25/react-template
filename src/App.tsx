/* eslint-disable */
import NewComponent from './components/renderings/NewComponent/NewComponent';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './template/pages/Dashboard';
import './template/css/style.css';
function App() {
  // const data = { message: 'Welcome new component created' };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <h1 className="bg-blue-200">hello</h1> */}
      {/* <h1 className="bg-red-400">Hello</h1> */}
    </div>
  );
}

export default App;
/* eslint-disable */
