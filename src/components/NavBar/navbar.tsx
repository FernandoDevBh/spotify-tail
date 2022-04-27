import MenuItem, { MenuItemProps } from "./menu-item"

const menuItems: MenuItemProps[] = [
  { path: '/', text: 'Premium', isDivider: false },
  { path: '/', text: 'Ajuda', isDivider: false },
  { path: '/', text: 'Baixar', isDivider: false },
  { path: '', text: '', isDivider: true },
  { path: '/', text: 'Inscrever-se', isDivider: false },
  { path: '/', text: 'Log In', isDivider: false },
]

const NavBar = () => (
  <div className="items-end flex-1 text-white font-bold hidden md:flex">
    <nav className="flex-1">
      <ul className="flex justify-end flex-1">
        {menuItems.map((item, index) => <MenuItem key={index} text={item.text} path={item.path} isDivider={item.isDivider} />)}
      </ul>
    </nav>
  </div>
)

export default NavBar