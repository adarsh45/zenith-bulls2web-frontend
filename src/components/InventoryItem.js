import React from "react";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const InventoryItem = ( {item} )=> {

    const inv_styles = {
    backgroundColor: "#202020",
    border: "none",
    color: "white"
}

    return (
        <Card className="mt-2 mb-1 inv_card" style={inv_styles}>
            <CardImg 
            top
            height="300"
            width="100%"
            src={item.itemImage} alt="product-image"/>
            <CardBody className="text-center">
                <CardTitle> {item.itemName} </CardTitle>
                <CardText className="text-primary">$ {item.itemPrice} </CardText>
                <Button color="success">Buy Item</Button>
            </CardBody>
        </Card>
    );
}

export default InventoryItem;