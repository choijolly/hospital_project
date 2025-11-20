import HospitalCard from "../components/HospitalCard";
function Route() {
  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "40px 16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 페이지 제목 */}
      <h1 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>
        추천 병원 경로
      </h1>

      <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "24px" }}>
        실시간 업데이트 중...
      </p>

      {/* 지도 영역 */}
      <div
        style={{
          width: "100%",
          height: "320px",
          backgroundColor: "#f3f4f6",
          borderRadius: "16px",
          marginBottom: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#9ca3af",
        }}
      >
        지도 영역 (추후 API 적용)
      </div>

      {/* 병원 목록 */}
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>
        추천 병원 목록
      </h2>

      <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
        거리순 정렬
      </p>

            <div>
        <HospitalCard
          name="서울의료원"
          timeText="15분"
          beds={[
            { label: "병상 여유", free: 4, total: 10 },
          ]}
        />
        <HospitalCard
          name="한양대학교병원"
          timeText="18분"
          beds={[
            { label: "병상 여유", free: 2, total: 8 },
          ]}
        />
        <HospitalCard
          name="건국대학교병원"
          timeText="20분"
          beds={[
            { label: "병상 여유", free: 1, total: 6 },
          ]}
        />
      </div>

    </main>
  );
}

export default Route;
