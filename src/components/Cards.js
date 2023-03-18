import { useState } from "react";
import { Card } from "react-bootstrap";
import  Button from "./Button";
export function Cards({ prod, idx, setcount, count }) {
    const [show, setshow] = useState(false);

    function addToCart() {
        setshow(!show)
        setcount(count + 1)
    }
    function removeFormCart() {
        setshow(!show)
        setcount(count - 1)
    }
    return (


        <Card key={idx} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.productImage} />
            <Card.Body>
                <Card.Title>{prod.productName}</Card.Title>
                <Card.Text>
                    ₹ {prod.price}
                </Card.Text>
                <Card.Text>
                    {prod.rating}⭐
                </Card.Text>

                {!show ? <Button
                name="Book Now"
                bgclr="lightskyblue"
                onclick={addToCart}
                />:""}
                {/* {!show ? <Button variant="primary" onClick={addToCart}>Book Now</Button> : ""}

                {show ? <Button variant="danger" onClick={removeFormCart}>Later</Button> : ""} */}

                {show ? <Button
                name="Later"
                bgclr="crimson"
                clr="white"
                onlick={removeFormCart}
                
                /> : ""}

            </Card.Body>
        </Card>
    )
}