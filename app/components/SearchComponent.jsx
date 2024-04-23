import React, { useState } from 'react';
import {SearchForm, SearchResults, NoSearchResults} from '~/components/Search';

function SearchComponent() {
  /*const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    const graphqlEndpoint = 'bhuvaneshwari-arts.myshopify.com';
    const apiKey = '785fa7133fb078800d0cb2966d616f72';

    try {
      const response = await fetch(graphqlEndpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': apiKey,
        },
        body: JSON.stringify({
          query: `
            query SearchProducts($query: String!) {
              products(query: $query, first: 10) {
                edges {
                  node {
                    id
                    title
                    handle
                    description
                    priceRange {
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            query: searchQuery,
          },
        }),
      });

      const result = await response.json();
      setSearchResults(result.data.products.edges);
    } catch (error) {
      console.error('Error searching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for products..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((product) => (
            <li key={product.node.id}>
              <a href={`/products/${product.node.handle}`}>
                {product.node.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );*/
  var DefaultVaSe='Found';

  return(
    <SearchForm searchTerm={DefaultVaSe}></SearchForm>
  )
}

export default SearchComponent;
