import { useState, ChangeEvent, useEffect } from 'react'
import { DataType } from './data'
import { PropsType } from './Login'

type Detail = {
  info: PropsType
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ name, value, info, handleChange }: DataType & Detail) => {
  const [caption, setCaption] = useState<boolean>(false)
  useEffect(() => {
    info[name as keyof PropsType] ? setCaption(true) : setCaption(false)
  }, [info])

  let content: JSX.Element = <></>

  if (name === 'emailOrPhone')
    content = (
      <>
        <fieldset className='mailField w-full'>
          <label
            className={` ${
              caption
                ? 'block text-sm w-full text-gray-50 opacity-60'
                : 'hidden'
            }`}
            htmlFor='email'>
            {value}
          </label>

          <input
            className='homeMail'
            type='email'
            name={name}
            id='email'
            value={info.emailOrPhone}
            placeholder={value}
            onChange={handleChange}
          />
        </fieldset>
      </>
    )

  if (name === 'password')
    content = (
      <>
        <fieldset className='mailField w-full'>
          <label
            className={` ${
              caption
                ? 'block text-sm w-full text-gray-50 opacity-60'
                : 'hidden'
            }`}
            htmlFor='password'>
            {value}
          </label>

          <input
            className='homeMail'
            type='password'
            name={name}
            id='password'
            value={info.password}
            placeholder={value}
            onChange={handleChange}
          />
        </fieldset>
      </>
    )

  return content
}

export default Input
