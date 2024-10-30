import React from 'react';
import { ShoppingCart, Star, Check } from 'lucide-react';

const RatingStars = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`fill-current ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
      />
    ))}
    <span className="ml-1 text-sm font-medium text-gray-500">
      {typeof rating === 'number' ? rating.toFixed(1) : '0.0'}
    </span>
  </div>
);

const ProductScroll = ({ products = [] }) => {
  if (!products || products.length === 0) return null;
  const product = products[0];

  return (
    <div className="pt-6">
      <div className="px-6">
        <div className="bg-gradient-to-br from-gray-50 via-gray-50 to-white rounded-xl border border-gray-100">
          <div className="p-6 space-y-6">
            {/* 商品のメイン情報 */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* 画像部分 */}
              <div className="w-full sm:w-56 md:w-64 flex-shrink-0">
                <div className="aspect-[4/3] relative bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <img
                    src={product.image || "/api/placeholder/400/320"}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* 商品詳細部分 */}
              <div className="flex-grow space-y-4">
                <div>
                  {product.brand && (
                    <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                  )}
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h4>
                  <RatingStars rating={product.rating} />
                </div>

                {product.price === 0 ? (
                  <p className="text-2xl font-bold text-green-600">年会費無料</p>
                ) : (
                  <p className="text-2xl font-bold text-gray-900">¥{product.price.toLocaleString()}</p>
                )}

                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

                {product.features && (
                  <div className="flex flex-wrap gap-2">
                    {product.features.split(',').map((feature, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-50/80 text-blue-700">
                        <Check size={12} className="text-blue-600 flex-shrink-0" />
                        {feature.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 購入ボタン部分 */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {product.amazonLink && (
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-br from-[#ff9900] to-[#ff8800] text-white py-3 px-6 rounded-lg font-bold shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 hover:brightness-105"
                >
                  <ShoppingCart size={18} className="flex-shrink-0" />
                  <span>{product.buttonText || 'Amazonで購入'}</span>
                </a>
              )}
              {product.rakutenLink && (
                <a
                  href={product.rakutenLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-br from-[#bf0000] to-[#a00000] text-white py-3 px-6 rounded-lg font-bold shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 hover:brightness-105"
                >
                  <ShoppingCart size={18} className="flex-shrink-0" />
                  <span>楽天市場で見る</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScroll;
