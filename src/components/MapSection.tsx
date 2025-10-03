import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { 
  MapPin, 
  Navigation, 
  Search, 
  Route, 
  Clock,
  Car,
  Loader2,
  Target,
  AlertCircle
} from "lucide-react";
import { Badge } from "./ui/badge";
import mapImage from "./map.jpg";


interface Location {
  lat: number;
  lng: number;
  name: string;
}

interface Destination {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
  description: string;
  image: string;
  rating: number;
  distance?: number;
  travelTime?: string;
}

export function MapSection() {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [nearestDestinations, setNearestDestinations] = useState<Destination[]>([]);
  const [mapCenter, setMapCenter] = useState({ lat: 23.3441, lng: 85.3096 }); // Ranchi, Jharkhand

  // Mock destinations in Jharkhand
  const destinations: Destination[] = [
    {
      id: 1,
      name: "Hundru Falls",
      lat: 23.2839,
      lng: 85.5853,
      type: "Waterfall",
      description: "A magnificent 320-foot waterfall on the Subarnarekha River",
      image: "https://images.unsplash.com/photo-1674805023990-892e2a3fc385?w=300",
      rating: 4.5
    },
    {
      id: 2,
      name: "Netarhat Hill Station",
      lat: 23.4667,
      lng: 84.2667,
      type: "Hill Station",
      description: "Queen of Chotanagpur with stunning sunrise and sunset views",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300",
      rating: 4.7
    },
    {
      id: 3,
      name: "Baidyanath Temple, Deoghar",
      lat: 24.4839,
      lng: 86.7069,
      type: "Temple",
      description: "One of the twelve Jyotirlingas, sacred Hindu pilgrimage site",
      image: "https://images.unsplash.com/photo-1563736797-c32a26bf4a3d?w=300",
      rating: 4.8
    },
    {
      id: 4,
      name: "Ranchi Lake",
      lat: 23.3569,
      lng: 85.3322,
      type: "Lake",
      description: "Artificial lake in the heart of Ranchi city",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300",
      rating: 4.2
    },
    {
      id: 5,
      name: "Dassam Falls",
      lat: 23.1833,
      lng: 85.4667,
      type: "Waterfall",
      description: "Beautiful waterfall formed by the Kanchi River",
      image: "https://images.unsplash.com/photo-1604074139747-26c11e2ee721?w=300",
      rating: 4.4
    },
    {
      id: 6,
      name: "Parasnath Hill",
      lat: 23.9667,
      lng: 86.1667,
      type: "Hill",
      description: "Highest peak in Jharkhand and sacred Jain pilgrimage site",
      image: "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=300",
      rating: 4.6
    }
  ];

  // Calculate distance between two coordinates
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in kilometers
    return Math.round(distance * 10) / 10; // Round to 1 decimal place
  };

  // Estimate travel time based on distance
  const estimateTravelTime = (distance: number): string => {
    // Assuming average speed of 40 km/h for mixed terrain
    const hours = Math.floor(distance / 40);
    const minutes = Math.round((distance % 40) * 1.5);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  };

  // Get user's current location
  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            name: "Your Location"
          };
          setUserLocation(location);
          setMapCenter({ lat: location.lat, lng: location.lng });
          
          // Calculate distances to all destinations
          const destinationsWithDistance = destinations.map(dest => ({
            ...dest,
            distance: calculateDistance(location.lat, location.lng, dest.lat, dest.lng),
            travelTime: estimateTravelTime(calculateDistance(location.lat, location.lng, dest.lat, dest.lng))
          }));
          
          // Sort by distance and get nearest 3
          const nearest = destinationsWithDistance
            .sort((a, b) => (a.distance || 0) - (b.distance || 0))
            .slice(0, 3);
            
          setNearestDestinations(nearest);
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoadingLocation(false);
          // Fallback to Ranchi coordinates
          setUserLocation({
            lat: 23.3441,
            lng: 85.3096,
            name: "Ranchi, Jharkhand (Approximate)"
          });
        }
      );
    } else {
      setIsLoadingLocation(false);
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Search destinations
  const searchDestinations = (query: string) => {
    if (!query.trim()) {
      setSelectedDestination(null);
      return;
    }
    
    const found = destinations.find(dest => 
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.type.toLowerCase().includes(query.toLowerCase())
    );
    
    if (found && userLocation) {
      const distance = calculateDistance(userLocation.lat, userLocation.lng, found.lat, found.lng);
      setSelectedDestination({
        ...found,
        distance,
        travelTime: estimateTravelTime(distance)
      });
    } else {
      setSelectedDestination(null);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      searchDestinations(searchQuery);
    }
  }, [searchQuery, userLocation]);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl text-gray-900">Explore Nearby</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your current location and discover the nearest attractions in Jharkhand with distance and travel time estimates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location & Search Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Current Location Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  <span>Your Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userLocation ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-green-600">
                      <Navigation className="h-4 w-4" />
                      <span className="text-sm">Location Found</span>
                    </div>
                    <p className="text-gray-700">{userLocation.name}</p>
                    <p className="text-xs text-gray-500">
                      {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Location not detected</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Enable location access to find nearby destinations
                    </p>
                  </div>
                )}
                
                <Button
                  onClick={getCurrentLocation}
                  disabled={isLoadingLocation}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isLoadingLocation ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Getting Location...
                    </>
                  ) : (
                    <>
                      <Target className="mr-2 h-4 w-4" />
                      Get My Location
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Search Destinations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-green-600" />
                  <span>Search Destinations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for places..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                {selectedDestination && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <img
                        src={selectedDestination.image}
                        alt={selectedDestination.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg text-gray-900 mb-1">{selectedDestination.name}</h4>
                        <Badge className="mb-2">{selectedDestination.type}</Badge>
                        <p className="text-sm text-gray-600 mb-2">{selectedDestination.description}</p>
                        
                        {selectedDestination.distance && (
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Route className="h-4 w-4 text-blue-600" />
                              <span>{selectedDestination.distance} km</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-green-600" />
                              <span>{selectedDestination.travelTime}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Nearest Destinations */}
            {nearestDestinations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Navigation className="h-5 w-5 text-purple-600" />
                    <span>Nearest Attractions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {nearestDestinations.map((dest, index) => (
                      <div
                        key={dest.id}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        onClick={() => {
                          setSearchQuery(dest.name);
                          setSelectedDestination(dest);
                        }}
                      >
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-sm text-purple-600">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-sm text-gray-900">{dest.name}</h5>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <span>{dest.distance} km</span>
                            <span>•</span>
                            <span>{dest.travelTime}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {dest.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Map Display */}
          <div className="lg:col-span-2">
            <Card className="h-96 lg:h-[500px]">
              <CardContent className="p-0 h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                  {/* Mock Map Interface */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      {/* <MapPin className="h-16 w-16 text-blue-600 mx-auto" /> */}
                      <div>
                        {/* <h3 className="text-xl text-gray-900 mb-2">Interactive Map</h3> */}
                        <p className="text-gray-600 max-w-md">
                          {userLocation 
                            ? `Showing your location and nearby destinations in Jharkhand`
                            : `Enable location access to see an interactive map with your current position`
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                   <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <img
                      src={mapImage}
                      alt="Map"
                      className="w-[200px] h-[100px] object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <Button size="sm" variant="outline" className="bg-white">
                      <Target className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white">
                      +
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white">
                      -
                    </Button>
                  </div>

                  {/* Location Indicators */}
                  {userLocation && (
                    <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-700">Your Location</span>
                      </div>
                    </div>
                  )}

                  {selectedDestination && (
                    <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg max-w-xs">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        <span className="text-sm text-gray-900">{selectedDestination.name}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Car className="h-3 w-3" />
                          <span>{selectedDestination.distance} km</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{selectedDestination.travelTime}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setSearchQuery("Hundru Falls")}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Find Waterfalls
          </Button>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => setSearchQuery("Temple")}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Find Temples
          </Button>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => setSearchQuery("Hill")}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Find Hill Stations
          </Button>
        </div>
      </div>
    </section>
  );
}