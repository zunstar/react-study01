import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react'
  const style = {
    backgroundColor:'black',
    color:'aqua',
    fontSize:24,
    padding:'1rem'
  }
  return (
      <>
        {/* 주석 */}
        <Hello 
          //  태그 주석
        />
        <div
          // 태그 주석2
        className='gray-box' style={style}>{name}</div>
      </>
  );
}

export default App;
