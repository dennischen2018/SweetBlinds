import { Carousel, Image } from "antd";
import zebra from "../assets/pictures/carousel/zebra-room.png";
import roller from "../assets/pictures/carousel/roller-room.png";
import dream from "../assets/pictures/carousel/dream-curtain.png";
import shangrila from "../assets/pictures/carousel/shangrila.png";

const SBCarousel = () => {
  // const carouseCss = {
  //   margin: 0,
  //   height: '160px',
  //   color: 'blue',
  //   lineHeight: '120px',
  //   textAlign: 'center',
  //   background: '#ffff44',
   
  // }

  return (
    <div style={{borderColor: "red", background: "grey", padding: "1"}}>
    <Carousel 
      autoplay 
      autoplaySpeed={8000}
      dots={true}
      dotPosition="bottom"
      pauseOnDotsHover={true}>
      <div>
        <Image preview={false} height={420} width={1200}  src={zebra} />xxxx
      </div>
      <div>
        <Image preview={false} height={420} width={1200}  src={roller} />
      </div>
      <div>
        <Image preview={false} height={420} width={1200}  src={shangrila} >
          
        </Image>
      </div>
      <div>
        <Image preview={false} height={420} width={1200}  src={dream} />
      </div>

    </Carousel>
    </div>
  )

}

export default SBCarousel;
