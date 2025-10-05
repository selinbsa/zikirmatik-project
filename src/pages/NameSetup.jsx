import { useEffect, useState } from "react";
import "./NameSetup.css";

const STORAGE_KEY = "zikirmatik_user_name";

export default function NameSetup({ onStart }) {
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(true); // isim varsa kapalı başlayacak

  // Uygulama açıldığında daha önce girilmiş isim varsa yükle
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.trim()) {
      setName(saved);
      setEditing(false);
    }
  }, []);

  // İsim değiştikçe kaydet (değer boşsa sil)
  useEffect(() => {
    const trimmed = name.trim();
    if (trimmed) {
      localStorage.setItem(STORAGE_KEY, trimmed);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [name]);

  const toggleEdit = () => setEditing((e) => !e);

  const handleStart = () => {
    if (!name.trim()) {
      alert("Lütfen isminizi giriniz.");
      return;
    }
    // İsim zaten localStorage'a yazılıyor; ekstra garanti:
    localStorage.setItem(STORAGE_KEY, name.trim());
    onStart?.(); // sonraki ekrana geçişi App'te yöneteceğiz
  };

  return (
    <div className="name-container">
      <div className="name-frame">
        <label className="name-label" htmlFor="username">
          İsminiz:
        </label>

        <div className="name-row">
          <input
            id="username"
            className="name-input"
            type="text"
            placeholder="Adınızı yazın"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!editing}
          />
          <button
            type="button"
            className={`edit-btn ${editing ? "active" : ""}`}
            onClick={toggleEdit}
            aria-pressed={editing}
            aria-label={editing ? "İsmi kaydet" : "İsmi düzenle"}
            title={editing ? "Kaydet" : "Düzenle"}
          >
            {editing ? "Kaydet" : "Düzenle"}
          </button>
        </div>

        <button className="start-btn" onClick={handleStart}>
          Başla
        </button>
      </div>
    </div>
  );
}
