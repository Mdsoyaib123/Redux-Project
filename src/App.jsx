import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./Component/counter";
import { increment } from "./features/counters/counterSlice";

function App() {
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const totleCount = counters.reduce(
    (sum, current) => sum + current.value,
    0
  );
  const handleIncrement = (id) => {
   
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {

    dispatch(increment(id));
  };
  return (
    <>
      {counters.map((c) => (
        <Counter
          key={c.id}
          count={c.value}
          onHandleIncrement={()=>handleIncrement(c.id)}
          onHandleDecrement={()=>handleDecrement(c.id)}
        ></Counter>
      ))}
      <div className=" bg-gray-800 px-8 py-8 rounded-lg mt-2">
        <h1 className="text-2xl ">Total count : {totleCount}</h1>
      </div>
    </>
  );
}

export default App;
