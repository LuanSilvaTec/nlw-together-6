import './App.css';
//import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom'


import { AuthContextProvider } from '../src/contexts/AuthContext'





function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
