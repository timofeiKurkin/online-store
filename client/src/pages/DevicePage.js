import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/star2.png'
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceApi";


const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container>
            <Row className='mt-5'>
                <Col md={4}>
                    <Image width={300} height={390} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                             style={{background: `url(${star} no-repeat center center`, width: 250, height: 250, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                          style={{width: 300, height: 300, fontSize: 32, border: '2px solid #999999'}}
                    >
                        <h3>От {device.price} рублей</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
<Row className='d-flex flex-column m-3'>
    <h1>Характеристики</h1>
    {device.info.map(info =>
        <Row key={info.id}
             style={{background: info.id % 2 === 0 && 'lightgray', padding: 10}}
        >
            {info.title}: {info.description}
        </Row>
    )}
</Row>
        </Container>

    );
};

export default DevicePage;