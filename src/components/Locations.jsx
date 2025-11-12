import { Container, Row, Col } from "react-bootstrap";
import AnimateOnScroll from "./AnimateOnScroll";

const branches = [
  {
    name: "สาขากลางเมือง",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    addr: "ถนนสุขภาพ 12, ใกล้รถไฟฟ้า",
    map: "#",
  },
  {
    name: "สาขาชานเมือง",
    img: "https://images.unsplash.com/photo-1520012103246-6f736e5b8dff?q=80&w=1200&auto=format&fit=crop",
    addr: "โครงการ Plaza, ชั้น 2",
    map: "#",
  },
  {
    name: "สาขาเลียบด่วน",
    img: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1200&auto=format&fit=crop",
    addr: "ติดทางด่วน, ที่จอดสะดวก",
    map: "#",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-5 bg-dp-soft">
      <Container>
        <AnimateOnScroll>
          <h2 className="text-center mb-4">คลินิกใกล้บ้านคุณ</h2>
        </AnimateOnScroll>
        <Row className="g-4">
          {branches.map((b, i) => (
            <Col md={4} key={i}>
              <AnimateOnScroll delay={i * 80}>
                <div className="card hover-lift">
                  <img src={b.img} className="card-img-top" alt={b.name} />
                  <div className="card-body">
                    <h5 className="fw-semibold">{b.name}</h5>
                    <p className="text-secondary">{b.addr}</p>
                    <a href={b.map} className="btn btn-outline-dp-primary btn-sm">
                      ดูแผนที่
                    </a>
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
