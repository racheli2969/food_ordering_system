import { useState, useEffect } from "react";
import CustomPopup from "../popup/CustomPopup";
import SignIn from "./SignIn";
import LogIn from "./LogIn"
import { NavLink,useNavigate } from "react-router-dom";
import { ButtonGroup } from "react-bootstrap";

export default function EnterPopUp() {
    const navigate=useNavigate();
    const [visibility, setVisibility] = useState(false);
    const [text, setText] = useState("to logIn");
    const [signIn, setSignOrLog] = useState(true);
    const [signed, setIn] = useState(false)

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem('currentItem'))
        setIn(user);
    }, [visibility])

    const popupCloseHandler = (e) => {
        setVisibility(e);
        const user = JSON.parse(window.localStorage.getItem('currentItem'))
        setIn(user);
    };

    function changeLogToSign() {
        setSignOrLog(!signIn);
        setText(signIn && "to LogIn" + !signIn && "to signIn");
    }

    function out() {
        window.localStorage.removeItem('currentUser')
       navigate(`/TakeABite`)
       window.location.reload();
        setIn(false)
    }

    return (
        <div >
            <ButtonGroup> {!signed && <NavLink
                href="#"
                activeclassname="active"
                className="nav-link"
                exact="true"
                to="/TakeABite"
            ><button className="btn btn-secondary" onClick={out}>Log Out</button>
            </NavLink>
            }
                {!signed && <button className="btn btn-dark" onClick={(e) => setVisibility(!visibility)}>To connect</button>}
                {<CustomPopup
                    onClose={popupCloseHandler}
                    show={visibility}
                >
                    {<button onClick={changeLogToSign}>{text}</button>}
                    {signIn && <SignIn />}
                    {!signIn && <LogIn />}
                </CustomPopup>}
            </ButtonGroup>
        </div>
    );
}