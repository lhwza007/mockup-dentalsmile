export default function Footer() {
  return (
    <footer id="contact" className="pt-5 pb-4 bg-white border-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <h5 className="fw-bold text-dp-deep">DentalSmile</h5>
            <p className="text-secondary mb-2">
              เปิดทุกวัน 10:00-20:00 • โทร 02-123-4567 • LINE: @DentalSmile

            </p>
            <p className="small text-secondary mb-0">
              © {new Date().getFullYear()} DentalSmile — All rights reserved.
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="fw-semibold">ที่อยู่</h6>
            <p className="text-secondary">313/5 ถนนพัทยาสาย 3 ใกล้พัทยาใต้ อำเภอบางละมุง จังหวัดชลบุรี ประเทศไทย 20150 </p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-semibold">นัดหมาย</h6>
            <a className="btn btn-dp-primary w-100" href="#">จองคิวออนไลน์</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
