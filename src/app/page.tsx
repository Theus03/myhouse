import Button from "@/components/Button"
import Menu from "@/components/Menu"

export default function Home() {
  return (
    <main>
      <Menu/>
      <div className="banner-slogan">
        <img src="banner.png" className="img-banner" alt="Imagem de Banner"/>
        <div className="container-slogan">
          <h2 className="text-slogan">FAREMOS DA SUA CASA,<br/> UM LUGAR PERFEITO<br/> PARA MORAR.</h2>
          <Button _type="outline" _textButton={"Entrar em Contato"}/>
        </div>
      </div>
    </main>
  )
}
