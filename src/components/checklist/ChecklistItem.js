// src/components/checklist/ChecklistItem.js
import React from 'react';
import { Check, Info } from 'lucide-react';
import ProductScroll from './ProductScroll';
import { useAirtableProducts } from '@/hooks/useAirtableProducts';
import { countrySpecificInfo } from '@/data/checklistData';

const ChecklistItem = ({ item, checked, onToggle, selectedCountry }) => {
  const { products, loading } = useAirtableProducts(item.productId ? [item.productId] : []);

  const renderCountrySpecificInfo = () => {
    if (!item.requiresCountrySpecific || !selectedCountry || !countrySpecificInfo[selectedCountry]) {
      return null;
    }

    let infoText = '';
    if (item.name.includes('パスポート')) {
      infoText = countrySpecificInfo[selectedCountry].passport;
    } else if (item.name.includes('ビザ')) {
      infoText = countrySpecificInfo[selectedCountry].visa;
    } else if (item.name.includes('変換プラグ') || item.name.includes('変圧器')) {
      infoText = countrySpecificInfo[selectedCountry].voltage;
    }

    if (!infoText) return null;

    return (
      <div className="mt-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <div className="flex items-start gap-2">
            <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">{infoText}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderAdditionalInfo = () => {
    if (!item.additionalInfo) return null;

    return (
      <div className="mt-6">
        <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-white rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-l-4 border-blue-500">
            {item.additionalInfo.title && (
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-4 h-4 text-blue-600" />
                <h4 className="font-bold text-sm text-blue-900">
                  {item.additionalInfo.title}
                </h4>
              </div>
            )}
            <ul className="space-y-3">
              {item.additionalInfo.content.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={16} className="mt-1 flex-shrink-0 text-blue-600" />
                  <span className="text-blue-800 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            {item.additionalInfo.warning && (
              <div className="mt-4 flex items-start gap-3 p-3 bg-orange-50/80 rounded-lg border border-orange-200">
                <Info size={16} className="mt-1 flex-shrink-0 text-orange-600" />
                <p className="text-orange-800 text-sm leading-relaxed">{item.additionalInfo.warning}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow transition-all duration-200">
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div
            className={`mt-1 w-5 h-5 border-2 rounded-md flex items-center justify-center cursor-pointer transition-all duration-200
              ${checked
                ? 'bg-blue-500 border-blue-500'
                : 'border-gray-300 group-hover:border-blue-400'}`}
            onClick={onToggle}
          >
            {checked && <Check size={12} className="text-white" />}
          </div>

          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-2">
              <h3 className={`font-medium text-lg ${checked ? 'line-through text-gray-400' : 'text-gray-800'
                }`}>
                {item.name}
              </h3>
              {item.essential && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                  必須
                </span>
              )}
            </div>
            {item.description && (
              <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            )}
            {renderCountrySpecificInfo()}
            {item.additionalInfo && renderAdditionalInfo()}
          </div>
        </div>
      </div>

      {item.productId && !loading && products[item.productId] && (
        <div className="border-t border-gray-100">
          <ProductScroll products={[products[item.productId]]} />
        </div>
      )}
    </div>
  );
};

export default ChecklistItem;
