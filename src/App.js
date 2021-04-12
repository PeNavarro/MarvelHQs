//Importação de tudo que é usado
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
import Spinner from 'react-bootstrap/Spinner'
import NavbarComponent from './components/Navbar'
import BannerComponent from './components/BannerComponent'

const App = () =>{

  //Definição dos Hooks
  const [herois, setHerois] = useState([])
  const [heroiId, setHeroiId] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [erroApi, setErroApi] = useState(false)

  //Carregando os super-heróis e definindo o título na inicialização
  useEffect(()=>{
    document.title= "Marvel HQs"
    carregaSuperherois()
  },[])

  //Busca dos dados na API
  async function carregaSuperherois(){
    setCarregando(true)
    //Atribuição da apiKey com a chave em arquivo local
    const apiKey = process.env.REACT_APP_APIKEY_MARVEL
    let url = `https://gateway.marvel.com/v1/public/characters?${apiKey}`
    await fetch(url)
    //Busca e tratamento dos dados
    .then(response => response.json())
    .then(data =>{
      setHerois(data.data.results)
    })
    //Verificação se houve erros
    .catch(function(){
      setErroApi(true)
    })
    setCarregando(false)
  }

  //Função para listagem do super-heróis no select
  function listaHerois(props){
    const arrayHerois = []
    const herois = props
    
    //Guarda os dados de cada super-herói em um elemento do array para ser tratado futuramente 
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

        {carregando &&
          //Exibido se estiver carregando
          <Spinner className="mt-5" animation="border" role="status"/>
        }

        {!carregando &&
          <Col lg={6}>
          {erroApi &&
            //Exibido se houve algum erro nos dados da API
            <Card className="semBorda mb-4">
              <Card.Header className="cardCabeçalho">Erro</Card.Header>
              <Card.Body className="cardCorpo">
                <Card.Text>Não foi possível listar os super-heróis, tente novamente mais tarde.</Card.Text>
              </Card.Body>
          </Card>
          }
          {!erroApi &&
            <Card className="semBorda mb-4">
            <Card.Header className="cardCabeçalho">Procure o seu super-herói</Card.Header>
            <Card.Body className="cardCorpo">
              <Form>
                <Form.Group>
                  <Form.Label>Selecionar:</Form.Label>
                  <Form.Control className="select" as="select" size="lg" onChange={e => setHeroiId(e.target.value)} custom>
                    <option key="1" disabled selected>Selecione o herói</option>

                    {
                      //Carregamento dos dados como <option> no select
                      listaHerois(herois).map(heroi => {
                        //Para cada herói é gerado um option com os respectivos valores
                        return (<option key={heroi.split("/")[0]} value={heroi.split("/")[0]}>{heroi.split("/")[1]}</option>)
                      })
                    }

                  </Form.Control>
                </Form.Group>
              </Form>
              <Row className="d-flex justify-content-center">
                {/*Passa a URL com o id do super-herói a ser pesquisado*/}
                <Link to={`/Hq/${heroiId}`}>
                  <Button className="semBorda botao">Pesquisar</Button>
                </Link>
              </Row>
            </Card.Body>
          </Card>
          }
          </Col>
        }
        </Row>
      </Container>
    </>
  )

}

export default App
