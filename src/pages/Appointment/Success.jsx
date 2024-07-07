import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const location = useLocation();
  const appointmentId = new URLSearchParams(location.search).get(
    "appointmentId"
  );

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/appointment/confirm-payment/${appointmentId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to confirm payment");
        }

        const data = await res.json();
        console.log("Payment confirmed:", data);
      } catch (error) {
        console.error("Error confirming payment:", error);
      }
    };

    if (appointmentId) {
      confirmPayment();
    }
  }, [appointmentId]);

  return (
    <div className="success-container">
      <div className="success-card">
        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-message">
          Your appointment has been booked successfully.
        </p>
        <p className="success-details">
          Appointment ID: <span>{appointmentId}</span>
        </p>
        <a href="/" className="success-home-link">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Success;
