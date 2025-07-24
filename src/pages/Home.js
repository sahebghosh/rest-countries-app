import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import RegionTabs from '../components/RegionTabs';
import CountryCard from '../components/CountryCard';
import ErrorBoundary from '../components/ErrorBoundary';

function Home({
  filteredCountries,
  onSearchChange,
  selectedRegion,
  onSelectRegion,
  regionCounts,
}) {
  const [visibleCount, setVisibleCount] = useState(20);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (
        scrollY + height >= fullHeight - 100 &&
        !isLoadingMore &&
        visibleCount < filteredCountries.length
      ) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setVisibleCount((prev) => prev + 20);
          setIsLoadingMore(false);
        }, 500); // simulating loading delay
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoadingMore, visibleCount, filteredCountries]);

  // Reset visible count on search or tab change
  useEffect(() => {
    setVisibleCount(20);
  }, [filteredCountries]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🌍 Country Explorer
      </h1>

      {/* Search Input */}
      <SearchInput onSearch={onSearchChange} />

      {/* Region Filter Tabs */}
      <RegionTabs
        selectedRegion={selectedRegion}
        onSelectRegion={onSelectRegion}
        regionCounts={regionCounts}
      />

      <p className="text-gray-600 text-sm mb-4 text-center">
        Showing {filteredCountries.length} countries
      </p>
      {/* Country Cards or Empty Message */}
      <ErrorBoundary>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries && filteredCountries.length > 0 ? (
            filteredCountries
              .slice(0, visibleCount)
              .map((country) => (
                <CountryCard key={country.cca3} country={country} />
              ))
          ) : (
            <div className="col-span-full text-center text-lg font-semibold text-gray-500">
              No matching data available!
            </div>
          )}

          {isLoadingMore && (
            <div className="col-span-full flex flex-col items-center mt-4">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-gray-500 mt-2">
                Loading more countries...
              </p>
            </div>
          )}
        </div>
      </ErrorBoundary>
      {visibleCount >= filteredCountries.length && (
        <p className="text-center mt-4 text-gray-500">
          You've reached the end! No more countries to show.
        </p>
      )}
    </div>
  );
}

export default Home;
