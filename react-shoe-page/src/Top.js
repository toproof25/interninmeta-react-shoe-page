import logo from './images/shoes.svg';

function Top({cartItems = 0}) {
  return (
    /*
      items-center : 자식을 세로 가운데 정렬
      justify-end  : 자식을 가로 우측 정렬
      bg-black     : 배경 검정
      w-full       : div 가로 사이즈 100% 
      h-14         : div 세로 사이즈 14
    */
    <div className="flex items-center justify-end bg-black w-full h-14">
      <button className="relative">

        { /* w-12 : 이미지 사이즈, mr-4 : 마진 우측 4 */ }
        <img className='w-12 mr-4' src={logo} alt='이미지없음' />

        
        { /* w-12 : 이미지 사이즈, mr-4 : 마진 우측 4 */ }
        <div className='absolute -bottom-3 right-1 flex items-center justify-center w-6 h-6 rounded-full bg-white text-black text-sm font-bold'>
          {cartItems}
        </div>
      </button>
    </div>
  );
}

export default Top;
