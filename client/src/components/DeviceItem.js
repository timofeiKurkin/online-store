import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useNavigate()
    console.log(history)
    return (
        <Col md={3} className='mt-4' onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}}>
                < Image width={140} height={200} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='d-flex justify-content-between align-items-center mt-2 text-black-50'>
                    <div>Apple</div>
                    <div
                        className='d-flex align-items-center'
                    >
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;