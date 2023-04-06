import React from "react";
import { Nav } from "react-bootstrap";

const Navigation = () => {
    return <Nav activeKey="/home" className="nav-container">
        <Nav.Item>
            <Nav.Link href="/home">
                <div className="single-link">
                    Home
                </div>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/my-meals">
                <div className="single-link">
                    My meals
                </div>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/calories-counter">
                <div className="single-link">
                    Calories counter
                </div>
            </Nav.Link>
        </Nav.Item>
    </Nav>
}

export default Navigation