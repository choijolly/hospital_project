import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* 왼쪽 로고 영역 */}
        <div style={{ fontWeight: 700, color: "#10b981" }}>
          응급병원 탐색
        </div>

        {/* 가운데 메뉴 */}
        <nav style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
    <Link to="/location" style={{ textDecoration: "none", color: "#374151" }}>
    병원 찾기
  </Link>

  <Link to="/beds" style={{ textDecoration: "none", color: "#374151" }}>
    병상 현황
  </Link>
  <Link to="/route" style={{ textDecoration: "none", color: "#374151" }}>
    경로 안내
  </Link>
</nav>


        {/* 오른쪽 로그인/회원가입 */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            로그인
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#10b981",
              color: "white",
              fontSize: "14px",
              padding: "6px 12px",
              borderRadius: "999px",
              cursor: "pointer",
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
