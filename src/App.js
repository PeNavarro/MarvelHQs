import React, {useEffect, useState} from 'react'
import './css/estilo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavbarComponent from './components/Navbar'
import BannerComponent from './components/BannerComponent'

const App = () =>{

  const [herois, setHerois] = useState([])
  const [heroiId, setHeroiId] = useState('')

  useEffect(()=>{
    document.title= "Marvel HQs"
    carregaSuperherois()
  },[])

  async function carregaSuperherois(){
    const apiKey = process.env.REACT_APP_APIKEY_MARVEL
    let url = `https://gateway.marvel.com/v1/public/characters?${apiKey}`
    await fetch(url)
    .then(response => response.json())
    .then(data =>{
      console.log(data.data.results)
      setHerois(data.data.results)
    })
    .catch(function(error){
      console.error("Não foi possível consultar os super-heróis: "+error.message)
    })
  }
  
  function ListaHerois(props){
    const herois = props.herois
    const listagemHerois = herois.map((heroi) => 
      <option key={heroi.id} value={heroi.id}>{heroi.name}</option>
    )
    return(
      <>{listagemHerois}</>
    )
  }

  function teste(){
    console.log({heroiId})
  }

  return(
    <>
      <NavbarComponent/>
      <BannerComponent/>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={6}>
          <Card className="semBorda mb-4">
            <Card.Header className="cardHeader">Procure o seu super-herói</Card.Header>
            <Card.Body className="cardBody">
                <Form>
                  <Form.Group>
                    <Form.Label>Selecionar:</Form.Label>
                    <Form.Control className="select" as="select" size="lg" onChange={teste(), e => setHeroiId(e.target.value)} custom>
                      <ListaHerois herois={herois}/>
                      <option disabled selected>Selecione o herói</option>
                      <option value="Teste1">Teste1</option>
                      <option value="Teste2">Teste2</option>
                      <option value="Teste3">Teste3</option>
                      <option value="Teste4">Teste4</option>
                      <option value="Teste5">Teste5</option>
                      <option value="Teste6">Teste6</option> 
                    </Form.Control>
                  </Form.Group>
                </Form>
                <Row className="d-flex justify-content-center">
                  <Link to={`/Hq/${heroiId}`}>
                    <Button className="semBorda button">Pesquisar</Button>
                  </Link>
                </Row>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  )

}

export default App
