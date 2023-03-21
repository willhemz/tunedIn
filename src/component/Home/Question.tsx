import { useState } from 'react'

type PropType = {
  id: number
  title: string
  content: string
}

const Question = ({ id, title, content }: PropType) => {
  const [showContent, setShowContent] = useState<boolean>(false)
  return (
    <article className='bg-black bg-opacity-20 text-xl p-5'>
      <button
        onClick={() => setShowContent(!showContent)}
        className='w-full flex justify-between text-2xl mb-3'>
        <p className='font-semibold'>{title}</p>
        <p>{showContent ? '' : '✚'}</p>
      </button>
      <p>{showContent && content}</p>
    </article>
  )
}

export default Question
