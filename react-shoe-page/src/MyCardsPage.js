import plus_icon from './images/plus-icon.svg';

function MyCardsPage({onClose, handleAddPayment}) {
  return (
    <div>
      <div>

        <div>새로운 카드를 등록해주세요.</div>
        <button className="bg-gray-200 text-gray-800 font-bold py-20 px-40 rounded-xl"
        onClick={handleAddPayment}
        >
          <img className="w-6" src={plus_icon} alt="이미지" />
        </button>

      </div>

    </div>
  );
}

export default MyCardsPage;
