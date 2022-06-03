import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = () => {
  const params = useParams();
  const { countryId } = params;

  const [countryDets, setCountryDets] = useState([]);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryDets(data);
      });
  }, [countryId]);

  const countriesDetsStyle = {
    width: '30%',
  };

  console.log(countryDets);
  return (
    <div className="col-7">
      <h1>CountryDetails</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={countriesDetsStyle}></td>
            <td>{countryDets.name.common}</td>
          </tr>
          <td>{countryDets.borders.map((border) => border)}</td>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
