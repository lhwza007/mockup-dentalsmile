import { Container, Row, Col } from "react-bootstrap";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section
      className="hero-banner d-flex align-items-center"
      
    >
      <Container className="py-4">
        <Row className="align-items-center">
          {/* ข้อความ */}
          <Col md={6} className="hero-col-text order-1 order-md-1">
  <AnimateOnScroll>
    <div className="hero-text-panel">
      <h1 className="display-5 fw-bold text-hero-title mb-3">
  ยิ้มสวย สุขภาพช่องปากดี<br />ด้วยทีมทันตแพทย์ผู้เชี่ยวชาญ
</h1>

<p className="lead text-hero-subtitle">
  คลินิกทำฟันสไตล์โมเดิร์น บริการครบ: อุดฟัน ขูดหินปูน จัดฟัน วีเนียร์ รากเทียม ฯลฯ
</p>

<ul className="list-inline mt-4 small text-hero-bullet">
  <li className="list-inline-item me-3">• อุปกรณ์ได้มาตรฐาน</li>
  <li className="list-inline-item me-3">• ปลอดภัย สะอาด</li>
  <li className="list-inline-item">• ผ่อนจ่ายได้</li>
</ul>
    </div>
  </AnimateOnScroll>
</Col>

          
        </Row>
      </Container>
    </section>
  );
}
