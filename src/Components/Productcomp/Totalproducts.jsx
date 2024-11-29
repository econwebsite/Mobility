import React from 'react';
import ShelfKey from "./ShelfKeyComp/ShelfKey"
import Trackwork from "./Trackworkscomp/Trackwork"
import SolutionComp from "./SolutionComponent/SolutionComp"
import ShelfVisible from "./ShelfVisibleComp/ShelfVisible"
import Homevideo from './video comp/Homevideo';
import AiProvider from './AiProviderscomp/AiProvider';
import ContactUs from "../ContactUs/ContactUs"
const Totalproducts = () => {
    return (
        <div>
            <ShelfVisible/>
            <Homevideo/>
            <ShelfKey/>
            <Trackwork/>
            <SolutionComp/>
            <AiProvider/>
            <ContactUs/>
        </div>
    );
}

export default Totalproducts;
