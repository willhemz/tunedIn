import { useNavigate, useParams } from 'react-router-dom';
import {
  CreditOption,
  PaymentConfirmation,
  PaymentPicker,
  Planform,
  RegForm,
  Registration,
  RegSignUp,
} from '../../component';
import { auth } from '../../firebase';

const Signup = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  let footerContent: JSX.Element = <></>;

  if (name === 'registration') footerContent = <Registration />;
  if (name === 'regform') footerContent = <RegForm />;
  if (name === 'signup') footerContent = <RegSignUp />;
  if (name === 'planform') footerContent = <Planform />;
  if (name === 'paymentPicker') footerContent = <PaymentPicker />;
  if (name === 'creditOption') footerContent = <CreditOption />;
  if (name === 'paymentConfirmation') footerContent = <PaymentConfirmation />;

  const content = (
    <div
      className={`homeWrapper ${
        (name === 'planform' || name === 'creditOption') && 'h-auto'
      }`}
    >
      <div className="homeBg--fader bg-opacity-10"></div>
      <header className="homeHeader">
        <button
          onClick={() => navigate('/')}
          className="text-[#b38f00] font-extrabold text-4xl"
        >
          tunedIn
        </button>
        {(name === 'registration' || name === 'regform') && (
          <button onClick={(): void => navigate('/login')} className="btn">
            Sign In
          </button>
        )}
        {name !== 'registration' && name !== 'regform' && (
          <button onClick={() => auth.signOut()} className="btn">
            Sign Out
          </button>
        )}
      </header>
      <footer className="homeFooter flex flex-col">{footerContent}</footer>
    </div>
  );
  return content;
};

export default Signup;
