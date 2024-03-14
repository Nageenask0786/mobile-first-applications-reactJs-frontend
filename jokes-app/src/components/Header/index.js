import { useNavigate } from 'react-router-dom'
import './index.css'

const Header = (props) => {
    const {searchInput,getSearchText} = props
    const navigate = useNavigate()
    const onChangeOfSearchInput = (event) => {
        getSearchText(event.target.value)
    }
    const onClickLogout = () => {
       
       
       navigate('/login')
      }
    return(

    <header className="header">
        <ul className="d-flex flex-row align-items-center justify-content-between header-items-container">
        <li className='item'>
        <input className = "input" type='search' value={searchInput} placeholder='Search Joke' onChange={onChangeOfSearchInput}/>
        </li>
            <li className = "item"><button type="button" className="btn btn-primary logout-button" onClick={onClickLogout}>Logout</button></li>
        </ul>
    </header>
)
    }

export default Header