
import React, { useReducer } from 'react';

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return state + 1 ;

    case 'DECREMENT':
      return state - 1;

    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

function Counter() {

  const [count, dispatch] = useReducer(reducer, 0);

  // 최적화를 위해 함수형 업데이트로 작성
  function increaseCount() {
    dispatch({
      type: 'INCREMENT'
    });
  }

  const decreaseCount = () => {
    dispatch({
      type: 'DECREMENT'
    });
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
