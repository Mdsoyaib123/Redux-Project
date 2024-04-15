import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./Component/counter";
import { decrement, increment } from "./features/counters/counterSlice";
import { getData } from "./features/DataFaching/dataFachingSlice";

function App() {
  const counters = useSelector((state) => state.counter);
  const FetchData = useSelector((state) => state.dataFachingSlice);
  const dispatch = useDispatch();
  console.log(FetchData);
  const totleCount = counters.reduce((sum, current) => sum + current.value, 0);
  const handleIncrement = (id) => {
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };
  const handleFetchData = () => {
    dispatch(getData());
  };
  return (
    <div className=" ">
      <div className=" bg-gray-800 px-16 py-8 rounded-lg mt-2">
        <h1 className="text-2xl ">Total count : {totleCount}</h1>
      </div>
      <div className="mt-2 flex justify-center gap-2">
        {counters.map((c) => (
          <Counter
            key={c.id}
            count={c.value}
            onHandleIncrement={() => handleIncrement(c.id)}
            onHandleDecrement={() => handleDecrement(c.id)}
          ></Counter>
        ))}
      </div>
        <h1 className="mt-10 mb-2 text-xl">Data Fetching using Redux-Toolkit</h1>
      <div className=" bg-gray-800 px-16 py-8 rounded-lg">
        <button
          className="px-4 py-2 rounded bg-green-800 mt-4"
          onClick={handleFetchData}
        >
          Get Fetch Data{" "}
        </button>
        {
          FetchData.isLoading === true ? <h1 className="py-1 text-lg pt-2">Loading....</h1> : ''
        }
        {FetchData?.user?.map((data) => (
          <h1 className="py-1 text-lg pt-2" key={data.id}>
            {data.name}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default App;
