import { useState, ChangeEvent, useEffect } from 'react';
import { DataType } from './data';
import { PropsType } from './Login';
import { ErrorObj } from '../Signup/RegForm';

type Detail = {
  info: PropsType;
  error?: ErrorObj;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  name,
  value,
  info,
  handleChange,
  error,
}: DataType & Detail) => {
  const [caption, setCaption] = useState<boolean>(false);
  useEffect(() => {
    info[name as keyof PropsType] ? setCaption(true) : setCaption(false);
  }, [info]);

  let content: JSX.Element = <></>;

  if (name === 'emailOrPhone')
    content = (
      <>
        <fieldset className="mailField w-full">
          <label
            className={` ${
              caption
                ? 'block text-xs w-full text-gray-50 opacity-60'
                : 'hidden'
            }`}
            htmlFor="email"
          >
            {value}
          </label>

          <input
            className="homeMail"
            type="text"
            name={name}
            id="email"
            value={info.emailOrPhone}
            placeholder={value}
            onChange={handleChange}
          />
          {error?.email &&
            ((/^\d+$/.test(info.emailOrPhone) &&
              info.emailOrPhone.length > 15) ||
              (!/^\d+$/.test(info.emailOrPhone) &&
                !info.emailOrPhone.includes('@'))) && (
              <label className="absolute top-[105%] text-[10px] text-red-700 mb-5">
                Please, input correct email or phone number format and/or
                length.
              </label>
            )}
        </fieldset>
      </>
    );

  if (name === 'password')
    content = (
      <>
        <fieldset className="mailField w-full">
          <label
            className={` ${
              caption
                ? 'block text-xs w-full text-gray-50 opacity-60'
                : 'hidden'
            }`}
            htmlFor="password"
          >
            {value}
          </label>

          <input
            className="homeMail"
            type="password"
            name={name}
            id="password"
            minLength={6}
            value={info.password}
            placeholder={value}
            onChange={handleChange}
          />
          {error?.password && info.password.length < 6 && (
            <label className="absolute top-[105%] text-[10px] text-red-700 mb-5">
              Please, input correct email or phone number format and/or length.
            </label>
          )}
        </fieldset>
      </>
    );

  return content;
};

export default Input;
