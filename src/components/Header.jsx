import { useState } from "react";
import { logou } from "../assets";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import Container from "./Container";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";


const bottomNavigation= [

  {title: "Inicio", link:"/"},
  {title: "Loja", link:"product"},
  {title: "Carrinho", link:"cart"},
  {title: "Pedidos", link:"orders"},
  {title: "Minha Conta", link:"profile"},
  {title: "Blog", link:"/blog"},
  
]


const Header = () => {

  const [searchText, setSearchText] = useState('');



  return (
    <div className="w-full bg-whiteText">
      <div className="max-x-screen-xl mx-auto h-20 flex items-center justify-around px-4 lg:px-0">
        <div className="bg-red-500">
        <Link to="/">
          <img src={logou} alt="logo" className="w-44 cursor-pointer" />
        </Link> 
        </div>
        <div className="hidden md:inline-flex max-w-3xl w-full relative ">
          <input
            className={`w-full flex-1 rounded-full p-3 px-5
              text-gray-900 outline-none text-lg placeholder:text-base
              placeholder:tracking-wide shadow-sm ring-1 ring-inset 
              placeholder:text-gray-400 placeholder:font-normal focus:ring-2 focus:text-darkText
              pe-[60px]`}
            type="search"
            placeholder="digite aqui para pesquisar..."
            onChange={(e) => {setSearchText(e.target.value)}}
            value={searchText}
            />
            <IoSearchOutline className="text-gray-400 absolute top-1.5 right-4 cursor-pointer" size={34}/>
        </div>
        <div className="flex items-center text-2xl gap-x-6">
          <Link to={'/profile'}>
          <FiUser size={34} className="hover:text-skyText duration-300 cursor-pointer"/>
          </Link>
          <Link to={"/favorite"} className="relative block">
            <FiStar className="hover:text-yellow-400 duration-300 cursor-pointer" size={34}/>
          <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-1 text-[14px] rounded-full w-4 h-4">0</span>
          </Link>
          <Link to={'/cart'} className="relative block">
            <FiShoppingBag  className="hover:text-sky-500 duration-300 cursor-pointer" size={34}/>
          <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-1 text-[14px] rounded-full w-4 h-4">0</span>
          </Link>
        </div>
        
      </div>
      <div className="w-full bg-darkText text-whiteText">
        <Container className="py-2 max-w-4xl flex items-center justify-between gap-5">
          <p className="flex items-center gap-2">Select Category
          <FaChevronDown/>
          </p>
          {
            bottomNavigation.map(({title, link})=>(
              <Link to={link} className="uppercase cursor-pointer hidden md:inline-flex text-sm font-semibold text-white/90 hover: text-whiteText duration-200 relative overflow-hidden group" key={title}>
                {title}
                <span className="inline-flex w-full h-[1px] bg-white absolute bottom-0 left-0 transform translate-x-[105%] group-hover:translate-x-0 duration-300"></span>
              </Link>
            ))
          }
        </Container>
      </div>
    </div>
  );
};

export default Header;
