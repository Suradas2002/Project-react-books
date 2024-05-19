import { useState } from "react";
import { Link,} from "react-router-dom";

 


const Bookcard = (book:any) => {
  const ImageSingleBooks = `https://covers.openlibrary.org/b/id/${book.book.cover_id}.jpg`
  const URLBookSingle = book.book.id.slice(7)
  const [saveBook,setSaveBook] = useState(book.saved)
  console.log(book.book);
  
 return (
  <div className=" max-w-xs rounded overflow-hidden shadow-lg m-4 w-[400px]  h-[500px]  bg-slate-100">
    <div className=" flex justify-end  pr-5 pt-2 hover: ">
       <button  onClick={()=>{if (saveBook ) {
            localStorage.removeItem(book.book.id.slice(7)) 
            }else{
             localStorage.setItem(book.book.id.slice(7), JSON.stringify(book));
            
            }
             setSaveBook((preIsSave:any) => !preIsSave); 
             
              
            }}> {saveBook ?  (
          <svg   viewBox="0 0 24 24" width="24" height="24">
            <path  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        ) : (
          <svg  viewBox="0 0 24 24" width="24" height="24">
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.41 3.81 8.74 3 7 3 3.58 3 1 5.42 1 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l2.45-2.23C19.6 15.36 23 12.28 23 8.5 23 5.42 20.58 3 17.5 3zM12 19.35l-1.45-1.32C5.4 14.36 3 11.39 3 8.5 3 6.5 4.5 5 6.5 5c1.54 0 3.04.99 3.57 2.36h1.87C14.96 5.99 16.46 5 18 5c2 0 3.5 1.5 3.5 3.5 0 2.89-2.4 5.86-7.55 10.53L12 19.35z"/>
          </svg>
        )} </button> 
      </div>
      <div className="justify-center items-center">
        <Link to={`/Bookdetail/${URLBookSingle}`}>
        <div >
          <img className=" max-w-[200px] h-[300px] mr-auto ml-auto p-3 " src={ImageSingleBooks} alt="Book cover" />
          <div className="px-6 ">
            <div className="font-bold text-xl mb-2  text-black">{book.book.title}</div>
            <p className="text-gray-700 text-base">
              Author: {book.book.author}
            </p>
            <p className="text-gray-700 text-base">
              Total Edit Count: {book.book.edition_count}
            </p>
            <p className="text-gray-700 text-base">First Public Years:{book.book.first_publish_year}</p>
            </div>
          </div>        
        </Link>
      </div>
      
    
  </div>
    
  );
};
export default Bookcard