import React, { useState, useRef  } from 'react';

function AddPaymentPage({setCardList, onClick}) {

  // 카드 이름
  const [cardName, setCardName] = useState("");

  // 카드 번호
  const [cardNumber, setCardNumber] = useState("");
  const [formattedCardNumber, setFormattedCardNumber] = useState('');

  // 유효기간
  const [cardExpirationDate, setCardExpirationDate] = useState("");

  // 보안번호
  const [cardCvv, setCardCvv] = useState("");

  // 카드 비밀번호
  const [cardPassword, setCardPassword] = useState(['', '']);
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

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

  // 비밀번호 변경을 처리하는 핸들러 함수
  const handlePasswordChange = (e, index) => {
    const value = e.target.value;

    // 비밀번호 state 업데이트
    const newPassword = [...cardPassword];
    // 입력된 값으로 해당 위치의 비밀번호를 갱신 (값이 없으면 ''로 덮어쓰여 삭제 효과)
    newPassword[index] = value;
    setCardPassword(newPassword);

    // 첫 번째 칸에 값이 입력되면, 두 번째 칸으로 포커스 이동
    if (index === 0 && value.length > 0) {
      secondInputRef.current.focus();
    }
  };

  // Backspace 키 입력을 처리하는 핸들러 함수
  const handleKeyDown = (e, index) => {
    // Backspace를 누르고, 해당 칸이 비어있을 때
    if (e.key === 'Backspace' && !cardPassword[index]) {
      // 두 번째 칸이었다면, 첫 번째 칸으로 포커스 이동
      if (index === 1) {
        firstInputRef.current.focus();
      }
    }
  };

  // 작성 완료 누를 시 발생
  const handleSaveButton = () => {
    let newCard = [cardName, formattedCardNumber, cardExpirationDate, cardCvv, cardPassword];
    setCardList(prev => [...prev, newCard]); // 기존 배열 뒤에 새 배열 추가
    onClick();
  }


  return (
    <div className='w-full flex flex-col h-full overflow-hidden text-center'>

      <div className='w-64 h-36 mx-auto my-5 rounded-md bg-black shadow-md relative'>
        <div className='px-5 py-3.5 bg-yellow-300 rounded-md absolute left-4 bottom-16'></div>
        <div className='text-white text-center w-full absolute bottom-9'>{formattedCardNumber}</div>
        <div className='text-white text-left w-32 absolute left-4 bottom-2'>{cardName==="" ? "NAME" : cardName}</div>
        <div className='text-white text-right w-16 absolute right-4 bottom-2'>{cardExpirationDate==="" ? "MM/YY" : cardExpirationDate}</div>
      </div>
      
      <div className='flex-1 w-full overflow-y-auto'>
        <form className='w-3/4 mx-auto text-left'>
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
              ref={firstInputRef}
              value={cardPassword[0]}
              onChange={(e) => handlePasswordChange(e, 0)}
              onKeyDown={(e) => handleKeyDown(e, 0)}
              maxLength="1"
              className='mr-3 w-12 bg-gray-200 text-black py-2 px-2 font-bold rounded-xl text-center' 
            />
            <input 
              type='password' 
              ref={secondInputRef}
              value={cardPassword[1]}
              onChange={(e) => handlePasswordChange(e, 1)}
              onKeyDown={(e) => handleKeyDown(e, 1)}
              maxLength="1"
              className='mr-3 w-12 bg-gray-200 text-black py-2 px-2 font-bold rounded-xl text-center' 
            />
            <div className='inline mr-5 w-12 text-black py-2 px-2 font-bold rounded-xl text-center'>●</div>
            <div className='inline mr-3 w-12 text-black py-2 px-2 font-bold rounded-xl text-center'>●</div>

          </div>

          <div className='text-center py-10'>
            <button 
              onClick={handleSaveButton}
              className='py-2 px-12 mb-5 bg-black w-full h-12 text-xl text-white rounded-3xl text-center'>작성 완료</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPaymentPage;
