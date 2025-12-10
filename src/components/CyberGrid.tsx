const CyberGrid = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Magenta Orb Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'hsl(280 20% 6%)',
          backgroundImage: `
            linear-gradient(to right, hsl(320 80% 55% / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(320 80% 55% / 0.08) 1px, transparent 1px),
            radial-gradient(circle at 75% 25%, hsl(320 80% 70% / 0.7), transparent 25%),
            radial-gradient(circle at 30% 70%, hsl(280 60% 20% / 0.4), transparent 25%),
            radial-gradient(circle at 50% 50%, hsl(320 80% 50% / 0.5), transparent 40%)
          `,
          backgroundSize: `
            60px 60px,
            60px 60px,
            60px 60px,
            60px 60px,
            60px 60px
          `,
          backgroundPosition: `
            0 0,
            0 0,
            0 0,
            0 0,
            0 0
          `
        }}
      />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline opacity-30" />

      {/* Subtle magenta accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Corner glow effects */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 opacity-30"
        style={{
          background: 'radial-gradient(circle at 0% 0%, hsl(320 80% 55% / 0.3), transparent 60%)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 opacity-30"
        style={{
          background: 'radial-gradient(circle at 100% 100%, hsl(320 80% 55% / 0.3), transparent 60%)'
        }}
      />
    </div>
  );
};

export default CyberGrid;
