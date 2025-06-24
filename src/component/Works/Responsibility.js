import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Responsibility({ responsibilities, company, location }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Responsibilities
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h2 className="fw-bolder">{company}</h2>
        </ModalHeader>
        <ModalBody>
          <h6 className="mt-0 mb-3">{location}</h6>
          <ul>
            {Array.isArray(responsibilities) && responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
            ))}
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Responsibility;