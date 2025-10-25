console.log('Website SD PLUS MARHAMAH loaded.');
// Saat form dikirim
document.getElementById('absenForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const status = document.getElementById('status').value;
  const waktu = new Date().toLocaleString();

  if (!nama || !status) {
    alert('Silakan isi semua data!');
    return;
  }

  // Tampilkan data di tabel
  const tbody = document.querySelector('#tabelAbsensi tbody');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${nama}</td><td>${status}</td><td>${waktu}</td>`;
  tbody.appendChild(row);

  // Simpan ke localStorage agar tidak hilang saat refresh
  const data = JSON.parse(localStorage.getItem('absensiGuru')) || [];
  data.push({ nama, status, waktu });
  localStorage.setItem('absensiGuru', JSON.stringify(data));

  // Reset form
  document.getElementById('absenForm').reset();
  alert('Absensi berhasil disimpan!');
});

// Saat halaman dibuka, tampilkan data sebelumnya
window.onload = function() {
  const data = JSON.parse(localStorage.getItem('absensiGuru')) || [];
  const tbody = document.querySelector('#tabelAbsensi tbody');

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.nama}</td><td>${item.status}</td><td>${item.waktu}</td>`;
    tbody.appendChild(row);
  });
};
