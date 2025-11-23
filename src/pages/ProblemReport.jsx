import { useState } from "react";
import { Link } from "react-router-dom";

function ProblemReport() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    problem: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit Indian phone number";
    }

    // Email validation (optional but if provided, must be valid)
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Problem description validation
    if (!formData.problem.trim()) {
      newErrors.problem = "Please describe the issue";
    } else if (formData.problem.trim().length < 10) {
      newErrors.problem = "Please provide more details (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call when backend is ready
      // const response = await fetch('/api/reports', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // For now, we'll use mailto as fallback
      const mailtoLink = `mailto:thotamotors19@gmail.com?subject=Problem Report from ${formData.name}&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AProblem Description:%0D%0A${formData.problem}`;
      window.location.href = mailtoLink;

      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", email: "", problem: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);

    } catch (error) {
      setErrors({ submit: "Failed to submit. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="problems">
      <main className="report-container">
        <div className="report-box">
          <h1 style={{ color: "black" }}>Report a Problem</h1>
          <p>If you are facing any issues, please let us know by filling out the form below.</p>

          {submitSuccess && (
            <div className="success-message">
              ✓ Report submitted successfully! We'll contact you soon.
            </div>
          )}

          {errors.submit && (
            <div className="error-message">
              ✗ {errors.submit}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Your Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email (Optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="problem">Describe the Issue *</label>
              <textarea
                id="problem"
                name="problem"
                placeholder="Please describe the issue in detail..."
                rows="5"
                value={formData.problem}
                onChange={handleChange}
                className={errors.problem ? "input-error" : ""}
              />
              {errors.problem && <span className="error-text">{errors.problem}</span>}
            </div>

            <button 
              type="submit" 
              className="btn btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </button>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ProblemReport;
