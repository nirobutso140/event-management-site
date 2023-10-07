import './Service.css'
import { useEffect, useState } from "react";


const Services = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('/socialEvent.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (
        <>
            <h1 className='text-center service_title'>Our Services</h1>
            <div className="services">
                
                {
                    service.map(card => (
                      <div className="card card-compact w-80 h-96 bg-base-100 shadow-xl" key={card.id}>
                        <figure><img src={card.image} alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{card.name}</h2>
                          <p className='card_price'>{card.price}</p>
                          <p className='card_desc'>{card.shortDescription}</p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-secondary">Details</button>
                          </div>
                        </div>
                      </div>
                    
                    ))
                }
            </div >
        </>
    );
};

export default Services;