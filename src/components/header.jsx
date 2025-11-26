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
        {/* 왼쪽 로고 영역 → 홈으로 이동 */}
        <Link
          to="/"
          style={{
            fontWeight: 700,
            color: "#10b981",
            textDecoration: "none",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          응급병원 탐색
        </Link>

        {/* 가운데 메뉴 */}
        <nav style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
          <Link to="/beds" style={{ textDecoration: "none", color: "#374151" }}>
            병원 찾기
          </Link>

          <Link to="/location" style={{ textDecoration: "none", color: "#374151" }}>
            병상 현황
          </Link>

          <Link to="/route" style={{ textDecoration: "none", color: "#374151" }}>
            경로 안내
          </Link>
        </nav>

       {/* 오른쪽 로그인 / 회원가입 */}
<div
  style={{
    display: "flex",
    gap: "12px",
    alignItems: "center",
    fontSize: "14px",
  }}
>
  {/* 로그인 버튼 (흰색 버튼) */}
  <Link
    to="/login"
    style={{
      padding: "8px 16px",
      borderRadius: "999px",
      border: "1px solid #10b981",
      backgroundColor: "white",
      color: "#10b981",
      fontWeight: 600,
      textDecoration: "none",
    }}
  >
    로그인
  </Link>

  {/* 회원가입 버튼 (초록색 버튼) */}
  <Link
    to="/signup"
    style={{
      padding: "8px 16px",
      borderRadius: "999px",
      backgroundColor: "#10b981",
      color: "#ffffff",
      fontWeight: 600,
      textDecoration: "none",
    }}
  >
    회원가입
  </Link>
</div>

      </div>
    </header>
  );
}

export default Header;
