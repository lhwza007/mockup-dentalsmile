import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const doctors = [
  {
    fullName: "Dr. Patcharin Nanthaekaphong",
    nickname: "Dr. Cherry",
    position: "Prosthodontist & Implant Specialist",
    education: [
      "DDS (Honor), Mahidol University",
      "MSc Prosthodontics, Mahidol University",
      "Certificate of Surgical & Prosthetic in Implant Dentistry (Bern University, Switzerland)",
      "Certificate of Implantology, Apsun Dental Implant Research & Education/AIC",
      "Completion of Implant Course Training: ITI Straumann, 3i System, Osstem System"
    ],
    image: "https://placehold.co/255x300?text=Dr.+Cherry"
  },
  {
    fullName: "Dr. Pabhinvitch Vipatbovonwong",
    nickname: "Dr. Tob",
    position: "Orthodontist",
    education: ["DDS, Khon Kaen University", "MSc Orthodontics, Khon Kaen University"],
    image: "https://placehold.co/255x300?text=Dr.+Tob"
  },
  {
    fullName: "Dr. Assawinee Thimsang",
    nickname: "Dr. Ae",
    position: "Periodontist",
    education: ["DDS (Honor), Mahidol University", "MSc Periodontics, Mahidol University", "Diplomate Thai Board of Periodontics"],
    image: "https://placehold.co/255x300?text=Dr.+Ae"
  },
  {
    fullName: "Dr. Surpun Srikume",
    nickname: "Dr. Nung",
    position: "Endodontist",
    education: ["DDS (Honor), Srinakharinwirot University", "MSc Endodontics, Srinakharinwirot University"],
    image: "https://placehold.co/255x300?text=Dr.+Nung"
  },
  {
    fullName: "Dr. Woradet Phichaiutkrit",
    nickname: "Dr. Boy",
    position: "Advanced General Dentistry",
    education: ["DDS, Mahidol University", "MSc General Dentistry, Khon Kaen University"],
    image: "https://placehold.co/255x300?text=Dr.+Boy"
  },
  {
    fullName: "Dr. Chaichan Sangsirinakagul",
    nickname: "Dr. Gui",
    position: "Advanced General Dentistry",
    education: ["DDS, Khon Kaen University", "MSc General Dentistry, Khon Kaen University"],
    image: "https://placehold.co/255x300?text=Dr.+Gui"
  },
  {
    fullName: "Dr. Jureeporn Piladist",
    nickname: "Dr. Numaoi",
    position: "General Dentist",
    education: ["DDS, Chulalongkorn University"],
    image: "https://placehold.co/255x300?text=Dr.+Numaoi"
  },
  {
    fullName: "Dr. Lalita Rutchakitprakarn",
    nickname: "Dr. Ann",
    position: "General Dentist",
    education: ["DDS, Thammasat University"],
    image: "https://placehold.co/255x300?text=Dr.+Ann"
  },
  {
    fullName: "Dr. Chatchai Tharanont",
    nickname: "Dr. Chai",
    position: "General Dentist",
    education: ["DDS, Mahidol University"],
    image: "https://placehold.co/255x300?text=Dr.+Chai"
  }
];

