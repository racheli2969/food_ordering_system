import { useEffect, useState } from "react"
export default function EditDish(props) {
    const [dish, setDish] = useState();
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [name, setName] = useState()
    const [photo, setPhoto] = useState()

    useEffect(() => {
        setDish(props.product)
        console.log(props.product);
        console.log(dish);
    }, [])

    async function handleSubmit() {
        console.log(dish.productId);
        console.log(name+" "+price);
        if (!price && description && name && photo)
            return
        const editedDish = { 'productId': dish.productId, 'name': name ? name : dish.productName, 'price': price ? price : dish.price, 'description': description ? description : dish.description, 'photo': photo ? photo : dish.photo }
        const rawResponse = await fetch(`http://localhost:8080/api/products`,  {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedDish),
            mode: 'cors'
          });
          const content = await rawResponse.json();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>editing {dish && dish.productName}</label>
            <br />
            <input
                name="name"
                type="name"
                value={name}
                placeholder={dish && dish.productName}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                name="price"
                type="price"
                value={price}
                placeholder={dish && dish.price}
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <input
                name="description"
                type="description"
                value={description}
                placeholder={dish && dish.description}
                onChange={e => setDescription(e.target.value)}
            />
            <br />
            {/* <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required />
        <br /> */}
            {/* <input type="file" name="sampleFile" /> */}
            <button>Submit</button>
        </form>
    )
}