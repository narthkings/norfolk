const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center space-x-2">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 1.646A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4c3.042 0 5.824 1.135 7.938 3l-1.647 3z"
          ></path>
        </svg>
        <span className="text-gray-500">Loading...</span>
      </div>
    </div>
  );
};
export default Loader;

export const LoaderIcon: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className="animate-spin -ml-1 mr-3 h-8 w-8 text-[#34D1BF]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 1.646A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4c3.042 0 5.824 1.135 7.938 3l-1.647 3z"
        ></path>
      </svg>
    </div>
  );
};
