import Button from "react-bootstrap/Button";

function Delete({ handleDelete, index }) {
  return (
    <Button
      style={{ width: "5rem" }}
      onClick={() => handleDelete(index)}
      variant="outline-danger"
    >
      Delete
    </Button>
  );
}

export default Delete;
