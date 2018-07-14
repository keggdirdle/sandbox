import React from "react";

import Footer from "./footer.js"
import Header from "./header.js"

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}