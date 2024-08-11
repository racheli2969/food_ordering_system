
//@users
export async function getUser(email) {
    try {
        console.log("in get");
        debugger
        let res = await fetch(`http://localhost:8080/api/users/${email}`)
        res = await res.json();
        debugger
        console.log(res[0])
        return res //{"userId":res[0].userId,"userName":res[0].userName,"email":"dan@gmail.com","phone":"0523878021","userType":2,"lastStoreId":1}
    } catch {
        console.log("error")
    }
    return
}

//@orders
export async function PostOrder(order) {
    try {
        debugger
        const posting = await fetch('http://localhost:8080/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order),
            mode: 'cors'
        });
        debugger
        const content = await posting.json();
        debugger
        return content.orderId;
    }
    catch(err) {
    console.log(err);
    }
}

export async function PostOrderItem(orderItem) {

    try{
        const posting = await fetch('http://localhost:8080/api/orderDetail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderItem),
            mode: 'cors'
        });
        const content = await posting.json()
    }catch(err){
       console.log("hjh");
    }  
}