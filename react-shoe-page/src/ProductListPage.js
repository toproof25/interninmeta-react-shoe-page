import ProductCard from './ProductCard';

function ProductListPage({/*protuctAmount,*/ addProtuct, checkPayment, productData}) {

  // productData 객체의 key들(상품 ID)을 배열로 만듭니다. (예: ['1', '2', '3', ...])
  const productIds = Object.keys(productData);

  // 상품의 개수는 ID 배열의 길이와 같습니다.
  const productAmount = productIds.length;


  return (
    <div>
      { /* 메인 상단 신발 상품 목록 제목과 n개의 상품 표시 메시지 
        max-w-4xl mx-auto py-5 px-3 text-left => 최대 가로 크기, 마진 auto, 패딩 xy, 텍스트 left
      */ }
      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        <h1 className='text-3xl mb-2 font-bold' >신발 상품 목록</h1>
        <p>현재 {productAmount}개의 상품이 있습니다</p>
      </section>

      <section className='max-w-3xl mx-auto py-5 px-3 text-left grid grid-cols-2 gap-4'>
        { 
          // productData의 key 배열을 map 함수로 순회합니다.
          productIds.map((id) => {
            // 현재 id에 해당하는 상품의 상세 정보를 가져옵니다.
            const productInfo = productData[id];

            return (
              <ProductCard
                // 리액트가 각 요소를 식별하기 위한 고유한 key
                key={id}
                
                // ProductCard에 전달할 props
                productID={id} 
                addProtuct={addProtuct} 
                checkPayment={checkPayment}

                // ✨ productInfo 객체의 모든 속성을 props로 한번에 전달 (image, brand, name 등)
                {...productInfo}
              />
            );
          })
        }
      </section>

    </div>
  );
}

export default ProductListPage;
