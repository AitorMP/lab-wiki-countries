import './index.css';
import { Routes, Route } from 'react-router-dom';
import Countries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={Countries} />} />
            <Route
              path="country/:countryId"
              element={<CountryDetails countries={Countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
