import { Container, Row, Col } from "react-bootstrap";
import AnimateOnScroll from "./AnimateOnScroll";

const reviews = [
  { name: "คุณแอน", text: "คุณหมอมือเบา อธิบายละเอียด บริการดีมาก", rating: 5 },
  { name: "คุณบาส", text: "ฟอกสีฟันแล้วฟันไม่เสียว ยิ้มมั่นใจขึ้น", rating: 5 },
  { name: "คุณจีน", text: "เคลมประกันง่าย สะดวก ที่จอดรถเยอะ", rating: 4 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-5 bg-dp-soft">
      <Container>
        <AnimateOnScroll>
          <h2 className="text-center mb-4">เสียงจากผู้ใช้บริการ</h2>
        </AnimateOnScroll>
        <Row className="g-4">
          {reviews.map((r, i) => (
            <Col md={4} key={i}>
              <AnimateOnScroll delay={i * 80}>
                <div className="card card-soft hover-lift">
                  <div className="card-body">
                    <div className="mb-2">{Array.from({ length: r.rating }).map((_, i) => "⭐")}</div>
                    <p className="mb-2">“{r.text}”</p>
                    <div className="small text-secondary">— {r.name}</div>
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
