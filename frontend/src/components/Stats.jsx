import { useState, useEffect, useRef } from 'react';

function Stats() {
  const [counters, setCounters] = useState({ years: 0, customers: 0, guarantee: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        years: Math.floor(15 * progress),
        customers: Math.floor(5000 * progress),
        guarantee: Math.floor(100 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ years: 15, customers: 5000, guarantee: 100 });
      }
    }, interval);
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h2>{counters.years}+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h2>{counters.customers}+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h2>{counters.guarantee}%</h2>
            <p>Quality Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;