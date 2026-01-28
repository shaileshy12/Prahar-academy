const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export default function CloudinaryVideo({ publicId, className = "" }) {
  const videoUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto,br_800k,ar_9:16,w_720/${publicId}.mp4`;
  // f_auto  -> best format per browser
  // q_auto  -> automatic quality / compression
  // br_800k -> ~0.8 Mbps bitrate (tune if too soft)
  // ar_9:16 -> keep your vertical aspect ratio
  // w_720   -> scale width to 720px for lighter file
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`w-full h-full ${className}`}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
