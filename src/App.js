import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Detail, { id } from './components/Detail';
import About from './components/About';
import Form from './components/Form'




const email = 'francoC@gmail.com';
const password = 'pepito123';


function App() {

   const [characters, setCharacters] = useState ([]);
   const location = useLocation();
   const [access, setAccess] = useState(false)
   const navigate = useNavigate();

   const login = (userData) => {
      if(userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
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
      const charactersFilter = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFilter)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/'
            ? <Nav onSearch={onSearch}/>
            : null
         }
         
         <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/' element={<Form login={login}/>}/>

         </Routes>
      </div>
   );
}

export default App;
