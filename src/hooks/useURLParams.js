import { useState, useEffect } from 'react';

export const useURLParams = (countries) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('travel');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (selectedCountry) {
      const country = countries.find(c => c.id === selectedCountry);
      setCities(country?.cities || []);
    } else {
      setCities([]);
    }
  }, [selectedCountry, countries]);

  useEffect(() => {
    if (!cities.includes(selectedCity)) {
      setSelectedCity('');
    }
  }, [cities, selectedCity]);

  return {
    selectedCountry,
    selectedCity,
    selectedPurpose,
    cities,
    setSelectedCountry,
    setSelectedCity,
    setSelectedPurpose
  };
};
