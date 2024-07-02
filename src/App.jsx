
import Header from './Components/Header';
import Footer from './Components/Footer';
import TopMenu from './Components/TopMenu';
import Content from './Components/Content';


const App = () => {

  return (
    <div style={{
        width: "90%", 
        // margin: "5px auto",
        // display: "flex",
        // flexDirection: "column",
        // flex: 1,
        // height: "100vh"
      }}>
      <Header/>
      <TopMenu/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
