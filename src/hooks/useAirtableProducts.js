import { useState, useEffect, useCallback } from 'react';

export const useAirtableProducts = (productIds) => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // productIdsを文字列に変換して比較用のキーを作成
  const productIdsKey = Array.isArray(productIds) ? productIds.sort().join(',') : '';

  const fetchProducts = useCallback(async () => {
    if (!productIds?.length) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `/api/products?ids=${productIds.join(',')}`,
        {
          headers: {
            'Accept': 'application/json',
          }
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error ||
          errorData?.details ||
          `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();

      const productsMap = data.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
      }, {});

      setProducts(productsMap);
    } catch (err) {
      console.error('Failed to fetch products:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [productIdsKey]); // productIdsKeyを依存配列に使用

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error
  };
};
