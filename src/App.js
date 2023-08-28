import logo from './logo.svg';
import './App.css';
import Counter from "./02-testing-react-component/counter";
import AmiiboList from "./03-mocking/AmiiboList";
import AmiiboApiContext from "./03-mocking/AmiiboApiContext";
import AmiiboApiClient from "./03-mocking/AmiiboApiClient";

function App() {
  return (
    <div className="App">
        <AmiiboApiContext.Provider value={new AmiiboApiClient()}>
            <AmiiboList/>
        </AmiiboApiContext.Provider>
    </div>
  );
}

export default App;
