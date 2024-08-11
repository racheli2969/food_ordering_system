import CustomPopup from "../popup/CustomPopup";
import { useEffect, useState } from "react";
//import Modal from 'react-confirm-alert'
import Modal from "modals/src/modal";
import { Button } from "react-bootstrap-buttons";
import './dish.css'
import EditDish from "../editDish";

export default function Dish(props) {
    const [visibility, setVisibility] = useState(false);
    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(1);
    const [isStoreManager, setManager] = useState(false)
    const [enableEditing, setenableEditing] = useState(false)

    useEffect(() => {
        setProduct(props.product)
        const user = JSON.parse(window.localStorage.getItem('currentUser'));
       user&&setManager(user.userType == 2)
        //user&&setManager(user.userName=="dan")
    }, [],[props.count])

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    function myAmount(num) {
        if (amount + num > 0)
            setAmount(amount + num);
    }

    function orderItems() {
        const p = { 'productId': product && product.productId, 'price': amount * product.price, 'amount': amount }
        props.order(p)
        console.log(p)
        setAmount(1)
    }

    async function deleteItem() {
        const d = product.productId;
        const rawResponse = await fetch(`http://localhost:8080/api/products/${d}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        });
        props.setCount(props.count + 1)
    }


    return (
        <div className={visibility ? `dishContainer` : ''}>
            <button onClick={(e) => setVisibility(!visibility)}>{product && product.productName} </button>
            <br />
            <span>price: {product && product.price}</span>
            <CustomPopup
                onClose={popupCloseHandler}
                show={visibility}
            >
                <span>{product && product.description}</span>
                <br />
                <button onClick={() => myAmount(-1)}>-</button>
                <button onClick={() => myAmount(+1)}>+</button>
                <br />
                <span>{amount}</span>
                <br />
                <button type="button" className="btn btn-warning" onClick={orderItems}>ADD TO CART</button>
                <br />
            </CustomPopup>
            <br />
            {isStoreManager && <button onClick={() => setenableEditing(!enableEditing)}>Edit</button>}
            {isStoreManager && <Button variant="primary" onClick={deleteItem}> DELETE</Button>}
            {enableEditing && <EditDish product={product} />}
        </div>
    )
}