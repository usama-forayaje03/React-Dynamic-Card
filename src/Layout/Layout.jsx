import axios from "axios";
import Gallery from "../Sections/Gallery/Gallery"
import Header from "../Sections/Header/Header"
import { useEffect } from "react";
import { useState } from "react";

function Loading() {
    return (
        <div className="w-full min-h-[400px] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>    
        </div> 
    )
}

function Layout() {
    let [data, setData] = useState([]);
    let [searchText, setSearchText] = useState('')

    useEffect(() => {
        async function getData() {
            let galleryData = await axios.get('https://course.divinecoder.com/food/random/10')
            setData(galleryData.data);
            
        } 
        getData();
    }, []);

    let ascendingHandler = () => {
        setData(item => {
            return item.toSorted((a,b) => a.name.localeCompare(b.name));
        })
        
    }
    let descendingHandler = () => {
        setData(item => {
            return item.toSorted((a,b) => b.name.localeCompare(a.name));
            
        })
    }

  return (
    <div className="w-full pb-8 min-h-screen bg-slate-300 pt-6">
      <div className="max-w-6xl m-auto pt-6 bg-white p-5 rounded shadow ">
        <Header onSearch={(test) => setSearchText(test)} onAscending={ascendingHandler} onDescending={descendingHandler}  />
        {data == 0 ? <Loading /> : <Gallery galleryItemData={
            data.filter(item => {
                return item.name.toLowerCase().includes(searchText.toLowerCase())
            }
            )
            } /> }
        
      </div>
    </div>
  )
}

export default Layout