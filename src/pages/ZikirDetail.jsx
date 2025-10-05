import { useEffect, useMemo, useState } from "react";
import "./ZikirDetail.css";

const STORAGE_KEY = "zikirmatik_items";

export default function ZikirDetail({ id, onBack }) {
  const [item, setItem] = useState(null);
  const [tab, setTab] = useState("okunus"); // okunus | anlam

  // LocalStorage'tan seçili zikri çek
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const found = arr.find((x) => x.id === id);
    setItem(found || null);
  }, [id]);

  const save = useMemo(
    () => (updated) => {
      const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const idx = arr.findIndex((x) => x.id === updated.id);
      if (idx >= 0) arr[idx] = updated;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      setItem(updated);
    },
    []
  );

  if (!item) {
    return (
      <div className="detail-page">
        <div className="detail-frame">
          <p>Kayıt bulunamadı.</p>
          <button className="back-btn" onClick={onBack}>
            Geri
          </button>
        </div>
      </div>
    );
  }

  const increment = () => save({ ...item, count: (item.count ?? 0) + 1 });

  return (
    <div className="detail-page">
      <div className="detail-frame">
        <header className="detail-header">
          <button className="back-btn" onClick={onBack}>
            ← Geri
          </button>
          <h2 className="detail-title">{item.title}</h2>
        </header>

        {/* Toggle */}
        <div className="toggle">
          <button
            className={`toggle-seg ${tab === "okunus" ? "active" : ""}`}
            onClick={() => setTab("okunus")}
          >
            Okunuşu
          </button>
          <button
            className={`toggle-seg ${tab === "anlam" ? "active" : ""}`}
            onClick={() => setTab("anlam")}
          >
            Anlamı
          </button>
        </div>

        {/* İçerik alanı */}
        <div className="text-box">
          {tab === "okunus" ? item.okunus || "—" : item.anlam || "—"}
        </div>

        {/* Sayaç */}
        <div className="counter-box">{item.count ?? 0}</div>

        {/* Büyük yuvarlak artırma butonu */}
        <button
          className="big-round"
          onClick={increment}
          aria-label="Artır (+1)"
        >
          Zikir Çek
        </button>
      </div>
    </div>
  );
}
