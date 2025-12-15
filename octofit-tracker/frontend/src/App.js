
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Table, Card } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">OctoFit Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#teams">Teams</Nav.Link>
              <Nav.Link href="#activities">Activities</Nav.Link>
              <Nav.Link href="#workouts">Workouts</Nav.Link>
              <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h1 className="mb-4">Welcome to <span className="text-primary">OctoFit Tracker</span></h1>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Sample Data Table</Card.Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Team</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Spider-Man</td>
                  <td>spiderman@marvel.com</td>
                  <td>Marvel</td>
                  <td><Button variant="primary" size="sm">View</Button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Batman</td>
                  <td>batman@dc.com</td>
                  <td>DC</td>
                  <td><Button variant="primary" size="sm">View</Button></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Button variant="success" className="me-2">Add Activity</Button>
        <Button variant="info">Show Modal</Button>
      </Container>
    </div>
  );
}

export default App;
