function FeatureCard({ icon, title, description }) {
  return (
    <div
      style={{
        flex: "1",
        minWidth: "0",
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        padding: "24px 20px",
        boxShadow: "0 8px 20px rgba(15, 23, 42, 0.06)",
        textAlign: "center",
      }}
    >
      {/* 아이콘 */}
      <div
        style={{
          width: "40px",
          height: "40px",
          margin: "0 auto 12px",
          borderRadius: "999px",
          backgroundColor: "#ecfdf5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          color: "#10b981",
        }}
      >
        {icon}
      </div>

      {/* 제목 */}
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 600,
          marginBottom: "8px",
          color: "#111827",
        }}
      >
        {title}
      </h3>

      {/* 설명 */}
      <p
        style={{
          fontSize: "14px",
          color: "#6b7280",
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
