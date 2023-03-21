import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from './data'
import Question from './Question'

const Home = () => {
  const [caption, setCaption] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')
  const img: string = new URL('../../assets/theater.jpg', import.meta.url).href
  const tv: string = new URL('../../assets/tv.jpg', import.meta.url).href
  const pc: string = new URL('../../assets/movie.jpg', import.meta.url).href

  const navigate = useNavigate()

  useEffect(() => {
    email ? setCaption(true) : setCaption(false)
  }, [email])

  const introToPage = (
    <>
      <section className='text-center grid gap-3'>
        <h3 className='font-bold text-3xl'>
          Unlimited Movies, TV Shows, and more...
        </h3>
        <p className='text-2xl'>Watch Anywhere, Cancel Anytime.</p>
        <p className='text-lg text-white'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </section>
      <form className='flex gap-3 w-full justify-center'>
        <fieldset className='mailField'>
          <label
            className={` ${
              caption
                ? 'block text-sm w-full text-gray-50 opacity-60'
                : 'hidden'
            }`}
            htmlFor='email'>
            Email Address
          </label>

          <input
            className='homeMail'
            type='email'
            name='email'
            id='email'
            value={email}
            placeholder='Email Address'
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <button className='btn'>Get Started ➤</button>
      </form>
    </>
  )

  const firstContent = (
    <div className='homeWrapper'>
      <img className='homeBg' src={img} alt='' />
      <div className='homeBg--fader'></div>
      <header className='homeHeader'>
        <button className='text-white font-extrabold text-4xl'>tunedIn</button>
        <button onClick={() => navigate('login')} className='btn'>
          Sign In
        </button>
      </header>
      <footer className='homeFooter'>{introToPage}</footer>
    </div>
  )

  const secondContent = (
    <div className='homeWrapper flex items-center h-auto gap-10'>
      <header className='basis-1/2'>
        <p className='text-5xl font-extrabold mb-5'>Enjoy on your TV.</p>
        <p className='text-xl'>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </header>
      <footer className='basis-1/2'>
        <img src={tv} alt='' />
      </footer>
    </div>
  )

  const thirdContent = (
    <div className='homeWrapper flex items-center h-auto gap-10 my-5'>
      <header className='basis-1/2 order-2'>
        <p className='text-5xl font-extrabold mb-5'>Watch Everywhere.</p>
        <p className='text-xl'>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </header>
      <footer className='basis-1/2 order-1'>
        <img src={pc} alt='' />
      </footer>
    </div>
  )

  const fourthContent = (
    <div className='homeWrapper h-auto flex flex-col gap-5 bg-[#b38f00]'>
      <caption className='text-4xl font-extrabold'>
        Frequently Asked Questions
      </caption>
      {data.map((item) => {
        return <Question key={item.id} {...item} />
      })}
    </div>
  )

  const content = (
    <>
      {firstContent}
      {secondContent}
      {thirdContent}
      {fourthContent}
    </>
  )
  return content
}

export default Home
