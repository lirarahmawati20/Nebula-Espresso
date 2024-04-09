import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  // Contoh penggunaan useEffect untuk mensimulasikan pengambilan data atau operasi yang membutuhkan waktu
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Setelah 2 detik, loading dihentikan
    }, 4000);

    // Membersihkan timeout jika komponen dibongkar sebelumnya
    return () => clearTimeout(timeout);
  }, []); // Menjalankan efek sekali saat komponen dimuat

  return (
    <div className="loading-container">
      {isLoading ? (
        <div className="loading-spinner">
          {/* Gunakan gambar spinner atau ikon lainnya */}
          <div className="spinner"></div>
          <p>Loading.......</p>
        </div>
      ) : (
        <div className="loading-finished">
          <p>Silahkan tunggu </p>
          <p>Pesanan sedang di peroses!!!!!</p>
        </div>
      )}
    </div>
  );
}
