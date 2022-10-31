import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import {BrowserRouter , Routes,  Route} from 'react-router-dom';
import CreactWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<DayList/>} />
        <Route path="/day/:day" element={<Day/>} />
        <Route path="/create_word" element={<CreactWord/>}></Route>
        <Route path="/create_day" element={<CreateDay/>}></Route>
        <Route path="/:" element={<EmptyPage/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
