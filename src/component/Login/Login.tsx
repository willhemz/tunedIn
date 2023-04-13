import {
  useState,
  ChangeEvent,
  ReactNode,
  ReactElement,
  FormEvent,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from './data';
import Input from './Input';
import { confirmUser } from '../../features/User/FirebaseAuth';
import { ErrorObj } from '../Signup/RegForm';
import { loginAcct } from '../../features/User/Userslice';
import { getData, useAppDispatch } from '../../features';

export type PropsType = {
  emailOrPhone: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [info, setInfo] = useState<PropsType>({
    emailOrPhone: '',
    password: '',
  });
  const [error, setError] = useState<ErrorObj>({
    email: false,
    password: false,
  });
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (info.password.length < 6) setError({ ...error, password: true });
    else if (
      !info.emailOrPhone ||
      (!/^\d+$/.test(info.emailOrPhone) && !info.emailOrPhone.includes('@')) ||
      (/^\d+$/.test(info.emailOrPhone) && info.emailOrPhone.length > 15)
    )
      setError({ ...error, email: true });
    else {
      confirmUser({
        email: info.emailOrPhone,
        password: info.password,
        dispatch,
        navigate,
      });
      setInfo({ emailOrPhone: '', password: '' });
    }
  };

  useEffect(() => {
    if (
      error.email &&
      ((info.emailOrPhone &&
        !/^\d+$/.test(info.emailOrPhone) &&
        info.emailOrPhone.includes('@')) ||
        (/^\d+$/.test(info.emailOrPhone) && info.emailOrPhone.length < 15))
    )
      setError({ ...error, email: false });
    if (error.password && info.password.length >= 6)
      setError({ ...error, password: false });
  }, [info]);

  const img: string = new URL('../../assets/theater.jpg', import.meta.url).href;

  const signUpForm: ReactNode = (
    <form
      onSubmit={signIn}
      className="w-1/3 h-full overflow-clip bg-black bg-opacity-70 p-10"
    >
      <p aria-label="form title" className="text-3xl font-bold">
        Sign In
      </p>
      <section className="grid gap-5 my-10">
        {data.map((item) => {
          return (
            <Input
              key={item.id}
              {...item}
              info={info}
              handleChange={handleChange}
              error={error}
            />
          );
        })}
      </section>
      <button type="submit" className="btn--variant">
        Sign In
      </button>
      <section className="mt-4 mb-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span
            onClick={() => setChecked(!checked)}
            className={`border cursor-pointer border-[#b38f00] w-6 h-6 rounded-md grid place-content-center ${
              checked && 'bg-[#b38f00] border-none'
            }`}
          >
            {checked && '✓'}
          </span>
          <small>Remember me</small>
        </div>
        <button className="border-b hover:border-opacity-100 border-opacity-0 border-white transition-all duration-500 text-sm">
          Need help?
        </button>
      </section>
      <section>
        <header className="flex items-center mb-5 gap-2">
          <p className="opacity-50">New to tunedIn?</p>
          <button
            onClick={() => navigate('/signup/regform')}
            className="border-b hover:border-opacity-100 border-opacity-0 border-white transition-all duration-500"
          >
            Sign up now
          </button>
        </header>
        <footer className="text-sm">
          <span className="opacity-50">
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot.
          </span>
          <button className="ml-2 text-blue-700 border-b hover:border-opacity-100 border-opacity-0 border-blue-700 transition-all duration-500">
            Learn more.
          </button>
        </footer>
      </section>
    </form>
  );

  const content: ReactElement = (
    <div className="homeWrapper">
      <img className="homeBg" src={img} alt="" />
      <div className="homeBg--fader"></div>
      <header className="homeHeader">
        <button
          onClick={() => navigate('/')}
          className="text-white font-extrabold text-4xl"
        >
          tunedIn
        </button>
      </header>
      <footer className="homeFooter flex flex-col">{signUpForm}</footer>
    </div>
  );
  return content;
};

export default Login;
