import logo from './images/shoes.svg';

function Top({cartItems = 0, handleIsCartListPage, isCartListPage}) {
  return (

    <div className="flex items-center justify-between bg-black w-full h-14 px-4">
      {isCartListPage ? (
        <button 
          onClick={() => handleIsCartListPage(false)} 
          className="text-white text-2xl font-bold"
        >
          &lt;
        </button>
      ) : (
        <div></div>
      )}

      <button className="relative" onClick={() => handleIsCartListPage(true)}>
        <img className='w-12' src={logo} alt='이미지없음' />
        <div className='absolute -bottom-3 right-[-4px] flex items-center justify-center w-6 h-6 rounded-full bg-white text-black text-sm font-bold'>
          {cartItems}
        </div>
      </button>
      
    </div>
  );
}

export default Top;