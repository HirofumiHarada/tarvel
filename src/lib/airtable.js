import Airtable from 'airtable';

if (!process.env.AIRTABLE_API_KEY) {
  throw new Error('Missing AIRTABLE_API_KEY environment variable');
}

if (!process.env.AIRTABLE_BASE_ID) {
  throw new Error('Missing AIRTABLE_BASE_ID environment variable');
}

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID);

const TABLE_NAME = 'products';

const formatRecord = (record) => {
  try {
    return {
      id: record.get('id'),
      title: record.get('title'),
      price: record.get('price'),
      rating: record.get('rating'),
      description: record.get('description'),
      image: record.get('image'),
      features: record.get('features'),
      details: record.get('details'),
      buttonText: record.get('buttonText'),
      amazonLink: record.get('amazonLink'),
      rakutenLink: record.get('rakutenLink'),
      yahooLink: record.get('yahooLink'),
      brand: record.get('brand'),
      productImages: record.get('productImages'),
      specifications: record.get('specifications'),
    };
  } catch (error) {
    console.error('Error formatting record:', error, record.fields);
    throw error;
  }
};

export const fetchProducts = async (ids) => {
  console.log('Fetching products with IDs:', ids);

  try {
    const formula = `OR(${ids.map(id => `{id} = '${id}'`).join(',')})`;
    console.log('Using formula:', formula);

    const records = await base(TABLE_NAME)
      .select({
        filterByFormula: formula
      })
      .all();

    console.log('Found records:', records.length);

    if (records.length === 0) {
      console.log('No records found for IDs:', ids);
    }

    const formattedRecords = records.map(formatRecord);
    console.log('Formatted records:', formattedRecords);
    return formattedRecords;

  } catch (error) {
    console.error('Airtable fetch error:', error);
    throw error;
  }
};
