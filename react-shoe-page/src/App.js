import React, { useState } from 'react';

import './App.css';
import Top from './Top';
import ProductListPage from './ProductListPage';
import PaymentPage from './PaymentPage';
import CartList from './CartList';
import productData from './data/ProductData.json';

function App() {
  
  const [cart, setCart] = useState({
    '1': 2,
    '3': 1,
  });

  // [추가] 수량 증가 함수
  const increaseQuantity = (productId) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1
    }));
  };

  // [추가] 수량 감소 함수
  const decreaseQuantity = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      // 수량이 1보다 크면 1을 빼고, 그렇지 않으면 로직을 실행하지 않음
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        // 수량이 1개일 때 감소시키면 상품을 장바구니에서 제거
        delete newCart[productId];
      }
      return newCart;
    });
  };


  const [payments, setPayments] = useState(0);

  const addProtuct = (productId) => { 
    setCart(prevCart => {
      // 현재 장바구니에 해당 상품이 있는지 확인합니다.
      // 만약 상품이 없다면 수량은 0, 있다면 현재 수량을 가져옵니다.
      const currentQuantity = prevCart[productId] || 0;
      
      // 새로운 장바구니 객체를 생성합니다.
      // 기존 장바구니 내용을 복사하고(...prevCart),
      // 현재 상품(productId)의 수량을 1 증가시킵니다.
      return {
        ...prevCart,
        [productId]: currentQuantity + 1,
      };
    });

    console.log(`${productId}번 상품이 장바구니에 추가되었습니다.`);
    console.log(cart.length);
  };

  const totalCartItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const [isCartListPage, setIsCartListPage] = useState(false);
  const handleIsCartListPage = (isPage) => {
    setIsCartListPage(isPage)
  }

  const [isPaymentWindow, setIsPaymentWindow] = useState(false);  
  const checkPayment = () => {
    if (payments === 0)
    {
      console.log("결제 수단좀 추가해라");
      setIsPaymentWindow(true);
      setPayments(0);
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
        <Top  cartItems={totalCartItems} handleIsCartListPage={handleIsCartListPage} isCartListPage={isCartListPage} />
      </header>




      {/* 결제 수단 유무에 따라 화면 변경 */}
      <div className="relative">
        {!isCartListPage ? (
          // true일 경우: 상품 목록 페이지
          <ProductListPage
            addProtuct={addProtuct}
            checkPayment={checkPayment}
            productData={productData}
          />
        ) : (
          // false일 경우: 장바구니 페이지
          // CartList 컴포넌트는 cart 상태와 productData를 필요로 할 것입니다.
          <CartList 
            cart={cart}
            productData={productData}
            totalCartItems={totalCartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            checkPayment={checkPayment}
          />
        )}

        {/* isPaymentWindow가 true일 때만 PaymentPage를 팝업으로 렌더링 */}
        {isPaymentWindow && <PaymentPage onClose={() => setIsPaymentWindow(false)} />}
      </div>

    </div>
  );
}

export default App;
