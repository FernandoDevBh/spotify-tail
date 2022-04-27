interface ItemListProps {
  isSocialMedia?: boolean
  isPolicy?: boolean
}

const ItemList = ({ children, isSocialMedia, isPolicy }: React.PropsWithChildren<ItemListProps>) => {
  let className = 'mb-5'
  
  if(isSocialMedia) {
    className = 'flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2'
  }

  if (isPolicy) {
    className = 'inline-block text-xs text-gray-600 mr-4'
  }
  
  return (
    <li className={className}>
      {children}
    </li>
  )
}  

export default ItemList