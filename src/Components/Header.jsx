import { PhoneOutlined } from "@ant-design/icons";


const Header = () => {
  return (
    <div style={{
        minWidth: "1000px",
        backgroundColor: "", 
        padding: "0",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "white white red white",
        // borderTopColor: "white",
        // borderBottomColor: "red",
        // height: "80px",
        // diplay: "flex",
        // flexDirection: "row",
      }}>
      {/* <Image  height={130} src={sweetBlindsLogo}/> */}
      <div  style={{
        display: "inline", 
        margin: "0", 
        height: "80px", 
        backgroundColor: "white",

      }}>
        
        <span style={{color: "green",fontSize:"56", textShadow: "#7a7a7a 1px 1px 2px"}}>
          SweetBlinds.ca
        </span>

      </div>

      <div style={{
        display: "inline", 
        margin: "0 10px", 
        height: "80px",
        fontSize: "30",
        backgroundColor: "",
        }}>
          <span style={{fontFamily: "Segoe Script", color: "grey", fontSize: "28", marginLeft: "120px"}}>Factory Direct Sale</span>
          
          <span style={{fontSize: 18, marginLeft: 140}}><PhoneOutlined/>: 416-835-2899</span>
          <span style={{fontSize: 18, marginLeft: 20}}><PhoneOutlined/>: 416-858-1518</span>
      </div>
    </div>
  )
}


export default Header;