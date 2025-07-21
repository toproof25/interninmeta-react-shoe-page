import React, { useState } from 'react';

function AddPaymentPage() {

  const [cardName, setCardName] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [formattedCardNumber, setFormattedCardNumber] = useState('');

  const [cardExpirationDate, setCardExpirationDate] = useState("");

  const [cardCvv, setCardCvv] = useState("");
  const [cardPassword, setCardPassword] = useState("");

  // 카드 번호 핸들링
  const handleNumberChange = (event) => {
    const userInput = event.target.value;

    let newRawValue;

    // 사용자가 글자를 삭제했을 때 (주로 Backspace)
    if (userInput.length < formattedCardNumber.length) {
      // 마지막 글자가 하이픈(-)인 경우, 그 앞의 숫자까지 총 2개를 지워야 자연스럽습니다.
      if (formattedCardNumber.slice(-1) === '-') {
        newRawValue = cardNumber.slice(0, cardNumber.length - 2);
      } else {
        newRawValue = cardNumber.slice(0, cardNumber.length - 1);
      }
    } 
    // 사용자가 글자를 추가했을 때
    else {
      const addedChar = userInput.slice(-1);
      // 추가된 글자가 숫자인 경우에만 cardNumber에 반영합니다.
      if (!isNaN(parseInt(addedChar, 10))) {
        newRawValue = (cardNumber + addedChar).slice(0, 16);
      } else {
        // 숫자가 아닌 문자(예: 'a', '-')가 직접 입력되면 무시합니다.
        newRawValue = cardNumber;
      }
    }

    // 새로 계산된 실제 숫자 값을 state에 저장합니다.
    setCardNumber(newRawValue);

    // --- 이제 화면에 표시될 값을 새로 만듭니다 ---
    let displayValue = '';
    for (let i = 0; i < newRawValue.length; i++) {
      if (i >= 8) {
        displayValue += '●';
      } else {
        displayValue += newRawValue[i];
      }
      if ((i + 1) % 4 === 0 && i < newRawValue.length - 1) {
        displayValue += ' - ';
      }
    }

    // 화면에 보여질 값을 state에 저장합니다.
    setFormattedCardNumber(displayValue);
    console.log('카드번호 입력 값:', event.target.value);
  };
  // 유효기간 핸들링
  const handleDateChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, ''); // 숫자 이외의 문자 제거
    let formattedValue = rawValue;

    if (rawValue.length > 2) {
      // 4자리(MMYY)로 입력을 제한하고, MM과 YY 사이에 '/'를 삽입합니다.
      formattedValue = `${rawValue.slice(0, 2)}/${rawValue.slice(2, 4)}`;
    }
    setCardExpirationDate(formattedValue);
    console.log('유효기간 입력 값:', event.target.value);
  };
  // 카드이름 핸들링
  const handleNameChange = (event) => {
    setCardName(event.target.value);
    console.log('카드이름 입력 값:', event.target.value);
  };
  // 보안코드 핸들링
  const handleCVVChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    setCardCvv(rawValue.slice(0, 3));
    console.log('보안코드 입력 값:', event.target.value);
  };
  // 비밀번호 핸들링
  const handlePasswordChange = (event) => {
    //setCardNumber(event.target.value);
    console.log('비밀번호 입력 값:', event.target.value);
  };

  return (
    <div className='w-full m-auto bg-green-100 text-center'>
      <div>카드추가 x</div>

      <div className='w-64 h-36 mx-auto my-5 rounded-md bg-black relative'>
        <div className='px-5 py-3.5 bg-yellow-300 rounded-md absolute left-4 bottom-16'></div>
        <div className='text-white text-center w-full absolute bottom-9'>{formattedCardNumber}</div>
        <div className='text-white text-left w-32 absolute left-4 bottom-2'>{cardName==="" ? "NAME" : cardName}</div>
        <div className='text-white text-right w-16 absolute right-4 bottom-2'>{cardExpirationDate==="" ? "MM/YY" : cardExpirationDate}</div>
      </div>
      
      <div className='w-2/4 mx-auto text-left'>
        <form>
          <div className='mb-3'>
            <div className='text-gray-500 text-sm'>카드번호</div>
            <input 
              type='text' 
              value={formattedCardNumber}
              maxLength="25"
              onChange={handleNumberChange}
              className='bg-gray-200 text-black py-2 px-2 font-bold rounded-xl text-center w-96' 
            />
          </div>
          
          <div className='mb-3'>
            <div className='text-gray-500 text-sm'>만료일</div>
            <input 
              type='text' 
              value={cardExpirationDate}
              onChange={handleDateChange}
              maxLength="5"
              placeholder="MM / YY"
              className='bg-gray-200 text-black py-2 px-2 font-bold rounded-xl text-center w-28' 
            />
          </div>
          
          <div className='mb-3'>
            <div className='text-gray-500 text-sm'>카드소유자이름</div>
            <input 
              type='text' 
              maxLength="20"
              value={cardName}
              onChange={handleNameChange}
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              className='bg-gray-200 text-black py-2 px-2 font-bold rounded-xl text-center w-96' 
            />
          </div>
          
          <div className='mb-3'>
            <div className='text-gray-500 text-sm'>보안코드(CVC/CVV)</div>
            <input 
              type='password' 
              maxLength="3"
              value={cardCvv}
              onChange={handleCVVChange}
              className='bg-gray-200 text-black py-2 px-2 font-bold rounded-xl text-center w-28' 
            />
          </div>
          
          <div className='mb-3'>
            <div className='text-gray-500 text-sm'>카드 비밀번호</div>
            <input 
              type='password' 
              onChange={handlePasswordChange}
              maxLength="1"
              className='mr-3 w-12 bg-gray-200 text-black py-2 px-2 font-bold rounded-xl text-center' 
            />
            <input 
              type='password' 
              onChange={handlePasswordChange}
              maxLength="1"
              className='mr-3 w-12 bg-gray-200 text-black py-2 px-2 font-bold rounded-xl text-center' 
            />
            <div className='inline mr-5 w-12 text-black py-2 px-2 font-bold rounded-xl text-center'>●</div>
            <div className='inline mr-3 w-12 text-black py-2 px-2 font-bold rounded-xl text-center'>●</div>

          </div>





        </form>

      </div>

    </div>
  );
}

export default AddPaymentPage;
