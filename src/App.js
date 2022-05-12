import './App.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import InputExpense from './InputExpense';
import { useState } from 'react';

function App() {

  const [isShowFrom, setIsShowFrom] = useState(false);

  const handleToggleShowFrom = () => {
    setIsShowFrom(!isShowFrom)
  }

  return (
    <div className="App">
      <Container className='mt-3'>
        <Row className='p-3'>
          <Col className='d-flex justify-content-center'>
            <Button className='button-top' onClick={handleToggleShowFrom}>Add new expense</Button>
          </Col>
        </Row>

        <Row>
          {isShowFrom ? <InputExpense /> : ''}
        </Row>
        <Row className='mt-3'>
          <Col className='main'>
            <div className='header py-3'>
              <div>filter by year</div>
              <Form.Select aria-label="Default select example">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>

            <Row className='chart'>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Jan</p>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Feb</p></Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Mar</p>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Apr</p>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>May</p>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Jun</p>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Jul</p>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Aug</p>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Sep</p>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Oct</p>
              </Col>
              <Col className='d-flex justify-content-center'>
                <div className='chart-item'></div>
                <p>Nov</p>
              </Col>
            </Row>
            <div className='box'>
              <Row className='bill'>
                <Col className='date' sm={2}>
                  <p>January</p>
                  <p>2022</p>
                  <p>16</p>
                </Col>
                <Col sm={6}>
                  <h2>Some Book</h2>
                </Col>
                <Col sm={3} className='money'>
                  <div className='money-item'>$50</div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
