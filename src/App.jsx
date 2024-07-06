
import Header from './Components/Header';
import Footer from './Components/Footer';
import TopMenu from './Components/TopMenu';
import Content from './Components/Content';
import SBCarousel from './Components/SBCarousel';
// import Test from './Test';


const App = () => {
  const w = window.innerWidth;
  console.log(">>window width:", w);
 
  // if (w > 768) {
    return (
      <>
      <div style={{
          width: "1200", 
          margin: "5px auto",
        }}>
        <Header/>
        <TopMenu/>
        <Content/>
        <Footer/>
      </div>
      </>
    )
  // } else {
  //   return <Test/>
  // }


  
}

export default App
