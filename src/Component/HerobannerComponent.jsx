import React from "react";
import { Container } from "react-bootstrap";
import {TfiAngleRight} from "react-icons/tfi";
import {BiMenuAltLeft} from "react-icons/bi"


const HerobannerComponent = (props) => {
    const HeroArrays = [];
    const HeroHolders = props.HeroHolders;
    for(let Herocurrent = 0; Herocurrent < HeroHolders.length; Herocurrent++) {
        const HeroHolder = HeroHolders[Herocurrent];
        const HeroArray =  
        <div key={HeroHolder.id} className="Herocontainer">
           
      <Container>

             <div className="Heroflex">
                <div className="Herocategories">
                    <div className="categorytxt"><BiMenuAltLeft size="30"/>{HeroHolder.BrowseCategories}</div>
                    
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


                <div className="Summersale">
                    <img src={HeroHolder.CenterImg} alt="Summer sale"/>
                </div>

                <div className="ImageSet">
                    <div className="firstImg">
                        <img src={HeroHolder.FirstImg} alt="firstImg"/>
                    </div>

                    <div className="secondImg">
                        <img src={HeroHolder.SecondImg} alt="secondImg"/>
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
        CenterImg:"./assets/summer sale.png",
        FirstImg:"./assets/Level1.png",
        SecondImg:"./assets/Level2.png"
    },
]
export default HerobannerComponent;