import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarTop() {
  return (
    <Navbar expand="lg" className="shadow-sm sticky-top bg-white">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-dp-deep">
          Dental<span className="text-dp-primary">Smile</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#services">บริการ</Nav.Link>
            <Nav.Link href="#promo">โปรโมชั่น</Nav.Link>
            {/* <Nav.Link href="#locations">สาขา</Nav.Link> */}
            <Nav.Link href="#testimonials">รีวิว</Nav.Link>
            <Nav.Link href="#knowledge">บทความสุขภาพฟัน</Nav.Link>
            <a className="btn btn-dp-primary ms-lg-3" href="#contact">จองคิว</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
