import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchCard from '../components/SearchCard';
import axios from 'axios';
const SearchPage = props =>{
  const [movies, setMovies] = useState([]);
  
    React.useEffect(() => {

        async function fetchData() {
          try {
            const response = await axios.get('https://netflix-clone-backend-production-730c.up.railway.app/api/movies/get');
            setMovies(response.data.data);
          } catch (err) {
            console.error(err);
            // Handle the error, e.g., show a user-friendly message.
          }
        }
        fetchData();
      }, []); // You can add dependencies if needed.
    
    const {param} = useParams()
    const filterCondition = ((items)=> items.title.toLowerCase().includes(param.toLowerCase()))
    const filterData = movies.filter(filterCondition)

    console.log(filterData)
    return(
        <>
        <div className='flex flex-col'>
            <div className='h-52'>
                
            </div>
            
            <div className='px-10 mx-5'>
                {
                    filterData.map((movie)=>(
                        
                        <SearchCard name={movie.title} gerns={movie.gerns} des={movie.description} key={movie._id} image={movie.thumbnailURL} video={movie.videoURL}/> 
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default SearchPage;