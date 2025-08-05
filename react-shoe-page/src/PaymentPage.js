import React, { useState } from 'react';

import AddPaymentPage from './AddPaymentPage';
import MyCardsPage from './MyCardsPage';

function PaymentPage({ onClose }) {

  // 카드 배열 만들고 정리
  const [cardList, setCardList] = useState([
    ["KIM KING MAN", "1234-1234-1234-1234", "12/34", "123", "12"]
  ]);
  

  const [addPayment, setIsAddPayment] = useState(false);  
  const handleAddPayment = (isAdd) => {
    setIsAddPayment(isAdd);
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // 배경을 클릭 시 닫힘
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-full h-3/4 max-w-xl text-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className='relative text-xl mb-10'>
          <div className='absolute left-5 top-0'><button onClick={(e) => handleAddPayment(false)}>
            {addPayment ? '<' : ''}
            </button></div>
          <div className='m-auto w-36 text-center'>보유카드</div>
          <div className='absolute right-5 top-0'><button onClick={onClose}>X</button></div>
        </div>

        <div className='inline'>
          { !addPayment ? <MyCardsPage handleAddPayment={(e) => handleAddPayment(true)} cardList={cardList} /> : <AddPaymentPage setCardList={setCardList} onClick={(e) => handleAddPayment(false)}/> }
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
