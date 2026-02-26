export interface ItemProps {
  first: number;
  operator: string;
  second: number;
  result: number;
}

function Item({ first, operator, second, result }: ItemProps) {
  return (
    <div className="ml-auto flex flex-col p-2.5">
      <div className="text-text-secondary ml-auto">
        <span>{first}</span> <span>{operator}</span> <span>{second}</span> <span>=</span>
      </div>
      <div className="text-text-primary mt-2 ml-auto text-3xl font-bold">{result}</div>
    </div>
  );
}

export default Item;
