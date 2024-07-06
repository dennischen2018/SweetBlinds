import { AppstoreOutlined, BorderTopOutlined, HomeOutlined, QuestionCircleOutlined, SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const TopMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu mode="horizontal" 
      theme="light"
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
          {label: "Gallery", key: "/gallery", icon: <AppstoreOutlined/>},
          {label: "Shopping", key: "/shopping", icon: <ShoppingCartOutlined/>},
          {label: "Help Centre", key: "/measure_install", icon: <QuestionCircleOutlined/>},
        ]}>
    </Menu>
  )
}

export default TopMenu;