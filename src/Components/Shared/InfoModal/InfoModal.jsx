import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './InfoModal.css';

const InfoModal = ({ title, viewBody, handleHide }) => (
  <Modal className="InfoModal" show onHide={handleHide}>
    <Modal.Header>
      <div className="ModalHeader">
        <Modal.Title>{title}</Modal.Title>
      </div>
    </Modal.Header>

    <Modal.Body className="ModalBody">
      {viewBody()}
    </Modal.Body>

    <Modal.Footer>
      <div className="ModalFooter">
        <Button variant="dark" onClick={handleHide}>Close</Button>
      </div>
    </Modal.Footer>
  </Modal>
);

InfoModal.propTypes = {
  title: PropTypes.string.isRequired,
  viewBody: PropTypes.node.isRequired,
  handleHide: PropTypes.func.isRequired,
};

export default InfoModal;
