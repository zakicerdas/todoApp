# 📝 TodoList App  
### _"Tulis apa yang ingin kamu lakukan — dan buktikan kamu bisa menyelesaikannya."_ ✨  

---

## 🚀 Tentang Proyek
Aplikasi **Todo List sederhana** yang dibuat menggunakan **React + TypeScript + Vite**.  
Proyek ini merupakan bagian dari _Evaluasi Pekanan_ untuk menguji pemahaman dasar React seperti penggunaan **state**, **props**, dan **komponen fungsional**.

> Fokusnya bukan sekadar menambah tugas... tapi juga membuktikan kamu bisa menyelesaikan semuanya, kan? 😌💪

---

## 🧩 Fitur-Fitur Utama

✅ Tambah todo baru (Enter / tombol **Tambah**)  
✅ Tampilkan daftar todo (dengan status aktif / selesai)  
✅ Toggle status selesai via checkbox  
✅ Hapus todo dari daftar  
✅ Filter: **Semua**, **Aktif**, **Selesai**  
✅ Bersihkan semua todo yang sudah selesai  
💅 (Opsional) Styling responsif dengan Tailwind CSS  

---

## 📁 Struktur Proyek
src/
├── components/
│ ├── TodoList.tsx → komponen utama (state + logic)
│ ├── TodoForm.tsx → form input todo
│ ├── TodoItem.tsx → item tunggal
│ └── TodoFilter.tsx → tombol filter (All/Active/Completed)
├── App.tsx
├── main.tsx
└── index.css


## ⚙️ Cara Menjalankan

```bash
# 1. Clone repository
git clone https://github.com/zakicerdas/todoApp.git
cd todoApp

# 2. Install dependensi
npm install

# 3. Jalankan proyek
npm run dev
Kemudian buka di browser:
👉 http://localhost:5173/

🧠 Konsep React yang Diterapkan
Functional Components (tanpa class)

State management dengan useState

Props untuk komunikasi antar-komponen

Conditional Rendering

List Rendering dengan key

Functional update di setter state
→ setTodos(prev => [...prev, newTodo])

🎨 Styling
Tampilan dibuat minimalis dan mudah dikustomisasi:

Warna lembut dengan background abu muda

Card putih di tengah layar

Tombol filter dan input yang rapi

Bisa diubah dengan Tailwind, CSS module, atau inline style sesuai selera

“Simpel bukan berarti membosankan — justru mudah dikembangkan 💫”

🧾 Checklist Penilaian
Kriteria	Status
Add Todo	✅
Display Todo List	✅
Toggle Completion	✅
Delete Todo	✅
Filter Todos	✅
Props & useState	✅
Responsive Design	✅

🖼️ Preview
(Tambahkan screenshot project di sini)


🧑‍💻 Teknologi yang Digunakan
⚛️ React + TypeScript + Vite

🎨 (Opsional) Tailwind CSS

💡 ESLint untuk menjaga kualitas kode

💬 Catatan Kecil
“Setiap tugas yang kamu tulis di sini adalah langkah kecil menuju kebiasaan besar — menyelesaikan apa yang kamu mulai.” ☕

✨ Dibuat dengan semangat, sedikit kopi, dan banyak bug yang akhirnya terselesaikan ✨
by @zakicerdas 💻



