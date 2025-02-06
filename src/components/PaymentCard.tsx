"use client"
import "./paymentCard.css"
interface PaymentStatusCardProps {
  status: "confirmed" | "pending" | "failed" 
  to?: string
  amount: number
  date: string
  paymentId: string
}

export default function PaymentStatusCard({ status, to, amount, date, paymentId }: PaymentStatusCardProps) {
  const statusColors = {
    confirmed: "text-emerald-600",
    pending: "text-orange-500",
    failed: "text-red-600",
  }

  const statusText = {
    confirmed: "Successful",
    pending: "Pending",
    failed: "Failed",
  }

  return (
    <div className="card">
      <div className="card-content">
        <div>
          <p className="status-label">Payment Status</p>
          <p className={`status-text ${statusColors[status]}`}>{statusText[status]}</p>
        </div>

        <div className="details">
          {to && (
            <div className="detail-row">
              <span className="detail-label">To:</span>
              <span className="detail-value">{to}</span>
            </div>
          )}
          <div className="detail-row">
            <span className="detail-label">{status === "confirmed" ? "Executed On:" : "Initiated On:"}</span>
            <span className="detail-value">{date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Amount:</span>
            <span className="detail-value">₹{amount.toLocaleString()}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Payment ID:</span>
            <span className="detail-value">{paymentId}</span>
          </div>
        </div>

        <div className="status-updates">
          <div className="status-item">
            <div className={`status-icon ${status === "failed" ? "failed" : "success"}`}>
              <svg
                className={`icon ${status === "failed" ? "text-red-600" : "text-emerald-600"}`}
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="status-message">We have initiated the payment request</p>
              <p className="status-date">{date}</p>
              <p className="status-state">Completed</p>
            </div>
          </div>

          {status === "confirmed" && (
            <div className="status-item">
              <div className="status-icon success">
                <svg
                  className="icon text-emerald-600"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="status-message">We have successfully received the payment</p>
                <p className="status-date">{date}</p>
                <p className="status-state">Completed</p>
              </div>
            </div>
          )}

          {status === "pending" && (
            <div className="status-item">
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
              <div>
                <p className="status-message">We are waiting for a confirmation by the service provider</p>
                <p className="status-note">In case your payment fails, the debited money will be refunded to you</p>
              </div>
            </div>
          )}

          {status === "failed" && (
            <div className="status-item">
              <div className="status-icon failed">
                <svg
                  className="icon text-red-600"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="status-message">Your bank has not been able to process the refund request on time</p>
              </div>
            </div>
          )}
        </div>

        {status === "confirmed" && <button className="action-button">Proceed</button>}

        {status === "failed" && (
          <div className="failed-actions">
            <button className="action-button">Try Paying Again</button>
            <p className="refund-note">
              * Any amount deducted will be refunded to your payment source within 5-7 business days
            </p>
          </div>
        )}

        {status === "pending" && (
          <p className="concern-text">
            To raise a concern,{" "}
            <a href="#" className="concern-link">
              Click Here
            </a>
          </p>
        )}
      </div>
    </div>
  )
}