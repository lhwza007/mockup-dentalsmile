import { Container, Row, Col } from "react-bootstrap";
import AnimateOnScroll from "./AnimateOnScroll";
import { useState } from "react";
import { Button } from "react-bootstrap";

const services = [
  {
    category: "Dental Cleaning & Scaling",
    subtitle: "",
    image: "https://www.dentalsmilepattaya.com/image/airflow.jpg",
    items: [
      { name: "Cleaning & Scaling", price: "900 - 1,500", unit: "/Person" },
      { name: "Cleaning & Scaling with Airflow", price: "1,700 - 2,200", unit: "/Person" },
    ],
  },

  {
    category: "Dental Filling",
    subtitle: "",
    image: "https://www.dentalsmilepattaya.com/image/dental_filling.jpg",
    items: [
      { name: "Amalgam", price: "800 - 1,700", unit: "/Tooth" },
      { name: "White Composite", price: "900 - 1,800", unit: "/Tooth" },
    ],
  },

  {
    category: "Tooth Extraction",
    subtitle: "",
    image: "https://www.dentalsmilepattaya.com/image/wisdom_tooth.jpg",
    items: [
      { name: "Tooth Extraction", price: "900 - 1,700", unit: "/Tooth" },
      { name: "Impacted Wisdom Extraction", price: "2,000 - 5,000", unit: "/Tooth" },
    ],
  },

  {
    category: "Teeth Whitening",
    subtitle: "",
    image: "https://www.dentalsmilepattaya.com/image/teeth_whitening.jpg",
    items: [
      { name: "LED Cool Light", price: "3,900", unit: "/Person" },
      { name: "Laser + Cleaning", price: "5,500", unit: "/Person" },
      { name: "Zoom2 + Cleaning", price: "9,500", unit: "/Person" },
      { name: "At-Home", price: "4,500", unit: "/Person" },
    ],
  },

  {
    category: "Crown / Cap",
    subtitle: "",
    image: "https://www.dentalsmilepattaya.com/image/crown.jpg",
    items: [
      { name: "Porcelain fused to standard metal", price: "9000", unit: "/Tooth" },
      { name: "All Ceramic (Empress Emax)", price: "12500", unit: "/Tooth" },
      { name: "Zirconia Crown", price: "15000", unit: "/Tooth" },
      {
        name: "Porcelain fused to palladium 2% Gold",
        price: "11000 - 15000",
        unit: "/Tooth",
      },
      {
        name: "Porcelain fused to 54% 87% Gold",
        price: "By Report",
        unit: "/Tooth",
      },
    ],
  },

  {
    category: "Dental Bridge",
    subtitle: "",
    image: "https://www.dentalsmilepattaya.com/image/bridge2.jpg",
    items: [
      { name: "Porcelain fused to standard metal", price: "27000", unit: "/3 Teeth" },
      { name: "Porcelain fused to standard palladium", price: "33000 - 45000", unit: "/3 Teeth" },
      { name: "All Ceramic (Empress Emax)", price: "37500", unit: "/3 Teeth" },
      { name: "Zirconia Bridge", price: "45000", unit: "/3 Teeth" },
      { name: "Maryland Bridge", price: "By Report", unit: "/3 Teeth" },
    ],
  },

  {
    category: "Dental Veneer",
    subtitle: "",
    image: "https://www.dentalsmilepattaya.com/image/porcelain_veneers.jpg",
    items: [
      {
        name: "Porcelain Veneer (Empress Esthetic)",
        price: "By Report",
        unit: "/Tooth",
      },
      {
        name: "Porcelain Veneer (Empress Emax)",
        price: "12500",
        unit: "/Tooth",
      },
    ],
  },
  {
  category: "Dental Inlay / Onlay",
  subtitle: "",
  image: "https://www.dentalsmilepattaya.com/image/inlay_onlay.jpg",
  items: [
    { name: "Composite Inlay/Onlay", price: "3000 - 4000", unit: "/Tooth" },
    { name: "Porcelain Inlay/Onlay", price: "By Report", unit: "/Tooth" },
    { name: "Metal Inlay/Onlay", price: "By Report", unit: "/Tooth" },
  ],
},

{
  category: "Dental Implant",
  subtitle: "",
  image: "https://www.dentalsmilepattaya.com/image/dental_implant2.jpg",
  items: [
    { name: "Single Implant with zirconia crown", price: "45000", unit: "/Tooth" },
    { name: "All-on-4 One trip implant", price: "By Report", unit: "/Jaw" },
  ],
},

{
  category: "Removable Denture",
  subtitle: "",
  image: "https://www.dentalsmilepattaya.com/image/denture.jpg",
  items: [
    { name: "Full Denture", price: "18000 - 20000", unit: "/Jaw" },
    { name: "Partial denture", price: "10000 - 18000", unit: "/Jaw" },
  ],
},

{
  category: "Root Canal Therapy",
  subtitle: "",
  image: "https://www.dentalsmilepattaya.com/image/endo.jpg",
  items: [
    { name: "Incisor, Canine", price: "6000 - 7000", unit: "/Tooth" },
    { name: "Premolar", price: "7000 - 9000", unit: "/Tooth" },
    { name: "Molar", price: "9000 - 12000", unit: "/Tooth" },
  ],
},
{
  category: "Root Planing or Deep Cleaning",
  subtitle: "",
  image: "https://www.dentalsmilepattaya.com/image/rootplaning.jpg",
  items: [
    {
      name: "Root Planing & Deep Cleaning",
      price: "By Report",
      unit: "/Quartant",
    },
  ],
},
{
  category: "Orthodontics",
  subtitle: "",
  image: "https://www.dentalsmilepattaya.com/image/orthodontic.jpg",
  items: [
    {
      name: "Metal Brace",
      price: "35000 - 40000",
      unit: "/Person",
    },
  ],
},
];


