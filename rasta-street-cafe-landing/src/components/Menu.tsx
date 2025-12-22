"use client";

const Menu = () => {
  const signatureItems = [
    {
      name: "Hot Chocolate",
      description: "Rich and creamy hot chocolate, a customer favorite",
      icon: "☕",
    },
    {
      name: "Garlic Burnt Rice",
      description: "Signature dish with aromatic garlic flavors",
      icon: "🍽️",
    },
    {
      name: "Sandwiches",
      description: "Cafe-style sandwiches perfect for quick bites",
      icon: "🥪",
    },
  ];

  const menuCategories = [
    {
      category: "Beverages",
      items: ["Hot Chocolate", "Coffee", "Tea", "Cold Drinks"],
    },
    {
      category: "Food",
      items: [
        "Garlic Burnt Rice",
        "Sandwiches",
        "Street-Style Snacks",
        "Rice Dishes",
      ],
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cafe comfort food and street-style bites
          </p>
        </div>

        {/* Signature Items */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Signature Items
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {signatureItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.name}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-300">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="text-amber-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            * Menu items may vary. Please visit us or call for current
            availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;



