import React from "react";
import { Container } from "react-bootstrap";
import {TfiAngleRight} from "react-icons/tfi";


const HerobannerComponent = (props) => {
    const HeroArrays = [];
    const HeroHolders = props.HeroHolders;
    for(let Herocurrent = 0; Herocurrent < HeroHolders.length; Herocurrent++) {
        const HeroHolder = HeroHolders[Herocurrent];
        const HeroArray =  
        <div key={HeroHolder.id} className="Herocontainer">
           
      <Container>

             <div>
                <div className="Herocategories">
                    <div className="categorytxt">{HeroHolder.BrowseCategories}</div>
                    
                    <div className="">
                        <ul>
                            <li>{HeroHolder.CellPhones} <span><TfiAngleRight/></span></li>
                            <li>{HeroHolder.ComputerAccesories} <span><TfiAngleRight/></span></li>
                            <li>{HeroHolder.SmartWatches} <span><TfiAngleRight/></span></li>
                            <li>{HeroHolder.TelevisionGadgets} <span><TfiAngleRight/></span></li>
                            <li>{HeroHolder.ElectricAppliances} <span><TfiAngleRight/></span></li>
                            <li>{HeroHolder.VideoGaming} <span><TfiAngleRight/></span></li>
                        </ul>
                    </div>
                </div>
            </div>

      </Container>
        </div>  

        HeroArrays.push(HeroArray)
    }

    return(
        <div>
          {HeroArrays}
        </div>
    )
}

export const HeroList =[
    {
        id:0,
        BrowseCategories:"Browse Categories",
        CellPhones:"Cell Phones",
        ComputerAccesories:"Computer & Accesories",
        SmartWatches:"SmartWatches",
        TelevisionGadgets:"Television & Gadgets",
        ElectricAppliances:"Electric & Appliances",
        VideoGaming:"VideoGaming",
    }
]
export default HerobannerComponent;