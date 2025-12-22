"use client";

const SocialProof = () => {
  const testimonials = [
    {
      quote:
        "Good place to hang with friends. Must try hot chocolate & garlic burnt rice.",
      rating: 5,
    },
    {
      quote: "Soothing ambience and better quality of food.",
      rating: 4,
    },
    {
      quote: "Only liked the coffee.",
      rating: 3,
    },
  ];

  return (
    <section
      id="social-proof"
      className="py-20 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Rating Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-8 py-4 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4 ? "text-amber-400 fill-current" : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900">4.2</span>
            <span className="text-gray-500">/ 5.0</span>
          </div>
          <p className="text-xl text-gray-600 font-medium">
            Rated by <span className="text-amber-600 font-bold">343+</span> customers
          </p>
        </div>

        {/* Review Themes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">☕</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Hot Chocolate
            </h3>
            <p className="text-sm text-gray-600">
              Popular choice among customers
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🍽️</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Garlic Burnt Rice
            </h3>
            <p className="text-sm text-gray-600">Signature dish loved by many</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Soothing Ambience
            </h3>
            <p className="text-sm text-gray-600">
              Relaxed atmosphere for hangouts
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-amber-400 fill-current"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;


