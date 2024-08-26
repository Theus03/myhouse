export default function Services() {
    return (
        <div className="container-services">
            <div className="box-services">
                <div className="service active">
                    <img src="service-one.png" alt="Imagem do Serviço 1" />
                    <div className="container-texts">
                        <h2 className="title-service">TRABALHO EXTERNO <br/> DE ARQUITETURA</h2>
                        <h4 className="text-service">Desenhamos toda a parte externa de sua casa de um jeito rápido e da forma que você quiser.</h4>
                    </div>
                </div>
                <div className="service">
                    <img src="service-two.png" alt="Imagem do Serviço 2" />
                    <div className="container-texts">
                        <h2 className="title-service">TRABALHO COMPLETO DE ARQUITETURA</h2>
                        <h4 className="text-service">Venha construir sua planta do zero até o fim conosco.</h4>
                    </div>
                </div>
                <div className="service">
                    <img src="service-three.png" alt="Imagem do Serviço 3" />
                    <div className="container-texts">
                        <h2 className="title-service">ANÁLISE DE ARQUITETURA</h2>
                        <h4 className="text-service">Fazemos um levantamento de todos os requisitos para que você possa prosseguir da melhor forma com seu projeto.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}