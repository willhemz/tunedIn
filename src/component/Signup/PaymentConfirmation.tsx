import { ReactElement } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { useAppSelector } from '../../features';
import { useNavigate } from 'react-router-dom';

const PaymentConfirmation = (): ReactElement => {
  const {
    plan: { type },
  } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <main className="grid gap-5 place-items-center">
      <div className="flex flex-col items-center">
        <p className="text-6xl text-green-950">
          <GiConfirmed />
        </p>
        <p className="text-2xl text-black font-[500]">Payment Successful</p>
        <p className="text-xl text-black">Welcome to tunedIn {type} plan.</p>
      </div>
      <button
        onClick={() => navigate('/')}
        className="bg-green-950 rounded py-2 px-3 font-semibold w-fit"
      >
        Return Home &rarr;
      </button>
    </main>
  );
};

export default PaymentConfirmation;
