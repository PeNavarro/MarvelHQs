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

  function listaHerois(props){
    const arrayHerois = []
    const herois = props
    
    herois.map((heroi) => 
      arrayHerois.push(heroi.id + "/" + heroi.name)
    )
    return arrayHerois
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
                    <Form.Control className="select" as="select" size="lg" onChange={e => setHeroiId(e.target.value)} custom>
                      <option key="1" disabled selected>Selecione o herói</option>

                      {listaHerois(herois).map(heroi => {
                        return (<option key={heroi.split("/")[0]} value={heroi.split("/")[0]}>{heroi.split("/")[1]}</option>)
                        })
                      }

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
