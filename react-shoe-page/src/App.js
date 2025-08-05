import React, { useState } from 'react';

import './App.css';
import Top from './Top';
import ProductListPage from './ProductListPage';
import PaymentPage from './PaymentPage';

function App() {
  
  const [payments, setPayments] = useState(0);
  const [protuctAmount, setProtuctAmount] = useState(10);
  const [cartItems, setCartItems] = useState(10);  

  const addProtuct = () => { 
    setCartItems(cartItems + 1); 
  }
  
  const [isPaymentWindow, setIsPaymentWindow] = useState(false);  
  const checkPayment = () => {
    if (payments === 0)
    {
      console.log("결제 수단좀 추가해라");
      setIsPaymentWindow(true);
      setPayments(0);
      setProtuctAmount(10);
    }
    else
    {
      console.log("구매 끝~")
    }
  }

  return (
    <div className="max-w-3xl mx-auto">

      { /* 상단 검정색 배경의 장바구니 아이콘 + 담은 상품 개수 */ }
      <header>
        <Top  cartItems={cartItems} />
      </header>

      {/* 결제 수단 유무에 따라 화면 변경 */}
      <div className="relative">
        {/* 상품 목록 페이지는 항상 렌더링 */}
        <ProductListPage
          protuctAmount={protuctAmount}
          addProtuct={addProtuct}
          checkPayment={checkPayment}
        />

        {/* isPaymentWindow가 true일 때만 PaymentPage를 팝업으로 렌더링 */}
        {isPaymentWindow && <PaymentPage onClose={() => setIsPaymentWindow(false)} />}
      </div>

    </div>
  );
}

export default App;
