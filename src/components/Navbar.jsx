import { Navbar, Nav, Container } from "react-bootstrap";
import BoxTopNav from "./boxTopNav";
import FloatingContact from './FloatingContact';

export default function NavbarTop() {
  const goTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", " ");
  };

  return (
    <>
      <BoxTopNav />

      {/* Navbar ปกติ */}
      <Navbar expand="lg" className="shadow-sm sticky-top bg-white py-3">
        <Container className="relative">
          {/* โลโก้ */}
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
              <Nav.Link href="#promo">Promotion</Nav.Link>
              <Nav.Link href="#testimonials">Reveiws</Nav.Link>
              <Nav.Link href="#knowledge">Article</Nav.Link>
              <a className="btn btn-dp-primary ms-lg-3" href="#contact">reserve</a>
            </Nav>
          </Navbar.Collapse>

          {/* Floating Contact ลอยมุมขวาล่าง (อยู่ใน Navbar แต่ fixed) */}
          <div className="fixed bottom-6 right-6 z-[9999] pointer-events-none">
            <div className="pointer-events-auto">
              
            </div>
          </div>
        </Container>
      </Navbar>
      <a
  href="#contact"
  className="position-fixed bottom-0 end-0 m-4 z-3 text-white"
  style={{ cursor: "pointer" , textDecoration: "none"}}
>
  {/* ห่อรูป + ปุ่มด้วย container ที่จัดการตำแหน่ง */}
  <div className="position-relative d-flex flex-column align-items-center">
    <img
      src="/doctor.png"
      alt="Contact Icon"
      className="img-fluid"
      style={{
        height: "200px",
        width: "auto",
        objectFit: "cover",
      }}
    />

    {/* ปุ่มทับรูป ด้วย margin-top เป็นค่าติดลบ */}
    <div
      className="bg-primary px-3 py-2 rounded-pill shadow position-relative"
      style={{
        marginTop: "-20px",   // <-- ติดลบเพื่อดึงขึ้นไปทับรูป
        zIndex: 5,
      }}
    >
      <span className="fw-medium d-none d-sm-block">สอบถามเพิ่มเติม</span>
    </div>
  </div>
</a>
    </>
  );
}