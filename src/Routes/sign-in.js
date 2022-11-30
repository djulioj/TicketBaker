import React from "react";
import NavBar from "../Components/NavBar-2";
import '../Styles/sign-in.css';
import Form from "../Components/sign-inForm";

function Sign() {
    return (
        <>
            <div className="body">
                <NavBar />
                <div className="container-card">
                    <Form />
                </div>
            </div>
        </>
    );
}

export default Sign;