import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewComponent from './components/renderings/NewComponent/NewComponent';
import DefaultLayout from './layout/layout';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  const data = { message: 'Welcome new component created' };

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

{
  /* <NewComponent fields={data} />; */
}
