import './css/App.css'
import Start from './components/Start'
import Desktop from './components/Desktop'

function App() {
  return (
    <div className="App">
      <Desktop className="desktop" />
      <Start className="start" />
    </div>
  );
}

export default App;
