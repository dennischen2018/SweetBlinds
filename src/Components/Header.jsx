

const Header = () => {
  return (
    <div style={{
        backgroundColor: "lightskyblue", 
        height: "80px",
        diplay: "flex",
        flexDirection: "row",
      }}>
      {/* <Image  height={130} src={sweetBlindsLogo}/> */}
      <div  style={{
        display: "inline", 
        margin: "auto", 
        height: "80px", 
        backgroundColor: "white",
        fontSize: "50",
        color: "green"
      }}>SweetBlinds.ca</div>
      <div style={{
        display: "inline", 
        margin: "0 50px", 
        height: "80px",
        fontSize: "30",
        backgroundColor: "lightcoral",
        }}>
          XXXX

      </div>
    </div>
  )
}

export default Header;