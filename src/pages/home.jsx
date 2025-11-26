import FeatureCard from "../components/FeatureCard";
import SectionTitle from "../components/SectionTitle";
import { useNavigate } from "react-router-dom";


function Home() {
     const navigate = useNavigate();
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "80px auto 0",
        padding: "40px 16px",
        textAlign: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 아이콘 */}
      <div
        style={{
          width: "60px",
          height: "60px",
          margin: "0 auto 20px",
          backgroundColor: "#10b98120",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
          color: "#10b981",
        }}
      >
        📍
      </div>

      {/* 제목 */}
      <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "16px" }}>
        실시간 병상·교통 기반
        <br />
        구급차 경로 탐색 시스템
      </h1>

      {/* 설명 */}
      <p style={{ fontSize: "15px", color: "#4b5563", marginBottom: "24px" }}>
        가장 빠르고, 수용 가능한 병원을 지금 확인하세요.
        <br />
        19개 병상 유형별 실시간 현황과 최적 경로를 제공합니다.
      </p>

      {/* 버튼 */}
      <button
      
        style={{
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "999px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/beds")} 
      >
        현재 위치 기반 병원 찾기
      </button>
            {/* ---- 주요 기능 섹션 ---- */}
      <section
        style={{
          marginTop: "72px",
          textAlign: "center",
        }}
      >
        
        <SectionTitle
  title="주요 기능"
  subtitle="응급 상황에서 필요한 정보를 한눈에 확인하세요."
/>


        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <FeatureCard
            icon="🔍"
            title="실시간 병상 현황"
            description="응급실·중환자실 등 19개 병상 유형의 현재 여유 병상을 실시간으로 확인합니다."
          />
          <FeatureCard
            icon="🗺️"
            title="최적 경로 안내"
            description="현재 교통 상황을 반영하여 가장 빠르게 도착할 수 있는 병원 경로를 안내합니다."
          />
          <FeatureCard
            icon="⭐"
            title="즐겨찾기 병원 관리"
            description="자주 이용하는 병원을 등록해 두고 신속하게 병상 상태를 확인할 수 있습니다."
          />
        </div>
      </section>

    </main>
  );
}

export default Home;
