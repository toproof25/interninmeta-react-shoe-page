import CartListItem from './CartListItem';

function CartList({cart, productData, totalCartItems, increaseQuantity, decreaseQuantity, pay, handleFinalCart}) {
  const cartItemIds = Object.keys(cart);

  // 모든 상품의 총금액 계산
  const totalProductPrice = cartItemIds.reduce((sum, id) => {
    const productInfo = productData[id];
    const quantity = cart[id];
  
    if (productInfo) {
      return sum + (productInfo.price * quantity);
    }
    return sum;
  }, 0);

  // 배송비 추가
  const shippingFee = totalProductPrice < 100000 ? 3000 : 0;

  // 상품 총금액 + 배송비
  const finalAmount = totalProductPrice + shippingFee;

  return (
    <div>
      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        <h1 className='text-3xl mb-2 font-bold' >장바구니</h1>
        <p>현재 {totalCartItems}개의 상품이 있습니다</p>
      </section>

      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        <div>
          {cartItemIds.map(id => {
            const productInfo = productData[id];
            const quantity = cart[id];

            if (!productInfo) return null;

            return (
              <CartListItem
                key={id}
                productId={id}
                image={productInfo.image}
                brand={productInfo.brand}
                price={productInfo.price}
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            );
          })}
        </div>
      </section>

      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">상품 금액</p>
          <p className="font-semibold">{totalProductPrice.toLocaleString()}원</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">배송비</p>
          <p className="font-semibold">{shippingFee.toLocaleString()}원</p>
        </div>
      </section>

      <hr className="max-w-3xl mx-auto border-t-2 border-gray-800 my-2" />

      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">총 금액</p>
          <p className="text-xl font-bold text-red-500">{finalAmount.toLocaleString()}원</p>
        </div>
      </section>

      <section className='max-w-3xl mx-auto py-5 px-3 text-center'>
        <button 
          className="w-4/5 bg-gray-800 text-white text-lg font-bold py-3 rounded-full hover:bg-black transition-colors"
          onClick={()=>handleFinalCart(cart)}
        >
          결제하기
        </button>
      </section>

    </div>
  );
}

export default CartList;
