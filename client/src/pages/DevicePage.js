import React from 'react'
import { Button, Container, Col, Image, Row, Card } from "react-bootstrap"
import star from "../assets/bigStar.png"

function DevicePage() {
    const device = { id: 1, name: "Iphone 12 pro", price: 3000, rating: 5, img: "https://htstatic.imgsmail.ru/pic_original/19d6af10c5bba0541758647c9e75d96b/1918903/" }
    const description = [
        { id: 1, title: "Операционная память", description: "6 Gb" },
        { id: 1, title: "Операционная память", description: "6 Gb" },
        { id: 1, title: "Операционная память", description: "6 Gb" },
        { id: 1, title: "Операционная память", description: "6 Gb" },
        { id: 1, title: "Операционная память", description: "6 Gb" }
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center text-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${star}) no-repeat center center`, width: 280, height: 280, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {description.map((info,index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? "lightgray" : "transparent", padding:10 }}>
                        {info.title}: {info.description}
                    </Row>)}
            </Row>
        </Container>
    )
}

export default DevicePage
