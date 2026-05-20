export function VideoPreview({
  title,
  embedUrl
}: {
  title: string;
  embedUrl: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-white/[0.06] shadow-card">
      <iframe
        className="aspect-video w-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
