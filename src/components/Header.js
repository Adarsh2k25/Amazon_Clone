import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import './header.scss';
import React from 'react';
const Header=  ()=> {
  return (
    <header className="header">
     <div className="header__logo">
     <span className="header__search">
     <img src="./amz1.png"/>;
     </span>
     </div>

     <div className="header__search">
        <input/>
        <SearchIcon fontSize='small' className='header__searchIcon'/>

     </div>
     <div className="header__nav">
        <div className="header__nav__user">
            <span className=" header__nav__lineOne">Hello Guest</span>
            <span className=" header__nav__lineTwo">Sign In</span>
        </div>
           <div className ="header__nav__itemBasket">
            <AddShoppingCartIcon  fontSize='small'/> &nbsp; cart 
        </div>
     
     </div>
   </header>
  )
}
export default Header;
