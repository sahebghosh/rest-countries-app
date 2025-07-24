import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`}>
      <div className="p-4 border rounded-lg hover:shadow-lg transition bg-white">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-1">{country.name.common}</h2>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
