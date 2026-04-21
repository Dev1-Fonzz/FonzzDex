import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Terminal from '../components/Terminal';
import PortSelector from '../components/PortSelector';

export default function Home() {
  const [repoUrl, setRepoUrl] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('esp32');
  const [compiling, setCompiling] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');
  const [availablePorts, setAvailablePorts] = useState([]);
  const [selectedPort, setSelectedPort] = useState('');

  const boards = [
    { id: 'esp32', name: 'ESP32' },
    { id: 'esp8266', name: 'ESP8266' },
    { id: 'arduino-uno', name: 'Arduino Uno' },
    { id: 'arduino-nano', name: 'Arduino Nano' },
    { id: 'arduino-mega', name: 'Arduino Mega' },
  ];

  // Tambah output ke terminal
  const addToTerminal = (text) => {
    setTerminalOutput(prev => prev + text + '\n');
  };

  // Bersihkan terminal
  const clearTerminal = () => {
    setTerminalOutput('');
  };

  // Simulasi mendapat port yang tersedia
  const fetchPorts = async () => {
    try {
      addToTerminal('Fetching available ports...');
      
      // Dalam implementasi sebenar, kita akan memanggil API:
      // const response = await axios.get('/api/ports');
      // setAvailablePorts(response.data.ports);
      
      // Simulasi respons API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const simulatedPorts = [
        '/dev/ttyUSB0',
        '/dev/ttyUSB1',
        'COM3',
        'COM4'
      ];
      
      setAvailablePorts(simulatedPorts);
      if (simulatedPorts.length > 0 && !selectedPort) {
        setSelectedPort(simulatedPorts[0]);
      }
      addToTerminal(`Found ${simulatedPorts.length} available ports`);
    } catch (error) {
      addToTerminal(`Error fetching ports: ${error.message}`);
    }
  };

  // Muat turun dan ekstrak repositori dari GitHub
  const downloadAndExtractRepo = async (url) => {
    try {
      setStatus('Downloading repository...');
      addToTerminal('Downloading repository from GitHub...');
      
      // Dalam implementasi sebenar, kita akan memanggil API untuk muat turun zip
      // Untuk demo, kita akan simulasi proses ini
      
      // Simulasi muat turun
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('Extracting files...');
      addToTerminal('Extracting repository files...');
      
      // Simulasi pengekstrakan
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addToTerminal('Repository downloaded and extracted successfully');
      return true;
    } catch (error) {
      addToTerminal(`Error: ${error.message}`);
      return false;
    }
  };

  // Kompilasi firmware
  const compileFirmware = async () => {
    try {
      setStatus('Compiling firmware...');
      addToTerminal(`Compiling for ${boards.find(b => b.id === selectedBoard)?.name}...`);
      
      // Dalam implementasi sebenar, kita akan memanggil API untuk kompilasi
      // Simulasi proses kompilasi
      for (let i = 1; i <= 5; i++) {
        addToTerminal(`Compilation step ${i}/5...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setStatus('Compilation successful');
      addToTerminal('Firmware compiled successfully!');
      addToTerminal('Firmware file: firmware.bin');
      return true;
    } catch (error) {
      addToTerminal(`Compilation error: ${error.message}`);
      return false;
    }
  };

  // Muat naik firmware ke peranti
  const uploadFirmware = async () => {
    try {
      if (!selectedPort) {
        addToTerminal('Please select a port first');
        return false;
      }
      
      setStatus('Uploading firmware...');
      addToTerminal(`Uploading firmware to ${selectedPort}...`);
      
      // Dalam implementasi sebenar, kita akan memanggil API untuk muat naik
      // Simulasi proses muat naik
      for (let i = 1; i <= 3; i++) {
        addToTerminal(`Upload step ${i}/3...`);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setStatus('Upload successful');
      addToTerminal('Firmware uploaded successfully!');
      return true;
    } catch (error) {
      addToTerminal(`Upload error: ${error.message}`);
      return false;
    }
  };

  // Fungsi utama untuk memproses repositori
  const processRepository = async () => {
    if (!repoUrl) {
      addToTerminal('Please enter a GitHub repository URL');
      return;
    }

    setCompiling(true);
    setTerminalOutput('');
    addToTerminal('Starting firmware compilation process...\n');
    
    try {
      // 1. Muat turun dan ekstrak repositori
      const downloadSuccess = await downloadAndExtractRepo(repoUrl);
      if (!downloadSuccess) {
        setStatus('Download failed');
        setCompiling(false);
        return;
      }
      
      // 2. Kompilasi firmware
      const compileSuccess = await compileFirmware();
      if (!compileSuccess) {
        setStatus('Compilation failed');
        setCompiling(false);
        return;
      }
      
      // 3. Muat naik firmware
      setUploading(true);
      const uploadSuccess = await uploadFirmware();
      if (!uploadSuccess) {
        setStatus('Upload failed');
        setUploading(false);
        setCompiling(false);
        return;
      }
      
      setStatus('Process completed successfully!');
      addToTerminal('\n=== Process completed successfully! ===');
    } catch (error) {
      setStatus('Process failed');
      addToTerminal(`Process error: ${error.message}`);
    } finally {
      setCompiling(false);
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Firmware Compiler</h1>
          <p className="text-gray-600">Compile and upload firmware to microcontrollers from GitHub repositories</p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repo-url">
                GitHub Repository URL
              </label>
              <input
                id="repo-url"
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="https://github.com/user/repo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={compiling || uploading}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="board-select">
                Target Board
              </label>
              <select
                id="board-select"
                value={selectedBoard}
                onChange={(e) => setSelectedBoard(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={compiling || uploading}
              >
                {boards.map((board) => (
                  <option key={board.id} value={board.id}>
                    {board.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={processRepository}
              disabled={compiling || uploading || !repoUrl}
              className={`px-6 py-3 rounded-md font-medium ${
                compiling || uploading || !repoUrl
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {compiling ? 'Compiling...' : uploading ? 'Uploading...' : 'Compile & Upload'}
            </button>
            
            <button
              onClick={fetchPorts}
              disabled={compiling || uploading}
              className={`px-6 py-3 rounded-md font-medium ${
                compiling || uploading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              Refresh Ports
            </button>
          </div>

          <PortSelector
            ports={availablePorts}
            selectedPort={selectedPort}
            onSelect={setSelectedPort}
            onRefresh={fetchPorts}
            disabled={compiling || uploading}
          />

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-bold">Status:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                status === 'Process completed successfully!' 
                  ? 'bg-green-100 text-green-800' 
                  : status.includes('failed') 
                    ? 'bg-red-100 text-red-800'
                    : 'bg-blue-100 text-blue-800'
              }`}>
                {status || 'Ready'}
              </span>
            </div>
          </div>
        </div>

        <Terminal output={terminalOutput} onClear={clearTerminal} />

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Supported microcontrollers: ESP32, ESP8266, Arduino Uno, Nano, Mega</p>
          <p className="mt-2">Connect your device via USB to get started</p>
        </div>
      </div>
    </div>
  );
}