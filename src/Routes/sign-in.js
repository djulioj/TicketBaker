import React from "react";
import NavBar from "../Components/NavBar-2";
import '../Styles/signin.css';
import Form from "../Components/sign-inForm";

function Sign() {
    return (
        <>
            <div className="body2">
                <NavBar />
                <div className="container-card2">
                    <Form />
                </div>
            </div>
        </>
    );
}

export default Sign;