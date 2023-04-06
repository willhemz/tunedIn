import { useNavigate } from 'react-router-dom';
import { AiFillLock, AiOutlineRight } from 'react-icons/ai';
import { paymentImages } from './data';

const PaymentPicker = () => {
  const navigate = useNavigate();
  return (
    <section className="w-1/2 p-16">
      <header className=" flex w-full justify-center">
        <div className="border-2 border-[#b38f00] text-[#b38f00] font-extrabold rounded-full w-8 h-8 flex place-content-center place-items-center">
          <AiFillLock />
        </div>
      </header>
      <footer className="text-black text-center mt-5 flex flex-col items-center">
        <small>
          STEP <span className="font-semibold">3</span> OF{' '}
          <span className="font-semibold">3</span>
        </small>
        <p className="font-semibold text-3xl mb-5">Choose how to pay</p>
        <div className="w-4/5 grid place-items-center gap-2">
          <p>
            Your payment is encrypted and you can change how you pay anytime.
          </p>
          <p className="w-3/5 font-semibold">
            Secure for peace of mind. Cancel easily online.
          </p>
        </div>
        <div className="w-full mt-8 flex flex-col items-end">
          <small className="flex items-center">
            End-to-end encrypted{' '}
            <span className="text-[#b38f00]">
              <AiFillLock />
            </span>
          </small>
          <button
            onClick={(): void => navigate('/signup/creditOption')}
            className="btn--card"
          >
            <div className="flex items-center gap-3">
              Credit or Debit Card
              {paymentImages}
            </div>
            <AiOutlineRight className="text-xl" />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default PaymentPicker;