export default function Staff() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <>
      {/* พื้นหลังอ่อน ๆ สบายตา */}
      <div className="min-vh-100 py-5 bg-dp-soft" id="staff">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dp-dark display-5">
            Our Dentist Team
          </h2>

          {/* การ์ดหมอ */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 g-lg-5 justify-content-center">
            {doctors.map((doc, index) => (
              <div className="col" key={index}>
                <div
                  className="card border-0 shadow-lg h-100 overflow-hidden hover-lift"
                  style={{
                    borderRadius: '28px',
                    background: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* รูป */}
                  <div className="p-3 pt-4">
                    <img
                      src={doc.image}
                      alt={doc.nickname}
                      className="w-100 rounded-3 img-elevated"
                      style={{ height: '240px', objectFit: 'cover' }}
                    />
                  </div>

                  {/* ข้อมูล */}
                  <div className="px-4 pb-5 text-center">
                    <h5 className="fw-bold text-dp-dark mb-1">
                      {/* {doc.fullName.replace('Dr. ', '').split(' ')[1]}<br /> */}
                      {doc.fullName.replace('Dr. ', '').split(' ').slice(0).join(' ')}
                    </h5>
                    <p className="text-dp-primary small fw-medium">({doc.nickname})</p>

                    {/* ปุ่ม More */}
                    <button
                      className="btn btn-dp-primary text-white rounded-pill px-4 shadow-sm mt-3"
                      onClick={() => setSelectedDoctor(doc)}
                      style={{ fontWeight: '600' }}
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal ประวัติเต็ม */}
      {selectedDoctor && (
        <div 
          className="modal show d-block" 
          style={{ background: 'rgba(0, 0, 0, 0.55)' }} 
          onClick={() => setSelectedDoctor(null)}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div
              className="modal-content overflow-hidden border-0 shadow-lg"
              style={{ borderRadius: '32px', background: 'white' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-body p-0">
                <div className="row g-0">
                  {/* รูปด้านซ้าย */}
                  <div className="col-lg-5">
                    <img
                      src={selectedDoctor.image}
                      alt={selectedDoctor.nickname}
                      className="w-100 h-100 p-3 pt-4"
                      style={{
                        objectFit: 'cover',
                        minHeight: '420px',
                        borderRadius: '32px'
                      }}
                    />
                  </div>

                  {/* ข้อมูลด้านขวา */}
                  <div className="col-lg-7 d-flex flex-column justify-content-between p-5 p-lg-6 bg-white">
                    <h3 className="fw-bold text-dp-dark mb-1">
                      {selectedDoctor.fullName.replace('Dr. ', '')}
                    </h3>
                    <p className="text-dp-primary fs-5 fw-medium mb-4">
                      ({selectedDoctor.nickname})
                    </p>
                    <h5 className="text-dp-deep fw-bold mb-4">
                      {selectedDoctor.position}
                    </h5>

                    <h6 className="fw-bold text-dp-dark mb-3">Education</h6>
                    <ul className="list-unstyled text-dp-dark">
                      {selectedDoctor.education.map((edu, i) => (
                        <li key={i} className="mb-2 opacity-90">
                          <span className="text-dp-primary me-2">•</span> {edu}
                        </li>
                      ))}
                    </ul>

                    <div className="text-end mt-5">
                      <button
                        className="btn btn-outline-dp-primary rounded-pill px-5 py-3 fw-medium"
                        onClick={() => setSelectedDoctor(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* รวม CSS Variables และคลาสต่าง ๆ จาก theme.css ของคุณ */}
      <style jsx>{`
        :root {
          --dp-primary: #5fb6d6;
          --dp-deep: #2a6f97;
          --dp-soft: #eaf6fb;
          --dp-accent: #7dd3fc;
          --dp-dark: #10364a;
        }
        .text-dp-primary { color: var(--dp-primary) !important; }
        .text-dp-deep { color: var(--dp-deep) !important; }
        .text-dp-dark { color: var(--dp-dark) !important; }
        .bg-dp-soft { background: var(--dp-soft) !important; }

        .btn-dp-primary {
          background: linear-gradient(135deg, var(--dp-primary), var(--dp-deep));
          border: none;
          color: white !important;
        }
        .btn-dp-primary:hover { filter: brightness(1.08); }

        .btn-outline-dp-primary {
          border: 2px solid var(--dp-deep);
          color: var(--dp-deep);
          background: transparent;
        }
        .btn-outline-dp-primary:hover {
          background: var(--dp-deep);
          color: white;
        }

        .hover-lift {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(16,54,74,0.18) !important;
        }

        .img-elevated {
          box-shadow: 0 10px 28px rgba(16,54,74,0.12);
        }
      `}</style>
    </>
  );
}