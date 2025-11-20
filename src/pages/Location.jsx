function Location() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "80px auto 0",
        padding: "40px 16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "700", textAlign: "center" }}>
        현재 위치 설정
      </h1>

      <p style={{ textAlign: "center", color: "#4b5563", marginTop: "8px" }}>
        출발 위치를 설정하여 가장 빠른 병원을 찾아보세요.
      </p>

      <div
        style={{
          display: "flex",
          marginTop: "40px",
          gap: "24px",
        }}
      >
        {/* 지도 영역 */}
        <div
          style={{
            flex: 1,
            height: "400px",
            backgroundColor: "#f3f4f6",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#6b7280",
          }}
        >
          <div style={{ fontSize: "48px" }}>📍</div>
          <div>지도가 표시됩니다</div>
        </div>

        {/* 오른쪽 입력 박스 */}
        <div
          style={{
            width: "420px",
            padding: "24px",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "16px" }}>
            위치 입력 방법
          </h2>

          <button
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "2px solid #10b981",
              color: "#10b981",
              background: "white",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            현재 위치 자동 감지하기
          </button>

          <div
            style={{
              textAlign: "center",
              margin: "16px 0",
              color: "#9ca3af",
            }}
          >
            또는
          </div>

          <input
            type="text"
            placeholder="예: 서울특별시 중구 세종대로 110"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />

          <button
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "12px",
              borderRadius: "8px",
              background: "#10b981",
              border: "none",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            출발지 설정 완료
          </button>
        </div>
      </div>
    </main>
  );
}

export default Location;
