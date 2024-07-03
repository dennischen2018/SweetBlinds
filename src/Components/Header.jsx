

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
        // fontSize: "50",
        // color: "green"
      }}>
        
        {/* <span style={{color:"#de4c28"}}>Sweet</span>
        <span style={{color: "#4ad642"}}>Blinds</span>
        <span style={{color: "green",fontSize:"30"}}>.ca</span> */}
        <span style={{color: "green",fontSize:"50", textShadow: "#7a7a7a 1px 1px 2px"}}>SweetBlinds.ca</span>

      </div>
      <div style={{
        display: "inline", 
        margin: "0 50px", 
 
        height: "80px",
        fontSize: "30",
        backgroundColor: "",
        }}>
          <span style={{fontFamily: "Segoe Script", color: "grey", fontSize: "24", marginLeft: "50px"}}>Factory Direct Sale</span>

      </div>
    </div>
  )
}


export default Header;