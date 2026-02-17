import type { Dispatch, SetStateAction } from 'react';

import Footer from './Footer';
import Item, { type ItemProps } from './Item';

export interface HistoryProps {
  history: ItemProps[];
  setHistory: Dispatch<SetStateAction<ItemProps[]>>;
}

function History({ history, setHistory }: HistoryProps) {
  return (
    <section className="flex size-full flex-col justify-around">
      <div className="flex flex-col">
        {history.map((item: ItemProps, index: number) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </div>
      <Footer setHistory={setHistory} />
    </section>
  );
}

export default History;
