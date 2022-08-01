import React from "react";
import { Button, Card } from "react-bootstrap";

const Friend = (props) => {
  const { id, username } = props.friend;
  return (
    <div>
      <div className="col-md-4">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{username}</Card.Title>
            <p>ID : {id}</p>
            <Button variant="primary">See More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Friend;
