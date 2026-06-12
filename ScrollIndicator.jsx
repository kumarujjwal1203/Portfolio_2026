'use client';

export default function ScrollIndicator() {
  const scroll = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="scrollIndicator" id="scroll-indicator"
      role="button" tabIndex={0} aria-label="Scroll to projects"
      onClick={scroll} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && scroll()}>
      <span className="scrollLabel">Scroll</span>
      <div className="scrollLineWrap">
        <div className="scrollLineInner" />
      </div>
    </div>
  );
}
