import { Routes, Route, Navigate } from "react-router-dom";
import { SpecChrome } from "@/components/spec-chrome";
import Index from "./pages/Index";
import Site1Clinical from "./pages/Site1Clinical";
import Site2Tender from "./pages/Site2Tender";
import Site3Quiet from "./pages/Site3Confident";

export default function App() {
  return (
    <SpecChrome>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/site1" element={<Site1Clinical />} />
        <Route path="/site2" element={<Site2Tender />} />
        <Route path="/site3" element={<Site3Quiet />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SpecChrome>
  );
}
