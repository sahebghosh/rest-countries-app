import React from 'react';

const RegionTabs = ({ selectedRegion, onSelectRegion, regionCounts }) => {
  const regions = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {regions.map((region) => (
        <button
          key={region}
          onClick={() => onSelectRegion(region === 'All' ? '' : region)}
          className={`px-4 py-2 rounded-full border transition-all duration-200 ${
            selectedRegion === region ||
            (selectedRegion === '' && region === 'All')
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {region} ({regionCounts?.[region] || 0})
        </button>
      ))}
    </div>
  );
};

export default RegionTabs;
