import { Carousel } from "antd";

const SBCarousel = () => {
  const carouseCss = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#eee',
  }

  return (
    <Carousel autoplay>
      <div>
        <div style={carouseCss}>11111</div>
      </div>
      <div>
        <div style={carouseCss}>222222</div>
      </div>
      <div>
        <div style={carouseCss}>333333</div>
      </div>
    </Carousel>
  )

}

export default SBCarousel;
