import { MdLaptopMac, MdTabletMac, MdPhoneAndroid } from 'react-icons/md'
import { FaDesktop } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const navigate = useNavigate()
  return (
    <section className='w-1/3 p-10'>
      <header className=' flex w-full justify-center items-center gap-3'>
        <MdLaptopMac className='text-3xl' />
        <FaDesktop className='text-5xl' />
        <div className='flex items-end'>
          <MdTabletMac className='text-2xl' />
          <MdPhoneAndroid className='text-xl' />
        </div>
      </header>
      <footer className='text-[#b38f00] text-center mt-5'>
        <small>
          STEP <span className='font-semibold'>1</span> OF{' '}
          <span className='font-semibold'>3</span>
        </small>
        <p className='font-bold text-3xl mb-2'>
          Finish setting up your account
        </p>
        <p>tunedIn is personalized for you.</p>
        <p>Create a password to watch on any device at any time.</p>
        <button
          onClick={(): void => navigate('/signup/regform')}
          className='btn--variant mt-5'>
          Next
        </button>
      </footer>
    </section>
  )
}

export default Registration
