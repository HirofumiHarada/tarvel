// src/components/checklist/TravelChecklist.js
import React, { useState } from 'react';
import LocationSelect from './LocationSelect';
import CategoryList from './CategoryList';
import FixedFooter from './FixedFooter';
import Footer from './Footer';
import ExitPopup from './ExitPopup';
import { countries, purposes, categories } from '@/data/checklistData';
import { useURLParams } from '@/hooks/useURLParams';
import { CreditCard } from 'lucide-react';

const TravelChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const {
    selectedCountry,
    selectedCity,
    selectedPurpose,
    cities,
    setSelectedCountry,
    setSelectedCity,
    setSelectedPurpose
  } = useURLParams(countries);

  const getTitle = () => {
    const purposeText = purposes.find(p => p.id === selectedPurpose)?.name || '旅行';
    if (selectedCountry && selectedCity) {
      const countryName = countries.find(c => c.id === selectedCountry)?.name;
      return `${countryName}(${selectedCity})${purposeText}の持ち物リスト`;
    }
    return '海外' + purposeText + 'の持ち物リスト';
  };

  const toggleItem = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ヘッダー部分 */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* メインタイトル */}
          <div className="text-center pt-12 pb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {getTitle()}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/90 max-w-3xl mx-auto font-medium leading-relaxed">
              {selectedPurpose === 'business' ? '出張に' :
                selectedPurpose === 'study' ? '留学に' : '旅行に'}
              必要なアイテムを漏れなくチェック。
              <span className="hidden sm:inline">おすすめ商品も合わせてご紹介します。</span>
            </p>
          </div>

          {/* フィルターメニュー */}
          <div className="bg-white/10 backdrop-blur-sm rounded-t-2xl border-t border-white/20 shadow-lg">
            <div className="py-6">
              <LocationSelect
                selectedCountry={selectedCountry}
                selectedCity={selectedCity}
                selectedPurpose={selectedPurpose}
                cities={cities}
                setSelectedCountry={setSelectedCountry}
                setSelectedCity={setSelectedCity}
                setSelectedPurpose={setSelectedPurpose}
                countries={countries}
                purposes={purposes}
              />
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <CategoryList
            categories={categories}
            selectedPurpose={selectedPurpose}
            selectedCountry={selectedCountry}
            checkedItems={checkedItems}
            toggleItem={toggleItem}
          />
        </div>
      </main>

      {/* フッター */}
      <Footer />

      {/* 固定フッター */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4 z-50">
        <div className="max-w-4xl mx-auto">
          <a href="/apply" className="block w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-200 shadow-sm hover:shadow-md">
            <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left">
              <div className="font-bold text-sm sm:text-base">海外旅行保険付帯のエポスカード</div>
              <div className="text-xs sm:text-sm opacity-90">年会費永年無料！今すぐ申し込む</div>
            </div>
          </a>
        </div>
      </div>

      {/* 離脱ポップアップ */}
      <ExitPopup />
    </div>
  );
};

export default TravelChecklist;
