export default function ServicesSection() {
  const services = [
    {
      icon: "fa-truck",
      title: "Free Shipping",
      description: "For all orders over $99",
    },
    {
      icon: "fa-money",
      title: "Money Back Guarantee",
      description: "If goods have problems",
    },
    {
      icon: "fa-headphones",
      title: "Online Support 24/7",
      description: "Dedicated support",
    },
    {
      icon: "fa-lock",
      title: "Payment Secure",
      description: "100% secure payment",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4">
                <i className={`fa ${service.icon} text-4xl text-gray-900`}></i>
              </div>
              <h6 className="text-lg font-semibold mb-2">{service.title}</h6>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
