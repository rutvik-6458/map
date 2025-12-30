"use client";

const Features = () => {
  const features = [
    {
      icon: "☕",
      title: "Popular Hot Chocolate",
      description: "A favorite among customers, our hot chocolate is a must-try.",
    },
    {
      icon: "🍽️",
      title: "Cafe-Style Comfort Food",
      description: "Sandwiches and rice dishes perfect for quick bites.",
    },
    {
      icon: "🚗",
      title: "Drive-Through Available",
      description: "Convenient drive-through option for on-the-go orders.",
    },
    {
      icon: "🏢",
      title: "Ambrosia Business Hub",
      description: "Located inside Ambrosia Business Hub on VIP Road.",
    },
    {
      icon: "📦",
      title: "Delivery Option",
      description: "Get your favorite items delivered to your doorstep.",
    },
    {
      icon: "👥",
      title: "Perfect for Hangouts",
      description: "Ideal spot for casual friend meetups and conversations.",
    },
  ];

  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose Rasta Street Cafe?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            A neighborhood cafe focused on comfort food and relaxed vibes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-amber-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;







