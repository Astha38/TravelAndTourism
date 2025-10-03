import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MapPin, Star, Clock, Users, Languages, Award, MessageCircle } from "lucide-react";

export function GuidesSection() {
  const guideCategories = [
    {
      id: 1,
      type: "Adventure Guides",
      description: "Expert guides for trekking, hiking, and outdoor activities",
      icon: "🏔️",
      specialties: ["Mountain Trekking", "Rock Climbing", "Cave Exploration", "Wildlife Safari"],
      averagePrice: "₹1,500-2,500/day"
    },
    {
      id: 2,
      type: "Cultural Guides",
      description: "Local experts in history, culture, and heritage sites",
      icon: "🏛️",
      specialties: ["Heritage Tours", "Temple Visits", "Local Culture", "Traditional Arts"],
      averagePrice: "₹1,000-2,000/day"
    },
    {
      id: 3,
      type: "Photography Guides",
      description: "Guides specialized in photography tours and scenic locations",
      icon: "📸",
      specialties: ["Landscape Photography", "Wildlife Photography", "Cultural Photography", "Night Photography"],
      averagePrice: "₹2,000-3,500/day"
    },
    {
      id: 4,
      type: "Spiritual Guides",
      description: "Knowledgeable guides for religious and spiritual journeys",
      icon: "🙏",
      specialties: ["Temple Tours", "Pilgrimage Routes", "Meditation Sessions", "Spiritual Practices"],
      averagePrice: "₹800-1,800/day"
    }
  ];

  const featuredGuides = [
    {
      id: 1,
      name: "Rahul Kumar",
      avatar: "https://images.unsplash.com/photo-1684318243739-dec54939f4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyJTIwZ3VpZGUlMjBtb3VudGFpbiUyMGhpa2luZ3xlbnwxfHx8fDE3NTc1NzcwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specialization: "Adventure Guide",
      location: "Netarhat, Ranchi",
      rating: 4.9,
      reviews: 156,
      experience: "8 years",
      languages: ["Hindi", "English", "Santhali"],
      price: "₹2,200/day",
      bio: "Expert in mountain trekking and adventure sports with extensive knowledge of Jharkhand's wilderness areas.",
      certifications: ["Certified Mountain Guide", "First Aid Certified", "Wildlife Expert"],
      tours: 89,
      specialAreas: ["Netarhat Hills", "Parasnath", "Betla National Park"]
    },
    {
      id: 2,
      name: "Priya Devi",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGluZGlhbiUyMHdvbWFuJTIwZ3VpZGV8ZW58MXx8fHwxNzU3NTc3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      specialization: "Cultural Guide",
      location: "Deoghar, Ranchi",
      rating: 4.8,
      reviews: 203,
      experience: "12 years",
      languages: ["Hindi", "English", "Bengali"],
      price: "₹1,800/day",
      bio: "Passionate about preserving and sharing Jharkhand's rich cultural heritage and traditions.",
      certifications: ["Heritage Tourism Certified", "Cultural Ambassador", "Art History Expert"],
      tours: 134,
      specialAreas: ["Deoghar Temples", "Tribal Villages", "Cultural Centers"]
    },
    {
      id: 3,
      name: "Amit Singh",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGluZGlhbiUyMG1hbiUyMGd1aWRlfGVufDF8fHx8MTc1NzU3NzAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      specialization: "Photography Guide",
      location: "Ranchi, Dhanbad",
      rating: 4.7,
      reviews: 98,
      experience: "6 years",
      languages: ["Hindi", "English"],
      price: "₹2,800/day",
      bio: "Professional photographer turned guide, specializing in capturing Jharkhand's natural beauty.",
      certifications: ["Professional Photographer", "Nature Guide", "Equipment Expert"],
      tours: 67,
      specialAreas: ["Hundru Falls", "Sunrise Points", "Wildlife Photography"]
    },
    {
      id: 4,
      name: "Sita Kumari",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGluZGlhbiUyMHdvbWFuJTIwc21pbGV8ZW58MXx8fHwxNzU3NTc3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      specialization: "Spiritual Guide",
      location: "Deoghar, Giridih",
      rating: 4.9,
      reviews: 187,
      experience: "15 years",
      languages: ["Hindi", "Sanskrit", "English"],
      price: "₹1,500/day",
      bio: "Deeply knowledgeable about spiritual practices and religious significance of sacred places.",
      certifications: ["Spiritual Counselor", "Temple Specialist", "Meditation Instructor"],
      tours: 156,
      specialAreas: ["Baidyanath Temple", "Parasnath Hills", "Sacred Groves"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Expert Tour Guides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with experienced local guides who will make your Jharkhand journey unforgettable
          </p>
        </div>

        {/* Guide Categories */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center">Guide Specializations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guideCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle>
                    <h3 className="text-lg">{category.type}</h3>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Specialties:</div>
                    <div className="space-y-1">
                      {category.specialties.slice(0, 3).map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-blue-600 mb-4">{category.averagePrice}</div>
                  <Button variant="outline" className="w-full">
                    Find {category.type.split(' ')[0]} Guides
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Guides */}
        <div>
          <h3 className="text-2xl mb-8 text-center">Featured Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredGuides.map((guide) => (
              <Card key={guide.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={guide.avatar} alt={guide.name} />
                      <AvatarFallback>{guide.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3>{guide.name}</h3>
                          <p className="text-sm text-blue-600">{guide.specialization}</p>
                          <div className="flex items-center space-x-1 text-gray-600 mt-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{guide.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg">{guide.price}</div>
                          <div className="text-sm text-gray-600">per day</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{guide.rating}</span>
                      <span className="text-gray-600">({guide.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Award className="h-4 w-4" />
                      <span>{guide.experience} exp</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{guide.tours} tours</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{guide.bio}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Languages:</div>
                    <div className="flex flex-wrap gap-1">
                      {guide.languages.map((language, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Languages className="h-3 w-3 mr-1" />
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Certifications:</div>
                    <div className="flex flex-wrap gap-1">
                      {guide.certifications.slice(0, 2).map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                      {guide.certifications.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{guide.certifications.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Special Areas:</div>
                    <div className="text-sm text-gray-700">
                      {guide.specialAreas.join(', ')}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      Book Guide
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-green-50 rounded-lg p-6 max-w-2xl mx-auto">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-lg mb-2">Want to Become a Guide?</h4>
            <p className="text-gray-600 mb-4">
              Join our community of expert guides and share your knowledge of Jharkhand with travelers from around the world.
            </p>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Apply as Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}