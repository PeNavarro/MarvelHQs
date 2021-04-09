import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MarvelComics from '../images/marvelcomics.png'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function BannerComponent(){
    return(
        <Jumbotron className="jumbotron">
            <Row>
                <Col lg={6}>
                    <h1>Marvel HQs</h1>
                    <p>Trabalho desenvolvido para o curso stack MERN.</p>
                    <br/>
                    <p className="descricao">Estamos consumindo uma API fornecida pela Marvel para listar as HQs do herói escolhido por você. Infelizmente, nós só temos acesso aos primeiros 20 resultados que a API nos fornece. 😉</p>
                    <p>Desenvolvido por: Pedro Mack Navarro e Nickolas da Silva Veiga</p>
                    </Col>
                    <Col lg={6}>
                    <img src={MarvelComics} alt="marvel comics logo"/>
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default BannerComponent