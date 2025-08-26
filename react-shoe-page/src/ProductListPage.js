import ProductCard from './ProductCard';

function ProductListPage({addProtuct, productData, handleFinalCart}) {

  const productIds = Object.keys(productData);
  const productAmount = productIds.length;

  return (
    <div>
      <section className='max-w-3xl mx-auto py-5 px-3 text-left'>
        <h1 className='text-3xl mb-2 font-bold' >신발 상품 목록</h1>
        <p>현재 {productAmount}개의 상품이 있습니다</p>
      </section>

      <section className='max-w-3xl mx-auto py-5 px-3 text-left grid grid-cols-2 gap-4'>
        { 
          productIds.map((id) => {
            const productInfo = productData[id];
            return (
              <ProductCard
                key={id}
                productID={id} 
                addProtuct={addProtuct} 
                handleFinalCart={() => handleFinalCart({[id] : 1})}
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
