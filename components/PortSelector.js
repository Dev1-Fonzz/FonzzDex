export default function PortSelector({ ports, selectedPort, onSelect, onRefresh, disabled }) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="port-select">
            Select Port
          </label>
          <select
            id="port-select"
            value={selectedPort}
            onChange={(e) => onSelect(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={disabled || ports.length === 0}
          >
            <option value="">Select a port</option>
            {ports.map((port) => (
              <option key={port.path || port} value={port.path || port}>
                {port.path || port} {port.manufacturer ? `(${port.manufacturer})` : ''}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={onRefresh}
          disabled={disabled}
          className={`px-4 py-2 rounded-md font-medium h-fit ${
            disabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          Refresh Ports
        </button>
      </div>
      
      {ports.length === 0 && !disabled && (
        <p className="text-gray-500 text-sm mt-2">
          No ports found. Connect your device and click "Refresh Ports"
        </p>
      )}
    </div>
  );
}