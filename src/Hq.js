import React, {useEffect, useState} from 'react'
import './css/estilo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import NavbarComponent from './components/Navbar'
import { Link, useParams } from 'react-router-dom'

const App = () =>{

    const {id} = useParams()

    const [listaHqs, setListaHqs] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [erroApi, setErroApi] = useState(false)

    useEffect(()=>{
        document.title= "Marvel HQs"
        carregaHq()
    },[])

    async function carregaHq(){
        setCarregando(true)
        const apiKey = process.env.REACT_APP_APIKEY_MARVEL
        let url = `https://gateway.marvel.com/v1/public/characters/${id}/comics?${apiKey}`
        await fetch(url)
        .then(response => response.json())
        .then(data =>{
            setListaHqs(data.data.results)
        })
        .catch(function(error){
            setErroApi(true)        
        })
        setCarregando(false)
    }

    function ListaHqs(props){
        const Hqs = props.listaHqs
        const ListagemHqs = Hqs.map((Hq) =>
            <Col lg={3}>
                <Card lg={10} className="semBorda mb-4">
                    <Card.Img variant="top" src={Hq.thumbnail.path+'/portrait_incredible.'+Hq.thumbnail.extension}/>
                    <Card.Body className="cardBody">
                        <Card.Title>{Hq.series.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        )
        return(
            <>{ListagemHqs}</>
        )
    }

    return(
        <>
            <NavbarComponent/>
                {erroApi &&
                    <Row className="d-flex justify-content-center">
                        <h5 className="textoCentralizado">Não foi possível listar os super-heróis, tente novamente mais tarde.</h5>
                    </Row>
                }

                {carregando &&
                    <Row className="d-flex justify-content-center">
                        <Spinner className="mt-5" animation="border" role="status"/>
                    </Row>
                }
                {!carregando &&
                    <Container>
                        {!erroApi &&
                            <>
                                <Row className="d-flex justify-content-center">
                                    {listaHqs.length <= 0 &&
                                        <h5 className="textoCentralizado">Esse super-herói não participou de nenhuma HQ</h5>
                                    }
                                    <ListaHqs listaHqs={listaHqs}/>
                                </Row>
                                <Row className="d-flex justify-content-center mb-4">
                                    <Link to="/">
                                        <Button className="semBorda botaoPreto">Voltar</Button>
                                    </Link>
                                </Row>
                            </>
                        }
                    </Container>
                } 
        </>
    )

}

export default App