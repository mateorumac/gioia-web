import Header from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "../styles/layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
