import { useLoaderData, useParams } from 'react-router-dom';
import './SingleService.css'
import { useEffect, useState } from 'react';


const SingleService = () => {
     const [service, setService] = useState([]) 
     const {name, image, detailsDescription} = service

     const {id} = useParams()
     const services =  useLoaderData()
   
     useEffect(()=>{
        const singleService = services.find(service =>service.id == id)
        setService(singleService)
     }, [id, services])
        
     
    return (
        <>
            <div className="singleService">
                <img src={image} alt="" />
                <p className='details_title'>{name}</p>
                <p className='details_desc'>{detailsDescription}</p>
            </div>
        </>
    );
};

export default SingleService;