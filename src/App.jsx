
import './App.css';
import Header from './components/header/Header';
import WithoutStatus from './components/task lists/withoutStatus/WithoutStatus';
import NeedToBeDone from './components/task lists/NeedToBeDone/NeedToBeDone';
import AtWork from './components/task lists/AtWork/AtWork';
import Testing from './components/task lists/testing/testing';
import Ready from './components/task lists/Ready/Ready';
import GoOut from './components/GoOut/GoOut';
import CreatTask from './components/CreatTask/CreatTask';
import ChangeTask from './components/ChangeTask/ChangeTask';

function App() {
 
  return (
    <div className="wrapper">
  {/* pop-up start*/}
  <GoOut />
  <CreatTask />
  <ChangeTask />
  {/* pop-up end*/}
  <Header />
  <main className="main">
    <div className="container">
      <div className="main__block">
        <div className="main__content">
          <WithoutStatus />
          <NeedToBeDone />
          <AtWork />
          <Testing />
          <Ready />
        </div>
      </div>
    </div>
  </main>
</div>

  );
}

export default App;
