import React, { useState, useMemo } from "react";

export default function App40() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const multiCountMemo = useMemo(
    function multiCount() {
        console.log("multicount")
      return count*5
    },[item]
  )
  return (
    <div style={{ marginLeft:'20px' }} >
      <h1>useMemo Hook in React</h1>
      <h2>Count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 2)}>Update count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}
