/* eslint-disable react/prop-types */

const Counter = ({onHandleIncrement,onHandleDecrement,count}) => {
    return (
        <div className="  bg-gray-800 px-8 py-8 rounded-lg mb-2">
        <h1 className="flex justify-center mb-5 text-lg">{count}</h1>
        <div className="flex gap-5 ">
          <button onClick={onHandleIncrement} className="px-4 py-2 rounded bg-green-800">Increment</button>
          <button onClick={onHandleDecrement} className="px-4 py-2 rounded bg-red-800">Decrement</button>
        </div>
      </div>
    );
};

export default Counter;