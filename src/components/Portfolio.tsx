export default function Portfolio() {
    return (
        <div className="container-portfolio">
            <div className="card-portfolio">
                <img src="new-york.png" alt="Imagem de New York" />
                <div className="container-text-portfolio">
                    <img src="icon-map.png" alt="ícone de Localização" />
                    <h3 className="text-portfolio">New York - NY</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <img src="poole.png" alt="Imagem de Poole na UK" />
                <div className="container-text-portfolio">
                    <img src="icon-map.png" alt="ícone de Localização" />
                    <h3 className="text-portfolio">Poole - UK</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <img src="minas-gerais.png" alt="Imagem de Minas Gerais" />
                <div className="container-text-portfolio">
                    <img src="icon-map.png" alt="ícone de Localização" />
                    <h3 className="text-portfolio">Minas Gerais - BH</h3>
                </div>
            </div>
        </div>
    )
}