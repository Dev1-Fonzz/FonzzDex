# Firmware Compiler Web

A web-based application that compiles firmware from GitHub repositories and uploads it to microcontrollers like ESP32, ESP8266, and Arduino boards.

## Features

- Download and extract code from GitHub repositories
- Compile firmware for various microcontrollers:
  - ESP32
  - ESP8266
  - Arduino Uno
  - Arduino Nano
  - Arduino Mega
- Upload compiled firmware (.bin) to connected devices via USB/OTG
- Real-time terminal output
- Port detection and selection

## How It Works

1. **Download**: Fetches code from a GitHub repository (ZIP format)
2. **Extract**: Unzips and processes the code
3. **Compile**: Converts source code to .bin firmware for the selected microcontroller
4. **Upload**: Transfers the firmware to the connected device via USB/OTG
5. **Monitor**: Displays real-time status and terminal output

## Technical Architecture

### Frontend (Next.js)
- React-based user interface
- Real-time terminal display
- Device port management
- GitHub repository integration

### Backend (API Routes)
- `/api/compile` - Handles firmware compilation
- `/api/upload` - Manages firmware upload to devices
- `/api/ports` - Detects available serial ports

### Supported Platforms
- ESP32 (espressif32)
- ESP8266 (espressif8266)
- Arduino AVR boards (atmelavr)

## Deployment

This application is designed to run on Vercel. However, note that:

1. **Serial Port Access**: True serial port access is not available in browser environments. For full functionality, a companion desktop application or service worker with proper permissions is required.

2. **Compilation**: The actual compilation process requires platform-specific toolchains that cannot run directly in a serverless environment. This would typically be handled by:
   - A dedicated compilation server
   - Docker containers with the required toolchains
   - Integration with cloud compilation services

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Limitations & Considerations

This is a frontend demonstration. In a production environment, you would need:

1. **Backend Services**: Dedicated servers with:
   - Serial port access
   - Compilation toolchains
   - Proper security measures

2. **Desktop Companion**: For direct USB/OTG access, a desktop application might be required

3. **Security**: Proper authentication and authorization for firmware compilation and device access

## Future Enhancements

- Integration with PlatformIO for compilation
- WebSocket support for real-time device communication
- Firmware validation and verification
- Support for more microcontroller platforms
- OTA (Over-The-Air) update capabilities

## License

This project is open source and available under the MIT License.