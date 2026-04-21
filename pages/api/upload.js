// API route untuk muat naik firmware - Versi Vercel (Demo)
// Ini memerlukan akses ke port serial yang tidak tersedia dalam persekitaran browser

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firmwarePath, port, boardType } = req.body;
  
  // Validasi input
  if (!firmwarePath || !port || !boardType) {
    return res.status(400).json({ error: 'Firmware path, port, and board type are required' });
  }

  // Dalam Vercel, kita hanya boleh mensimulasi proses upload
  // Kerana tidak ada akses ke port serial
  console.log(`Simulating upload to ${port} for ${boardType}`);

  // Simulasi proses upload dengan masa rawak untuk realism
  const delay = Math.floor(Math.random() * 2000) + 1000; // 1-3 saat
  
  setTimeout(() => {
    // Respons berjaya
    res.status(200).json({
      success: true,
      message: `Firmware uploaded successfully to ${port}`,
      port: port,
      board: boardType,
      timestamp: new Date().toISOString(),
      note: 'This is a simulation. Actual upload requires serial port access.'
    });
  }, delay);
}