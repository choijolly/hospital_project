// src/context/SearchContext.jsx
import { createContext, useContext, useState } from "react";

const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  // 선택된 병상 유형 (기본값: 응급실)
  const [selectedType, setSelectedType] = useState("응급실");
  // 입력된 출발지
  const [origin, setOrigin] = useState("");

  const value = {
    selectedType,
    setSelectedType,
    origin,
    setOrigin,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("useSearch는 SearchProvider 안에서만 사용해야 합니다.");
  }
  return ctx;
}
