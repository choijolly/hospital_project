// src/pages/Location.jsx
import SectionTitle from "../components/SectionTitle";
import HospitalCard from "../components/HospitalCard";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

// 더미 병원 데이터 (BedLocation.jsx에서 쓰는 데이터와 동일해야 함)
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

function Location() {
  const { selectedType, origin } = useSearch();
  const navigate = useNavigate();

  // 선택된 병상 유형을 제공하는 병원 필터링
  const hospitalsByType = HOSPITALS.filter((hospital) =>
    hospital.types.includes(selectedType)
  );

  // 거리(timeText "15분" → 15) 오름차순 정렬
  const sortedByTime = [...hospitalsByType].sort((a, b) => {
    const ta = parseInt(a.timeText);
    const tb = parseInt(b.timeText);
    return ta - tb;
  });

  // TOP 3 병원만 추출
  const topHospitals = sortedByTime.slice(0, 3);

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "80px auto 0",
        padding: "40px 16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 제목 */}
      <SectionTitle
        title="병원 검색 결과"
        subtitle={`"${origin}" 기준, "${selectedType}" 병상 유형에 대한 가까운 병원 목록입니다.`}
      />

      {/* 안내 문구 */}
      <div
        style={{
          marginTop: "12px",
          marginBottom: "16px",
          padding: "10px 12px",
          borderRadius: "8px",
          backgroundColor: "#f9fafb",
          fontSize: "14px",
          color: "#4b5563",
        }}
      >
        선택한 조건을 바탕으로 가까운 병원을 정렬해 보여줍니다.
      </div>

      {/* 섹션 제목 */}
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          marginBottom: "4px",
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
        총 {topHospitals.length}개 병원
      </p>

      {/* 병원 리스트 */}
      <div>
        {topHospitals.length === 0 ? (
          <p style={{ fontSize: "14px", color: "#9ca3af" }}>
            선택한 병상을 제공하는 병원이 없습니다.
          </p>
        ) : (
          topHospitals.map((hospital) => (
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

export default Location;
