import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend.jsx";
import { Container, Row, Col } from "react-bootstrap";
import "./Friends.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <Container>
      <h2>MY friends list</h2>
      <Row md={2} xs={1} lg={3}>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </Row>
    </Container>

    // <div className="my-5 container">
    //   <h1 className="text-primary text-center my-5">Experts</h1>
    //   <div className="row justify-content-center">
    //     {friends.map((friend) => (
    //       <Friend key={friend.id} friend={friend} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default Friends;
