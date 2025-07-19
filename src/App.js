import React, { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';

function App() {
  const [countries, setCountries] = useState([]); // country list
  const [searchTerm, setSearchTerm] = useState(''); // serach term for input field
  const [selectedRegion, setSelectedRegion] = useState(''); // region selection for dropdown filter

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3'
        );
        const data = await response.json();
        console.log('Fetched data:', data);
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (country) => selectedRegion === '' || country.region === selectedRegion
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🌍 Country Explorer
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm w-72"
        />
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm w-72"
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Country as a card */}

      {filteredCountries && filteredCountries?.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCountries?.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-40 text-lg font-semibold text-gray-600">
          No matching data available!!
        </div>
      )}
    </div>
  );
}

export default App;
