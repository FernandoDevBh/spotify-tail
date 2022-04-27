import Button from "./button";
import HeadLine from "./head-line";
import MainMessage from "./main-message";

const Conteudo = () => (
  <main>
    <div className="flex flex-col justify-center text-center
                        bg-spotify-theme-mobile md:bg-spotify-theme md:bg-banner bg-banner-mobile
                        bg-195% md:bg-175% bg-purple-main text-green-main
                        py-40 px-4">
      <HeadLine />
      <MainMessage />
      <Button text="Obtenha o spotify free" />
    </div>
  </main>
)

export default Conteudo