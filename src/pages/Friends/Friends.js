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
    <div>
      <h1>My Friend are {friends.length}</h1>
          <div className="container bg-dark">
            <div className="row">
              {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
              ))}
              ;
            </div>
          </div>
        </div>
  );
};

export default Friends;
