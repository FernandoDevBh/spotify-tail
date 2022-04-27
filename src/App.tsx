import Header from './components/header'
import Conteudo from './components/Conteudo/conteudo'
import logo from './assets/images/spotify-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import FooterItem from './components/footer/footer.item'
import FooterItemHead from './components/footer/footer.item.head'
import ItemList from './components/List/item.list'

const App = () => {
  const empresaItens = [
    <a href="/">Sobre</a>,
    <a href="/">Empregos</a>,
    <a href="/">For the records</a>
  ]
  const comunidadesItem = [
    <a href="/">Para Artistas</a>,
    <a href="/">Desenvolvedores</a>,
    <a href="/">Publicidades</a>,
    <a href="/">Fornecedores</a>,
  ]
  const linkUteis = [
    <a href="/">Ajuda</a>,
    <a href="/">Player da Web</a>,
    <a href="/">Aplicativo Móvel grátis</a>
  ]
  const redesSociais = [
    <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>,
    <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>,
    <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
  ]
  const policiesSite = [
    <a href="/">Legal</a>,
    <a href="/">Centro de Privacidade</a>,
    <a href="/">Política de Privacidade</a>,
    <a href="/">Cookies</a>,
    <a href="/">Sobre anúncios</a>,
  ]
  return (
    <>
      <Header />
      <Conteudo />
      <footer>
        <div className="grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20">
          <FooterItem className="md:pt-0">
            <a href="/">
              <img src={logo} alt="Spotify" className="w-20 md:w-132px" />
            </a>
          </FooterItem>
          <FooterItem>
            <FooterItemHead text="Empresa" />
            <ul>
              {empresaItens.map(item => <ItemList>{item}</ItemList>)}
            </ul>
          </FooterItem>
          <FooterItem>
            <FooterItemHead text="Comunidades" />
            <ul>
              {comunidadesItem.map(item => <ItemList>{item}</ItemList>)}
            </ul>
          </FooterItem>
          <FooterItem>
            <FooterItemHead text="Links Úteis" />
            <ul>
              {linkUteis.map(item => <ItemList>{item}</ItemList>)}
            </ul>
          </FooterItem>
          <FooterItem className="md:col-span-2">
            <ul className="flex md:justify-end">
              {redesSociais.map(item => <ItemList isSocialMedia>{item}</ItemList>)}
            </ul>
          </FooterItem>
          <FooterItem override={true} className="md:col-span-4 mt-20">
            <ul>
              {policiesSite.map(item => <ItemList isPolicy>{item}</ItemList>)}
            </ul>
          </FooterItem>
          <FooterItem override={true} className="md:col-span-2 mt-20">
            <p className="flex justify-end text-gray-500 text-xs">&copy; 2020 Spotify Ab</p>
          </FooterItem>
        </div>
      </footer>
    </>
  )
}

export default App