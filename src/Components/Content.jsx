import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ZebraBlinds from "./ZebraBlinds";
import RollerBlinds from "./RollerBlinds";
import ShangriLaBlinds from "./ShangriLaBlinds";
import Motorized from "./Motorized";
import MeasureInstall from "./MeasureInstall";
import Shopping from "./Shopping";

const Content = () => {
  return (
  <div style={{margin: "20px 10px"}}>
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