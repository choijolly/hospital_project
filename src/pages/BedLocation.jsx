// src/pages/BedLocation.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { useSearch } from "../context/SearchContext";

// 병상 유형 버튼에 쓸 라벨들
const BED_TYPES = [
  "응급실",
  "수술실",
  "신경",
  "중환자실",
  "신생아중환자실",
  "흉부중환자실",
  "일반중환자실",
  "입원실",
  "내과중환자실",
  "외과중환자실",
  "정형외과",
  "신경과입원실",
  "신경외과중환자실",
  "약물중환자",
  "화상중환자",
  "소아",
];

function BedLocation() {
  // 전역 상태에서 선택된 병상 유형, 출발지 setter 사용
  const { selectedType, setSelectedType, setOrigin } = useSearch();

  // 입력창 값 (아직 확정 전)
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // 출발지 설정 완료 눌렀을 때
  const handleComplete = () => {
    const value = inputValue.trim() || "내 위치";
    setOrigin(value);        // 전역 상태에 저장
    navigate("/location");   // 결과 페이지로 이동
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
        style={{ fontSize: "28px", fontWeight: "700", textAlign: "center" }}
      >
        병상 유형 & 출발지 기반 병원 검색
      </h1>

      <p style={{ textAlign: "center", color: "#4b5563", marginTop: "8px" }}>
        찾고 싶은 병상 유형을 선택하고, 출발지를 설정해 가장 가까운 병원을
        확인해보세요.
      </p>

      <div
        style={{
          display: "flex",
          marginTop: "40px",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        {/* 왼쪽: 지도 + 출발지 설정 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* 지도 영역 */}
          <div
            style={{
              flex: 1,
              minHeight: "260px",
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

          {/* 출발지 입력 카드 */}
          <div
            style={{
              width: "100%",
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              backgroundColor: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "16px" }}>
              출발지 설정
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
              onClick={() => {
                // 나중에 실제 현재 위치 연동 가능
                setInputValue("현재 위치");
              }}
            >
              현재 위치 자동 감지하기 (예시)
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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
              }}
            />

            <button
              onClick={handleComplete}
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

        {/* 오른쪽: 병상 유형 버튼들만 표시 (병원 리스트 없음) */}
        <div style={{ flex: 1 }}>
          <SectionTitle
            title="병상 유형 선택"
            subtitle="원하는 병상 유형을 선택하세요."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
              marginTop: "24px",
            }}
          >
            {BED_TYPES.map((type) => {
              const isActive = selectedType === type;
              return (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  style={{
                    padding: "14px 12px",
                    borderRadius: "16px",
                    border: isActive
                      ? "1px solid #10b981"
                      : "1px solid #e5e7eb",
                    backgroundColor: isActive ? "#10b981" : "#ffffff",
                    color: isActive ? "#ffffff" : "#111827",
                    fontSize: "15px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BedLocation;
