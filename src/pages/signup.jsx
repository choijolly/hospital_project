// src/pages/Signup.jsx
import { useState } from "react";

function Signup() {
  // 간단히 선택 상태만 관리 (실제 저장/전송 기능은 나중에 붙여도 됨)
  const [gender, setGender] = useState(""); // "남성" | "여성"
  const [bloodType, setBloodType] = useState(""); // "A+" 등
  const [diseases, setDiseases] = useState([]); // 기저질환 (체크박스)

  const toggleDisease = (value) => {
    setDiseases((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const diseaseOptions = [
    "고혈압",
    "당뇨병",
    "심장질환",
    "천식",
    "간질환",
    "신장질환",
    "암",
    "없음",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 나중에 실제 서버 전송 로직 추가 가능
    alert("임시: 회원정보를 저장했다고 가정합니다.");
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "80px auto 0",
        padding: "40px 16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        환자 정보 등록
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#4b5563",
          marginBottom: "24px",
        }}
      >
        위급 상황에서 빠른 진료를 위해 기본 정보를 미리 등록해 두세요.
      </p>

      {/* 카드 */}
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#f9fafb",
          borderRadius: "20px",
          padding: "28px 24px 32px",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* 이름 / 나이 / 아이디 / 비밀번호 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              이름 *
            </label>
            <input
              type="text"
              placeholder="이름을 입력하세요"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              나이 *
            </label>
            <input
              type="number"
              placeholder="나이를 입력하세요"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
              }}
            />
          </div>

          {/* 아이디 */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              아이디 *
            </label>
            <input
              type="text"
              placeholder="로그인에 사용할 아이디"
              required
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
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              비밀번호 *
            </label>
            <input
              type="password"
              placeholder="8자 이상 입력하세요"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
              }}
            />
          </div>
        </div>

        {/* 성별 */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            성별 *
          </label>
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {["남성", "여성"].map((g) => {
              const isActive = gender === g;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    borderRadius: "999px",
                    border: isActive
                      ? "1px solid #10b981"
                      : "1px solid #d1d5db",
                    backgroundColor: isActive ? "#10b981" : "#ffffff",
                    color: isActive ? "#ffffff" : "#111827",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </div>

        {/* 혈액형 */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            혈액형 *
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "8px",
            }}
          >
            {bloodTypes.map((type) => {
              const isActive = bloodType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setBloodType(type)}
                  style={{
                    padding: "8px 0",
                    borderRadius: "999px",
                    border: isActive
                      ? "1px solid #10b981"
                      : "1px solid #d1d5db",
                    backgroundColor: isActive ? "#10b981" : "#ffffff",
                    color: isActive ? "#ffffff" : "#111827",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* 기저질환 */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "4px",
            }}
          >
            기저질환 (복수 선택 가능)
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "8px",
              marginTop: "6px",
            }}
          >
            {diseaseOptions.map((d) => (
              <label
                key={d}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 10px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#ffffff",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={diseases.includes(d)}
                  onChange={() => toggleDisease(d)}
                />
                {d}
              </label>
            ))}
          </div>
        </div>

        {/* 알레르기 */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            알레르기
          </label>
          <input
            type="text"
            placeholder="예: 땅콩, 페니실린..."
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
          />
        </div>

        {/* 긴급 연락처 */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            긴급 연락처
          </label>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <input
              type="text"
              placeholder="이름"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
              }}
            />
            <input
              type="text"
              placeholder="관계 (예: 배우자)"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
              }}
            />
          </div>

          <input
            type="tel"
            placeholder="전화번호 (예: 010-2345-6789)"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
          />
        </div>

        {/* 버튼들 */}
        <div style={{ marginTop: "24px" }}>
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
            저장 후 맞춤 추천받기
          </button>

          <button
            type="button"
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
            회원가입 없이 계속하기
          </button>

          <p
            style={{
              marginTop: "10px",
              fontSize: "12px",
              color: "#9ca3af",
              textAlign: "right",
            }}
          >
            * 필수 입력 항목
          </p>
        </div>
      </form>
    </main>
  );
}

export default Signup;
