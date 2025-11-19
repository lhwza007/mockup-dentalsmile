import React from "react";

const services = [
  {
    category: "Dental Cleaning & Scaling",
    subtitle: "ทำความสะอาดหินปูน ป้องกันฟันผุและโรคเหงือก",
    items: [
      { name: "Cleaning & Scaling", price: "900 – 1,500", unit: "/Person" },
      { name: "Cleaning & Scaling with Airflow", price: "1,700 – 2,200", unit: "/Person" },
    ],
  },
  {
    category: "Dental Filling",
    subtitle: "อุดฟันเพื่อซ่อมแซมฟันผุและเพิ่มความสวยงาม",
    items: [
      { name: "Amalgam", price: "800 – 1,700", unit: "/Tooth" },
      { name: "White Composite", price: "900 – 1,800", unit: "/Tooth" },
    ],
  },
  {
    category: "Tooth Extraction",
    subtitle: "ถอนฟันทั่วไปและฟันคุดโดยทันตแพทย์ผู้เชี่ยวชาญ",
    items: [
      { name: "Tooth Extraction", price: "900 – 1,700", unit: "/Tooth" },
      { name: "Impacted Wisdom Extraction", price: "2,000 – 5,000", unit: "/Tooth" },
    ],
  },
  {
    category: "Teeth Whitening",
    subtitle: "ปรับสีฟันให้ขาวขึ้นอย่างปลอดภัยและเห็นผลไว",
    items: [
      { name: "LED Cool Light", price: "3,900", unit: "/Person" },
      { name: "Laser + Cleaning", price: "5,500", unit: "/Person" },
      { name: "Zoom2 + Cleaning", price: "9,500", unit: "/Person" },
      { name: "At-Home", price: "4,500", unit: "/Person" },
    ],
  },
];

export default function DentalPricingSection() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f1f5f9" }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">Dental Treatments & Fees</h2>
          <p className="text-muted mb-0">
            ตารางค่ารักษาทันตกรรมแบบใหม่ในรูปแบบการ์ด อ่านง่าย แยกหมวดชัดเจน
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div className="card border-0 shadow-sm h-100 rounded-4">
                {/* แถบหัวการ์ด */}
                <div
                  className="px-4 py-3 rounded-top-4"
                  style={{
                    background:
                      "linear-gradient(90deg, #0ea5e9, #38bdf8)",
                    color: "#fff",
                  }}
                >
                  <h5 className="mb-1 fw-semibold">{service.category}</h5>
                  <small className="d-block opacity-75">
                    {service.subtitle}
                  </small>
                </div>

                {/* เนื้อหาในการ์ด */}
                <div className="card-body">
                  {service.items.map((item, i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center justify-content-between py-2 border-bottom"
                    >
                      <div>
                        <div className="fw-semibold">{item.name}</div>
                      </div>
                      <div className="text-end">
                        <span className="badge rounded-pill bg-light text-primary me-1">
                          {item.price} ฿
                        </span>
                        <small className="text-muted">{item.unit}</small>
                      </div>
                    </div>
                  ))}
                </div>

                {/* footer เล็กๆ */}
                <div className="card-footer bg-transparent border-0 pt-0 pb-3 px-4">
                  <small className="text-muted">
                    * ราคาขึ้นอยู่กับสภาพฟันของแต่ละบุคคล กรุณาปรึกษาทันตแพทย์ก่อนการรักษา
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}