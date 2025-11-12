import { Container, Row, Col } from "react-bootstrap";
import AnimateOnScroll from "./AnimateOnScroll";

const posts = [
  { title: "ฟันแตก ฟันบิ่น ทำอย่างไรดี?", img: "https://placehold.co/600x400.png" },
  { title: "ฟังคุณหมอ: ฟันหลอแก้ได้", img: "https://placehold.co/600x400.png" },
  { title: "ปวดเหงือกบ่อย เสี่ยงอะไร?", img: "https://placehold.co/600x400.png" },
];

export default function Knowledge() {
  return (
    <section id="knowledge" className="py-5">
      <Container>
        <AnimateOnScroll>
          <h2 className="text-center mb-4">ความรู้เกี่ยวกับสุขภาพฟัน</h2>
        </AnimateOnScroll>
        <Row className="g-4">
          {posts.map((p, i) => (
            <Col md={4} key={i}>
              <AnimateOnScroll delay={i * 80} from="up">
                <a href="#" className="card card-article hover-lift text-decoration-none">
                  <img src={p.img} className="card-img-top" alt={p.title} />
                  <div className="card-body">
                    <h5 className="fw-semibold text-dp-dark">{p.title}</h5>
                    <span className="text-dp-primary small">อ่านต่อ →</span>
                  </div>
                </a>
              </AnimateOnScroll>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
