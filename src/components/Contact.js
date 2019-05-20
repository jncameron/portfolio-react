import React from "react";
import { Card } from "semantic-ui-react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h3 className="title">Contact John</h3>
      <Card.Group>
        <Card fluid color="green">
          <Card.Content>
            <Card.Header>Email</Card.Header>
            <Card.Description>
              <strong>john.n.cameron@gmail.com</strong>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card fluid color="green">
          <Card.Content>
            <Card.Header>Phone</Card.Header>
            <Card.Description>
              <strong>0435 865 772</strong>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card fluid color="green">
          <Card.Content>
            <Card.Header>Location</Card.Header>
            <Card.Description>
              <strong>Sydney Olympic Park NSW 2127</strong>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </section>
  );
};

export default Contact;
