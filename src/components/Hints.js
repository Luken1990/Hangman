import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import hints from '../data/hints';
import Offcanvas from 'react-bootstrap/Offcanvas';

//Bootstrap component
//display off screen element if show equals true else hide if show equals false
//two function to change show state
function OffCanvasHints({ ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  //next and previous function
  //if index/value is less than or equals 0 then set index to array length - 1
  //else increment or decrement index by 1
  const handlePrev = () => {
    if (index <= 0) {
      setIndex(hints.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNext = () => {
    if (index >= hints.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  //return element to display hints
  //display hint array element
  //allow user to cycle through hints
  return (
    <>
      <Button variant="outline-info" onClick={handleShow} className="me-2 btn">
        Hints
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hints/Rules</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>{hints[index]}</p>
          <ButtonGroup>
            <Button onClick={handlePrev} variant="outline-dark">
              Prev
            </Button>
            <Button onClick={handleNext} variant="outline-dark">
              Next
            </Button>
          </ButtonGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasHints;
