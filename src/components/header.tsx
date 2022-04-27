import BarsMenu from "./NavBar/bars-menu";
import LogoMain from "./NavBar/logo-main";
import NavBar from "./NavBar/navbar";

const Header = () => (
  <header>
    <div className='flex fixed bg-black w-full px-3 md:px-20 py-4'>
      <div className="container flex items-center mx-auto">
        <LogoMain />
        <BarsMenu />
        <NavBar />
      </div>
    </div>
  </header>
)

export default Header