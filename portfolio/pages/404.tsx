import Link from "next/link";

const Custom404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md text-center space-y-6">
        {/* Big 404 */}
        <h1 className="text-7xl font-bold text-[#07153B]">404</h1>

        {/* Message */}
        <h2 className="text-xl font-semibold text-[#07153B]">
          Page Not Found
        </h2>

        <p className="text-sm text-[#657A97] leading-relaxed">
          Oops! The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back on track.
        </p>

        {/* Action */}
        <Link
          href="/"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-[#07153B]
            hover:text-[#657A97]
            transition
          "
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Custom404;
