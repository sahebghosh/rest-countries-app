import React from 'react';

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionTabs = ({ selectedRegion, onSelectRegion }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {regions.map((region) => {
        const isActive =
          selectedRegion === region ||
          (region === 'All' && selectedRegion === '');

        return (
          <button
            key={region}
            onClick={() => onSelectRegion(region === 'All' ? '' : region)}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {region}
          </button>
        );
      })}
    </div>
  );
};

export default React.memo(RegionTabs);
