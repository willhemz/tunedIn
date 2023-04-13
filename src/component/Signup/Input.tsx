import { useState, ChangeEvent, useEffect, ReactElement } from 'react';
import { DataType } from './data';
import { PropsType } from './CreditOption';

type Detail = {
  info: PropsType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
};

const Input = ({ name, value, ...rest }: DataType & Detail) => {
  const { info, errorMessage, error, handleChange } = rest;
  const [caption, setCaption] = useState<boolean>(false);
  useEffect(() => {
    info[name as keyof PropsType] ? setCaption(true) : setCaption(false);
  }, [info]);

  const content: ReactElement = (
    <>
      <fieldset className="mailField mailField__modifier w-full">
        <label
          className={` ${
            caption ? 'block text-sm w-full text-black opacity-60' : 'hidden'
          }`}
          htmlFor={name}
        >
          {value}
        </label>

        <input
          className="homeMail"
          type="text"
          name={name}
          id={name}
          value={info[name]}
          placeholder={value}
          onChange={handleChange}
        />
      </fieldset>
      {error && !info[name] && (
        <label className="text-red-700 text-xs" htmlFor="name">
          {errorMessage}*
        </label>
      )}
    </>
  );
  return content;
};

export default Input;
