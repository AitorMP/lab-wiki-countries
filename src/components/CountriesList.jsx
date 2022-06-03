import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  const [listCountries, setListCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => {
        setListCountries(data);
      });
  }, []);

  const countriesListStyle = {
    maxHeight: '800px',
    overflow: 'scroll',
  };

  return (
    <div className="CountriesList">
      <div className="row">
        <div className="col-5" style={countriesListStyle}>
          <div className="list-group">
            {listCountries.map((country) => {
              return (
                <Link
                  className="list-group-item list-group-item-action"
                  to={`/country/${country.alpha3Code}`}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="flag"
                  />
                  {country.name.common}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
