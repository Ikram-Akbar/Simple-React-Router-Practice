import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { id, username } = props.friend;

  let navigate = useNavigate();
  const showDetails = () => {
    // possible case for dynamic route
    // navigate(`/friend/${id}`);
    // navigate(`${username}`);
    // navigate(`/friend/${id} ${username}`);
    navigate(`/friend/${id}`);
  };
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{id} </Card.Title>
          <Card.Text>{username}</Card.Text>
          <Button onClick={showDetails} variant="primary">
            see more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Friend;
