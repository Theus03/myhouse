import Button from "@/components/Button"
import Menu from "@/components/Menu"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Sevices"

export default function Home() {
  return (
    <main>
      <Menu/>
      <section className="container-banner">
        <div className="container-slogan">
          <h2 className="text-slogan">FAREMOS DA SUA CASA,<br/> UM LUGAR PERFEITO<br/> PARA MORAR.</h2>
          <Button _type="outline" _textButton={"Entrar em Contato"}/>
        </div>
      </section>
      <Portfolio/>
      <Services/>
    </main>
  )
}
