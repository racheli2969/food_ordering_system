import { useState,useEffect } from "react";

export default function NewDish(props){
    const [storeId,setStoreId]=useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [name, setName] = useState()
    const [photo, setPhoto] = useState()

    useEffect(() => {
        console.log("got to add");
       setStoreId(props.id)
    }, [])

    async function handleSubmit() {
        const editedDish = { 'storeId':storeId, 'name': name , 'price': price , 'description': description, 'photo': photo }
        const rawResponse = await fetch(`http://localhost:8080/api/products`,  {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedDish),
            mode: 'cors'
          });
          const content = await rawResponse.json();
    }

    return(
        <form onSubmit={handleSubmit}>
          
            <br />
            <input
                name="name"
                type="name"
                value={name}
                placeholder="name:"
                required
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                name="price"
                type="price"
                value={price}
                placeholder="price:"
                required
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <input
                name="description"
                type="description"
                value={description}
                placeholder="description:"
                required
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