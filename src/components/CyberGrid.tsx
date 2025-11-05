const CyberGrid = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/30"
            />
          </pattern>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(280, 80%, 60%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Grid pattern */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated gradient circles */}
        <circle
          cx="20%"
          cy="30%"
          r="300"
          fill="url(#gradient1)"
          className="animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <circle
          cx="80%"
          cy="70%"
          r="400"
          fill="url(#gradient1)"
          className="animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
      </svg>
    </div>
  );
};

export default CyberGrid;
