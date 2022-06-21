import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
// import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            {/* <Logo /> */}
            <nav>
              <h1 style={{ color: "#0072b1" }}>FindIt</h1>
            </nav>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
