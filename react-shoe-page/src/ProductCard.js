import logo from './images/shoes.svg';

// props로 image, brand, name, information, price를 추가로 받습니다.
function ProductCard({ productID, addProtuct, handleFinalCart, image, brand, name, information, price, setIsPaymentWindow }) {
  return (
    // 전체 카드: 최대 너비, 그림자, 둥근 모서리, 배경색, 내용 넘침 방지
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white text-black text-left border">
      <div>
        {/* props로 받은 이미지 경로와 상품 이름을 alt 텍스트로 사용합니다. */}
        <img className="w-full" src={logo/*image*/} alt={name} />
      </div>

      <div className="p-6">
        {/* props로 받은 브랜드명을 표시합니다. */}
        <div className="font-bold text-xl mb-2">{brand}</div>
        
        {/* props로 받은 상품 설명을 표시합니다. */}
        <p className="text-gray-700 text-base mb-4">
          {information}
        </p>

        {/* props로 받은 가격을 표시합니다. toLocaleString()으로 콤마를 추가합니다. */}
        <p className="font-semibold text-xl mb-4">
          {price.toLocaleString()}원
        </p>

        {/* 버튼 기능은 기존과 동일하게 props로 받은 함수를 연결합니다. */}
        <button 
          className="bg-black text-white font-bold py-1.5 px-4 rounded-3xl text-sm mr-2" 
          onClick={() => addProtuct(productID)}
        >
          담기
        </button>

        <button 
          className="bg-yellow-300 text-gray-800 font-bold py-1.5 px-4 rounded-3xl text-sm" 
          onClick={handleFinalCart}
        >
          구매
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
