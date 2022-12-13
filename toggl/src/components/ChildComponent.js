export default function ChildComponent({ data, setClick }) {
  return (
    <div
      className="childComponent"
      onClick={() => {
        setClick(data);
      }}
    >
      <img src={data.avatar} alt="user"></img>
    </div>
  );
}
