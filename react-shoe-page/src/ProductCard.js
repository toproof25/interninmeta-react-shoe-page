import logo from './images/shoes.svg';

function ProductCard({addProtuct}) {
  return (
    // 전체 카드: 최대 너비, 그림자, 둥근 모서리, 배경색, 내용 넘침 방지
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white text-black text-left">
      <div>
        <img className="w-full bg-red-500" src={logo} alt="이미지" />
      </div>

      <div className="p-6 bg-green-500">
        <div className="font-bold text-xl mb-2">브랜드A</div>
        <p className="text-gray-700 text-base mb-4">
          편안하고 착용감이 좋은 신발
        </p>
        <p className="font-semibold text-xl mb-4">
          35,000원
        </p>
        <button className="bg-gray-300 text-gray-800 font-bold py-1.5 px-4 rounded-3xl text-sm" 
          onClick={addProtuct}
        >
          담김!
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
