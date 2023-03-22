import { MdLaptopMac, MdTabletMac, MdPhoneAndroid } from 'react-icons/md'
import { FaDesktop } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const RegSignUp = () => {
  const navigate = useNavigate()
  return (
    <section className='w-1/3 p-16'>
      <header className=' flex w-full justify-center'>
        <div className='border-2 border-[#b38f00] text-[#b38f00] font-extrabold rounded-full w-8 h-8 text-center'>
          ✓
        </div>
      </header>
      <footer className='text-[#b38f00] text-center mt-5'>
        <small>
          STEP <span className='font-semibold'>1</span> OF{' '}
          <span className='font-semibold'>3</span>
        </small>
        <p className='font-semibold text-3xl mb-5'>Choose your plan.</p>
        <div className='text-left grid gap-2'>
          <p className='flex gap-2'>
            <span>✓</span> No commitments, cancel anytime.
          </p>
          <p className='flex gap-2'>
            <span>✓</span> Everything on tunedIn for one low price.
          </p>
          <p className='flex gap-2'>
            <span>✓</span> No ads and no extra fees. Ever.
          </p>
        </div>
        <button
          onClick={(): void => navigate('/signup/planform')}
          className='btn--variant mt-5'>
          Next
        </button>
      </footer>
    </section>
  )
}

export default RegSignUp
