import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";
import Card from "react-bootstrap/Card";

function Profile({ person, handleDelete, handleEditName, handleEditTitle }) {
  const { name, title, img, index } = person;

  return (
    <Card
      style={{
        width: "18rem",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 2rem",
        margin: "0.5rem",
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        style={{
          borderRadius: "100000px",
          width: "10rem",
          height: "10rem",
          objectFit: "cover",
          textAlign: "center",
        }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{name}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{title}</Card.Text>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1rem",
          }}
        >
          <Edit
            person={person}
            handleEditName={handleEditName}
            handleEditTitle={handleEditTitle}
          />
          <Delete index={index} handleDelete={handleDelete} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Profile;
