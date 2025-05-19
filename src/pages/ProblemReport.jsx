import { Link } from "react-router-dom";

function ProblemReport() {
  return (
    <div className="problems">
      {/* Custom small navbar just for this page */}
    <nav className="navbar scrolled">
        <div className="container">
        <div className="company-name-vertical">
            <Link to="/">
                <span className="line1">T/⬭\TA</span>
                <span className="line2">MOTORS</span>
            </Link>
        </div>
          <div className="logo" style={{ marginLeft: "auto" }}>
            <Link to="/" className="btn">Home</Link>
          </div>
        </div>
    </nav>

      {/* Main Form Section */}
      <main className="report-container">
        <div className="report-box">
          <h1 style={{ color: "black" }}>Report a Problem</h1>
          <p>If you are facing any issues, please let us know by filling out the form below.</p>

          <form action="mailto:thotamotors19@gmail.com" method="post" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Your Phone No:</label>
              <input type="number" id="phone" name="phone" placeholder="Enter your phone number" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="problem">Describe the Issue</label>
              <textarea id="problem" name="problem" placeholder="Describe the issue..." rows="5" required></textarea>
            </div>

            <button type="submit" className="btn">Submit Report</button>
          </form>
        </div>
      </main>
    </div>
  );
}


export default ProblemReport;
