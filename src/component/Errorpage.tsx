import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const Errorpage = () => {
  const error = useRouteError()
  const handleError = (): string => {
    let response: string = ''
    if (isRouteErrorResponse(error)) response = error.statusText
    if (error instanceof Error) response = error.message
    return response
  }

  const img: string = new URL('../assets/mistake.jpg', import.meta.url).href

  const content = (
    <section className='errorWrapper'>
      <img className='errorImg' src={img} alt='error404' />
      <div className='errorContent'>
        <h1 className='errorCaption'>Oops!!!</h1>
        <p className='errorText'>Sorry, an unexpected error has occurred.</p>
        <p className='errorText'>
          <em>{handleError()}</em>
        </p>
      </div>
    </section>
  )

  return content
}

export default Errorpage
