
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // 최적화를 위해 함수형 업데이트로 작성
  function increaseCount() {
    setCount(number => number + 1);
  }

  const decreaseCount = () => {
    setCount(number => number - 1);
  };

  return (
    <div>
      <h1>카운터</h1>
      <p>{count}</p>
      <button onClick={increaseCount}>증가</button>
      <button onClick={decreaseCount}>감소</button>
    </div>
  );
}

export default Counter;
