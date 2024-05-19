
import LogoImage from "/public/images/LOGO.png"
import Menu from "../../Menu/Menu"
import { Link } from "react-router-dom"

 const Navbar = () => {
  


  return (
    <div className="flex flex-row items-center justify-between bg-gray-900 py-4 px-6">
    <Link className='text-center text-lg ' to={'/'}><img src={LogoImage} alt="" className="w-20 h-auto" /></Link>
    <div className="text-white text-lg font-bold ">BOOKHUB</div>
    <div className="flex items-center space-x-4 text-white">
        <Menu />
    </div>
</div>
  )
}
export default Navbar