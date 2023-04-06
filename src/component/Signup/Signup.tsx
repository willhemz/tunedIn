import { useNavigate, useParams } from 'react-router-dom';
import { Planform, RegForm, Registration, RegSignUp } from '../../component';

const Signup = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  let footerContent: JSX.Element = <></>;

  if (name === 'registration') footerContent = <Registration />;
  if (name === 'regform') footerContent = <RegForm />;
  if (name === 'signup') footerContent = <RegSignUp />;
  if (name === 'planform') footerContent = <Planform />;

  const content = (
    <div className={`homeWrapper ${name === 'planform' && 'h-auto'}`}>
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
          <button onClick={(): void => navigate('/')} className="btn">
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