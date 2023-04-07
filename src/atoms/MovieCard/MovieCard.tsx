import { ReactElement, ReactNode } from 'react';

export interface PropsType {
  title: string;
  description: string;
  variable: number;
}

const MovieCard = ({
  title,
  description,
  variable,
}: PropsType): ReactElement => {
  const trimText = (item: string, n: number): string =>
    item?.length > n ? `${item.substring(0, n - 1)}...` : item;

  const btn = (val: 'Play' | 'My List'): ReactNode => (
    <button
      className="font-semibold bg-slate-800 text-white px-2 py-1 transition-all duration-300 hover:bg-white hover:text-slate-800"
      type="button"
    >
      {val}
    </button>
  );
  const content: ReactNode = (
    <div>
      <h3 className="text-3xl font-bold">{title}</h3>
      <div className="flex gap-2">
        {btn('Play')}
        {btn('My List')}
      </div>
      <p>{trimText(description, variable)}</p>
    </div>
  );
  return content;
};

export default MovieCard;
