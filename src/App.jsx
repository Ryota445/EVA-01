import React, { useState } from 'react';
import { BrowserRouter , Routes ,Route ,Link} from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  IdcardOutlined,
  
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu,  Button ,theme } from 'antd';

// component
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
// page
import HomePage from './pages/HomePage';
import ManageInventoryMain from './pages/ManageInventoryMain';
import MaintenanceInventoryMain from './pages/MaintenanceInventoryMain'
import DisposeMain from './pages/DisposeMain';
import ReportCheckInventory from './pages/ReportCheckInventory'
import ReportAll from './pages/ReportAll'
import AddInformationCompany from './pages/AddInformationCompany'
import AddInformationTeacher from './pages/AddInformationTeacher'


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}



const items = [
  getItem('หน้าหลัก', '1', <Link to="/"><PieChartOutlined /></Link>),
  getItem('ครุภัณฑ์', 'sub1', <DesktopOutlined />, [
      getItem('จัดการครุภัณฑ์', '3',<Link to="/manageInventory"></Link>),
      getItem('การบำรุงรักษา', '4' ,<Link to="/maintenanceInventory"></Link>),
      getItem('การทำจำหน่าย', '5' ,<Link to="/disposeMain"></Link>),
    ]),
    getItem('ทำรายงาน', 'sub2', <FileOutlined />, [getItem('ทำรายงานตรวจเช็คครุภัณฑ์', '6',<Link to="/ReportCheckInventory"></Link>), getItem('นำข้อมูลออก', '8',<Link to="/ReportAll"></Link>)]),
    getItem('เพิ่มข้อมูลอาจารย์', '10', <Link to="/AddInformationTeacher"><IdcardOutlined /></Link>),
    getItem('เพิ่มข้อมูลบริษัท', '9', <Link to="/AddInformationCompany"><TeamOutlined /></Link>),
    getItem('Logout', '2', <Link><UserOutlined /></Link>),
];

  function App() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  


  return (
    <BrowserRouter>
    
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />

      {/* Button change theme */}
      <div className="absolute bottom-0 left-0 w-full p-4 shadow-md">
        <label className="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="white" /> {/* ปรับเพิ่ม stroke="white" ที่นี่ */}
          </svg>
          <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="white" /> {/* ปรับเพิ่ม stroke="white" ที่นี่ */}
          </svg>
        </label>
      </div>
    </Sider>

      <Layout>
        
      <Header
          style={{
              padding: 0,
              background: colorBgContainer,
            }}
            >
           <NavComponent collapsed={collapsed} setCollapsed={setCollapsed} />

        </Header>
      
      





        <Content
          style={{
            margin: '0 16px',
          }}
        >

        

          <div className="text-sm breadcrumbs" style={{
              margin: '20px 0',
            }}>
            <ul>
              <li><a>ระบบSAP</a></li> 
              <li><a>ระบบจัดการครุภัณฑ์</a></li> 
              <li>หน้าหลัก</li>
            </ul>
          </div>

          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
          

            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/manageInventory" element={<ManageInventoryMain/>}></Route>
                <Route path="/maintenanceInventory" element={<MaintenanceInventoryMain/>}></Route>
                <Route path="/disposeMain" element={<DisposeMain/>}></Route>
                <Route path="/ReportCheckInventory" element={<ReportCheckInventory/>}></Route>
                <Route path="/ReportAll" element={<ReportAll/>}></Route>
                <Route path="/AddInformationCompany" element={<AddInformationCompany/>}></Route>
                <Route path="/AddInformationTeacher" element={<AddInformationTeacher/>}></Route>
            </Routes>


          </div>
        </Content>
        
           <FooterComponent/>
       
      </Layout>
    </Layout>


    </BrowserRouter>
  )
}

export default App
