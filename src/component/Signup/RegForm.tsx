import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../Login/data';
import Input from '../Login/Input';
import { PropsType } from '../Login/Login';
import { RootState } from '../../store';
import { createUser } from '../../features/User/FirebaseAuth';
import { setMail } from '../../features/User/Userslice';
import { useAppDispatch, useAppSelector } from '../../features';

export type ErrorObj = { email: boolean; password: boolean };

const RegForm = () => {
  const { email } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [info, setInfo] = useState<PropsType>({
    emailOrPhone: email || '',
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (info.password.length < 6) setError({ ...error, password: true });
    else if (
      !info.emailOrPhone ||
      (!/^\d+$/.test(info.emailOrPhone) && !info.emailOrPhone.includes('@')) ||
      (/^\d+$/.test(info.emailOrPhone) && info.emailOrPhone.length > 15)
    )
      setError({ ...error, email: true });
    else {
      createUser({
        email: info.emailOrPhone,
        password: info.password,
        dispatch,
        navigate,
      });
      setInfo({ emailOrPhone: '', password: '' });
      setMail('');
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

  return (
    <section className="w-1/3 p-10">
      <footer className="text-[#b38f00] text-left mt-5">
        <small>
          STEP <span className="font-semibold">1</span> OF{' '}
          <span className="font-semibold">3</span>
        </small>
        <p className="font-bold text-2xl mb-2">
          Create a password to start your membership
        </p>
        <p>Just a few more steps and you're done!</p>
        <p>We hate paperwork, too.</p>
        <form noValidate onSubmit={handleSubmit}>
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
            <div
              className="flex items-center gap-2 cursor-default"
              onClick={(): void => setChecked(!checked)}
            >
              <span
                className={`border cursor-pointer border-[#b38f00] w-6 h-6 rounded-md grid place-content-center ${
                  checked && 'bg-[#b38f00] border-none text-white'
                }`}
              >
                {checked && '✓'}
              </span>
              <small>Please do not email me tunedIn special offers.</small>
            </div>
          </section>
          <button type="submit" className="btn--variant">
            Next
          </button>
        </form>
      </footer>
    </section>
  );
};

export default RegForm;
