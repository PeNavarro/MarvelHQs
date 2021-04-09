import React, {useEffect, useState} from 'react'
import './css/estilo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router'
import NavbarComponent from './components/Navbar'

const App = () =>{

    const {id} = useParams()
    const [listaHqs, setListaHqs] = useState([])
    const [heroi, setHeroi] = useState(null)

    useEffect(()=>{
        document.title= "Marvel HQs"
        carregaHq()
        //carregaHeroi()
    },[])

    async function carregaHq(){
        const apiKey = process.env.REACT_APP_APIKEY_MARVEL
        let url = `https://gateway.marvel.com/v1/public/characters/${id}/comics?${apiKey}`
        await fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setListaHqs(data.data.results)
        })
    }

    /*async function carregaHeroi(){
        const apiKey = process.env.REACT_APP_APIKEY_MARVEL
        let url = `https://gateway.marvel.com/v1/public/characters/${id}?${apiKey}`
        await fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data.data.results)
            setHeroi(data.data.results)
        })
    }*/

    function ListaHqs(props){
        const Hqs = props.listaHqs
        const ListagemHqs = Hqs.map((Hq) =>
            <Col lg={6}>
                <Card>
                    <Card.Header>{Hq.series.name}</Card.Header>
                    <Card.Img variant="top" src={Hq.images.path+'.'+Hq.images.extension}/>
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
            <Container>
                <Row>
                    <ListaHqs listaHqs={listaHqs}/>
                </Row>
            </Container>
        </>
    )

}

export default App