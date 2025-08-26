import React, { useState } from 'react';

function PaymentComplete({ setPageState, amount, price}) {



  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 text-center max-w-sm mx-auto w-full">
        
        <h1 className="text-3xl font-bold text-black">
          결제 완료!
        </h1>
        
        <p className="mt-2 text-base text-gray-500">
          총 {amount}개의 상품을 구매하셨습니다.
        </p>
        
        <div className="mt-16 text-base font-bold text-gray-500">
          총 결제 금액
        </div>
        
        <div className="mt-1 mb-3 text-4xl font-bold text-black">
          {price}원
        </div>

        <button 
          className="w-4/5 bg-yellow-300 text-black text-lg font-bold py-3 rounded-full hover:bg-green-100 transition-colors"
          onClick={()=>setPageState(0)}
          >
            상품 목록 보기
        </button>
      </div>
    </div>
  );
}

export default PaymentComplete;
