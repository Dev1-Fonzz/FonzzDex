// API route untuk mendapatkan port yang tersedia - Versi Vercel (Demo)
// Dalam persekitaran browser, kita tidak dapat mengakses port serial secara langsung

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Dalam Vercel, kita hanya boleh mensimulasi senarai port
  // Dalam implementasi sebenar, ini akan memerlukan akses ke sistem operasi
  console.log('Simulating port detection');

  // Simulasi senarai port yang tersedia
  const simulatedPorts = [
    { path: '/dev/ttyUSB0', manufacturer: 'FTDI' },
    { path: '/dev/ttyUSB1', manufacturer: 'Silicon Labs' },
    { path: 'COM3', manufacturer: 'Arduino LLC' },
    { path: 'COM4', manufacturer: 'Unknown' }
  ];

  // Respons berjaya
  res.status(200).json({
    success: true,
    ports: simulatedPorts,
    timestamp: new Date().toISOString(),
    note: 'This is a simulation. Actual port detection requires serial port access.'
  });
}