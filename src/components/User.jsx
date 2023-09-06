import { useEffect, useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  const [reach, setReach] = useState(false);

  const handelerIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log(1);
    setReach(!reach);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Number is {reach ? "even" : "odd"}</h2>
      <button onClick={handelerIncrement}>Increment</button>
    </div>
  );
};

export default User;