export default function Services() {
  const [showAll, setShowAll] = useState(false);

  // แสดงแค่ 3 รายการแรก หรือทั้งหมดตามสถานะ
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dp-dark">Dental Service and Price</h2>
        </div>

        {/* Services Cards */}
        <div className="row g-4">
          {displayedServices.map((svc, idx) => (
            <div key={idx} className="col-12">
              <div className="card-service hover-lift shadow-sm">

                {/* Header */}
                <div
                  className="px-4 py-3 text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--dp-primary), var(--dp-deep))",
                    borderRadius: "8px 8px 0 0",
                  }}
                >
                  <h5 className="mb-1 fw-bold" style={{ fontSize: "1.25rem" }}>
                    {svc.category}
                  </h5>
                  {svc.subtitle && (
                    <small className="opacity-90">{svc.subtitle}</small>
                  )}
                </div>

                <div className="row g-0">
                  {/* Image */}
                  <div className="col-md-4">
                    <img
                      src={svc.image}
                      alt={svc.category}
                      className="img-fluid w-100"
                      style={{ height: "260px", objectFit: "cover" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      {svc.items.map((item, i) => (
                        <div
                          key={i}
                          className="d-flex justify-content-between align-items-center py-3 border-bottom"
                        >
                          <div className="fw-semibold text-dp-dark">
                            {item.name}
                          </div>
                          <div>
                            <span
                              className="badge px-3 py-2"
                              style={{
                                background: "var(--dp-soft)",
                                color: "var(--dp-deep)",
                                fontWeight: 600,
                              }}
                            >
                              {item.price} ฿ {item.unit}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="px-4 pb-3">
                      <small className="text-muted">
                        * ราคาขึ้นอยู่กับสภาพฟันของแต่ละบุคคล
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ปุ่ม Show More / Show Less */}
        <div className="text-center mt-5">
          <Button
            variant="outline-primary"
            size="lg"
            className="px-5 fw-semibold"
            onClick={() => setShowAll(!showAll)}
            style={{
              borderRadius: "50px",
              borderWidth: "2px",
            }}
          >
            {showAll ? "ซ่อนบริการทั้งหมด" : "ดูบริการทั้งหมด"} ({services.length} รายการ)
            <i className={`bi bi-chevron-${showAll ? "up" : "down"} ms-2`}></i>
          </Button>
        </div>

      </div>
    </section>
  );
}