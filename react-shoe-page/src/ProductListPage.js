import ProductCard from './ProductCard';

function ProductListPage({protuctAmount, addProtuct, checkPayment}) {
  return (
    <div>
      { /* 메인 상단 신발 상품 목록 제목과 n개의 상품 표시 메시지 
        max-w-4xl mx-auto py-5 px-3 text-left => 최대 가로 크기, 마진 auto, 패딩 xy, 텍스트 left
      */ }
      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        <h1 className='text-3xl mb-2 font-bold' >신발 상품 목록</h1>
        <p>현재 {protuctAmount}개의 상품이 있습니다</p>
      </section>

      { /* 상품 카드가 나열되는 부분 추후 2개의 열로 나타나도록 설정 - float? 
        max-w-4xl mx-auto py-5 px-3 text-left => 최대 가로 크기, 마진 auto, 패딩 xy, 텍스트 left
        grid grid-cols-2 gap-4 => 그리드 사용, 2개 열, 열 사이 간격
      */ }
      <section className='max-w-3xl mx-auto py-5 px-3 text-left grid grid-cols-2 gap-4'>
        { 
        // Array(개수).fill(<Component />) = 개수만큼 컴포넌트로 채운 배열을 생성
        Array(protuctAmount).fill(<ProductCard addProtuct={addProtuct} checkPayment={checkPayment} />)
        }
      </section>

    </div>
  );
}

export default ProductListPage;
