// API route untuk mendapat senarai port serial yang tersedia
// Ini memerlukan akses ke sistem yang tidak tersedia dalam persekitaran Vercel

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Dalam implementasi sebenar, di sini kita akan:
  // 1. Menggunakan pustaka seperti serialport untuk mendapat senarai port
  // 2. Menyaring port yang sesuai untuk mikrokontroller

  // Simulasi senarai port
  const simulatedPorts = [
    {
      path: '/dev/ttyUSB0',
      manufacturer: 'Silicon Labs',
      serialNumber: '0001',
      vendorId: '10c4',
      productId: 'ea60'
    },
    {
      path: '/dev/ttyUSB1',
      manufacturer: 'FTDI',
      serialNumber: '0002',
      vendorId: '0403',
      productId: '6001'
    },
    {
      path: 'COM3',
      manufacturer: 'Arduino LLC',
      serialNumber: '752303134323510192D1',
      vendorId: '2341',
      productId: '0043'
    }
  ];

  // Respons dengan senarai port
  res.status(200).json({
    success: true,
    ports: simulatedPorts,
    timestamp: new Date().toISOString()
  });
}