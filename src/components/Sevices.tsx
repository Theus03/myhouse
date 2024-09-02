'use client';

import Button from '@/components/Button';

export default function Services() {
    const handleClickChangeService = (idTarget: String, e: React.MouseEvent<HTMLDivElement>) => {
        let elementServiceActive = document.querySelector('.service.active') as HTMLElement;
        elementServiceActive?.classList.remove('active');
        let elementCircleActive = document.querySelector('.circle-action.active') as HTMLElement;
        elementCircleActive?.classList.remove('active');

        let elementServiceTarget = document.getElementById(idTarget.toString()) as HTMLElement;
        elementServiceTarget?.classList.add('active');
        let elementCircleTarget = document.getElementById(`circle-${idTarget.toString()}`) as HTMLElement;
        elementCircleTarget?.classList.add('active');
    }

    return (
        <div id='servicos' className="container-services">
            <div className="box-services">
                <div className="services">
                    <div className="service active" id="service-one">
                        <div className="container-img">
                            <img src="service-one.png" alt="Imagem do Serviço 1" />
                        </div>
                        <div className="container-texts">
                            <h2 className="title-service">TRABALHO EXTERNO <br/> DE ARQUITETURA</h2>
                            <h4 className="text-service">Desenhamos toda a parte externa de sua casa de um jeito rápido e da forma que você quiser.</h4>
                            <Button _type="solid" _textButton={"Entrar em Contato"} _msgButton={"Solicitação Recebida! Em breve entraremos em contato. 👍😉"}/>
                        </div>
                    </div>
                    <div className="service" id="service-two">
                        <div className="container-img">
                            <img src="service-two.png" alt="Imagem do Serviço 2" />
                        </div>
                        <div className="container-texts">
                            <h2 className="title-service">TRABALHO COMPLETO DE ARQUITETURA</h2>
                            <h4 className="text-service">Venha construir sua planta do zero até o fim conosco.</h4>
                            <Button _type="solid" _textButton={"Entrar em Contato"} _msgButton={"Solicitação Recebida! Em breve entraremos em contato. 👍😉"}/>
                        </div>
                    </div>
                    <div className="service" id="service-three">
                        <div className="container-img">
                            <img src="service-three.png" alt="Imagem do Serviço 3" />
                        </div>
                        <div className="container-texts">
                            <h2 className="title-service">ANÁLISE DE ARQUITETURA</h2>
                            <h4 className="text-service">Fazemos um levantamento de todos os requisitos para que você possa prosseguir da melhor forma com seu projeto.</h4>
                            <Button _type="solid" _textButton={"Entrar em Contato"} _msgButton={"Solicitação Recebida! Em breve entraremos em contato. 👍😉"}/>
                        </div>
                    </div>
                </div>
                <div className="actions-services">
                    <div id="circle-service-one" className="circle-action circle-service-one  active" onClick={(e) => handleClickChangeService('service-one', e)}></div>
                    <div id="circle-service-two" className="circle-action circle-service-two" onClick={(e) => handleClickChangeService('service-two', e)}></div>
                    <div id="circle-service-three" className="circle-action circle-service-three" onClick={(e) => handleClickChangeService('service-three', e)}></div>
                </div>
            </div>
        </div>
    )
}