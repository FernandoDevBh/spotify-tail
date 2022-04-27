import logo from '../../assets/images/spotify-logo.png'

const LogoMain = () => (
  <div>
    <a href="/">
      <img src={logo} alt="Spotify" className='w-20 md:w-125px' />
    </a>
  </div>
)

export default LogoMain