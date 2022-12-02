import React from "react";
import NavBar from "../Components/NavBar-2";
import '../Styles/signin.css';
import Form from "../Components/log-inForm";

function Log() {
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

export default Log;