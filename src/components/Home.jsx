
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Home() {
  return (
    <>
    
    
    
    <div className='bg-dark'>
      {/* Hero Section */}
      <div
        className="text-center text-light d-flex align-items-center justify-content-center"
        style={{
          height: '80vh',
          backgroundImage: 'url(https://wallpaperaccess.com/full/338397.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <h1 className="display-4">Experience the Ultimate Driving Machine</h1>
          <p className="lead">Discover the latest BMW models designed for performance and luxury.</p>
          <Button variant="primary" size="lg" href="#models">
            Explore Models
          </Button>
        </Container>
      </div>

















      
<div className='my-2 me-5'>

    
      {/* Models Section */}
      <Container id="models" className="py-5 bg-dark">
        <h2 className="text-center mb-4">Our Top Models</h2>
        <Row>
          <Col md={4}>
            <Card className='col-md- mb-4 '>
              <Card.Img variant="top" src="https://wallpaperaccess.com/full/3017492.jpg"  />
              <Card.Body className='bg-secondary'>
                <Card.Title>BMW M3-E46</Card.Title>
                <Card.Text>
                  A sleek, high-performance sedan designed for luxury and speed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img style={{height:"275px"}} variant="top" src="https://wallpaperaccess.com/full/8512667.jpg"  />
              <Card.Body  className='bg-secondary'>
                <Card.Title>BMW M2</Card.Title>
                <Card.Text>
                  The ultimate SUV with cutting-edge technology and unmatched comfort.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

{/*  */}
          <Col md={4}>
            <Card className='col-md- mb-4'>
              <Card.Img style={{height:"275px"}} variant="top" src="https://wallpaperaccess.com/full/4618257.jpg"  />
              <Card.Body  className='bg-secondary'>
                <Card.Title>BMW M5</Card.Title>
                <Card.Text>
                A sleek, high-performance sedan designed for luxury and speed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>


          <Col md={4}>
            <Card className='col-md- mb-4'>
              <Card.Img style={{height:"275px"}} variant="top" src="https://wallpaperaccess.com/full/5606742.jpg"  />
              <Card.Body  className='bg-secondary'>
                <Card.Title>BMW M8</Card.Title>
                <Card.Text>
                A sleek, high-performance sedan designed for luxury and speed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> <Col md={4}>
            <Card>
              <Card.Img style={{height:"275px"}} variant="top" src="https://wallpaperaccess.com/full/9347404.jpg"  />
              <Card.Body  className='bg-secondary'>
                <Card.Title>BMW M340i</Card.Title>
                <Card.Text>
                A sleek, high-performance sedan designed for luxury and speed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> <Col md={4}>
            <Card>
              <Card.Img style={{height:"275px"}} variant="top" src="https://wallpaperaccess.com/full/10062986.jpg"  />
              <Card.Body  className='bg-secondary'>
                <Card.Title>BMW i7</Card.Title>
                <Card.Text>
                  The ultimate SUV with cutting-edge technology and unmatched comfort.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> <Col md={4}>
            <Card>
              <Card.Img style={{height:"275px"}} variant="top" src="https://wallpaperaccess.com/full/9261427.jpg"  />
              <Card.Body  className='bg-secondary'>
                <Card.Title>BMW M4 csl</Card.Title>
                <Card.Text>
                A sleek, high-performance sedan designed for luxury and speed
                </Card.Text>
              </Card.Body >
            </Card>
          </Col> <Col md={4}>
            <Card>
              <Card.Img style={{height:"275px"}} variant="top" src="https://cdn.motor1.com/images/mgl/vxK0Z6/s4/bmw-i5-m60-xdrive-2023.jpg"  />
              <Card.Body  className='bg-secondary'>
                <Card.Title>BMW i5</Card.Title>
                <Card.Text>
                A sleek, high-performance sedan designed for luxury and speed
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

{/*  */}

          <Col md={4}>
            <Card>
              <Card.Img  style={{height:"275px"}} variant="top" src="https://tse1.mm.bing.net/th?id=OIP.VuJH7xPJNiPKf5PonvoalgHaEK&pid=Api&P=0&h=220" />
              <Card.Body  className='bg-secondary'>
                <Card.Title>BMW XM</Card.Title>
                <Card.Text>
                  A compact car offering agility, efficiency, and modern design.
                </Card.Text>
              </Card.Body >
            </Card>
          </Col>
        </Row>
      </Container>
      </div>  

      {/* Features Section */}
      <div id="features" className="bg-primary py-5">
        <Container>
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <Row>
            <Col md={4} className="text-center">
              <h4>Innovative Technology</h4>
              <p>Experience the future of driving with our advanced features.</p>
            </Col>
            <Col md={4} className="text-center">
              <h4>Unmatched Performance</h4>
              <p>Every car is designed for maximum power and efficiency.</p>
            </Col>
            <Col md={4} className="text-center">
              <h4>Safety First</h4>
              <p>Your safety is our priority with state-of-the-art systems.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Home