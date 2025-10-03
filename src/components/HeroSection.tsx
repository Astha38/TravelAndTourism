import { Button } from "./ui/button";
import { MapPin, Star, Calendar, Sparkles, Package } from "lucide-react";

interface HeroSectionProps {
  onExploreClick: () => void;
  onAIStoryClick?: () => void;
  onArtisanShopClick?: () => void;
}

export function HeroSection({ onExploreClick, onAIStoryClick, onArtisanShopClick }: HeroSectionProps) {
  return (
    <section className="relative h-[100vh] pt-[70px] bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center overflow-hidden py-12">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1674805023990-892e2a3fc385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwd2F0ZXJmYWxsc3xlbnwxfHx8fDE3NTc1NzcwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-6">
          Discover the Beauty of <span className="text-yellow-300">Jharkhand</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6 opacity-90">
          From majestic waterfalls to rich cultural heritage, experience the best of Jharkhand with our smart tourism platform
        </p>
        
        {/* USP Features Highlight */}
        <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
          <p className="text-lg mb-4 text-yellow-300">✨ Unique Features That Set Us Apart</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-pointer" onClick={onAIStoryClick}>
              <Sparkles className="h-6 w-6 text-yellow-300" />
              <div className="text-left">
                <div className="text-sm opacity-90">AI Story Teller</div>
                <div className="text-xs opacity-70">Upload photos, discover stories</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-pointer" onClick={onArtisanShopClick}>
              <Package className="h-6 w-6 text-yellow-300" />
              <div className="text-left">
                <div className="text-sm opacity-90">Local Artisan Shop</div>
                <div className="text-xs opacity-70">Support tribal communities</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>50+ Destinations</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <span>Expert Guides</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>24/7 Support</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={onExploreClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-black pb-1"
          >
            Start Your Journey
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black pb-1"
            onClick={() => window.open("https://youtu.be/eDIJv93S_tQ?si=z6Mlk84g_pKWjRoK", "_blank")}
          >
            Watch Tour Video
          </Button>
        </div>
      </div>
    </section>
  );
}