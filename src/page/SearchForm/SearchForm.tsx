import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Bookcard from '../../componants/Booklist/Bookcard';
import ReactLoading from 'react-loading';


export const SearchForm = () => {
  const BASEURL = 'https://openlibrary.org/search.json?title=';
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [value, setValue] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASEURL}${searchTerm}`);
      const { docs } = response.data;
      
      
      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle: { key: any; author_name: any; cover_i: any; edition_count: any; first_publish_year: any; title: any; }) => {
        const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;
        
        
        if (key !== undefined && author_name !== undefined && cover_i !== undefined && edition_count !== undefined && first_publish_year !== undefined && title !== undefined) {
         
          return { 
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count,
            first_publish_year,
            title
          };
        }
        
        return undefined;
      }).filter((book: undefined) => book !== undefined); 

      setBooks(newBooks);
            
        if (newBooks.length > 0) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSearchTerm(value);
    fetchBooks();
  }
  
  
  



  return (
    <div>
      <div>
        <div>
          <div className="bg-[url('/public/images/1.png')] bg-no-repeat bg-cover w-full h-[90vh] text-white">
            <div className=' text-center'>
                  <div className='flex  pl-[750px] pt-[500px]  '> 
                    <input type="text" placeholder='Search Books ......' value={value} onChange={e => setValue(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:border-blue-500 text-black" />
                      <button type="submit" className="bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none" onClick={handleSubmit}>Submit</button> 
                </div>
            </div>
            
          </div>
          {loading ? (
            <div className="flex justify-center items-center">
              <ReactLoading type="spin" color="#000" height={200} width={200} />
            </div>
          ) : (
            <div className="h-full grid grid-cols-5 text-center p-3 gap-2 overflow-y-auto bg-orange-950 ">
              {books.map((book:any ,index:number)=>{
               console.log(book.id);
                
                
                return( 
                  <Bookcard 
                    key={index}
                    book={book}
                    saved={Boolean(localStorage.getItem(book.id.slice(7)))}
                    
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};