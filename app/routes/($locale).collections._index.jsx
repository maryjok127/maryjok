import {useLoaderData, Link} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import {Pagination, getPaginationVariables, Image} from '@shopify/hydrogen';

export async function loader({context, request}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 100,
  });

  const {collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: paginationVariables,
  });

  return json({collections});
}

export default function Collections() {
  const {collections} = useLoaderData();

  return (
    <div className="collections">
      <h1 className='mst-color'>Collections</h1>
      <Pagination connection={collections}>
        {({nodes, isLoading, PreviousLink, NextLink}) => (
          <div>
            <PreviousLink>
              {isLoading ? 'Loading...' : <div className='flex justify-center mt-8'>↑ Load previous</div>}
            </PreviousLink>
            <CollectionsGrid collections={nodes} />
            <NextLink>
              {isLoading ? 'Loading...' : <div className='flex justify-center mt-8'>Load more ↓</div>}
            </NextLink>
          </div>
        )}
      </Pagination>
    </div>
  );
}

function CollectionsGrid({collections}) {
  return (
    <div className="grid grid-cols-4 gap-4 px-5">
      {collections.map((collection, index) => (  
          <CollectionItem
            key={collection.id}
            collection={collection}
            index={index}
          />
      ))}
    </div>
  );
}

function CollectionItem({collection, index}) {
  return (
    <Link
      className="collection-item mst-card-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      key={collection.id}
      to={`/collections/${collection.handle}`}
      prefetch="intent"
    >
      {collection.image ? 
        <Image
          alt={collection.image.altText || collection.title}
          aspectRatio="1/1"
          data={collection.image ? collection.image : ""}
          loading={index < 3 ? 'eager' : undefined}
        />
      :
      <img src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129" /> 
      }
      <h5>{collection.title}</h5>
    </Link>
  );
}

const COLLECTIONS_QUERY = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
