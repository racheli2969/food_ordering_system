import { Route,Routes } from "react-router-dom";
import Home from './home/Home'
import Store from './store/Store'
import NotFound from "./NotFound";


export default function Main() {
    return (
        <Routes className="albumLink">
            <Route exact element={<Home/>} path={'/'} />
            <Route exact element={<Home/>} path={'/*'} />
            <Route exact element={<Home/>} path={'/TakeABite'} />
            <Route exact element={<Store props/>} path={'/TakeABite/:storeName'} />
            {/* <Route exact element={<Dish/>} path={`/TakeABite/:storeName/:product`} /> */}
            {/* <Route exact element={<NotFound/>} path={'/*'} /> */}
        </Routes>
    )
}