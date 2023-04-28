import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards.jsx';
import Detail from './components/Detail';
import About from './components/About';
import Form from './components/Form';
import Favorites from './components/Favorites';

//  const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
//  const API_KEY = '8271722406e1.5b836459e80c3f4f56d9';


// const email = 'francoC@gmail.com';
// const password = 'pepito123';


function App() {

   const [characters, setCharacters] = useState ([]);
   const location = useLocation();
   const [access, setAccess] = useState(false)
   const navigate = useNavigate();

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/onSearch/${id}`)
      // axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFilter = characters?.filter(character => character.id !== id)
      setCharacters(charactersFilter)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
            
         }
         
         <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/favorites' element={<Favorites/>}/>

         </Routes>
      </div>
   );
}

export default App;
