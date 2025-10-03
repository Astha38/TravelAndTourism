import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServiceCard } from "./components/ServiceCard";
import { DestinationsSection } from "./components/DestinationsSection";
import { HotelsSection } from "./components/HotelsSection";
import { TransportSection } from "./components/TransportSection";
import { FoodSection } from "./components/FoodSection";
import { GuidesSection } from "./components/GuidesSection";
import { AIStoryTellerSection } from "./components/AIStoryTellerSection";
import { LocalArtisanShop } from "./components/LocalArtisanShop";
import { MapSection } from "./components/MapSection";
import { AuthModal } from "./components/AuthModal";
import { 
  MapPin, 
  Building, 
  Car, 
  Utensils, 
  Users, 
  User,
  Star,
  Phone,
  Mail,
  Sparkles,
  Package
} from "lucide-react";
import { Button } from "./components/ui/button";
import Map from "./components/Mapsection";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: "login" | "signup" }>({
    isOpen: false,
    type: "login"
  });

  const handleSectionChange = (section: string) => {
    if (section === "login" || section === "signup") {
      setAuthModal({ isOpen: true, type: section as "login" | "signup" });
    } else {
      setActiveSection(section);
    }
  };

  const services = [
    {
      icon: MapPin,
      title: "Destinations",
      description: "Explore beautiful destinations across Jharkhand",
      color: "bg-blue-500",
      onClick: () => setActiveSection("destinations")
    },
    {
      icon: Building,
      title: "Hotels",
      description: "Find comfortable accommodations for your stay",
      color: "bg-green-500",
      onClick: () => setActiveSection("hotels")
    },
    {
      icon: Car,
      title: "Transport",
      description: "Book cabs and transportation services",
      color: "bg-yellow-500",
      onClick: () => setActiveSection("transport")
    },
    {
      icon: Utensils,
      title: "Food",
      description: "Discover local cuisine and restaurants",
      color: "bg-red-500",
      onClick: () => setActiveSection("food")
    },
    {
      icon: Users,
      title: "Guides",
      description: "Connect with expert local tour guides",
      color: "bg-purple-500",
      onClick: () => setActiveSection("guides")
    },
    {
      icon: Sparkles,
      title: "AI Story Teller",
      description: "Upload photos and discover place stories with AI",
      color: "bg-pink-500",
      onClick: () => setActiveSection("ai-story")
    },
    {
      icon: Package,
      title: "Local Artisan Shop",
      description: "Support local artisans with authentic crafts",
      color: "bg-orange-500",
      onClick: () => setActiveSection("artisan-shop")
    },
    {
      icon: User,
      title: "Profile",
      description: "Manage your account and travel preferences",
      color: "bg-indigo-500",
      onClick: () => setAuthModal({ isOpen: true, type: "login" })
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "destinations":
        return <DestinationsSection />;
      case "hotels":
        return <HotelsSection />;
      case "transport":
        return <TransportSection />;
      case "food":
        return <FoodSection />;
      case "guides":
        return <GuidesSection />;
      case "ai-story":
        return <AIStoryTellerSection />;
      case "artisan-shop":
        return <LocalArtisanShop />;
      default:
        return (
          <>
            <HeroSection 
              onExploreClick={() => setActiveSection("destinations")}
              onAIStoryClick={() => setActiveSection("ai-story")}
              onArtisanShopClick={() => setActiveSection("artisan-shop")}
            />

            {/* Interactive Map Section */}
            <MapSection />

            
            {/* Services Overview */}
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Everything you need for a perfect trip to Jharkhand, including our unique AI-powered features and local artisan marketplace
                  </p>
                </div>
                
                {/* Core Tourism Services */}
                <div className="mb-12">
                  <h3 className="text-2xl text-center mb-8 text-gray-800">Core Tourism Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.slice(0, 5).map((service, index) => (
                      <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        color={service.color}
                        onClick={service.onClick}
                      />
                    ))}
                  </div>
                </div>

                {/* USP Features */}
                <div className="mb-12">
                  <h3 className="text-2xl text-center mb-4 text-gray-800">Our Unique Features</h3>
                  <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    Experience Jharkhand like never before with our innovative AI storytelling and support local communities through our artisan marketplace
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.slice(5, 7).map((service, index) => (
                      <ServiceCard
                        key={index + 5}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        color={service.color}
                        onClick={service.onClick}
                      />
                    ))}
                  </div>
                </div>

                {/* Profile Service */}
                <div className="text-center">
                  <div className="inline-block">
                    {services.slice(7).map((service, index) => (
                      <ServiceCard
                        key={index + 7}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        color={service.color}
                        onClick={service.onClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-blue-600 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl mb-2">50+</div>
                    <div className="text-blue-100">Destinations</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl mb-2">200+</div>
                    <div className="text-blue-100">Hotels</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl mb-2">100+</div>
                    <div className="text-blue-100">Tour Guides</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl mb-2">10K+</div>
                    <div className="text-blue-100">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Destinations Preview */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl mb-4">Must-Visit Places</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover the most popular attractions in Jharkhand
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Hundru Falls",
                      image: "https://images.unsplash.com/photo-1674805023990-892e2a3fc385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwd2F0ZXJmYWxsc3xlbnwxfHx8fDE3NTc1NzcwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
                      rating: 4.5
                    },
                    {
                      name: "Netarhat Hill Station",
                      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpbGwlMjBzdGF0aW9ufGVufDF8fHx8MTc1NzU3NzAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
                      rating: 4.7
                    },
                    {
                      name: "Deoghar Temple",
                      image: "https://www.shutterstock.com/image-photo/famous-lord-shiva-temple-deoghar-600nw-1328209346.jpg",
                      rating: 4.6
                    }
                  ].map((place, index) => (
                    <div key={index} className="relative group cursor-pointer" onClick={() => setActiveSection("destinations")}>
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl mb-1">{place.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{place.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Button onClick={() => setActiveSection("destinations")} className="bg-blue-600 hover:bg-blue-700">
                    Explore All Destinations
                  </Button>
                </div>
              </div>
            </section>

            {/* USP Features Highlight */}
            <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl mb-4">Experience Jharkhand Like Never Before</h2>
                  <p className="text-purple-100 max-w-3xl mx-auto text-lg">
                    Discover our unique features that set us apart - innovative AI technology and direct support for local communities
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* AI Story Teller Feature */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all cursor-pointer" onClick={() => setActiveSection("ai-story")}>
                    <div className="flex items-center space-x-3 mb-4">
                      <Sparkles className="h-8 w-8 text-yellow-300" />
                      <h3 className="text-2xl">AI Story Teller</h3>
                    </div>
                    <p className="text-purple-100 mb-4">
                      Upload a photo of any place in Jharkhand and let our AI reveal its fascinating history, cultural significance, and hidden stories. Experience the heritage of Jharkhand through the power of artificial intelligence.
                    </p>
                    <ul className="space-y-2 text-purple-100">
                      <li>• Instant place recognition and information</li>
                      <li>• Rich historical narratives and legends</li>
                      <li>• Cultural context and tribal heritage</li>
                      <li>• Best visiting times and travel tips</li>
                    </ul>
                    <Button className="mt-6 bg-white text-purple-600 hover:bg-purple-50">
                      Try AI Story Teller
                    </Button>
                  </div>

                  {/* Local Artisan Shop Feature */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all cursor-pointer" onClick={() => setActiveSection("artisan-shop")}>
                    <div className="flex items-center space-x-3 mb-4">
                      <Package className="h-8 w-8 text-yellow-300" />
                      <h3 className="text-2xl">Local Artisan Marketplace</h3>
                    </div>
                    <p className="text-purple-100 mb-4">
                      Support local tribal communities by purchasing authentic handcrafted items. Every purchase directly benefits artisans and helps preserve traditional crafting techniques passed down through generations.
                    </p>
                    <ul className="space-y-2 text-purple-100">
                      <li>• 100% authentic handmade products</li>
                      <li>• Direct support to tribal artisans</li>
                      <li>• Cultural significance of each item</li>
                      <li>• Worldwide shipping available</li>
                    </ul>
                    <Button className="mt-6 bg-white text-orange-600 hover:bg-orange-50">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="h-6 w-6 text-blue-400" />
                      <span className="text-xl">Jharkhand Smart Tourism</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Your trusted companion for exploring the beautiful state of Jharkhand.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-blue-400" />
                        <span>+91 9876543210</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-blue-400" />
                        <span>info@jharkhandtourism.gov.in</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-4">Quick Links</h4>
                    <div className="space-y-2">
                      <button onClick={() => setActiveSection("destinations")} className="block text-gray-400 hover:text-white transition-colors">Destinations</button>
                      <button onClick={() => setActiveSection("hotels")} className="block text-gray-400 hover:text-white transition-colors">Hotels</button>
                      <button onClick={() => setActiveSection("transport")} className="block text-gray-400 hover:text-white transition-colors">Transport</button>
                      <button onClick={() => setActiveSection("food")} className="block text-gray-400 hover:text-white transition-colors">Food</button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-4">Services</h4>
                    <div className="space-y-2">
                      <button onClick={() => setActiveSection("guides")} className="block text-gray-400 hover:text-white transition-colors">Tour Guides</button>
                      <button onClick={() => setActiveSection("ai-story")} className="block text-gray-400 hover:text-white transition-colors">AI Story Teller</button>
                      <button onClick={() => setActiveSection("artisan-shop")} className="block text-gray-400 hover:text-white transition-colors">Local Artisan Shop</button>
                      <a href="#" className="block text-gray-400 hover:text-white transition-colors">Travel Insurance</a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-4">Follow Us</h4>
                    <div className="space-y-2">
                      <a href="#" className="block text-gray-400 hover:text-white transition-colors">Facebook</a>
                      <a href="#" className="block text-gray-400 hover:text-white transition-colors">Instagram</a>
                      <a href="#" className="block text-gray-400 hover:text-white transition-colors">Twitter</a>
                      <a href="#" className="block text-gray-400 hover:text-white transition-colors">YouTube</a>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                  <p>&copy; 2024 Jharkhand Smart Tourism. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        {renderContent()}
      </main>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ isOpen: false, type: "login" })}
        defaultTab={authModal.type}
      />
    </div>
  );
}