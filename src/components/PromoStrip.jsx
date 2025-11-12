import { Container, Row, Col } from "react-bootstrap";
import AnimateOnScroll from "./AnimateOnScroll";

const promos = [
  { title: "ขูดหินปูน + ตรวจสุขภาพฟัน", price: "1,000.-" },
  { title: "ฟอกสีฟัน Cool Light", price: "3,990.-" },
  { title: "อุดฟันเรซิน (เริ่มต้น)", price: "899.-" },
  { title: "ผ่อนชำระ จัดฟันใส*", price: "เดือนละ 2,9xx.-" },
];

export default function PromoStrip() {
  return (
    <section id="promo" className="py-5 bg-dp-soft">
      <Container>
        <AnimateOnScroll>
          <h2 className="text-center mb-4">โปรโมชันแนะนำ</h2>
        </AnimateOnScroll>
        <Row className="g-4">
          {promos.map((p, i) => (
            <Col md={3} sm={6} key={i}>
              <AnimateOnScroll delay={i * 80}>
                <div className="card card-soft hover-lift">
                  <div className="card-body text-center ">
                    <div className="badge bg-dp-accent bg-opacity-25 text-dp-deep mb-2">
                      พิเศษ
                    </div>
                    <h5 className="fw-semibold">{p.title}</h5>
                    <p className="display-6 fw-bold text-dp-primary">{p.price}</p>
                    <small className="text-secondary">*เงื่อนไขเป็นไปตามที่คลินิกกำหนด</small>
                  </div>
                </div>
              </AnimateOnScroll>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
