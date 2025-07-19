import React, { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';

function App() {
  // 1️⃣ State to hold the list of countries
  const [countries, setCountries] = useState([]);

  // 2️⃣ Fetch countries when component mounts
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🌍 Country Explorer
      </h1>

      {/* 3️⃣ Render each country as a card */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries &&
          countries?.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
      </div>
    </div>
  );
}

export default App;
