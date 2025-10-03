import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Star, Clock, Utensils, Leaf, Flame } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FoodSection() {
  const foodCategories = [
    {
      id: 1,
      name: "Traditional Jharkhand Cuisine",
      description: "Authentic local dishes with rich flavors",
      image: "https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwdGhhbGklMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTc1NzM1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specialties: ["Litti Chokha", "Dhuska", "Pittha", "Rugra"],
      type: "Traditional"
    },
    {
      id: 2,
      name: "Street Food Delights",
      description: "Popular street foods and snacks",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGluZGlhbiUyMHN0cmVldCUyMGZvb2R8ZW58MXx8fHwxNzU3NTc3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      specialties: ["Golgappa", "Samosa", "Jalebi", "Chaat"],
      type: "Street Food"
    },
    {
      id: 3,
      name: "Modern Indian Cuisine",
      description: "Contemporary takes on classic dishes",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfG1vZGVybiUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzU3NTc3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      specialties: ["Fusion Curries", "Tandoori Platter", "Biryani", "Kebabs"],
      type: "Modern"
    }
  ];

  const restaurants = [
    {
      id: 1,
      name: "Ranchi Spice Kitchen",
      location: "Main Road, Ranchi",
      cuisine: "North Indian, Jharkhand Special",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTc1NzcwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      priceRange: "₹₹₹",
      openTime: "11:00 AM - 11:00 PM",
      specialties: ["Litti Chokha", "Mutton Curry", "Thali"],
      features: ["Veg Options", "Family Dining", "Takeaway"],
      deliveryTime: "30-45 min"
    },
    {
      id: 2,
      name: "Heritage Dhaba",
      location: "Circular Road, Ranchi",
      cuisine: "Traditional, Street Food",
      image: "data:image/jpeg;base64,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",
      rating: 4.2,
      priceRange: "₹₹",
      openTime: "8:00 AM - 10:00 PM",
      specialties: ["Dhuska", "Aloo Chokha", "Sattu Paratha"],
      features: ["Authentic Taste", "Budget Friendly", "Quick Service"],
      deliveryTime: "20-30 min"
    },
    {
      id: 3,
      name: "Royal Feast Restaurant",
      location: "Hotel Chanakya, Ranchi",
      cuisine: "Multi-cuisine, Continental",
      image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGx1eHVyeSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzU3NTc3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceRange: "₹₹₹₹",
      openTime: "12:00 PM - 12:00 AM",
      specialties: ["Buffet", "Live Grill", "Desserts"],
      features: ["Fine Dining", "Live Music", "Bar Available"],
      deliveryTime: "45-60 min"
    },
    {
      id: 4,
      name: "Tribal Taste",
      location: "Morabadi, Ranchi",
      cuisine: "Tribal, Organic",
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHRyaWJhbCUyMGZvb2R8ZW58MXx8fHwxNzU3NTc3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.0,
      priceRange: "₹₹",
      openTime: "10:00 AM - 9:00 PM",
      specialties: ["Bamboo Shoot Curry", "Wild Mushroom", "Herbal Tea"],
      features: ["Organic", "Unique Flavors", "Cultural Experience"],
      deliveryTime: "40-50 min"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Traditional": return "bg-orange-100 text-orange-800";
      case "Street Food": return "bg-yellow-100 text-yellow-800";
      case "Modern": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Food & Cuisine</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the rich culinary heritage of Jharkhand and explore local flavors
          </p>
        </div>

        {/* Food Categories */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center">Food Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foodCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getTypeColor(category.type)}>
                      {category.type}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle>
                    <h3>{category.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Must Try:</div>
                    <div className="flex flex-wrap gap-1">
                      {category.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Explore {category.type}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div>
          <h3 className="text-2xl mb-8 text-center">Popular Restaurants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm">{restaurant.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {restaurant.priceRange}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <h3>{restaurant.name}</h3>
                      <div className="flex items-center space-x-1 text-gray-600 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{restaurant.location}</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{restaurant.cuisine}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{restaurant.openTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Utensils className="h-4 w-4" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {restaurant.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {restaurant.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {feature.includes("Veg") && <Leaf className="h-3 w-3 text-green-500" />}
                          {feature.includes("Quick") && <Flame className="h-3 w-3 text-red-500" />}
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                      Order Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Menu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-orange-50 rounded-lg p-6 max-w-2xl mx-auto">
            <Utensils className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h4 className="text-lg mb-2">Food Tours Available</h4>
            <p className="text-gray-600 mb-4">
              Join our guided food tours to experience authentic Jharkhand cuisine with local experts and discover hidden culinary gems.
            </p>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              Book Food Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}