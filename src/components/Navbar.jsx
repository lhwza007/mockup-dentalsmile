import { Navbar, Nav, Container } from "react-bootstrap";
import BoxTopNav from "./boxTopNav";

// ...existing code...
export default function NavbarTop() {
  const goTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // เปลี่ยน URL เป็น "#" โดยไม่ทำให้หน้าเลื่อนซ้ำ
    window.history.pushState(null, "", "#");
    // หากไม่ต้องการเพิ่ม entry ใน history ให้ใช้ replaceState แทน:
    // window.history.replaceState(null, "", "#");
  };

  return (
    <>
    <BoxTopNav />
    <Navbar expand="lg" className="shadow-sm sticky-top bg-white py-3">
      <Container>
        <Navbar.Brand href="#" onClick={goTop} className="fw-bold text-dp-deep">
          Dental<span className="text-dp-primary">Smile</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#" onClick={goTop}>Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#staff">Staff</Nav.Link>
            <Nav.Link href="#facility">Facility</Nav.Link>
            <Nav.Link href="#promo">โปรโมชั่น</Nav.Link>
            {/* <Nav.Link href="#locations">สาขา</Nav.Link> */}
            <Nav.Link href="#testimonials">รีวิว</Nav.Link>
            <Nav.Link href="#knowledge">บทความสุขภาพฟัน</Nav.Link>
            <a className="btn btn-dp-primary ms-lg-3" href="#contact">จองคิว</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
// ...existing code...