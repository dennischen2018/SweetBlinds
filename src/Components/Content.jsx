import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ZebraBlinds from "./ZebraBlinds";
import RollerBlinds from "./RollerBlinds";
import ShangriLaBlinds from "./ShangriLaBlinds";
import Motorized from "./Motorized";
import MeasureInstall from "./MeasureInstall";
import Shopping from "./Shopping";

import SBCarousel from "./SBCarousel";

const Content = () => {


  return (
  <div style={{margin: "5px 0px"}}>
    <div style={{
          height: "40px", backgroundColor: "#ff5555", 
          display: "flex", justifyContent: "center", alignItems: "center"
        }}>
      <span style={{fontSize:"20px", fontWeight: "bold", color: "white"}}>
        Great Style, High Quality, Low Prices!
      </span>
    </div>
    <div style={{height: "2px", color: "blue", width: "100%", background: "blue"}}>
    </div>

    <div style={{height: "180px"}}>
      <SBCarousel></SBCarousel>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/zebra_blinds" element={<ZebraBlinds/>}></Route>
      <Route path="/roller_blinds" element={<RollerBlinds/>}></Route>
      <Route path="/shangri_la_blinds" element={<ShangriLaBlinds/>}></Route>
      <Route path="/motorized" element={<Motorized/>}></Route>
      <Route path="/measure_install" element={<MeasureInstall/>}></Route>
      <Route path="/shopping" element={<Shopping/>}></Route>
    </Routes>
  </div>
  )
}

export default Content;