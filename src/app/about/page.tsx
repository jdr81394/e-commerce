import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-200">
              Full-Stack Engineer & AWS Certified Solutions Architect
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <i className="fa fa-user-circle text-4xl text-gray-900"></i>
                <h2 className="text-3xl font-bold text-gray-900">
                  Jake Roberts
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm a Full-Stack Engineer and AWS Certified Solutions Architect
                with seven years of experience designing, delivering, and
                scaling high-impact applications across e-commerce, cloud
                infrastructure, and AI-powered systems. I specialize in React,
                Next.js, Node.js/NestJS, and AWS microservices, and I'm
                passionate about building products that are fast, scalable, and
                intelligently automated.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Throughout my career, I've led teams and delivered systems used
                by thousands of real customers — from modernizing legacy
                infrastructures to architecting cloud-native solutions that save
                companies hundreds of thousands of dollars. I've worked in AGILE
                environments of 20+ engineers, built components used by 100,000+
                monthly users, and designed data pipelines and APIs processing
                millions of records.
              </p>
            </div>

            {/* AI Focus */}
            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <i className="fa fa-robot text-3xl text-blue-600"></i>
                <h3 className="text-2xl font-bold text-gray-900">
                  AI Automation
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                More recently, I've expanded into AI automation, developing
                chatbots powered by OpenAI models and integrating them into real
                business workflows. I'm especially interested in using AI to
                streamline customer support, enhance user experience, and give
                businesses the tools to operate more efficiently.
              </p>
            </div>

            {/* Philosophy */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-gray-900 pl-6">
                Whether it's building a full-stack application from scratch,
                migrating large systems to modern architectures, or creating
                intelligent automations with OpenAI, I love solving hard
                problems and delivering clean, reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa fa-shopping-cart text-4xl text-gray-900"></i>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Project: E-Commerce Demo Application
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This e-commerce demo site, built and deployed on Vercel, serves as
              a portfolio piece showcasing my ability to design modern front-end
              experiences while thinking through real-world retail workflows.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <i className="fa fa-external-link-alt text-blue-600 text-xl"></i>
                <a
                  href="https://e-commerce-delta-bay-24.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition"
                >
                  View Live Demo →
                </a>
              </div>
            </div>

            {/* Standout Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <i className="fa fa-star text-yellow-500"></i>
                Standout Features
              </h3>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <i className="fa fa-palette text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Clean, modern UI with intuitive navigation
                      </h4>
                      <p className="text-gray-700">
                        The site features a clear structure across core shopping
                        pages — Home, Shop, Blog, Contact — demonstrating strong
                        attention to UX, user flow, and layout architecture.
                        Category sections (Women, Men, Accessories) show how I
                        design product hierarchies that feel natural to users.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <i className="fa fa-th-large text-green-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Realistic e-commerce components
                      </h4>
                      <p className="text-gray-700">
                        The project includes product grids, pricing displays,
                        view/detail states, category filtering, and a polished
                        product listing flow. These patterns mirror the kinds of
                        UI components I've built professionally in large-scale
                        e-commerce environments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                      <i className="fa fa-shopping-bag text-purple-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Familiar retail features
                      </h4>
                      <p className="text-gray-700">
                        Pages for Wishlist ( in progress ), Checkout, Order
                        Tracking, and My Account showcase an understanding of
                        typical buyer journeys and the structure required for a
                        complete store experience — even in a demo context.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                      <i className="fa fa-sitemap text-yellow-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Newsletter + Footer Architecture
                      </h4>
                      <p className="text-gray-700">
                        The footer includes business pages, quick links, support
                        pages, and a subscription form, which reflects good
                        information architecture and awareness of real-world
                        business needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                      <i className="fa fa-cloud text-red-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Deployment Best Practices
                      </h4>
                      <p className="text-gray-700">
                        Deployed on Vercel, the project demonstrates knowledge
                        of hosting, CI/CD workflows, and modern cloud deployment
                        pipelines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                      <i className="fa fa-briefcase text-indigo-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Designed as a standalone portfolio asset
                      </h4>
                      <p className="text-gray-700">
                        While this site uses dummy data, it's structured to
                        represent the type of scalable UI work I've done
                        professionally — allowing potential clients or employers
                        to see how I approach layout, component structure, and
                        the aesthetic of a retail experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Project Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <i className="fa fa-bullseye text-gray-900"></i>
              Why This Project Represents My Work
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This demo site ties directly into the work I've done on production
              systems:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <i className="fa fa-check-circle text-green-600 text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-700">
                  I've built and optimized e-commerce components used by over
                  100,000 monthly users.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <i className="fa fa-check-circle text-green-600 text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-700">
                  I've worked on full-stack product pipelines, from creating
                  React components to engineering Node.js/NestJS APIs.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <i className="fa fa-check-circle text-green-600 text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-700">
                  I've designed and migrated AWS architectures powering
                  large-scale commerce workflows.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <i className="fa fa-check-circle text-green-600 text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-700">
                  I've built AI-driven customer support chatbots that integrate
                  directly into platforms like these.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gray-900 text-white rounded-lg p-8">
              <p className="text-lg leading-relaxed">
                This project is a distilled, public-facing representation of
                those capabilities — a showcase that I can build end-to-end
                experiences that are clean, intuitive, and ready for real
                expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
