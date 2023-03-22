import { ChangeEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../Login/data'
import Input from '../Login/Input'
import { PropsType } from '../Login/Login'

const RegForm = () => {
  const navigate = useNavigate()
  const [info, setInfo] = useState<PropsType>({
    emailOrPhone: '',
    password: '',
  })
  const [checked, setChecked] = useState<boolean>(false)

  const { name } = useParams()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name: string = e.target.name
    const value: string = e.target.value
    setInfo({ ...info, [name]: value })
  }
  return (
    <section className='w-1/3 p-10'>
      <footer className='text-[#b38f00] text-left mt-5'>
        <small>
          STEP <span className='font-semibold'>1</span> OF{' '}
          <span className='font-semibold'>3</span>
        </small>
        <p className='font-bold text-2xl mb-2'>
          Create a password to start your membership
        </p>
        <p>Just a few more steps and you're done!</p>
        <p>We hate paperwork, too.</p>
        <form>
          <section className='grid gap-5 my-10'>
            {data.map((item) => {
              return (
                <Input
                  key={item.id}
                  {...item}
                  info={info}
                  handleChange={handleChange}
                />
              )
            })}
            <div
              className='flex items-center gap-2 cursor-default'
              onClick={(): void => setChecked(!checked)}>
              <span
                className={`border cursor-pointer border-[#b38f00] w-6 h-6 rounded-md grid place-content-center ${
                  checked && 'bg-[#b38f00] border-none text-white'
                }`}>
                {checked && '✓'}
              </span>
              <small>Please do not email me Netflix special offers.</small>
            </div>
          </section>
          <button
            onClick={() => navigate('/signup/signup')}
            className='btn--variant'>
            Next
          </button>
        </form>
      </footer>
    </section>
  )
}

export default RegForm
