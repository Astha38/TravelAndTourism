import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Car, Clock, MapPin, Users, Star, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TransportSection() {
  const cabServices = [
    {
      id: "ola",
      name: "Ola",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1kBAJsoCfVp7orexclQoMHBj06LwzT4vUw&s",
      rating: 4.3,
      eta: "5-8 min",
      price: "₹12/km",
      features: ["GPS Tracking", "24/7 Support", "Digital Payment", "Safety Features"],
      vehicleTypes: ["Mini", "Prime", "Prime SUV", "Auto"]
    },
    {
      id: "uber",
      name: "Uber",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqG1z04kJUPZhdENyCvU0-iaBI-4Ah6F6rvA&s",
      rating: 4.2,
      eta: "4-7 min",
      price: "₹10/km",
      features: ["Real-time Tracking", "Cashless Rides", "Driver Rating", "Trip Sharing"],
      vehicleTypes: ["UberGo", "UberX", "UberXL", "Premier"]
    },
    {
      id: "rapido",
      name: "Rapido",
      logo: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-27576,resizemode-75,msid-118816992/tech/startups/rapido-in-midst-of-500-city-expansion-mobility-opportunity-offers-strong-upside-cofounder-p-guntupalli.jpg",
      rating: 4.1,
      eta: "3-5 min",
      price: "₹3/km",
      features: ["Quick Booking", "Bike Rides", "Affordable", "Helmet Provided"],
      vehicleTypes: ["Bike Taxi", "Auto", "Cab"]
    }
  ];

  const transportOptions = [
    {
      id: 1,
      type: "Airport Transfer",
      description: "Comfortable rides to/from Birsa Munda Airport",
      price: "₹300-500",
      duration: "45-60 min",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1oCXBKOO5j4eDEIYje6Btz_3DSqfWBANww&s",
      features: ["Meet & Greet", "Luggage Assistance", "Flight Tracking"]
    },
    {
      id: 2,
      type: "City Tours",
      description: "Guided city tours with experienced drivers",
      price: "₹1,200-2,000",
      duration: "4-8 hours",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLu6ykQxnPfZuks0-uI0ZCmm5U6ViSpXlvtQ&s",
      features: ["Local Guide", "Multiple Stops", "Cultural Insights"]
    },
    {
      id: 3,
      type: "Inter-city Travel",
      description: "Comfortable travel to nearby cities",
      price: "₹8-15/km",
      duration: "As per distance",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHJvYWQlMjB0cmlwfGVufDF8fHx8MTc1NzU3NzAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["AC Vehicles", "Professional Drivers", "Flexible Stops"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Transportation Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get around Jharkhand with reliable and comfortable transportation options
          </p>
        </div>

        {/* Cab Services */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center">Popular Cab Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cabServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={service.logo}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle>
                    <h3>{service.name}</h3>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{service.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-green-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{service.eta}</span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-xl text-blue-600">{service.price}</div>
                    <div className="text-sm text-gray-600">Starting price</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Vehicle Types:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.vehicleTypes.map((type, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Features:</div>
                    <div className="space-y-1">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <Zap className="h-3 w-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book {service.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transport Options */}
        <div>
          <h3 className="text-2xl mb-8 text-center">Specialized Transport</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option) => (
              <Card key={option.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={option.image}
                    alt={option.type}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle>
                    <h3>{option.type}</h3>
                    <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-lg text-blue-600">{option.price}</div>
                      <div className="text-sm text-gray-600">Estimated cost</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{option.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Included:</div>
                    <div className="space-y-1">
                      {option.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <Zap className="h-3 w-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-lg mb-2">Need a Custom Route?</h4>
            <p className="text-gray-600 mb-4">
              Planning a multi-city trip or need special arrangements? Contact our travel desk for personalized transportation solutions.
            </p>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Travel Desk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}