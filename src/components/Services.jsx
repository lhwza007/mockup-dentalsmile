import { Container, Row, Col } from "react-bootstrap";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  { icon: "🦷", title: "อุดฟัน / ถอนฟัน", desc: "ดูแลรักษาทั่วไปด้วยวัสดุคุณภาพสูง เจ็บน้อย หายไว" },
  { icon: "✨", title: "ฟอกสีฟัน", desc: "ฟอกสีระบบแสง เย็น สว่างอย่างเป็นธรรมชาติ" },
  { icon: "😁", title: "วีเนียร์", desc: "ยิ้มสวยเป็นธรรมชาติ ปรับรูปทรงและสีฟัน" },
  { icon: "📏", title: "จัดฟันใส", desc: "ใส มองแทบไม่เห็น ถอดได้ ทำความสะอาดง่าย" },
  { icon: "🛠️", title: "ครอบฟัน/สะพานฟัน", desc: "คืนการใช้งานและความมั่นใจในการเคี้ยว" },
  { icon: "📡", title: "ทันตกรรมรากเทียม", desc: "วางรากเทียมด้วยภาพถ่าย 3D แม่นยำ ปลอดภัย" },
];

export default function Services() {
  return (
    <section id="services" className="py-5">
      <Container>
        <AnimateOnScroll>
          <h2 className="text-center mb-4 fw-bold text-primary">บริการของเรา</h2>
        </AnimateOnScroll>
        <Row className="g-4">
          {services.map((s, i) => (
            <Col md={4} sm={6} key={i} className="cursor-pointer">
              <AnimateOnScroll delay={i * 60}>
                <div className="card card-service hover-lift text-center cursor-pointer">
                  <div className="emoji-bg">{s.icon}</div>
                  <div className="card-body">
                    <h5 className="fw-semibold mb-1">{s.title}</h5>
                    <p className="text-secondary mb-0">{s.desc}</p>
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
