// src/pages/Login.jsx
import { useState } from "react";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: 나중에 실제 로그인 API 붙일 수 있음
    if (!userId || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    alert(`임시 로그인 처리: ${userId}로 로그인했다고 가정합니다.`);
  };

  return (
    <main
      style={{
        maxWidth: "420px",
        margin: "80px auto 0",
        padding: "40px 16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "26px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        로그인
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#4b5563",
          marginBottom: "24px",
        }}
      >
        등록하신 아이디와 비밀번호를 입력해주세요.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#f9fafb",
          borderRadius: "20px",
          padding: "24px 20px 28px",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* 아이디 */}
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            아이디
          </label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="아이디를 입력하세요"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
          />
        </div>

        {/* 비밀번호 */}
        <div style={{ marginBottom: "8px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            비밀번호
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
          />
        </div>

        {/* 비밀번호 찾기 링크 (디자인용 더미) */}
        <div
          style={{
            textAlign: "right",
            marginBottom: "16px",
            fontSize: "12px",
          }}
        >
          <button
            type="button"
            style={{
              border: "none",
              background: "none",
              color: "#6b7280",
              cursor: "pointer",
              padding: 0,
            }}
          >
            비밀번호를 잊으셨나요?
          </button>
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#10b981",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          로그인
        </button>

        {/* 회원가입으로 이동 버튼 (선택) */}
        <button
          type="button"
          onClick={() => (window.location.href = "/signup")}
          style={{
            width: "100%",
            padding: "11px",
            borderRadius: "999px",
            border: "1px solid #d1d5db",
            backgroundColor: "#ffffff",
            color: "#111827",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          아직 회원이 아니신가요? 회원가입
        </button>
      </form>
    </main>
  );
}

export default Login;
