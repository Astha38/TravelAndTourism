import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DestinationsSection() {
  const destinations = [
    {
      id: 1,
      name: "Hundru Falls",
      location: "Ranchi",
      image: "https://images.unsplash.com/photo-1674805023990-892e2a3fc385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwd2F0ZXJmYWxsc3xlbnwxfHx8fDE3NTc1NzcwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      duration: "Half Day",
      description: "A spectacular 98-meter waterfall surrounded by lush greenery"
    },
    {
      id: 2,
      name: "Netarhat Hill Station",
      location: "Latehar",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpbGwlMjBzdGF0aW9ufGVufDF8fHx8MTc1NzU3NzAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      duration: "Full Day",
      description: "Known as the 'Queen of Chotanagpur', offers stunning sunrise views"
    },
    {
      id: 3,
      name: "Deoghar Temple",
      location: "Deoghar",
      image: "https://www.shutterstock.com/image-photo/famous-lord-shiva-temple-deoghar-600nw-1328209346.jpg",
      rating: 4.6,
      duration: "Half Day",
      description: "Sacred Shiva temple and one of the twelve Jyotirlingas"
    },
    {
      id: 4,
      name: "Parasnath Hills",
      location: "Giridih",
      image: "https://t3.ftcdn.net/jpg/06/44/90/42/360_F_644904289_NbXKTKISNlcpn6ttB2P3upo1IIPqpeKE.jpg",
      rating: 4.4,
      duration: "Full Day",
      description: "Highest peak in Jharkhand, sacred to Jain pilgrims"
    },
    {
      id: 5,
      name: "Betla National Park",
      location: "Latehar",
      image: "https://site.outlookindia.com/traveller/wp-content/uploads/2017/06/jharkhand1_Betla-NP_FI.jpg",
      rating: 4.3,
      duration: "Full Day",
      description: "Rich wildlife sanctuary with tigers, elephants, and deer"
    },
    {
      id: 6,
      name: "Dassam Falls",
      location: "Ranchi",
      image: "https://images.unsplash.com/photo-1674805023990-892e2a3fc385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwd2F0ZXJmYWxsc3xlbnwxfHx8fDE3NTc1NzcwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.2,
      duration: "Half Day",
      description: "Beautiful waterfall perfect for picnics and photography"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the most beautiful and culturally significant places in Jharkhand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm">{destination.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3>{destination.name}</h3>
                    <div className="flex items-center space-x-1 text-gray-600 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">{destination.description}</p>
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Add to Trip
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}