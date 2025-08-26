import React, { useState } from 'react';

import './App.css';
import Top from './Top';
import ProductListPage from './ProductListPage';
import PaymentPage from './PaymentPage';
import CartList from './CartList';
import PaymentComplete from './PaymentComplete';
import productData from './data/ProductData.json';

function App() {
  
  // 카드 배열 만들고 정리
  const [cardList, setCardList] = useState([  ]);

  const [cart, setCart] = useState({  });

  const handleFinalCart = (products) => {

    setIsPaymentWindow(true)

    const cartItemIds = Object.keys(products);

    // 1. cart에 있는 모든 상품의 총금액을 계산합니다.
    let amount = 0
    const totalProductPrice = cartItemIds.reduce((sum, id) => {
      const productInfo = productData[id];
      const quantity = products[id];
      amount += quantity
      
      // 상품 정보가 있을 경우에만 계산 (오류 방지)
      if (productInfo) {
        return sum + (productInfo.price * quantity);
      }
      return sum;
    }, 0);

    // 장바구니에 상품이 있을 경우에만 배송비를 추가합니다.
    const shippingFee = totalProductPrice < 100000 ? 3000 : 0;

    // 3. 최종 결제 금액 (상품 총금액 + 배송비)
    const finalAmount = totalProductPrice + shippingFee;

    setFinalPayment([amount, finalAmount])
  }

  const [pageState, setPageState] = useState(0)
  const [finalPayment, setFinalPayment] = useState([0, 0])

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
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };


  const addProtuct = (productId) => { 
    setCart(prevCart => {
      const currentQuantity = prevCart[productId] || 0;
      return {
        ...prevCart,
        [productId]: currentQuantity + 1,
      };
    });

    console.log(`${productId}번 상품이 장바구니에 추가되었습니다.`);
    console.log(cart.length);
  };

  const totalCartItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const handleIsCartListPage = (isPage) => {
    setPageState( isPage )
  }

  const [isPaymentWindow, setIsPaymentWindow] = useState(false);  

  const handlePageState = () => {
        if (pageState === 0)
        {
          return <ProductListPage
            addProtuct={addProtuct}
            setIsPaymentWindow={setIsPaymentWindow}
            productData={productData}
            handleFinalCart={handleFinalCart}
          />
        }
        else if (pageState === 1)
        {
          return <CartList 
            cart={cart}
            productData={productData}
            totalCartItems={totalCartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            handleFinalCart={handleFinalCart}
            pay={pay}
          />
        }
        else if (pageState === 2)
        {
          return <PaymentComplete 
            amount={finalPayment[0]}
            price={finalPayment[1]}
            setPageState={setPageState}
          />
        }
  }

  const pay = (card) => {
    setIsPaymentWindow(false)
    setPageState(2)
    console.log("결제한다 나는", card[1], pageState, "번호의 카드로");
  }



  return (
    <div className="max-w-3xl mx-auto">
      <header>
        <Top  cartItems={totalCartItems} handleIsCartListPage={handleIsCartListPage} pageState={pageState} />
      </header>

      <div className="relative">
        {handlePageState()}
        {isPaymentWindow && <PaymentPage cardList={cardList} setCardList={setCardList} onClose={() => setIsPaymentWindow(false)} pay={pay}/>}
      </div>

    </div>
  );
}

export default App;
