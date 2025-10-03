import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Star, Wifi, Car, Coffee, Waves } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HotelsSection() {
  const hotels = [
    {
      id: 1,
      name: "The Fern Residency Ranchi",
      location: "Ranchi",
      image: "https://images.unsplash.com/photo-1728365743796-ee69341a166d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBob3RlbCUyMGx1eHVyeSUyMHJlc29ydHxlbnwxfHx8fDE3NTc1NzcwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      price: "₹3,500",
      category: "Luxury",
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Car, name: "Parking" },
        { icon: Coffee, name: "Restaurant" },
        { icon: Waves, name: "Swimming Pool" }
      ],
      features: ["Business Center", "Spa", "Room Service", "Airport Transfer"]
    },
    {
      id: 2,
      name: "Hotel Green Park",
      location: "Jamshedpur",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGhvdGVsJTIwcm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NTc1NzcwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.2,
      price: "₹2,200",
      category: "Premium",
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Car, name: "Parking" },
        { icon: Coffee, name: "Restaurant" }
      ],
      features: ["Conference Hall", "Gym", "24/7 Front Desk", "Laundry"]
    },
    {
      id: 3,
      name: "Hotel Capitol Hill",
      location: "Ranchi",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGhvdGVsJTIwbG9iYnl8ZW58MXx8fHwxNzU3NTc3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.0,
      price: "₹1,800",
      category: "Budget",
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Coffee, name: "Restaurant" }
      ],
      features: ["Airport Pickup", "Tour Desk", "Room Service", "AC Rooms"]
    },
    {
      id: 4,
      name: "Mayfair Lagoon",
      location: "Deoghar",
      image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHJlc29ydCUyMGhvdGVsfGVufDF8fHx8MTc1NzU3NzAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      price: "₹4,200",
      category: "Resort",
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Car, name: "Parking" },
        { icon: Coffee, name: "Restaurant" },
        { icon: Waves, name: "Swimming Pool" }
      ],
      features: ["Spa & Wellness", "Kids Club", "Garden View", "Banquet Hall"]
    },
    {
      id: 5,
      name: "Hotel Samrat",
      location: "Dhanbad",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGhvdGVsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU3NTc3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 3.8,
      price: "₹1,500",
      category: "Budget",
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Coffee, name: "Restaurant" }
      ],
      features: ["24/7 Reception", "Room Service", "Travel Desk", "Complimentary Breakfast"]
    },
    {
      id: 6,
      name: "Hotel Le ROI",
      location: "Ranchi",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGhvdGVsJTIwYmVkcm9vbXxlbnwxfHx8fDE3NTc1NzcwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.3,
      price: "₹2,800",
      category: "Premium",
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Car, name: "Parking" },
        { icon: Coffee, name: "Restaurant" }
      ],
      features: ["Business Center", "Fitness Center", "Multi-cuisine Restaurant", "Conference Room"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Luxury": return "bg-purple-100 text-purple-800";
      case "Premium": return "bg-blue-100 text-blue-800";
      case "Resort": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Hotels & Accommodations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect place to stay during your Jharkhand adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(hotel.category)}>
                    {hotel.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm">{hotel.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3>{hotel.name}</h3>
                    <div className="flex items-center space-x-1 text-gray-600 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{hotel.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg">{hotel.price}</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      <amenity.icon className="h-3 w-3" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Popular Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {hotel.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {hotel.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{hotel.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Book Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Hotels
          </Button>
        </div>
      </div>
    </section>
  );
}