import { render, screen } from '@testing-library/react';
import App from './App';


// 첫 번째 테스트: 제목과 상품 개수 텍스트가 올바르게 표시되는지 검증
test('상품 목록 제목과 상품 개수 표시 텍스트가 정삭적으로 표시됨', () => {

  // 가상으로 App 컴포넌트를 화면에 렌더링하는 과정
  render(<App />);

  // '신발 상품 목록'이라는 제목을 찾고, expect는 해당 요소가 화면에 있는 지 검증
  const titleElement = screen.getByRole('heading', { name: /신발 상품 목록/i });
  expect(titleElement).toBeInTheDocument();

  // '현재 10개의 상품이 있습니다'라는 텍스트가 화면에 있는지 검증
  const productCountElement = screen.getByText(/현재 10개의 상품이 있습니다/i);
  expect(productCountElement).toBeInTheDocument();
});


// 두 번째 테스트: 상품 카드가 표시되는지 검증
test('10개의 상품 카드가 정상적으로 나타남', () => {
  render(<App />);

  // "담김!" 이란 버튼을 찾는다 
  const addToCartButtons = screen.getAllByRole('button', { name: /담김!/i });

  // 해당 버튼의 개수가 10개인지 검증
  expect(addToCartButtons.length).toBe(10);
});


// 세 번째 테스트 : 결제 버튼이 표시되는지 검증
test('상품 카드 개수에 맞게 구매 버튼이 정상적으로 나타난다', () => {
  render(<App />);

  // "구매" 이란 버튼을 찾는다 
  const addToPayButtons = screen.getAllByRole('button', { name: /구매/i });

  // 해당 버튼의 개수가 10개인지 검증
  expect(addToPayButtons.length).toBe(10);
});