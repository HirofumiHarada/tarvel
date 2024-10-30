import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';

const LocationSelect = ({
  selectedCountry,
  selectedCity,
  selectedPurpose,
  cities,
  setSelectedCountry,
  setSelectedCity,
  setSelectedPurpose,
  countries,
  purposes
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {/* 国選択 */}
      <div className="relative">
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="bg-white/10 text-white rounded-lg pl-10 pr-4 py-2 appearance-none focus:ring-2 focus:ring-white/25 border border-white/20 min-w-[160px]"
        >
          <option value="">国を選択</option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4" />
      </div>

      {/* 都市選択 */}
      {selectedCountry && (
        <div className="relative">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="bg-white/10 text-white rounded-lg pl-10 pr-4 py-2 appearance-none focus:ring-2 focus:ring-white/25 border border-white/20 min-w-[160px]"
          >
            <option value="">都市を選択</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4" />
        </div>
      )}

      {/* 用途選択 */}
      <div className="relative">
        <select
          value={selectedPurpose}
          onChange={(e) => setSelectedPurpose(e.target.value)}
          className="bg-white/10 text-white rounded-lg pl-10 pr-4 py-2 appearance-none focus:ring-2 focus:ring-white/25 border border-white/20 min-w-[160px]"
        >
          {purposes.map((purpose) => (
            <option key={purpose.id} value={purpose.id}>
              {purpose.name}
            </option>
          ))}
        </select>
        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4" />
      </div>
    </div>
  );
};

export default LocationSelect;
