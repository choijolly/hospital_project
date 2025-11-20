function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginTop: "80px", textAlign: "center" }}>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: "12px",
          color: "#111827",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: "16px",
            color: "#4b5563",
            marginBottom: "40px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
