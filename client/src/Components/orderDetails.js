import { useEffect, useState } from "react"
import { Card, CardTitle } from "react-bootstrap-card"
import Modal from 'react-bootstrap/Modal';
import { Button, ButtonGroup } from "react-bootstrap-buttons"
import { PostOrder, PostOrderItem } from "./services/fetchRequests";

export default function Orderdetails(props) {
    const [show, setShow] = useState(false);
    const [orderItems, setItems] = useState([])
    const [clicked, setClicked] = useState(false)
    const [orderStatus, setStatus] = useState(false)
    const [finalPrice, setFPrice] = useState(0)
    const [city, setcity] = useState()
    const [street, setStreet] = useState()
    const [numHouse, setNumHouse] = useState()
    const [payment, setPayment] = useState()
    const [finishForm, setFinishForm] = useState(false)
    const [deliveryPrice, setDelivery] = useState();
    const [alltogether, setfinalFinal] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setItems(props.order)
        setStatus(props.order[0])
        let sum = 0;
        for (let index = 0; index < orderItems.length; index++) {
            sum += orderItems[index].price
        }
        setFPrice(sum)
        getDeliveryPrice(props.store)
        setfinalFinal(parseInt(deliveryPrice) + parseInt(sum))
        console.log(alltogether);
    }, [props.c, orderItems]);

    function updateMyAmount(index, number) {
        let arr = orderItems;
        let price = arr[index].price / arr[index].amount
        if (orderItems[index].amount + number > 0) {
            arr[index].amount += number;
            arr[index].price += price * number
        }
        else if (orderItems[index].amount + number == 0) {
            arr = orderItems.filter((item, idx) => idx === index)
        }
        setFPrice(parseInt(finalPrice) + parseInt(price * number))
        console.log(finalPrice);
        setfinalFinal(parseInt(finalPrice) + parseInt(deliveryPrice))
        setItems(arr)
        props.setAmount(arr)
    }

    async function getDeliveryPrice(name) {
        console.log(name);
        let data = await fetch(`http://localhost:8080/api/stores/delivery/${name}`)
        data = await data.json();
        setDelivery(data.delivery);
    }

    async function submitOrder() {
        const order = { 'email': props.user.email, 'storeName': props.store, 'city': city, 'street': street, 'numOfHouse': numHouse, 'lastDigitPay': payment, 'finalPrice': finalPrice }
        const response = await PostOrder(order);
        debugger
        alert(response);
        console.log(response);
        debugger
        await submit(response);
    }

    async function submit(response){
        if (response) {
            for (let index = 0; index < orderItems.length; index++) {
                console.log(response + "72");
                debugger
                let orderItem = {'orderId': response,'productId':orderItems[index].productId,'amount':orderItems[index].amount, 'finalPrice':orderItems[index].price }
                let res = await PostOrderItem(orderItem);
            }
        }
    }

    function done() {
        if (!props.user)
            alert("you need to enter your details")
        else
            setFinishForm(!finishForm)
    }

    let counter = 0;
    return (
        <div>
            {orderStatus && <Card>
                <CardTitle>your order:</CardTitle>
                {orderItems && orderItems.map((item, index) => <div key={counter++}>
                    <span> {orderItems[index].amount} {item.productName}</span>
                    <br />
                    <Button style={{ width: '80px' }} type='button' className='btn btn-success' onClick={() => setClicked(!clicked)}>change</Button>
                    <ButtonGroup>
                        {clicked && <Button style={{ width: '25px' }} onClick={() => updateMyAmount(index, - 1)}>-</Button>}
                        {clicked && <Button style={{ width: '25px' }} onClick={() => updateMyAmount(index, + 1)}>+</Button>}
                    </ButtonGroup>
                </div>)}
                <span>Items Price: {finalPrice}</span>
                <span>delivery Price: {deliveryPrice} </span>
                <span>all together:{alltogether}</span>
                {<Button style={{ width: '80px' }} onClick={done}>ORDER</Button>}

                {finishForm && <form>
                    <label>address</label>
                    <br />
                    <input
                        required
                        placeholder="city"
                        value={city}
                        onChange={e => setcity(e.target.value)}>
                    </input>
                    <input
                        required
                        placeholder="street"
                        value={street}
                        onChange={e => setStreet(e.target.value)}>
                    </input>
                    <input
                        required
                        placeholder="house number"
                        value={numHouse}
                        onChange={e => setNumHouse(e.target.value)}>
                    </input>
                    <br />
                    <label>credit card</label>
                    <br />
                    <input
                        name="pay"
                        type="password"
                        value={payment}
                        onChange={e => setPayment(e.target.value)}>
                    </input>
                    <br />
                    <button onClick={submitOrder}>Submit</button>
                </form>}
            </Card>}
            {!orderStatus && <Card>
                your shopping cart is empty
            </Card>}
        </div>
    )
}
