import React from "react";
import { Button, Header, Image, Modal, Form, Icon } from "semantic-ui-react";

function ExperienceModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button>
          <Icon name="plus" />
          Add Experience
        </Button>
      }
    >
      <Modal.Header>Add Experience</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Input
              fluid
              label="Title"
              placeholder="Ex. Software Engineer"
            />
            <Form.Input fluid label="Company" placeholder="Ex. Make School" />
            <Form.Input
              fluid
              label="Location"
              placeholder="Ex. San Francisco, CA"
            />
            <Form.Checkbox label="I am currently working this role" />

            <Form.TextArea label="Description" />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          // labelPosition="right"
          onClick={() => setOpen(false)}
          color="teal"
          // positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ExperienceModal;
