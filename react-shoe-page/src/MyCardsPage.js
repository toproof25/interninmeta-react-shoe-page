import plus_icon from './images/plus-icon.svg';

function MyCardsPage({onClose, handleAddPayment, cardList}) {
  return (
    <div className='w-full flex flex-col h-full overflow-hidden text-center'>

      <div className='flex-1 overflow-y-auto pb-20'>

        <div>
          {
            cardList.map((card, idx) => {
              const [name, number, expiration] = card;
              return (
                <a 
                  className="cursor-pointer"
                  onClick={ () => console.log(name, number, expiration)}
                >
                  <div
                    key={idx}
                    className='w-64 h-36 mx-auto my-5 rounded-md bg-black shadow-md relative'
                  >
                    {/* 카드 칩 모양 (데코용) */}
                    <div className='px-5 py-3.5 bg-yellow-300 rounded-md absolute left-4 bottom-16'></div>
                    
                    {/* 카드 번호 */}
                    <div className='text-white text-center w-full absolute bottom-9'>{number}</div>
                    
                    {/* 카드 소유자 이름 */}
                    <div className='text-white text-left w-32 absolute left-4 bottom-2'>{name}</div>
                
                    {/* 유효기간 */}
                    <div className='text-white text-right w-16 absolute right-4 bottom-2'>{expiration}</div>
                  
                  </div>
                </a>
              );
          })}

          <div>새로운 카드를 등록해주세요.</div>
          <button className="bg-gray-200 text-gray-800 font-bold py-20 px-40 rounded-xl"
          onClick={handleAddPayment}
          >
            <img className="w-6" src={plus_icon} alt="이미지" />
          </button>

        </div>
      </div>

    </div>
  );
}

export default MyCardsPage;
