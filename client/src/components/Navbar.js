import react from "react";
import { NavLink } from 'react-router-dom';


function Navbar() {


    return (

        <div className="w-full h-32 bg- flex items-center">
            <img
                src="https://i.ibb.co/8KcnwLN/mario-masonry-contracting-high-resolution-logo-transparent.png"
                alt="logo"
                title="business logo"
                className="w-1/4 ml-8"
            />
            <div className="ml-auto mr-8 flex items-center space-x-4">
                <NavLink to="/gallery"className="text-black text-2xl hover:bg-zinc-700">Gallery</NavLink>
                <NavLink to="/services" className="text-black text-2xl hover:bg-zinc-700" >Services</NavLink>
                <NavLink to="/about" className="text-black text-2xl hover:bg-zinc-700" >About</NavLink>
                <NavLink to="/about" className="text-black text-2xl hover:bg-zinc-700" >Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar; 