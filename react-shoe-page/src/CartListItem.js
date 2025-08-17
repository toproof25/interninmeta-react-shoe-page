import logo from './images/shoes.svg';

// CartList로부터 image, brand, price, quantity props를 전달받습니다.
function CartListItem({ productId, image, brand, price, quantity, increaseQuantity, decreaseQuantity }) {
  return (
    // 1. 전체를 감싸는 div: 너비 전체, 높이 150px, flexbox 레이아웃, 수직 중앙 정렬, 하단 경계선
    <div className="w-full h-[150px] flex items-center border-b border-gray-200 py-4">
      
      {/* 3. 왼쪽 영역: 이미지 (전체 너비의 절반) */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <img src={logo/*image*/} alt={brand} className="max-h-full max-w-full object-contain" />
      </div>

      {/* 3. 오른쪽 영역: 상품 정보 (전체 너비의 절반) */}
      <div className="w-1/2 h-full flex flex-col justify-between p-4">
        
        {/* 4. 브랜드 제목 (상단) */}
        <div>
          <h3 className="font-bold text-lg">{brand}</h3>
        </div>

        {/* 4. 가격 (중단) */}
        <div>
          <p className="text-gray-800 font-semibold">{price.toLocaleString()}원</p>
        </div>

        {/* 4. 수량 조절 버튼 (하단) */}
        <div className="flex items-center">
          <button className="border rounded-md w-8 h-8 flex items-center justify-center text-lg font-bold" onClick={() => decreaseQuantity(productId)}>-</button>
          <span className="mx-4 font-semibold">{quantity}</span>
          <button className="border rounded-md w-8 h-8 flex items-center justify-center text-lg font-bold" onClick={() => increaseQuantity(productId)}>+</button>
        </div>

      </div>
    </div>
  );
}

export default CartListItem;