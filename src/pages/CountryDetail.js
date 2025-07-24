import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CountryDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    fetchCountryDetail();
  }, [name]);

  if (!country) {
    <div className="text-center mt-16 text-lg text-gray-500 animate-pulse">
      Loading country info...
    </div>;
  }
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <img
            src={country?.flags?.svg}
            alt={`${country?.name?.common} flag`}
            className="w-full rounded shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">{country?.name?.common}</h2>
            <p>
              <strong>Region:</strong> {country?.region}
            </p>
            <p>
              <strong>Capital:</strong> {country?.capital?.[0]}
            </p>
            <p>
              <strong>Population:</strong>{' '}
              {country?.population?.toLocaleString()}
            </p>
            <p>
              <strong>Languages:</strong>{' '}
              {Object.values(country?.languages || {}).join(', ')}
            </p>
            <p>
              <strong>Currencies:</strong>{' '}
              {Object.values(country?.currencies || {})
                .map((c) => c.name)
                .join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
