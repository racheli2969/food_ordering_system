import { useEffect, useState } from "react";
import EnterPopUp from "../SignUp/EnterPopUp";
import StoreButton from "./storeButton";
import { useNavigate } from "react-router-dom";

{/* <p>Search icon: <span class="glyphicon glyphicon-search"></span></p> */ }

export default function Home() {
    const [stores, setStores] = useState([]);
    const [choiceOfStores, setchoiceOfStores] = useState("All")
    const [myUser, setUser] = useState({})
    const [image, setImage] = useState()
    const [file1, setFile] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        getAllStores();
        const user = JSON.parse(window.localStorage.getItem('currentUser'));
        setUser(user);
    }, [])

    async function getAllStores() {

        fetch("http://localhost:8080/api/stores")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                return response.json();
            }).then(res => {
                setStores(res);
            })
            .catch(error => {
                console.error(error)
            })
    }

    async function getStoresByCategory(e) {
        if (e === 'All')
            getAllStores();
        else {
            let data = await fetch(`http://localhost:8080/api/stores/${e}`)
            data = await data.json();
            setStores(data);
        }
    }

    function changeStores(e) {
        setchoiceOfStores(e)
        getStoresByCategory(e);
    }

    async function toMyStore() {
        const id = myUser.lastStoreId
        console.log(id + "  id");
        let data = await fetch(`http://localhost:8080/api/stores/manager/name/${id}`)
        console.log(data);
        data = await data.json();
        navigate(`/TakeABite/${data.storeName}`)
    }

    // const onImageChange = (e) => {
    //     const [file] = e.target.files;
    //     setImg(URL.createObjectURL(file));
    //   };
    function setMyImage(e) {
        const [file] = e.target.files;
        setImage(URL.createObjectURL(file));
     setFile(file)
    }

    async function postImage() {
        console.log(file1);
        alert(file1)
        const fileobj = { 'table': 'tblstores', 'id': 1, 'file': file1 };
        console.log(file1);
        alert(file1)
        await fetch(`http://localhost:8080/api/image/post/${file1}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fileobj),
            mode: 'cors'
        })
    }

    return (
        <div>
            {<EnterPopUp />}
            {(myUser && myUser.userType == 2) && <button onClick={toMyStore}>go to my store</button>}
            <br /><br />
            <select name='type' value={choiceOfStores} onChange={e => changeStores(e.target.value)}>
                <option value={"All"}>All</option>
                <option value={"Dairy"}>Dairy</option>
                <option value={"Meat"}>Meat</option>
                <option value={"Sweet"}>Sweet</option>
            </select>
            <form onSubmit={postImage}
                encType="multipart/form-data">
                <label>Store Image</label><br />
                <input type="file" name="image" onChange={setMyImage} />
                <img style={{width:"30%"}} src={image} alt="" />
                {/* value={image} onChange={(e)=>setImage(e.target.value)} */}
                <button type="submit">Upload</button>
            </form>

            {/* <form  encType="multipart/form-data" action={("http://localhost:8080/api/image", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"table": "tblstores", "id": "1"}),
                mode: 'cors'
            })}>
                <input type={'file'} name='image' />
                <button type="submit">upload</button>
            </form> */}
            {stores && stores.map(store => <StoreButton style={{ width: '50%' }} key={store.storeId} store={store} />)}
        </div>
    )

}