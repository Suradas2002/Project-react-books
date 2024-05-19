import { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";
;

 
 const Favoritebook = () => {
  const [favObj, setFavobj] = useState([]);
  
  function getFavObj() {
    let arr: any = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key  != null) {
        const item = localStorage.getItem(key);
        if (item != null) {
          arr.push(JSON.parse(item));
        }
      }
    }
    setFavobj(arr);
  }

  console.log(favObj);

  useEffect(() => {
    getFavObj();
  }, []);
  
  
  return (
    <div >
        <Navbar/>
        <div className=" flex justify-center items-center font-bold text-2xl pt-2  ">Favorite Books</div>
        <div className="h-full grid grid-cols-5 text-center p-3 gap-2 overflow-y-auto" >
          {favObj.map((book:any,i:number)=>{return(
            <div key={i} className="max-w-xs rounded overflow-hidden shadow-lg m-4 w-[400px]  h-[450px] bg-slate-100">
              <div className="flex justify-end  pr-5 pt-2" >
                <button
                  onClick={() => {
                    localStorage.removeItem(book.book.id.slice(7));
                    getFavObj();
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                      <path fill="#000" d="M20.954 5.307c.22-.434.208-.956-.043-1.376-.25-.42-.69-.677-1.15-.677H17V3c0-.552-.448-1-1-1H8c-.552 0-1 .448-1 1v.254H4.24c-.464 0-.913.257-1.15.677-.25.42-.263.942-.043 1.376l1.876 4.34c.094.217.24.41.424.573V21c0 .552.448 1 1 1h12c.552 0 1-.448 1-1V9.22c.184-.163.33-.356.424-.573l1.876-4.34zm-2.612-.307H6.658l-.635-1.474h11.884l-.635 1.474zM15 20H9v-2h6v2zm-2-8.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9c0-.276.224-.5.5-.5s.5.224.5.5v2.5zm-3 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9c0-.276.224-.5.5-.5s.5.224.5.5v2.5zm6 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9c0-.276.224-.5.5-.5s.5.224.5.5v2.5z"/>
                    </svg>
              </button>
              </div>
             <div className="justify-center items-center">
              <Link to={`/Bookdetail/${book.book.id.slice(7)}`}>
              <div >
                <img className=" max-w-[200px] h-[300px] mr-auto ml-auto p-3 " src={`https://covers.openlibrary.org/b/id/${book.book.cover_id}.jpg`} alt="Book cover" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2  text-black">{book.book.title}</div>
                  <p className="text-gray-700 text-base">
                    Author: {book.book.author}
                  </p>
                  <p className="text-gray-700 text-base">
                    Total Edit Count: {book.book.edition_count}
                  </p>
                  
                  </div>
                </div>        
        </Link>
      </div> 
              
            </div>
          )})}
        </div>  
    </div>
  )
}

export default Favoritebook
