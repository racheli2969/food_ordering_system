
import EnterPopUp from "./SignUp/EnterPopUp";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import Dish from "./dish/Dish";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orderdetails from "./orderDetails";
import NewDish from "./addDish";

export default function Store() {
    const { storeName } = useParams();
    const [myOrder, setOrder] = useState([]);
    const [items, setItems] = useState([]);
    const [isStoreManager, setManager] = useState(false)
    const [myUser, setUser] = useState({})
    const [toAdd, setToAdd] = useState(false)
    let [counter, setCounter] = useState(1)
    let [count,setCount]=useState(0)
    const notify = () => toast(`Today's Your BIRTHDAY!!!!!`);

    useEffect(() => {
        getItems();
        const user = JSON.parse(window.localStorage.getItem('currentUser'));
        setUser(user)
        setManager(user&&user.userType == 2)
    }, [counter,count]);

    async function getItems() {
        try {
            let d = await fetch(`http://localhost:8080/api/products/${storeName}`)
            d = await d.json();
            setItems(d);
        } catch {
            console.log("error")
        }
    }

    function order(product) {
        console.log(product);
        let name = items.find(item => item.productId == product.productId)
        let order = myOrder;
        const temp = myOrder.findIndex(item => item.productId == product.productId)
        if (temp >= 0) {
            toast(`you already ordered ${myOrder[temp].amount} ${(items.find(item => item.productId == myOrder[temp].productId)).productName}`)
            order[temp].amount += product.amount
            order[temp].price += product.price;
        }
        else
            order.push({ 'productId': product.productId, 'productName': name.productName, 'amount': product.amount, 'price': product.price });
        setOrder(order)
        setCounter(counter + 1)
    }

    function setMyOrder(e) {
        setOrder(e)
    }

    return (
        <div>
            {<EnterPopUp />}
            {isStoreManager && <button onClick={() => setToAdd(!toAdd)}>ADD ITEM</button>}
            {<Orderdetails c={counter} order={myOrder} setAmount={setMyOrder} user={myUser} store={storeName} ></Orderdetails>}
            {items.map(item => <Dish key={item.productId} product={item} order={order} count={count} setCount={setCount} ></Dish>)}
            {/* {items && items.map(item => <Link to={`/TakeABite/${props.storeId}/${item.productName}`} key={item.productId}>{item.productName}</Link>)}   */}
            {/* {<button key={item.productId} onClick={() => clickToFood(item)}>{item.productName}</button>} */}
            <button onClick={notify}>suprise!!!</button>
            <ToastContainer />
            {toAdd && <NewDish id={storeName} />}
        </div>
    )
}