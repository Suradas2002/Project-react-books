import { useParams } from "react-router-dom"
import Navbar from "../Navbar/navbar"
import { useEffect, useState } from "react"
import axios from "axios"

 const Bookdetail = () => {
    const {bookSingle} = useParams() 
    const [bookData,setBookData] = useState(Object)
    const [bookImageData,setBookImageData] = useState("")
    const URLbooksingle =  `https://openlibrary.org/works/${bookSingle}.json`
   
    

    
    
    const callData = async (bookSingle:any) => {
    try {
      const response = await axios.get(URLbooksingle);
      
      const data = response.data
      
      
      // console.log(data.covers);
      // console.log(data.description);
      if (data ) {
        setBookData(data)
        const bookImage = `https://covers.openlibrary.org/b/id/${data.covers[0]}.jpg`;
        setBookImageData(bookImage);
        console.log(data.covers[0]);
        
        
        
      }
      else{
        console.log("Data not found");
      }
  
    } catch (error) {
      console.error(error);
    }
  };
    useEffect(() => {
    if (bookSingle) callData(bookSingle);
  }, [bookSingle]); 
   
  
      
  return (
    <div  > 
  <Navbar />
  <div className="flex flex-col md:flex-row gap-4 justify-center items-center p-10 w-full" >
    <div className="aspect-w-1 aspect-h-1 md:col-span-1 flex items-center justify-center">
      <img className="object-cover max-w-[500px] h-[auto]" src={bookImageData} alt="Book cover" />
    </div>
    <div className="max-w-[500px] flex flex-col items-start justify-center">
      <div className="font-bold text-2xl mb-2 ">{bookData?.title}</div>
      <div className="text-gray-700 mb-4 font-bold text-xl">{bookData?.descriptions ? bookData.descriptions : "No descriptions"}</div>
      <div className="text-gray-700 mb-2">
        <span className="font-bold">Subject Places:</span> {bookData?.subject_places ? bookData.subject_places : "No subject places found"}
      </div>
      <div className="text-gray-700 mb-2">
        <span className="font-bold">Subject Times:</span> {bookData?.subject_times ? bookData.subject_times : "No subject time found"}
      </div>
      <div className="text-gray-700 mb-2 w-[500px]">
        <span className="font-bold ">Subject:</span> {bookData?.subjects? bookData.subjects.join(", ") : "No subject"}
      </div>
    </div>
  </div>
</div>

  )
}
export  default Bookdetail