import React from "react";
import Camera from "./camera";
import Resources from "./resources";
import { Row, Col } from "react-bootstrap"

export default function Testpage() {
    return (
        <div className="main bg-dark p-0 m-0">
            <Row className="p-0 m-0">
                <Col col={12} md={4} className="p-0 m-0">
                    <Camera />
                </Col>
                <Col col={12} md={8} className="p-0 m-0">
                    <Resources />
                </Col>

            </Row>
        </div>
    )
} 