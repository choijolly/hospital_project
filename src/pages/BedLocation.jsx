// src/pages/BedLocation.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

// 환자(병상) 유형 리스트
const PATIENT_TYPES = [
  "응급실",
  "수술실",
  "중환자실",
  "입원실",
  "소아",
  "신생아중환자실",
  "흉부중환자실",
  "일반중환자실",
  "내과중환자실",
  "외과중환자실",
  "정형외과",
  "신경과입원실",
  "신경외과중환자실",
  "약물중환자",
  "화상중환자",
];

function BedLocation() {
  const { selectedType, setSelectedType, setOrigin } = useSearch();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // "병원 리스트 보기" 버튼 클릭 시
  const handleSubmit = () => {
    const value = inputValue.trim() || "내 위치";
    setOrigin(value);
    navigate("/location");
  };

  // "현재 위치 자동 감지하기" (지금은 예시로 값만 넣어줌)
  const handleDetectLocation = () => {
    setInputValue("현재 위치");
  };

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "80px auto 0",
        padding: "40px 16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 상단 타이틀 */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        환자 이송 설정
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#4b5563",
          marginBottom: "32px",
        }}
      >
        환자 상태와 출발 위치를 설정하여 최적의 병원을 찾아보세요.
      </p>

      {/* 메인 레이아웃: 왼쪽 지도, 오른쪽 카드 */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {/* 왼쪽: 지도 영역 */}
        <div
          style={{
            flex: 1,
            minHeight: "360px",
            backgroundColor: "#f3f4f6",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#6b7280",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #ff8ea1, #e11d48)",
              marginBottom: "12px",
            }}
          />
          <div style={{ fontSize: "15px" }}>지도가 표시됩니다</div>
        </div>

        {/* 오른쪽: 설정 카드 */}
        <div
          style={{
            width: "420px",
            padding: "28px 24px",
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
            backgroundColor: "#ffffff",
          }}
        >
          {/* 1. 환자 유형 선택 */}
          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              1. 환자 유형 선택
            </h2>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
              }}
            >
              {PATIENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* 2. 위치 입력 방법 */}
          <div>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              2. 위치 입력 방법
            </h2>

            <button
              onClick={handleDetectLocation}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "2px solid #10b981",
                color: "#10b981",
                backgroundColor: "#ffffff",
                fontSize: "15px",
                cursor: "pointer",
                marginBottom: "12px",
              }}
            >
              현재 위치 자동 감지하기
            </button>

            <div
              style={{
                textAlign: "center",
                margin: "8px 0 12px",
                color: "#9ca3af",
                fontSize: "13px",
              }}
            >
              또는
            </div>

            <input
              type="text"
              placeholder="예: 서울특별시 중구 세종대로 110"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
                marginBottom: "16px",
              }}
            />

            <button
              onClick={handleSubmit}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: "#10b981",
                border: "none",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              병원 리스트 보기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BedLocation;
