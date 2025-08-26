import plus_icon from './images/plus-icon.svg';

function MyCardsPage({onClose, handleAddPayment, cardList, checkPayment, pay}) {
  return (
    <div className='w-full flex flex-col h-full overflow-hidden text-center'>

      <div className='flex-1 overflow-y-auto pb-20'>

        <div>
          <div>
            {
              cardList.map((card, idx) => {
                const [name, number, expiration] = card;
                return (
                  <div 
                    className="cursor-pointer"
                  >
                    <div
                      key={idx}
                      className='w-64 h-36 mx-auto my-5 rounded-md bg-black shadow-md relative'
                    >
                      <div className='px-5 py-3.5 bg-yellow-300 rounded-md absolute left-4 bottom-16'></div>
                      <div className='text-white text-center w-full absolute bottom-9'>{number}</div>
                      <div className='text-white text-left w-32 absolute left-4 bottom-2'>{name}</div>
                      <div className='text-white text-right w-16 absolute right-4 bottom-2'>{expiration}</div>
                    </div>

                    <button 
                      className="w-3/5 bg-yellow-300 text-black text-lg font-bold py-3 rounded-full hover:bg-green-100 transition-colors"
                      onClick={() => pay(card)}
                    >
                      이 카드로 결제하기
                    </button>

                  </div>
                );
            })}
            <div>


            </div>
          </div>

          <div className="p-50">새로운 카드를 등록해주세요.</div>
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
