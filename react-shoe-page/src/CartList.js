import CartListItem from './CartListItem';

function CartList({cart, productData, totalCartItems, increaseQuantity, decreaseQuantity, pay, handleFinalCart}) {
  const cartItemIds = Object.keys(cart);

  // 1. cart에 있는 모든 상품의 총금액을 계산합니다.
  const totalProductPrice = cartItemIds.reduce((sum, id) => {
    const productInfo = productData[id];
    const quantity = cart[id];
    
    // 상품 정보가 있을 경우에만 계산 (오류 방지)
    if (productInfo) {
      return sum + (productInfo.price * quantity);
    }
    return sum;
  }, 0);

  // 장바구니에 상품이 있을 경우에만 배송비를 추가합니다.
  const shippingFee = totalProductPrice < 100000 ? 3000 : 0;

  // 3. 최종 결제 금액 (상품 총금액 + 배송비)
  const finalAmount = totalProductPrice + shippingFee;

  return (
    <div>
      { /* 메인 상단 신발 상품 목록 제목과 n개의 상품 표시 메시지 
        max-w-4xl mx-auto py-5 px-3 text-left => 최대 가로 크기, 마진 auto, 패딩 xy, 텍스트 left
      */ }
      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        <h1 className='text-3xl mb-2 font-bold' >장바구니</h1>
        <p>현재 {totalCartItems}개의 상품이 있습니다</p>
      </section>

      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        <div>
          {/* 3. 각 상품 ID에 대해 반복하여 <CartListItem>을 생성합니다. */}
          {cartItemIds.map(id => {
            // 2. id를 이용해 productData에서 상품 상세 정보를 가져옵니다.
            const productInfo = productData[id];
            // 2. id를 이용해 cart에서 해당 상품의 수량을 가져옵니다.
            const quantity = cart[id];

            // productInfo가 존재할 때만 렌더링 (데이터가 없는 경우의 오류 방지)
            if (!productInfo) return null;

            return (
              <CartListItem
                // 리액트가 목록의 각 항목을 구별하기 위한 고유 key
                key={id}
                
                // 2. 추출한 데이터들을 props로 전달
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

      {/* 2. 상품 금액과 배송비를 표시하는 새로운 섹션 */}
      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        {/* 2-1. 상품 금액 */}
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">상품 금액</p>
          <p className="font-semibold">{totalProductPrice.toLocaleString()}원</p>
        </div>

        {/* 2-2. 배송비 */}
        <div className="flex justify-between">
          <p className="text-gray-600">배송비</p>
          <p className="font-semibold">{shippingFee.toLocaleString()}원</p>
        </div>
      </section>

      {/* 2-3. 구분선 */}
      <hr className="max-w-3xl mx-auto border-t-2 border-gray-800 my-2" />

      {/* 3. 최종 결제 금액을 표시하는 섹션 */}
      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        {/* 3-1. 총 금액 */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">총 금액</p>
          <p className="text-xl font-bold text-red-500">{finalAmount.toLocaleString()}원</p>
        </div>
      </section>

      {/* ✨ 4. 결제하기 버튼 섹션 (추가된 부분) ✨ */}
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
