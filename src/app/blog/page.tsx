import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "No Bad Blood! The Reason Why Tamr Judge Finally Made Up With...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-2.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Gigi Hadid, Rita Ora, Serena & Other Hot Celebs Stun At 2019...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-3.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Pot Party! See Farrah Abraham Flaunt Smoking Body At...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-7.jpg",
    featured: false,
  },
  {
    id: 5,
    title:
      "Ireland Baldwin Shows Off Trendy Ilse Valfre Tattoo At Stagecoach...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-4.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Billboard Music Awards: Best, Worst & Wackiest Dresses On The...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-5.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "Stephanie Pratt Busts Out Of Teeny Black Bikini During Hawaii...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-6.jpg",
    featured: true,
  },
  {
    id: 8,
    title: "Kim Kardashian Steps Out In Paris Wearing Shocking Sparkly...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-8.jpg",
    featured: false,
  },
  {
    id: 9,
    title: "CMT Awards 2019 Red Carpet Arrivals Carrie Underwood, Sheryl...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-9.jpg",
    featured: false,
  },
  {
    id: 10,
    title: "A-list Battle! Angelina Jolie & Lady Gaga Fighting Over Who...",
    author: "Ema Timahe",
    date: "Sep 17, 2019",
    image: "/blog/blog-10.jpg",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <div>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              <i className="fa fa-home mr-1"></i>Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">Blog</span>
          </nav>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest Articles
          </h1>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded font-semibold transition">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">
            Follow us on Instagram
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <a
                key={i}
                href="#"
                className="relative h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded overflow-hidden group"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition">
                  <i className="fa fa-instagram text-white text-2xl"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group cursor-pointer">
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-lg mb-4 ${
          post.featured ? "lg:row-span-2 h-96" : "h-48"
        }`}
      >
        <div
          className="w-full h-full bg-gray-300 group-hover:scale-105 transition duration-300"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-600">
          <li>
            by <span className="font-semibold">{post.author}</span>
          </li>
          <li>{post.date}</li>
        </ul>
      </div>
    </article>
  );
}
