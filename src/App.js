import React from 'react'
import './css/estilo.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {ReactComponent as MarvelLogo} from './images/marvel.svg'
import MarvelComics from './images/marvelcomics.png'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App = () =>{

  return(
    <>
      <Navbar className="navbar" variant="dark">
        <Navbar.Brand className="mx-auto" href="#home"><MarvelLogo/></Navbar.Brand>
      </Navbar>
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
      <Container>
        <Row className="center">
          <Col lg={6}>
          <Card className="semBorda mb-4">
            <Card.Header className="cardHeader">Procure o seu super-herói</Card.Header>
            <Card.Body className="cardBody">
                <Form>
                  <Form.Group>
                    <Form.Label>Selecionar:</Form.Label>
                    <Form.Control className="select" as="select" size="lg" custom>
                      <option value="0">teste</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  )

}

export default App