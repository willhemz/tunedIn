import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { user } from './data';
import Input from './Input';
import { paymentImages } from './data';
import { getData, useAppDispatch, useAppSelector } from '../../features';

export interface PropsType {
  [index: string]: string;
}
const CreditOption = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    plan: { type, price },
    user: { email },
  } = useAppSelector((state) => state.user);
  const [info, setInfo] = useState<PropsType>({
    firstName: '',
    lastName: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
  });
  const [checked, setChecked] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (Object.values(info).every((item) => item.length >= 1) && checked)
      setError(false);
  }, [info, checked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(info).some((item) => item.length < 1)) setError(true);
    else if (!checked) setError(true);
    else
      getData(
        email as string,
        dispatch,
        navigate,
        '/signup/paymentConfirmation'
      );
  };

  return (
    <section className="w-2/5 p-10">
      <footer className="text-[#b38f00] text-left mt-5">
        <small>
          STEP <span className="font-semibold">3</span> OF{' '}
          <span className="font-semibold">3</span>
        </small>
        <p className="font-semibold text-4xl mb-2">
          Set up your credit or debit card
        </p>
        {paymentImages}
        <form noValidate onSubmit={onSubmit} className="text-black">
          <section className="grid gap-5 my-10">
            {user.map((item) => {
              return (
                <Input
                  key={item.id}
                  {...item}
                  info={info}
                  error={error}
                  handleChange={handleChange}
                />
              );
            })}
            <div className="flex justify-between w-full bg-gray-500 bg-opacity-20 p-2">
              <div>
                <p className="font-semibold">{price}</p>
                <small className="opacity-70">{type}</small>
              </div>
              <button
                onClick={() => navigate('/signup/planform')}
                className="text-blue-900 font-semibold"
              >
                Change
              </button>
            </div>
            <div className="flex flex-col gap-3 text-sm opacity-50">
              <small>
                Your payments will be processed internationally. Additional bank
                fees may apply.
              </small>
              <small>
                By checking the checkbox below, you agree to our{' '}
                <a className="text-blue-900 font-semibold" href="/">
                  Terms of Use
                </a>
                ,{' '}
                <a className="text-blue-900 font-semibold" href="/">
                  Privacy Statement
                </a>
                , and that you are over 18. Netflix will automatically continue
                your membership and charge the membership fee (currently
                ₦1,200/month) to your payment method until you cancel. You may
                cancel at any time to avoid future charges.
              </small>
            </div>
            <div
              className="flex items-center gap-2 cursor-default"
              onClick={(): void => setChecked(!checked)}
            >
              <span
                className={`border cursor-pointer border-black w-6 h-6 rounded-md grid place-content-center ${
                  checked && 'bg-black border-none text-white'
                } ${error && 'border-red-700'}`}
              >
                {checked && '✓'}
              </span>
              <small className={`${error && 'border-b border-red-700'}`}>
                I agree
              </small>
            </div>
          </section>
          <button type="submit" className="btn--variant">
            Start Membership
          </button>
        </form>
      </footer>
    </section>
  );
};

export default CreditOption;
