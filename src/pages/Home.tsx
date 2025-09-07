import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Star, CheckCircle, Play } from 'lucide-react';

const Home = () => {
  const trustBadges = [
    { icon: Shield, text: 'Lab Tested' },
    { icon: Award, text: 'Doctor Endorsed' },
    { icon: CheckCircle, text: 'Ayurveda Certified' },
    { icon: Users, text: '50K+ Women Trust Us' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      condition: 'PCOS',
      text: 'After 3 months with YDB, my cycles are regular and my energy is back. The community support made all the difference.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Anjali Patel',
      condition: 'Perimenopause',
      text: 'The personalized approach and natural ingredients helped me navigate this transition with confidence.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Meera Reddy',
      condition: 'PCOS',
      text: 'Finally, a brand that understands women\'s health. The science-backed approach gives me peace of mind.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'PCOS Balance Formula',
      description: 'Clinically proven blend for hormonal balance',
      price: '₹2,499',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Perimenopause Support',
      description: 'Natural relief for transition symptoms',
      price: '₹2,799',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Wellness Starter Kit',
      description: 'Complete 30-day wellness journey',
      price: '₹4,999',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      badge: 'Value Pack'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Because you are the{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent font-black">
                    BEST
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Take control of your wellness journey with plant-based, Ayurvedic, and science-backed solutions designed specifically for women's health.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/assessment"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
                >
                  Shop Now
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                    <badge.icon className="w-8 h-8 text-emerald-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Confident woman embracing wellness"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-emerald-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-200 to-emerald-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Health Journey, Reimagined
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges women face with PCOS and Perimenopause. 
              Our approach combines ancient wisdom with modern science.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">😔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Problem</h3>
              <p className="text-gray-600">
                Generic solutions, confusing information, and feeling alone in your health journey. 
                One-size-fits-all approaches that ignore your unique needs.
              </p>
            </div>

            <div className="text-center p-8 bg-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600">
                Personalized, science-backed solutions rooted in Ayurveda. 
                Community support and expert guidance every step of the way.
              </p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Result</h3>
              <p className="text-gray-600">
                Balanced hormones, increased energy, and confidence in your wellness journey. 
                Join thousands of women who've transformed their health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Women Everywhere
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most loved products, crafted with care and backed by science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Stories, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              Hear from women who've transformed their health with YouDeserveBetter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.condition} Journey</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Invitation */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join Our Thriving Community
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Connect with thousands of women on similar journeys. Share experiences, 
              get support, and celebrate victories together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/community"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Join Community
                <Users className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors">
                <Play className="mr-2 w-5 h-5" />
                Watch Stories
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;