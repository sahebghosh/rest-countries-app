import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import NotFound from './pages/NotFound';
import useDebounce from './hooks/useDebounce';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,cca3,population,languages,currencies'
        );
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleSelectRegionChange = useCallback((region) => {
    setSelectedRegion(region);
  }, []);

  const filteredCountries = useMemo(() => {
    const search = debouncedSearchTerm?.toLowerCase() || '';

    return countries.filter((country) => {
      const matchesSearch = country.name?.common
        ?.toLowerCase()
        .includes(search);

      const matchesRegion = selectedRegion
        ? country.region === selectedRegion
        : true;

      return matchesSearch && matchesRegion;
    });
  }, [countries, debouncedSearchTerm, selectedRegion]);

  const regionCounts = useMemo(() => {
    const counts = {
      All: countries.length,
      Africa: 0,
      Americas: 0,
      Asia: 0,
      Europe: 0,
      Oceania: 0,
      Antarctic: 0,
    };

    countries.forEach((country) => {
      const region = country.region?.trim();
      if (counts.hasOwnProperty(region)) {
        counts[region]++;
      }
    });

    return counts;
  }, [countries]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            countries={countries}
            filteredCountries={filteredCountries}
            onSearchChange={handleSearchChange}
            selectedRegion={selectedRegion}
            onSelectRegion={handleSelectRegionChange}
            regionCounts={regionCounts}
          />
        }
      />
      <Route path="/country/:name" element={<CountryDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
