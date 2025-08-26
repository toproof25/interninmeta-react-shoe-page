import logo from './images/shoes.svg';

function CartListItem({ productId, image, brand, price, quantity, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="w-full h-[150px] flex items-center border-b border-gray-200 py-4">
      
      <div className="w-1/2 h-full flex justify-center items-center">
        <img src={logo/*image*/} alt={brand} className="max-h-full max-w-full object-contain" />
      </div>

      <div className="w-1/2 h-full flex flex-col justify-between p-4">
        
        <div>
          <h3 className="font-bold text-lg">{brand}</h3>
        </div>

        <div>
          <p className="text-gray-800 font-semibold">{price.toLocaleString()}원</p>
        </div>

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