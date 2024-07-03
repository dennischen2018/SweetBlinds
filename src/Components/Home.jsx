import { Card, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import blinds1 from "../assets/pictures/blinds1.jpg"

const Home = () => {
  
  const cardCss = {
    width:280,
    margin: "10"
  }
  return (
    <>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "skyblue"
    }}> 
    
      <Typography>Type of Blinds</Typography> 
    
    </div>

    <div style={{
      margin: "5px 0px",
      display: "flex",
      justifyContent: "space-between",
      background: "lightgrey",
    }}>
      <Card
        hoverable
        title="Zebra Blinds"
        extra="50% off"
        bordered={true}
        style={cardCss}
        cover={<img alt="zebra blinds" src={blinds1}/>}
        
      >
      <Meta title="50% off" />
      </Card>
      <Card
        hoverable
        title="Roller Blinds"
        extra={<div style={{color:"red"}}>80% off</div>}
        style={cardCss}
        cover={<img alt="Roller blinds" src={blinds1}/>}
        
      >
      <Meta title="Roller Blinds" />
      </Card>
      <Card
        title="Shangri-La Blinds"
        extra="50% off"
        hoverable
        style={cardCss}
        cover={<img alt="Shangri-La Blinds" src={blinds1}/>}
        
      >
      <Meta title="Shangri-La Blinds" />
      </Card>
      <Card
        title="Honey Cohm"
        extra="50% off"
        hoverable
        style={cardCss}
        cover={<img alt="zebra blinds" src={blinds1}/>}
        
      >
      <Meta title="Honey Cohm Blinds" />
      </Card>
    </div>
    </>
  )
}

export default Home;