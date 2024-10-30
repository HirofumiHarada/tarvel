// src/components/checklist/CategoryList.js
import React from 'react';
import ChecklistItem from './ChecklistItem';

const CategoryList = ({ categories, selectedPurpose, selectedCountry, checkedItems, toggleItem }) => {
  return (
    <div className="space-y-16">
      {categories
        .filter(category => category.forPurpose.includes(selectedPurpose))
        .map(({ name, icon, items }) => (
          <div key={name} className="space-y-6">
            {/* カテゴリーヘッダー */}
            <div className="flex items-center gap-3 px-1">
              <div className="p-2.5 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm border border-gray-100">
                {React.cloneElement(icon, {
                  className: 'w-6 h-6 text-blue-600'
                })}
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {name}
                </h2>
                <p className="text-sm text-gray-500 hidden sm:block">
                  {items.filter(item => !item.forPurpose || item.forPurpose.includes(selectedPurpose)).length}個のアイテム
                </p>
              </div>
            </div>

            {/* アイテムリスト */}
            <div className="grid gap-4">
              {items
                .filter(item => !item.forPurpose || item.forPurpose.includes(selectedPurpose))
                .map(item => (
                  <ChecklistItem
                    key={item.name}
                    item={item}
                    checked={checkedItems[item.name]}
                    onToggle={() => toggleItem(item.name)}
                    selectedCountry={selectedCountry}
                  />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryList;
