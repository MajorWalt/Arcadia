import './Policies.css';

export default function Policies() {
  // Policies data
  const policiesData = [
    {
      id: 1,
      title: "General Terms",
      description: "Our general terms outline essential guidelines for bookings, services, and guest responsibilities to ensure a smooth experience."
    },
    {
      id: 2,
      title: "Refund Policy",
      description: "Our refund policy ensures fairness and transparency, providing clear guidelines for cancellations and booking adjustments."
    },
    {
      id: 3,
      title: "Damages & Returns",
      description: "Our damages and returns policy ensures clear guidelines for accountability and fair resolutions during your stay."
    },
    {
      id: 4,
      title: "Health & Safety",
      description: "Our health and safety standards ensure a clean, secure environment with protocols designed for guest well-being and peace of mind."
    }
  ];

  return (
    <section className="policies-section">
      <div className="policies-container">
        {/* Left Side - Title and Description */}
        <div className="policies-copy">
          <h2 className="policies-title">
            Guesthouse
            <br />
            Policies
          </h2>
          <p className="policies-description">
            To ensure a comfortable and enjoyable stay for all our guests, please review our house policies before your visit. These guidelines help us maintain a safe, welcoming, and relaxing environment.
          </p>
        </div>

        {/* Right Side - Policy Cards Grid */}
        <div className="policies-grid">
          {policiesData.map((policy) => (
            <div key={policy.id} className="policy-card">
              <div className="policy-content">
                <h3 className="policy-title">{policy.title}</h3>
                <p className="policy-description">{policy.description}</p>
              </div>
            </div>
          ))}

          {/* Explore All Policies Button */}
          <button className="explore-policies-btn">
            Explore All Policies
          </button>
        </div>
      </div>
    </section>
  );
}