import { useState } from "react";
import "./AddZikir.css";
const STORAGE_KEY = "zikirmatik_items";

export default function AddZikir({ onSave, onCancel }) {
  const [form, setForm] = useState({
    title: "",
    adet: "",
    okunuş: "",
    anlam: "",
  });
  const ch = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Lütfen zikir adını giriniz.");
    const newItem = {
      id: Math.random().toString(36).slice(2, 9),
      title: form.title.trim(),
      count: 0,
      adet: form.adet,
      okunus: form.okunuş,
      anlam: form.anlam,
    };
    const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...arr, newItem]));
    onSave?.();
  };

  return (
    <div className="add-page">
      <div className="add-frame">
        <h2 className="add-title">Yeni Zikir Ekle</h2>
        <form onSubmit={submit} className="add-form">
          <label>
            {" "}
            Zikir Adı:
            <input name="title" value={form.title} onChange={ch} required />
          </label>
          <label>
            {" "}
            Zikir Adeti:
            <input name="adet" type="number" value={form.adet} onChange={ch} />
          </label>
          <label>
            {" "}
            Okunuşu:
            <input name="okunuş" value={form.okunuş} onChange={ch} />
          </label>
          <label>
            {" "}
            Anlamı:
            <input name="anlam" value={form.anlam} onChange={ch} />
          </label>
          <div className="btn-row">
            <button type="submit" className="save-btn">
              Kaydet
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => onCancel?.()}
            >
              İptal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
