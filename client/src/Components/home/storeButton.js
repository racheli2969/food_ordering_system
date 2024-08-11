import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBlock, CardFooter, CardTitle, CardText, } from 'react-bootstrap-card';
import logo from '../images/logo/35363.jpg'
import l from '../images/logo/lo.jpg'
import lo from '../images/logo/l.jpg'
export default function StoreButton(props) {
    const navigate = useNavigate();
    const [store, setStore] = useState();
    useEffect(() => {
        setStore(props.store)
        console.log(props.store.storeName);
        store && console.log(props.store.photolink);
    }, [props])

    function clickStore(name) {
        navigate(`/TakeABite/${name}`)
    }

    return (
        <Card>
            {/* <Card.Img /> */}
            {/* <Card.Body> */}
            <CardTitle>{store && store.storeName}</CardTitle>
            <br />
            <span>Delivery Price:{store && store.delivery}</span>
            {store && <img src={store.photolink.image_name} />}
            <button key={store && store.storeName} onClick={() => clickStore(store && store.storeName)}>  {store && <img src={(store.storeName == "BOLO") ? logo : (store.storeName == "Burger Ranch") ? l : (store.storeName == "Sweet") ? lo : ""} />}</button>
            {/* </Card.Body> */}
        </Card>
    )
}