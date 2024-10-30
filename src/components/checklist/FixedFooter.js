// FixedFooter.js
import React from 'react';
import { CreditCard } from 'lucide-react';

const FixedFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-3 sm:p-4 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <a
          href="#"  // 適切なリンク先に変更してください
          className="block w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
            text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-200
            shadow-sm hover:shadow-md"
        >
          <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <div className="text-left">
            <div className="font-bold text-sm sm:text-base">海外旅行保険付帯のエポスカード</div>
            <div className="text-xs sm:text-sm opacity-90">年会費永年無料！今すぐ申し込む</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FixedFooter;
