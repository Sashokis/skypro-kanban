
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import PopExit from './components/PopExit/PopExit';
import PopBrowse from './components/PopBrowse/PopBrowse';

import PopNewCard from './components/PopNewCard/PopNewCard';
import Header from './components/Header/Header';
import Main from './components/Main/Main';



function App() {
 
  return (
    <Wrapper>
      {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        
      {/* pop-up end*/}
        <Header />
        <Main />
    </Wrapper>
  );
}

export default App;



