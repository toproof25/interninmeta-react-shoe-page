import logo from './images/shoes.svg';


function ProductCard({ productID, addProtuct, handleFinalCart, image, brand, name, information, price, setIsPaymentWindow }) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white text-black text-left border">
      <div>
        <img className="w-full" src={logo} alt={name} />
      </div>

      <div className="p-6">
        <div className="font-bold text-xl mb-2">{brand}</div>
        <p className="text-gray-700 text-base mb-4">
          {information}
        </p>

        <p className="font-semibold text-xl mb-4">
          {price.toLocaleString()}원
        </p>

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
