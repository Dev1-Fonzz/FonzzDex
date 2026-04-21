# Cara Menggunakan Firmware Compiler Web

Dokumen ini menerangkan cara menggunakan aplikasi web untuk mengompil dan memuat naik firmware ke mikrokontroller anda.

## Panduan Penggunaan

### 1. Menyediakan Kod Firmware

Aplikasi ini berfungsi dengan repositori GitHub yang mengandungi kod firmware. Untuk memulakan:

1. Pastikan kod firmware anda berada dalam repositori GitHub
2. Repositori harus mengandungi semua fail yang diperlukan untuk kompilasi
3. Untuk papan Arduino/ESP, pastikan terdapat fail `.ino` utama

### 2. Menggunakan Antara Muka Web

1. **Buka Aplikasi**:
   - Akses aplikasi melalui pelayar web
   - Laman web akan memaparkan antara muka utama

2. **Masukkan URL Repositori**:
   - Dalam medan "GitHub Repository URL", masukkan URL penuh ke repositori GitHub anda
   - Contoh: `https://github.com/username/repo-name`

3. **Pilih Jenis Mikrokontroller**:
   - Dari senarai jatidrop, pilih jenis mikrokontroller sasaran:
     - ESP32
     - ESP8266
     - Arduino Uno
     - Arduino Nano
     - Arduino Mega

4. **Sambungkan Peranti**:
   - Sambungkan mikrokontroller anda ke komputer melalui kabel USB
   - Klik butang "Refresh Ports" untuk mengesan peranti yang tersambung
   - Pilih port yang betul dari senarai yang dikesan

5. **Kompil dan Muat Naik**:
   - Klik butang "Compile & Upload" untuk memulakan proses
   - Tunggu proses selesai (ditunjukkan dalam terminal output)

### 3. Memahami Output Terminal

Terminal akan memaparkan maklumat masa nyata tentang proses:

- **Muat Turun**: Memaparkan kemajuan memuat turun repositori
- **Pengekstrakan**: Menunjukkan proses pengekstrakan fail
- **Kompilasi**: Memaparkan langkah-langkah kompilasi
- **Muat Naik**: Menunjukkan kemajuan memuat naik firmware
- **Status**: Menunjukkan status keseluruhan proses

### 4. Menyelesaikan Masalah

#### Masalah Umum

1. **Tiada Port Dikesan**:
   - Pastikan peranti disambungkan dengan betul
   - Semak kabel USB
   - Pastikan driver peranti dipasang dengan betul
   - Klik "Refresh Ports" semula

2. **Kompilasi Gagal**:
   - Semak struktur repositori
   - Pastikan semua dependensi dinyatakan dengan betul
   - Semak kesesuaian kod dengan papan sasaran

3. **Muat Naik Gagal**:
   - Semak sambungan peranti
   - Pastikan port yang betul dipilih
   - Semak jika peranti dalam mod program

#### Kekangan Demo

Versi demo aplikasi ini mempunyai kekangan berikut:

- **Tiada Akses Port Serial Sebenar**: Aplikasi tidak dapat mengakses port serial komputer
- **Tiada Kompilasi Sebenar**: Proses kompilasi hanya disimulasikan
- **Tiada Muat Naik Sebenar**: Proses muat naik hanya disimulasikan

Untuk fungsi penuh, anda memerlukan:
- Aplikasi desktop pelengkap
- Perkhidmatan backend dengan akses port serial
- Alat kompilasi yang dipasang pada pelayan

### 5. Struktur Repositori yang Disyorkan

Untuk hasil terbaik, strukturkan repositori anda seperti berikut:

```
firmware-project/
├── src/
│   └── main.ino          # Fail kod utama
├── lib/                  # Direktori library (jika ada)
├── platformio.ini        # Konfigurasi PlatformIO (jika guna PlatformIO)
├── README.md             # Dokumentasi projek
└── LICENSE               # Lesen (jika ada)
```

### 6. Contoh Repositori

Berikut adalah contoh repositori yang sesuai:

- **ESP32 Blink**: https://github.com/espressif/arduino-esp32/tree/master/libraries/ESP32/examples/Blink
- **Arduino Blink**: https://github.com/arduino/arduino-examples/tree/main/examples/01.Basics/Blink

### 7. Sokongan dan Bantuan

Untuk pertanyaan lanjut atau bantuan teknikal, sila:

1. Semak dokumentasi dalam `README.md`
2. Rujuk keperluan sistem dalam `requirements.md`
3. Hubungi penyelenggara projek melalui isu GitHub

### 8. Nota Keselamatan

- Hanya gunakan repositori yang anda percayai
- Semak kod sebelum mengompil
- Jangan memuat naik firmware dari sumber yang tidak diketahui ke peranti anda