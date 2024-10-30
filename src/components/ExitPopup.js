import React, { useEffect, useState } from 'react';
import { X, CreditCard, CheckCircle } from 'lucide-react';

const ExitPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());

  useEffect(() => {
    // 初期化時にローカルストレージをチェック
    const hasShownPopup = localStorage.getItem('hasShownExitPopup');
    const lastShownTime = parseInt(localStorage.getItem('lastPopupTime') || '0');
    const currentTime = Date.now();

    // 24時間以上経過していれば、ポップアップ表示フラグをリセット
    if (currentTime - lastShownTime > 24 * 60 * 60 * 1000) {
      localStorage.removeItem('hasShownExitPopup');
      localStorage.removeItem('lastPopupTime');
    } else if (hasShownPopup) {
      setHasShown(true);
    }

    // マウス移動の検知
    const handleMouseMove = () => {
      setLastActivity(Date.now());
    };

    // スクロールの検知
    const handleScroll = () => {
      setLastActivity(Date.now());
    };

    // マウスが上部に移動した場合の処理
    const handleMouseLeave = (e) => {
      if (!hasShown && e.clientY <= 0) {
        showPopup();
      }
    };

    // ページの非表示検知（モバイル用）
    const handleVisibilityChange = () => {
      if (!hasShown && document.hidden) {
        showPopup();
      }
    };

    // ユーザーの非アクティブ状態の検知
    const checkInactivity = () => {
      const inactiveTime = Date.now() - lastActivity;
      // 2分間の非アクティブでポップアップ表示
      if (!hasShown && inactiveTime > 2 * 60 * 1000) {
        showPopup();
      }
    };

    // 一定時間経過後の表示（ページ滞在時間ベース）
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        showPopup();
      }
    }, 5 * 60 * 1000); // 5分後

    const inactivityInterval = setInterval(checkInactivity, 30000); // 30秒ごとにチェック

    // イベントリスナーの設定
    if (typeof window !== 'undefined') {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('scroll', handleScroll);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('visibilitychange', handleVisibilityChange);
      document.addEventListener('touchstart', handleMouseMove);
      document.addEventListener('touchmove', handleMouseMove);
    }

    // クリーンアップ
    return () => {
      clearTimeout(timeoutId);
      clearInterval(inactivityInterval);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchstart', handleMouseMove);
      document.removeEventListener('touchmove', handleMouseMove);
    };
  }, [hasShown, lastActivity]);

  const showPopup = () => {
    setIsVisible(true);
    setHasShown(true);
    localStorage.setItem('hasShownExitPopup', 'true');
    localStorage.setItem('lastPopupTime', Date.now().toString());
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[100] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
        {/* ヘッダー */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-white">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              aria-label="閉じる"
            >
              <X size={24} />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <CreditCard size={28} />
              <h2 id="popup-title" className="font-bold text-xl">
                待ってください！
              </h2>
            </div>
            <p className="text-white/90">
              海外旅行保険付帯カードをお持ちでない方へ
            </p>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-6 space-y-6">
          {/* 特徴リスト */}
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
              className="block w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 px-6 rounded-lg font-bold text-center shadow-sm hover:shadow-md transition-all duration-200"
              onClick={handleClose}
            >
              エポスカードを申し込む
            </a>
            <button
              onClick={handleClose}
              className="block w-full text-gray-500 hover:text-gray-700 text-sm text-center py-2 transition-colors duration-200"
              aria-label="ポップアップを閉じる"
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
