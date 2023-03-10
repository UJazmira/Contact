import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ContactCard({ item, handleDelete, handleEdit }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.surname}</Card.Text>
        <Card.Text>{item.contact}</Card.Text>
        <Card.Text>{item.gmail}</Card.Text>
        <Button variant="outline-success" onClick={() => handleDelete(item.id)}>
          Delete
        </Button>
        <Button variant="outline-success" onClick={() => handleEdit(item.id)}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
