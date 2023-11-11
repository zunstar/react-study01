import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
 
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
