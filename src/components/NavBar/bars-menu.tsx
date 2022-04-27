import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const BarsMenu = () => (
  <div className='flex justify-end flex-1 md:hidden text-white text-3xl'>
    <FontAwesomeIcon icon={faBars} />
  </div>  
)

export default BarsMenu