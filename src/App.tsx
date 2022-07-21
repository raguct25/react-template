import NewComponent from './components/renderings/NewComponent/NewComponent';
import logo from './logo.svg';

function App() {
  const data = { message: 'Welcome new component created' };

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>React Project</h1>
        <img src={logo} alt="logo" style={{ width: 250, height: 250 }} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <NewComponent fields={data} />
      </header>
    </div>
  );
}

export default App;
