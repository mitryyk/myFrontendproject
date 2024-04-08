import '../../w3.css';

export const DataTable = ({ protocol, protocolDate }: { protocol: string; protocolDate: Date }) => {
  let i: number = 0;
  const clickHandler = () => {
    console.log(i++);
  };
  return (
    <button onClick={clickHandler} className="w3-button w3-black">
      {protocol}
    </button>
  );
};
