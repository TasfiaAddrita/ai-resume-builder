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
          Add Project
        </Button>
      }
    >
      <Modal.Header>Add Project</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Input
              fluid
              label="Project Name"
              placeholder="AI Resume Builder"
            />
            <Form.Input fluid label="Github" placeholder="https://www.github.com/you/ai-resume-builder" />
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
