import {CartForm, Image, Money} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {useVariantUrl} from '~/utils';

export function CartMain({layout, cart}) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  //console.log("layout ::",linesCount)
  const withDiscount =
    cart &&
    Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;

  return (
    <div className={className}>
      <CartEmpty hidden={linesCount} layout={layout} />
      <CartDetails cart={cart} layout={layout} />
    </div>
  );
}

function CartDetails({layout, cart}) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  return (
    <div className="cart-details">
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}

function CartLines({lines, layout}) {
  if (!lines) return null;

  return (
    <div aria-labelledby="cart-lines">
      <ul>
        {lines.nodes.map((line) => (
          <CartLineItem key={line.id} line={line} layout={layout} />
        ))}
      </ul>
    </div>
  );
}

function CartLineItem({layout, line}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  //console.log('sahil data', {selectedOptions});

  return (
    <li key={id} className="cart-line">
      {image && (
        <Image
          alt={title}
          aspectRatio="1/1"
          data={image}
          height={100}
          loading="lazy"
          width={100}
        />
      )}

      <div className="w-[100%]">
        <Link
          prefetch="intent"
          to={lineItemUrl}
          onClick={() => {
            if (layout === 'aside') {
              // close the drawer
              window.location.href = lineItemUrl;
            }
          }}
        >
          <p>
            <strong>
              {product.title
                .toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </strong>
          </p>
        </Link>
        <CartLinePrice line={line} as="span" />
        <ul className="">
          {selectedOptions.map((option) => (
            <li key={option.name} className="py-2">
              <div className="flex font-semibold text-md">
                { option.value !=="Default Title" &&
                <>
                {/* <span className=" text-gray-900">{option.name}:</span> */}
                
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full leading-4 text-blue-800"
                    dangerouslySetInnerHTML={{__html: option.value}}
                  />
              
                </>
                }
              </div>
            </li>
          ))}
        </ul>
        <CartLineQuantity line={line} />
      </div>
    </li>
  );
}

function CartCheckoutActions({checkoutUrl}) {
  if (!checkoutUrl) return null;

  return (
    <div className="mt-2">
      <a href={checkoutUrl} target="_self">
        <p className="checkout bg-black text-white text-center p-[10px] rounded">
          Continue to Checkout &rarr;
        </p>
      </a>
      <br />
    </div>
  );
}

export function CartSummary({cost, layout, children = null}) {
  const className =
    layout === 'page' ? 'cart-summary-page px-2' : 'cart-summary-aside';

  return (
    <div aria-labelledby="cart-summary" className={className}>
      {/* <h4 className="text-md font-semibold">Totals</h4> */}
      <dl className="cart-subtotal flex">
        <dt>Subtotal : &nbsp;</dt>
        <dd>
          {cost?.subtotalAmount?.amount ? (
            <Money data={cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </dd>
      </dl>
      {children}
    </div>
  );
}

function CartLineRemoveButton({lineIds}) {
  return (
    <div className='flex justify-end'>
    <CartForm
      className="w-full"
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <button type="submit text-[#fa4a0b] " className="flex justify-end">
        <img src="/delete.png" alt="delete" width={22} height={22} />
      </button>
    </CartForm>
    </div>
  );
}

function CartLineQuantity({line}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div className="cart-line-quantiy items-center">
      {/* <span className="font-semibold text-md">Quantity: &nbsp;&nbsp;</span> */}
      <div className="flex w-full items-center">
        <div className="flex w-full">
          <div className="quantity">
            <CartLineUpdateButton
              lines={[{id: lineId, quantity: prevQuantity}]}
            >
              <button
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                name="decrease-quantity"
                value={prevQuantity}
              >
                <span>&#8722; </span>
              </button>
            </CartLineUpdateButton>
            <span>{quantity}</span>
            <CartLineUpdateButton
              lines={[{id: lineId, quantity: nextQuantity}]}
            >
              <button
                aria-label="Increase quantity"
                name="increase-quantity"
                value={nextQuantity}
              >
                <span>&#43;</span>
              </button>
            </CartLineUpdateButton>
           
          </div>
        </div>
        <CartLineRemoveButton lineIds={[lineId]} />
      </div>
    </div>
  );
}

function CartLinePrice({line, priceType = 'regular', ...passthroughProps}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return (
    <div>
      <Money withoutTrailingZeros {...passthroughProps} data={moneyV2} />
    </div>
  );
}

export function CartEmpty({hidden = false, layout = 'aside'}) {
  return (
    <div className="flex justify-center" data-hidden={hidden} hidden={hidden}>
    { !hidden && (
    <div className="flex-col flex justify-center">
      <div className='w-full flex justify-center'>
        <img className="empty_cart_img" alt="empty_cart" src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Cartdekstop.png?v=1709018650" />
      </div>
      <div >
        <p> Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you 
        started!
        </p>
        <br/>
        <button
          className="w-[100%] h-11 bg-black text-white"
          onClick={() => {
            if (layout === 'aside') {
              window.location.href = '/collections';
            }
          }}
        >
        Continue shopping 
        </button>
      </div>
      </div>
    )}
    </div>
  );
}

function CartDiscounts({discountCodes}) {
  const codes =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({code}) => code) || [];

  return (
    <div>
      {/* Have existing discount, display it with a remove option */}
      <dl hidden={!codes.length}>
        <div>
          <dt>Discount(s)</dt>
          <UpdateDiscountForm>
            <div className="cart-discount">
              <code>{codes?.join(', ')}</code>
              &nbsp;
              <button>Remove</button>
            </div>
          </UpdateDiscountForm>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        <div>
          <input type="text" name="discountCode" placeholder="Discount code" />
          &nbsp;
          <button
            type="submit text-[#fa4a0b]"
            className="text-white bg-[#f48580] p-[8px] rounded"
          >
            Apply
          </button>
        </div>
      </UpdateDiscountForm>
    </div>
  );
}

function UpdateDiscountForm({discountCodes, children}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  );
}

function CartLineUpdateButton({children, lines}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {children}
    </CartForm>
  );
}
