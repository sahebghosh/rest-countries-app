import React from 'react';

const CountryCard = ({ country }) => {
  const { name, capital, region, population, flags } = country;

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
      <img
        src={flags.png}
        alt={`Flag of ${name.common}`}
        className="w-24 h-16 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold">{name.common}</h2>
      <p className="text-sm text-gray-600">Capital: {capital?.[0] || 'N/A'}</p>
      <p className="text-sm text-gray-600">Region: {region}</p>
      <p className="text-sm text-gray-600">
        Population: {population.toLocaleString()}
      </p>
    </div>
  );
};

export default CountryCard;
