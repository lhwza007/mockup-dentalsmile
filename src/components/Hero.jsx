import { Container, Row, Col } from "react-bootstrap";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section className="hero-gradient d-flex align-items-center">
      <Container className="py-4">
        <Row className="align-items-center">
          {/* ข้อความอยู่ก่อนบนจอเล็ก, รูปอยู่ทีหลัง */}
          <Col
            md={6}
            className="hero-col-text order-1 order-md-1"
          >
            <AnimateOnScroll>
              <h1 className="display-5 fw-bold text-dp-dark mb-3">
                ยิ้มสวย สุขภาพช่องปากดี<br />ด้วยทีมทันตแพทย์ผู้เชี่ยวชาญ
              </h1>
              <p className="lead text-secondary">
                คลินิกทำฟันสไตล์โมเดิร์น บริการครบ: อุดฟัน ขูดหินปูน จัดฟัน วีเนียร์ รากเทียม ฯลฯ
              </p>
              <div className="d-flex gap-2 mt-3">
                <a href="#services" className="btn btn-dp-primary btn-lg">ดูบริการ</a>
                <a href="#promo" className="btn btn-outline-dp-primary btn-lg">โปรโมชัน</a>
              </div>
              <ul className="list-inline mt-4 small text-dp-deep">
                <li className="list-inline-item me-3">• อุปกรณ์ได้มาตรฐาน</li>
                <li className="list-inline-item me-3">• ปลอดภัย สะอาด</li>
                <li className="list-inline-item">• ผ่อนจ่ายได้</li>
              </ul>
            </AnimateOnScroll>
          </Col>

          <Col
            md={6}
            className="text-center hero-col-illu order-2 order-md-2"
          >
            <AnimateOnScroll from="down" delay={80}>
              <img
                src="/hero.png"
                className="img-fluid hero-img floating"
                alt="Dental clinic"
              />
            </AnimateOnScroll>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
