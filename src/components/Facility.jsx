import React, { useState, useRef, useEffect } from 'react';

export default function Facility() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const facility_img = [
    { id: 1, title: "Waiting Area", src: "/facility-img/waiting_area.jpg" },
    { id: 2, title: "Outside", src: "/facility-img/outside.jpg" },
    { id: 3, title: "Reception", src: "/facility-img/reception.jpg" },
    { id: 4, title: "Reception", src: "/facility-img/reception2.jpg" },
    { id: 5, title: "Sterilization Room", src: "/facility-img/sterile_room.jpg" },
    { id: 6, title: "Sterilization Equipments", src: "/facility-img/sterile_equip.jpg" },
    { id: 7, title: "Dental Chair Unit 1", src: "/facility-img/chair1.jpg" },
    { id: 8, title: "Dental Chair Unit 2", src: "/facility-img/chair2.jpg" },
  ];

  const getSlidesToShow = () =>
    typeof window !== 'undefined' && window.innerWidth >= 992 ? 3 : 1;

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      const newSlides = getSlidesToShow();
      setSlidesToShow(newSlides);
      setCurrentIndex(prev => Math.min(prev, facility_img.length - newSlides));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, facility_img.length - slidesToShow);

  const prevSlide = () => setCurrentIndex(i => (i <= 0 ? maxIndex : i - 1));
  const nextSlide = () => setCurrentIndex(i => (i >= maxIndex ? 0 : i + 1));
  const goToSlide = (i) => setCurrentIndex(Math.min(i, maxIndex));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = 0;
  };

  return (
    <section id="facility" className="py-5">
      <div className="container py-4 py-lg-5">
        <h2 className="text-center fw-bold mb-5 text-dp-dark display-5">
          Our Facility
        </h2>

        <div className="position-relative">

          {/* Carousel */}
          <div
            className="facility-viewport"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="d-flex facility-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {facility_img.map((img) => (
                <div
                  key={img.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="facility-card position-relative rounded-4">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-100 facility-img"
                      style={{
                        height: slidesToShow === 3 ? '320px' : '340px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    {/* Overlay ชื่อ */}
                    <div
                      className="position-absolute bottom-0 start-0 end-0 p-4 text-white text-center"
                      style={{
                        background:
                          'linear-gradient(transparent, rgba(16,54,74,0.85))',
                      }}
                    >
                      <h5 className="mb-0 fw-semibold">{img.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ปุ่มควบคุม (desktop) */}
          {slidesToShow === 3 && (
            <div className="d-flex justify-content-center align-items-center gap-5 mt-4">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '48px', height: '48px', opacity: currentIndex === 0 ? 0.3 : 1 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="d-flex gap-3">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className="border-0 rounded-pill"
                    style={{
                      width: i === currentIndex ? '36px' : '12px',
                      height: '12px',
                      backgroundColor: i === currentIndex ? '#2a6f97' : '#b0c4de',
                      transition: 'all 0.4s ease',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '48px', height: '48px', opacity: currentIndex === maxIndex ? 0.3 : 1 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}

          {/* Dot (mobile) */}
          {slidesToShow === 1 && (
            <div className="d-flex justify-content-center gap-2 mt-4">
              {facility_img.map((_, i) => (
                <div
                  key={i}
                  className="rounded-pill"
                  style={{
                    width: i === currentIndex ? '28px' : '8px',
                    height: '8px',
                    backgroundColor: i === currentIndex ? '#2a6f97' : '#b0c4de',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <style jsx>{`
          /* viewport ของ carousel – ซ่อนเฉพาะแนวนอน */
          .facility-viewport {
            overflow-x: hidden;
            overflow-y: visible;
            background: transparent; /* เอาพื้นหลัง carousel ออก */
          }

          .facility-track {
            background: transparent; /* กันเผื่อมีสีติดมาจาก class อื่น */
          }

          .facility-card {
            overflow: hidden;
            background: transparent;
            box-shadow: none;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .facility-img {
            transition: transform 0.5s ease;
          }

          .facility-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(16, 54, 74, 0.18);
          }

          .facility-card:hover .facility-img {
            transform: scale(1.06); /* ซูมรูปเบา ๆ ตอน hover */
          }
        `}</style>
      </div>
    </section>
  );
}
