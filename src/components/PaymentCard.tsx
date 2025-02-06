"use client"
import Link from "next/link"
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
          <p className="status-label">Estado del pago</p>
          <p className={`status-text ${statusColors[status]}`}>{statusText[status]}</p>
        </div>

        <div className="details">
          {to && (
            <div className="detail-row">
              <span className="detail-label">A:</span>
              <span className="detail-value">{to}</span>
            </div>
          )}
          <div className="detail-row">
            <span className="detail-label">{status === "confirmed" ? "Executed On:" : "Initiated On:"}</span>
            <span className="detail-value">{date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Costo:</span>
            <span className="detail-value">₹{amount.toLocaleString()}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">IDPago:</span>
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
              <p className="status-message">Se inicio el pedido de pago</p>
              <p className="status-date">{date}</p>
              <p className="status-state">Completo</p>
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
                <p className="status-message">Recibimos correctamente el pago</p>
                <p className="status-date">{date}</p>
                <p className="status-state">Completo</p>
              </div>
            </div>
          )}

          {status === "pending" && (
            <div className="status-item">
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
              <div>
                <p className="status-message">Estamos esperando la confirmación de pago</p>
                <p className="status-note">En caso de que el pago falle se reembolsara el monto total en tu cuenta</p>
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
                <p className="status-message">La entidad bancaria no responde</p>
              </div>
            </div>
          )}
        </div>

        {status === "confirmed" && <Link href={"/products"}><button className="action-button">Seguir comprando</button></Link>}

        {status === "failed" && (
          <div className="failed-actions">
            <Link href={"/cart"}><button className="action-button">Prueba nuevamente</button></Link>
            <p className="refund-note">
              *Cualquier reembolso puede demorar de 3 - 5 dias hábiles
            </p>
          </div>
        )}

        {status === "pending" && (
          <p className="concern-text">
            Por una inquietud{" "}
            <a href="#" className="concern-link">
              Click aquí
            </a>
          </p>
        )}
      </div>
    </div>
  )
}