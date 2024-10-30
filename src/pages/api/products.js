import { fetchProducts } from '@/lib/airtable';

export default async function handler(req, res) {
  console.log('API Route - Starting request handling');  // デバッグログ

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { ids } = req.query;
    console.log('Requested product IDs:', ids);  // デバッグログ

    if (!ids) {
      return res.status(400).json({ error: 'Product IDs are required' });
    }

    // 環境変数の確認
    if (!process.env.AIRTABLE_API_KEY) {
      console.error('Missing AIRTABLE_API_KEY');
      return res.status(500).json({ error: 'Server configuration error: AIRTABLE_API_KEY is missing' });
    }

    if (!process.env.AIRTABLE_BASE_ID) {
      console.error('Missing AIRTABLE_BASE_ID');
      return res.status(500).json({ error: 'Server configuration error: AIRTABLE_BASE_ID is missing' });
    }

    console.log('Environment variables checked');  // デバッグログ
    console.log('AIRTABLE_BASE_ID:', process.env.AIRTABLE_BASE_ID);  // デバッグログ（注意: 本番環境では削除）

    const productIds = ids.split(',').map(id => id.trim());
    console.log('Processing IDs:', productIds);  // デバッグログ

    try {
      const products = await fetchProducts(productIds);
      console.log('Products fetched successfully:', products);  // デバッグログ
      return res.status(200).json(products);
    } catch (fetchError) {
      console.error('Airtable fetch error:', fetchError);
      return res.status(500).json({
        error: 'Failed to fetch from Airtable',
        details: fetchError.message,
        stack: fetchError.stack
      });
    }
  } catch (error) {
    console.error('API handler error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message,
      stack: error.stack
    });
  }
}
