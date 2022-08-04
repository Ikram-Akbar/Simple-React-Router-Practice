import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendID } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Identity No : {friend.id} </Card.Title>
          <Card.Text>User Name: {friend.name}</Card.Text>
          <Card.Text>User Name: {friend.username}</Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default FriendDetails;
