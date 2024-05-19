import { SearchForm } from "../../page/SearchForm/SearchForm"
import Navbar from "../Navbar/navbar"



 const Header = () => {
  return (
    <div>
      <div>
          <Navbar/>
          <div >
            <div > 
                  
              <SearchForm/>
            </div>                
          </div>
      </div>

    </div>
  )
}
export default Header