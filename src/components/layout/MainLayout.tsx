import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";


const { Content, Header } = Layout;

export default function MainLayout() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* //The main component should go here  */}
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
