import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import HospitalCard from "../components/HospitalCard";

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

// 병원 더미 데이터 (어떤 병상을 지원하는지 types에 넣어둠)
const HOSPITALS = [
  {
    name: "서울의료원",
    timeText: "15분",
    beds: [
      { label: "응급실", free: 4, total: 30 },
      { label: "중환자실", free: 2, total: 10 },
      { label: "수술실", free: 3, total: 8 },
    ],
    types: ["응급실", "중환자실", "수술실"],
  },
  {
    name: "한양대학교병원",
    timeText: "18분",
    beds: [
      { label: "응급실", free: 2, total: 25 },
      { label: "입원실", free: 10, total: 40 },
    ],
    types: ["응급실", "입원실"],
  },
  {
    name: "건국대학교병원",
    timeText: "20분",
    beds: [
      { label: "응급실", free: 1, total: 20 },
      { label: "소아", free: 1, total: 5 },
    ],
    types: ["응급실", "소아"],
  },
];

function Beds() {
  // 현재 선택된 병상 유형 (기본값: 응급실)
  const [selectedType, setSelectedType] = useState("응급실");

  // 선택된 병상 유형을 지원하는 병원만 필터링
  const filteredHospitals = HOSPITALS.filter((hospital) =>
    hospital.types.includes(selectedType)
  );

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "80px auto 0",
        padding: "40px 16px",
      }}
    >
      {/* 상단 타이틀 */}
      <SectionTitle
        title="병상 유형 선택"
        subtitle="원하는 병상 유형을 선택하세요."
      />

      {/* 병상 유형 버튼들 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
          marginTop: "24px",
          marginBottom: "40px",
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
                border: isActive ? "1px solid #10b981" : "1px solid #e5e7eb",
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

      {/* 주변 병원 현황 섹션 */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 700,
          marginBottom: "8px",
        }}
      >
        주변 병원 현황
      </h2>

      <p
        style={{
          fontSize: "14px",
          color: "#6b7280",
          marginBottom: "16px",
        }}
      >
        총 {filteredHospitals.length}개 병원
      </p>

      {/* 병원 리스트 */}
      <div>
        {filteredHospitals.length === 0 ? (
          <p style={{ fontSize: "14px", color: "#9ca3af" }}>
            선택한 병상을 제공하는 병원이 없습니다.
          </p>
        ) : (
          filteredHospitals.map((hospital) => (
            <HospitalCard
              key={hospital.name}
              name={hospital.name}
              timeText={hospital.timeText}
              beds={hospital.beds}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Beds;
