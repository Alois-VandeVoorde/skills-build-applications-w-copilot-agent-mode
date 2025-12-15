import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ActivityModal({ show, handleClose, handleSave }) {
  const [activity, setActivity] = useState({
    type: '',
    duration: '',
    date: ''
  });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    handleSave(activity);
    setActivity({ type: '', duration: '', date: '' });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={activity.type}
              onChange={handleChange}
              placeholder="Enter activity type"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDuration">
            <Form.Label>Duration (minutes)</Form.Label>
            <Form.Control
              type="number"
              name="duration"
              value={activity.duration}
              onChange={handleChange}
              placeholder="Enter duration"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={activity.date}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save Activity
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ActivityModal;
