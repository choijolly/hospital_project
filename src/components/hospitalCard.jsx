import { useNavigate } from "react-router-dom";
function HospitalCard({ name, timeText, beds }) {
  const navigate = useNavigate();
  return (
    <article
      style={{
        borderRadius: "20px",
        border: "1px solid #e5e7eb",
        padding: "16px 18px",
        marginBottom: "12px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* 상단: 병원 이름 + 시간 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "4px",
            }}
          >
            {name}
          </h3>
          {/* 병상 정보 요약 */}
          <div style={{ fontSize: "13px", color: "#6b7280" }}>
            {beds.map((b, idx) => (
              <span key={b.label}>
                {b.label} 여유 {b.free} / {b.total}
                {idx < beds.length - 1 && " · "}
              </span>
            ))}
          </div>
        </div>
        <span style={{ fontSize: "12px", color: "#9ca3af" }}>{timeText}</span>
      </div>

      {/* 하단: 버튼들 */}
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          style={{
            flex: 1,
            padding: "8px 0",
            borderRadius: "999px",
            border: "1px solid #e5e7eb",
            backgroundColor: "#ffffff",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          📞 전화걸기
        </button>
        <button
        onClick={() => navigate("/route")}
          style={{
            flex: 1,
            padding: "8px 0",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#10b981",
            color: "#ffffff",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          경로 보기 →
        </button>
      </div>
    </article>
  );
}

export default HospitalCard;
