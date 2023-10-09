import './Gallary.css'
import { useEffect, useState } from "react";

const Gallary = () => {
    const [gallery, setGallery] = useState([])

    useEffect(()=>{
        fetch('/gallery.json')
        .then(res => res.json())
        .then(data=> setGallery(data))
    }, [])
    return (
        <>

         
             <p className='text-center gallery_title'>Our Gallery</p><br />
             <div className="our_gallery ">
                 {
                    gallery.map(item =>(
                       <div key={item.id}  className="gallery_img">
                            <img src={item.image} alt="" />
                       </div>
                       
                    ))
                 }
             </div><br /><br />
           
        </>
    );
};

export default Gallary;