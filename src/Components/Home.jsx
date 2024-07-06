import { Card, Rate, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import blinds1 from "../assets/pictures/blinds1.jpg";
import zebra_blinds from "../assets/pictures/zebra-window.avif";
import roller_blinds from "../assets/pictures/roller-1.avif";
import shangri_la from "../assets/pictures/shangri-la-1.png";
import dream_curtain from "../assets/pictures/dream-curtain-2.png";
import Title from "antd/es/typography/Title";



const Home = () => {
  
  const cardCss = {
    width:290,
    margin: "10 5",
    padding: "0"
  }

  // const {Title} = Typography;

  return (
    <>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "skyblue"
    }}> 
    
      {/* <Typography>Type of Blinds</Typography>  */}
    
    </div>

    <div style={{
      margin: "0px 0px",
      display: "flex",
      justifyContent: "space-between",
      background: "lightgrey",
    }}>
      <Card
        hoverable
        title={<div style={{color: "#0958d9"}}>Zebra Blinds</div>}
        extra={<div style={{color:"red"}}>50% off</div>}
        bordered={true}
        style={cardCss}
        cover={<img style={{width:291}} alt="zebra blinds" src={zebra_blinds}/>}
        
      >
       <div style={{textAlign: "center"}}><Rate disabled allowHalf defaultValue={5} /></div>
      </Card>
      <Card
        hoverable
        title={<div style={{color: "#0958d9"}}>Roller Blinds</div>}
        extra={<div style={{color:"red"}}>60% off</div>}
        style={cardCss}
        cover={<img style={{width:290}} alt="Roller blinds" src={roller_blinds}/>}
      >
        <div style={{textAlign: "center"}}><Rate disabled allowHalf defaultValue={4.5} /></div>
      </Card>
      <Card
        title={<div style={{color: "#0958d9"}}>Shangri-La Blinds</div>} 
        extra={<div style={{color:"red"}}>50% off</div>}
        hoverable
        style={cardCss}
        cover={<img style={{width:290, height: 290}} alt="Shangri-La Blinds" src={shangri_la}/>}
      >
       <div style={{textAlign: "center"}}><Rate disabled allowHalf defaultValue={4.5} /></div>
      </Card>
      <Card
        title={<div style={{color: "#0958d9"}}>Dream Curtain</div>}
        extra={<div style={{color:"red"}}>50% off</div>}
        hoverable
        style={cardCss}
        cover={<img style={{width:290, height: 289}} alt="Dream Curtain" src={dream_curtain}/>}
        
      >
       <div style={{textAlign: "center"}}><Rate disabled allowHalf defaultValue={4} /></div>
      </Card>
    </div>
    </>
  )
}

export default Home;