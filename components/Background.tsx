export default function Background() {
  const blobs = {
    top: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    middle:
      "polygon(74% 44%, 100% 62%, 98% 27%, 85% 0%, 72% 33%, 60% 62%, 52% 68%, 47% 58%, 45% 35%, 27% 77%, 0% 65%, 18% 100%, 28% 77%, 76% 98%, 74% 44%)",
    bottom:
      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  };

  const classStyle =
    "absolute inset-x-0 -top-40 transform-gpu blur-[96px] sm:-top-80";

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className={classStyle}>
        <div
          style={{ clipPath: blobs.middle }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-3xl -translate-x-1/2 rotate-30 bg-linear-to-tr from-blob to-blob/15 opacity-30 sm:left-[calc(50%-30rem)] sm:w-384 will-change-transform"
        />
      </div>

      <div className={classStyle}>
        <div
          style={{ clipPath: blobs.middle }}
          className="absolute top-3/4 left-1/4 aspect-square w-2xl -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-linear-to-br from-blob to-blob/15 opacity-35 will-change-transform"
        />
      </div>

      <div className={classStyle}>
        <div
          style={{ clipPath: blobs.middle }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-160 -translate-x-1/2 bg-linear-to-tr from-blob to-blob/15 opacity-30 sm:left-[calc(50%+36rem)] sm:w-7xl will-change-transform"
        />
      </div>
    </div>
  );
}
