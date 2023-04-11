import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'

const Nav = ({ onSearch, setAccess }) => {

   

    const handleLogOut = () => {
        setAccess(false)
        
    }
 
    return (
        <nav>
        <div>
            <SearchBar onSearch={onSearch}/>
            <button><Link to={'/about'}>About</Link></button>
            <button><Link to={'/home'}>Home</Link></button>
        </div>
            <button onClick={handleLogOut}>Log Out</button>
            </nav>
    )
}

export default Nav;