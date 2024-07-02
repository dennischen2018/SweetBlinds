import { AppstoreOutlined, BorderTopOutlined, HomeOutlined, SettingOutlined, ShoppingCartOutlined, SwapOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const TopMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu mode="horizontal" 
      onClick={(key)=>{
        console.log(">>key", key)
        navigate(key.key);
      }}
      defaultSelectedKeys={[window.location.pathname]}
        items={[
          {label: "Home", key: "/", icon: <HomeOutlined/> }, 
          {label: "Zebra Blinds", key: "/zebra_blinds", icon: <BorderTopOutlined/>}, 
          {label: "Roller Blinds", key: "/roller_blinds", icon: <BorderTopOutlined/>}, 
          {label: "Shangri-La", key: "/shangri_la_blinds", icon: <BorderTopOutlined/>},
          {label: "Motorized", key: "/motorized", icon: <SettingOutlined/>},
          {label: "Measur & Install", key: "/measure_install", icon: <SwapOutlined/>},
          {label: "Gallery", key: "/gallery", icon: <AppstoreOutlined/>},
          {label: "Customize", key: "/shopping", icon: <ShoppingCartOutlined/>}
        ]}>
    </Menu>
      
  )
}

export default TopMenu;