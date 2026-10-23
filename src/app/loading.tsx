export default function Loading() {
  return (
    <div
      className="bg-background py-16 sm:py-24"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="container-editorial space-y-6">
        <div className="h-4 w-36 rounded bg-surface-muted animate-pulse" />
        <div className="h-10 w-3/4 max-w-2xl rounded bg-surface-muted animate-pulse" />
        <div className="h-5 w-2/3 max-w-xl rounded bg-surface-muted animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="h-44 rounded-xl bg-surface border border-border animate-pulse" />
          <div className="h-44 rounded-xl bg-surface border border-border animate-pulse" />
          <div className="h-44 rounded-xl bg-surface border border-border animate-pulse" />
        </div>
      </div>
    </div>
  );
}
