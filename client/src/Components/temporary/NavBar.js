// import React from "react";
// import { NavLink } from "react-router-dom";
// // import Col from "react-bootstrap/Col";
// // import Row from "react-bootstrap/Row";
// //import "./NavBar.css";
// export default function NavBar() {

//     return (
//         <>
//             {/* <h1 id="welcome">{JSON.parse(localStorage.getItem("currentUser")).name}</h1> */}
//             {/* <Row id="row1">
//                 <Col className="col"> */}
//                     <NavLink
//                         href="#"
//                        // className="nav-link"
//                         activeclassname="active"
//                         exact="true"
//                         to="/SignIn"
//                     >
//                         SignIn
//                     </NavLink>
//                 {/* </Col> */}
//                 {/* <Col className="col">
//           <NavLink
//             href="#"
//             activeclassname="active"
//             className="nav-link"
//             exact="true"
//             to="/Home/ToDos"
//           >
//             ToDoes
//           </NavLink>
//         </Col>
//         <Col className="col">
//           <NavLink
//             href="#"
//             activeclassname="active"
//             className="nav-link"
//             exact="true"
//             to="/Home/Posts"
//           >
//             Posts
//           </NavLink>
//         </Col>
//         <Col className="col">
//           <NavLink
//             href="#"
//             activeclassname="active"
//             className="nav-link"
//             exact="true"
//             to="/Home/Albums"
//           >
//             Albums
//           </NavLink>
//         </Col>
//         <Col className="col">
//           <NavLink
//             href="#"
//             activeclassname="active"
//             className="nav-link"
//             exact="true"
//             to="/LogIn"
//           >
//             LogOut
//           </NavLink>
//         </Col> */}

//             {/* </Row> */}
//         </>
//     );
// }

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/SignIn">Invoices</Link> |{" "}
        <Link to="/NotFound">Expenses</Link>
      </nav>
    </div>
  );
}