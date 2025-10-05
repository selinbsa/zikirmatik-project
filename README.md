# 🕋 Zikirmatik — React Uygulaması

Zikirmatik, kullanıcıların kendi zikirlerini kaydedip sayaçla takip edebileceği modern bir **React** uygulamasıdır.  
Kullanıcı dostu arayüzüyle kişisel zikirleri ekleyebilir, sayaçla takip edebilir, okunuş ve anlamını görüntüleyebilir.

---

## Live Demo
https://zikirmatikprojesi.netlify.app/

---


## 🚀 Özellikler

- 🌿 **Splash Ekranı** — 3 saniyelik hoş geldiniz animasyonu  
- 🧑‍💻 **Kullanıcı İsmi** — kullanıcı ismini alır ve localStorage'da saklar  
- 📿 **Zikir Listesi** — kayıtlı zikirlerin listesi, sayacı ve yönetim butonları  
- ➕ **Yeni Zikir Ekleme** — zikir adı, adedi, okunuşu ve anlamını kaydetme  
- 🔄 **Sayaç Yönetimi** — her zikir için sıfırla / sil işlemleri  
- 🧭 **Zikir Detay Sayfası** —  
  - zikirin adı,  
  - **okunuş/anlam** arasında geçiş (toggle),  
  - mevcut **sayaç**,  
  - büyük **yuvarlak buton** ile artırma (count +1)  
- 💾 **Kalıcılık (localStorage)** — veriler sayfa yenilense bile kaybolmaz  

---

## 🧩 Kullanılan Teknolojiler

| Alan | Teknoloji |
|------|------------|
| Frontend | React (Vite) |
| State Yönetimi | useState, useEffect |
| Kalıcılık | localStorage |
| Stil | CSS3 (her sayfaya özel `.css` dosyaları) |

---

## 📁 Proje Yapısı

zikirmatik-project/
│
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ │
│ ├── pages/
│ │ ├── SplashScreen.jsx
│ │ ├── SplashScreen.css
│ │ ├── NameSetup.jsx
│ │ ├── NameSetup.css
│ │ ├── ZikirList.jsx
│ │ ├── ZikirList.css
│ │ ├── AddZikir.jsx
│ │ ├── AddZikir.css
│ │ ├── ZikirDetail.jsx
│ │ └── ZikirDetail.css
│ │
│ └── assets
│
└── package.json

---

## 🧠 Uygulama Akışı

SplashScreen → “Zikirmatiğe Hoşgeldiniz” (3 saniye)

NameSetup → kullanıcı ismini alır ve saklar

ZikirList → zikirleri listeler, ekleme/silme/sıfırlama yapılır

AddZikir → yeni zikir formu (adı, adet, okunuş, anlam)

ZikirDetail → seçilen zikrin detay sayfası (okunuş/anlam toggle, sayaç +1)

