export interface MenuItemProps {
  path?: string
  text?: string,
  isDivider: boolean
}

const MenuItem = ({ isDivider, path, text }: MenuItemProps) => {
  if (isDivider)
    return <span className='border-r border-white'></span>

  return (
    <li className='px-4'>
      <a className='hover:text-hoverspt text-sm' href={path}>{text}</a>
    </li>
  )
}

export default MenuItem