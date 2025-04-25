import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import MessagesContainer from './components/Messages/MessagesContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';




function App(props) {

  return (
    <BrowserRouter>
      <div class="wrapper">
        <div class="container">

          <header class="header">
            <Header />
          </header>

          <main class="main-content">

            <Sidebar />
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/messages" element={<MessagesContainer />} />
              <Route path="/users" element={<UsersContainer />} />
            </Routes>

          </main>

          <Footer />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

