const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-wide uppercase bg-gold-light text-foreground rounded-full">
            Ready to Build
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
          Your Clinic Website
        </h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Connect your GitHub repository to import your files, and we'll transform them into a beautiful clinic website.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-soft hover:shadow-card transition-all duration-300">
            Connect GitHub
          </button>
          <button className="px-8 py-3 bg-card text-foreground font-medium rounded-lg border border-border shadow-soft hover:shadow-card transition-all duration-300">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
