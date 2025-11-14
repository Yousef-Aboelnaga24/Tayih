import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "100vh", backgroundColor: "#f9fbf4" }}
    >
      <img
        src="./image/404 error with person looking for-bro.svg"
        alt="404 Illustration"
        className="img-fluid mb-4"
        style={{ maxWidth: "300px" }}
      />
      <h1 className="display-1 fw-bold text-success" style={{ color: "#09906f" }}>
        404
      </h1>
      <h2 className="fw-semibold mb-3">الصفحة غير موجودة 😕</h2>
      <p className="text-secondary mb-4">
        يبدو إنك دخلت على رابط مش موجود أو تم حذفه.
      </p>
      <Link
        to="/"
        className="btn btn-success px-4 py-2"
        style={{ backgroundColor: "#09906f", border: "none" }}
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </section>
  );
}

export default NotFound