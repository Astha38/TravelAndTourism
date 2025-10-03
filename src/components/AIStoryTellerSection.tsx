import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Camera, 
  Upload, 
  Sparkles, 
  MapPin, 
  Clock, 
  Star,
  Loader2,
  Image as ImageIcon
} from "lucide-react";

interface PlaceStory {
  placeName: string;
  location: string;
  description: string;
  historicalStory: string;
  keyFacts: string[];
  bestTimeToVisit: string;
  rating: number;
}

export function AIStoryTellerSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [storyResult, setStoryResult] = useState<PlaceStory | null>(null);

  // Mock AI responses for different types of places in Jharkhand
  const mockStories: PlaceStory[] = [
    {
      placeName: "Hundru Falls",
      location: "Ranchi, Jharkhand",
      description: "A magnificent waterfall cascading from a height of 320 feet, Hundru Falls is one of Jharkhand's most spectacular natural attractions. The Subarnarekha River creates this breathtaking spectacle as it plunges down the rocky terrain.",
      historicalStory: "Legend has it that Hundru Falls was once the meditation spot of ancient sages who believed the sound of falling water helped them achieve spiritual enlightenment. The local tribal communities have worshipped this natural wonder for centuries, considering it sacred. During the British era, it became a popular retreat for officers seeking respite from the heat.",
      keyFacts: [
        "Height: 320 feet (98 meters)",
        "Formed by Subarnarekha River",
        "Best viewpoint has hanging bridge",
        "Sacred to local tribal communities"
      ],
      bestTimeToVisit: "October to March",
      rating: 4.5
    },
    {
      placeName: "Netarhat Hill Station",
      location: "Latehar, Jharkhand",
      description: "Known as the 'Queen of Chotanagpur', Netarhat is a serene hill station famous for its sunrise and sunset views. At an elevation of 3,700 feet, it offers a cool climate and panoramic views of the surrounding valleys.",
      historicalStory: "Netarhat derives its name from 'Netri' meaning eyes, as the hilltop provides eyes to the vast landscape below. During the freedom struggle, it served as a hideout for revolutionaries. The British established a residential school here in 1954, which continues to educate children from across India.",
      keyFacts: [
        "Elevation: 3,700 feet above sea level",
        "Famous for sunrise and sunset points",
        "Home to Netarhat Residential School",
        "Dense forests with diverse wildlife"
      ],
      bestTimeToVisit: "October to April",
      rating: 4.7
    },
    {
      placeName: "Baidyanath Temple, Deoghar",
      location: "Deoghar, Jharkhand",
      description: "One of the twelve Jyotirlingas, Baidyanath Temple is a sacred Hindu pilgrimage site dedicated to Lord Shiva. The temple complex attracts millions of devotees annually, especially during the holy month of Shravan.",
      historicalStory: "According to Hindu mythology, this is where Ravana, the demon king of Lanka, meditated to please Lord Shiva. It's believed that Shiva appeared here as Vaidya (doctor) to cure the ailments of gods and demons. The temple was built in the 7th century and has been renovated multiple times by various rulers including the Maharajas of Gidhaur.",
      keyFacts: [
        "One of 12 sacred Jyotirlingas",
        "Built in 7th century",
        "Annual Shravan mela attracts millions",
        "Complex has 22 temples"
      ],
      bestTimeToVisit: "October to March",
      rating: 4.8
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Randomly select a mock story for demonstration
    const randomStory = mockStories[Math.floor(Math.random() * mockStories.length)];
    setStoryResult(randomStory);
    setIsAnalyzing(false);
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setStoryResult(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl text-gray-900">AI Story Teller</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capture the essence of Jharkhand's heritage! Upload a photo of any place in Jharkhand and discover its fascinating history, cultural significance, and hidden stories through our AI-powered storytelling platform.
          </p>
        </div>

        {!storyResult ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="border-2 border-dashed border-gray-300 hover:border-purple-400 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-6 w-6 text-purple-600" />
                  <span>Upload Your Photo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img
                      src={selectedImage}
                      alt="Uploaded"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <Button
                      onClick={analyzeImage}
                      disabled={isAnalyzing}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      size="lg"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          AI is analyzing your image...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Generate Story & Information
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={resetAnalysis}
                      variant="outline"
                      className="w-full"
                    >
                      Upload Different Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="mx-auto w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center">
                      <ImageIcon className="h-16 w-16 text-purple-400" />
                    </div>
                    <div>
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 hover:border-purple-400 transition-colors">
                          <Upload className="mx-auto h-12 w-12 text-purple-400 mb-4" />
                          <p className="text-lg text-gray-600 mb-2">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-sm text-gray-500">
                            PNG, JPG, JPEG up to 10MB
                          </p>
                        </div>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Features Section */}
            <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-6 w-6" />
                  <span>What Our AI Tells You</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 text-purple-200" />
                  <div>
                    <h4 className="font-medium mb-1">Place Identification</h4>
                    <p className="text-purple-100 text-sm">
                      Accurate identification of landmarks, temples, waterfalls, and tourist spots
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 mt-1 text-purple-200" />
                  <div>
                    <h4 className="font-medium mb-1">Historical Stories</h4>
                    <p className="text-purple-100 text-sm">
                      Rich historical narratives, legends, and cultural significance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 mt-1 text-purple-200" />
                  <div>
                    <h4 className="font-medium mb-1">Travel Information</h4>
                    <p className="text-purple-100 text-sm">
                      Best visiting times, key facts, and tourist tips
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-5 w-5 mt-1 text-purple-200" />
                  <div>
                    <h4 className="font-medium mb-1">Cultural Context</h4>
                    <p className="text-purple-100 text-sm">
                      Local traditions, tribal heritage, and cultural practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Results Section */
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl text-gray-900">AI Analysis Complete!</h2>
              <Button onClick={resetAnalysis} variant="outline">
                Analyze Another Image
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Uploaded Image */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-4">
                    <img
                      src={selectedImage!}
                      alt="Analyzed"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Story Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl text-purple-800">
                        {storyResult.placeName}
                      </CardTitle>
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-lg">{storyResult.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{storyResult.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg mb-2 text-gray-900">Description</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {storyResult.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg mb-2 text-gray-900">Historical Story</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {storyResult.historicalStory}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg mb-3 text-gray-900">Key Facts</h3>
                        <ul className="space-y-2">
                          {storyResult.keyFacts.map((fact, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg mb-3 text-gray-900">Travel Info</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-purple-600" />
                            <span className="text-gray-700">Best Time: {storyResult.bestTimeToVisit}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Sample Images Section */}
        {!selectedImage && !storyResult && (
          <div className="mt-16">
            <h3 className="text-2xl text-center mb-8 text-gray-900">
              Try with these sample images from Jharkhand
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  url: "https://images.unsplash.com/photo-1674805023990-892e2a3fc385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwd2F0ZXJmYWxsc3xlbnwxfHx8fDE3NTc1NzcwMDN8MA&ixlib=rb-4.1.0&q=80&w=400",
                  name: "Hundru Falls"
                },
                {
                  url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpbGwlMjBzdGF0aW9ufGVufDF8fHx8MTc1NzU3NzAwNHww&ixlib=rb-4.1.0&q=80&w=400",
                  name: "Hill Station"
                },
                {
                  url: "https://www.shutterstock.com/image-photo/famous-lord-shiva-temple-deoghar-600nw-1328209346.jpg",
                  name: "Temple"
                }
              ].map((sample, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <img
                      src={sample.url}
                      alt={sample.name}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-center text-gray-700">{sample.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}