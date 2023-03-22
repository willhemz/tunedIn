import { MdLaptopMac, MdTabletMac, MdPhoneAndroid } from 'react-icons/md'
import { FaDesktop } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Planform = () => {
  const navigate = useNavigate()
  return (
    <section className='w-4/5'>
      <header className='text-black  mt-5'>
        <small>
          STEP <span className='font-semibold'>2</span> OF{' '}
          <span className='font-semibold'>3</span>
        </small>
        <p className='font-semibold text-2xl mb-3'>
          Choose your plan that's right for you.
        </p>
        <div className='text-left grid gap-1'>
          <p className='flex gap-2'>
            <span>✓</span> Watch all you want. Ad-free.
          </p>
          <p className='flex gap-2'>
            <span>✓</span> Recommendations just for you.
          </p>
          <p className='flex gap-2'>
            <span>✓</span> Change or cancel your plan anytime.
          </p>
        </div>
      </header>
      <footer className='mt-4'>
        <section></section>
        <section className='text-black text-sm'>
          <span className='opacity-50'>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our
          </span>
          <button className='mx-1 text-blue-700 border-b hover:border-opacity-100 border-opacity-0 border-blue-700 transition-all duration-500'>
            terms of use
          </button>
          <span className='opacity-50'>for more details.</span>
          <p className='opacity-50 mt-2'>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </p>
        </section>
        <section className='text-center'>
          <button
            onClick={(): void => navigate('/signup/planform')}
            className='btn--variant mt-5 w-1/4'>
            Next
          </button>
        </section>
      </footer>
    </section>
  )
}

export default Planform
