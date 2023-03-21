const value = (x: number): string => {
  return new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'NGN',
  }).format(x)
}

export type DataContent = {
  id: number
  title: string
  content: string
}

export type DataType = DataContent[]

export const data: DataType = [
  {
    id: 1,
    title: 'What is tunedIn?',
    content:
      'tunedIn is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    id: 2,
    title: 'How much does tunedIn cost?',
    content: `Watch tunedIn on your sartphone, tablet, Samrt TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ${value(
      1200
    )} to ${value(4400)} a month. No extra costs, no contracts.`,
  },
  {
    id: 3,
    title: 'Where can I watch?',
    content:
      'Watch anywhere, anytime. Sign in with your tunedIn account to watch instantly on the web at tunedin.com from your personal computer or on any internet-connected device that offers the tunedIn app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
  },
  {
    id: 4,
    title: 'How do I cancel?',
    content:
      'tunedIn is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
  },
  {
    id: 5,
    title: 'What can I watch on tunedIn?',
    content:
      'tunedIn has an extensive library of feature films, documentaries, TV shows, anime, award-winning tunedIn originals, and more. Watch as much as you want, anytime you want.',
  },
]
