import { useEffect, useMemo, useState } from "react";
import "./ZikirList.css";
const STORAGE_KEY = "zikirmatik_items";

export default function ZikirList({ onAddClick, onSelect }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const nextId = useMemo(
    () => () => Math.random().toString(36).slice(2, 9),
    []
  );

  const resetCount = (id) =>
    setItems((a) => a.map((it) => (it.id === id ? { ...it, count: 0 } : it)));
  const removeItem = (id) => setItems((a) => a.filter((it) => it.id !== id));
  const increment = (id) =>
    setItems((a) =>
      a.map((it) => (it.id === id ? { ...it, count: it.count + 1 } : it))
    );

  return (
    <div className="zikir-page">
      <div className="zikir-frame">
        <h2 className="zikir-title">Zikirlerim</h2>

        {items.length === 0 && (
          <div className="empty">
            <p>Şu anda kayıtlı zikir bulunamamaktadır.</p>
          </div>
        )}

        <ul className="zikir-list">
          {items.map((it) => (
            <li key={it.id} className="zikir-item">
              <button className="zikir-name" onClick={() => onSelect?.(it.id)}>
                {it.title}
              </button>
              <div
                className="count-box"
                onClick={() => increment(it.id)}
                title="+1"
              >
                {it.count}
              </div>
              <div className="actions">
                <button className="btn-reset" onClick={() => resetCount(it.id)}>
                  Sıfırla
                </button>
                <button
                  className="btn-delete"
                  onClick={() => removeItem(it.id)}
                >
                  Sil
                </button>
              </div>
            </li>
          ))}
        </ul>

        <button className="add-btn-wide" onClick={() => onAddClick?.()}>
          Ekle
        </button>
      </div>
    </div>
  );
}
