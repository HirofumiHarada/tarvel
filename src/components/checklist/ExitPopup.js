// src/components/checklist/ExitPopup.js
import React, { useEffect, useState } from 'react';
import { X, CreditCard, CheckCircle } from 'lucide-react';

const ExitPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // ポップアップ表示済みかローカルストレージでチェック
    const hasShownPopup = localStorage.getItem('hasShownExitPopup');
    if (hasShownPopup) {
      setHasShown(true);
    }

    const handleMouseLeave = (e) => {
      // マウスが上部に移動した場合のみ表示
      if (!hasShownPopup && e.clientY <= 0) {
        setIsVisible(true);
        localStorage.setItem('hasShownExitPopup', 'true');
        setHasShown(true);
      }
    };

    // スマートフォンでの離脱意図の検知
    const handleVisibilityChange = () => {
      if (!hasShownPopup && document.hidden) {
        setIsVisible(true);
        localStorage.setItem('hasShownExitPopup', 'true');
        setHasShown(true);
      }
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl" role="dialog" aria-modal="true">
        {/* ヘッダー */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-white">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              aria-label="閉じる"
            >
              <X size={24} />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <CreditCard size={28} />
              <h2 className="font-bold text-xl">待ってください！</h2>
            </div>
            <p className="text-white/90">
              海外旅行保険付帯カードをお持ちでない方へ
            </p>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <span className="font-bold">年会費永年無料</span>で海外旅行保険が自動付帯
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                最高<span className="font-bold">2,000万円</span>の海外旅行保険を付帯
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <span className="font-bold">24時間365日</span>日本語対応のサポートデスク
              </p>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="space-y-4">
            <a
              href="/apply"
              className="block w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
                text-white py-4 px-6 rounded-lg font-bold text-center shadow-sm hover:shadow-md
                transition-all duration-200"
              onClick={() => setIsVisible(false)}
            >
              エポスカードを申し込む
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="block w-full text-gray-500 hover:text-gray-700 text-sm text-center py-2 transition-colors"
            >
              あとで見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
