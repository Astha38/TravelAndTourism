import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Plus, 
  Minus, 
  Package,
  MapPin,
  Users,
  Award,
  Filter,
  Search,
  X
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  artisan: string;
  location: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  cultural_significance: string;
  materials: string[];
  isHandmade: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

export function LocalArtisanShop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Products", count: 24 },
    { id: "tribal-art", name: "Tribal Art", count: 8 },
    { id: "jewelry", name: "Traditional Jewelry", count: 6 },
    { id: "textiles", name: "Handloom Textiles", count: 5 },
    { id: "pottery", name: "Pottery & Ceramics", count: 3 },
    { id: "metalwork", name: "Metal Crafts", count: 2 }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Sohrai Tribal Wall Art",
      price: 1299,
      originalPrice: 1599,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdm1-YsvYaFFWCBOprmOYRo0BI3wRlqeuhA&s",
      description: "Authentic Sohrai art painted on canvas by tribal women of Jharkhand. This traditional art form depicts harvest festivals and nature.",
      artisan: "Savita Devi",
      location: "Hazaribagh, Jharkhand",
      category: "tribal-art",
      rating: 4.8,
      reviews: 23,
      inStock: true,
      cultural_significance: "Sohrai is a harvest festival art form practiced by tribal communities during autumn. The intricate patterns represent prosperity and celebration.",
      materials: ["Natural clay", "Organic pigments", "Canvas"],
      isHandmade: true
    },
    {
      id: 2,
      name: "Dokra Metal Figurine",
      price: 899,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVin2kRW3GDwXJ3Zsk1X0uOD5c9wFKMwgjs0zGyipbKE1YR8uXiPOGl5LroJ4nWsxY8M&usqp=CAU",
      description: "Traditional Dokra craft elephant figurine made using the lost-wax casting technique, passed down through generations.",
      artisan: "Ramesh Kumar",
      location: "Ranchi, Jharkhand",
      category: "metalwork",
      rating: 4.6,
      reviews: 15,
      inStock: true,
      cultural_significance: "Dokra is an ancient metal casting art form dating back 4000 years, representing the rich cultural heritage of tribal artisans.",
      materials: ["Brass", "Bronze", "Natural wax"],
      isHandmade: true
    },
    {
      id: 3,
      name: "Tussar Silk Handloom Saree",
      price: 3499,
      originalPrice: 4299,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4w2nn-saf2YY0m5wFGGbUvU_bbm9dlZY-A&s",
      description: "Exquisite Tussar silk saree woven by skilled artisans, featuring traditional Jharkhand motifs and natural golden texture.",
      artisan: "Kamala Devi Weaving Group",
      location: "Dhanbad, Jharkhand",
      category: "textiles",
      rating: 4.9,
      reviews: 31,
      inStock: true,
      cultural_significance: "Tussar silk weaving represents the textile heritage of Jharkhand, with patterns inspired by tribal folklore and nature.",
      materials: ["Pure Tussar silk", "Natural dyes", "Gold thread"],
      isHandmade: true
    },
    {
      id: 4,
      name: "Traditional Silver Hasli Necklace",
      price: 2799,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUU9qmaboBqlrF7rRYpfuVWvcdcXMNjAMCG0S2Oc9HhFBNLo9U-X1ZaddZW7ZAzbPHJg&usqp=CAU",
      description: "Authentic tribal silver necklace crafted in traditional Hasli style, worn by women in Jharkhand for centuries.",
      artisan: "Suresh Singh",
      location: "Jamshedpur, Jharkhand",
      category: "jewelry",
      rating: 4.7,
      reviews: 18,
      inStock: true,
      cultural_significance: "Hasli necklaces are traditional tribal jewelry symbolizing marital status and prosperity in tribal communities.",
      materials: ["Pure silver", "Traditional alloy", "Ethnic beads"],
      isHandmade: true
    },
    {
      id: 5,
      name: "Bamboo Craft Home Decor Set",
      price: 699,
      image: "https://3.imimg.com/data3/MN/HB/MY-11487458/bamboo-handicrafts-home-decorative-items.jpg",
      description: "Eco-friendly bamboo craft items including baskets and decorative pieces, showcasing sustainable craftsmanship.",
      artisan: "Tribal Bamboo Collective",
      location: "Gumla, Jharkhand",
      category: "tribal-art",
      rating: 4.4,
      reviews: 12,
      inStock: true,
      cultural_significance: "Bamboo crafting is an integral part of tribal lifestyle, representing sustainable living and harmony with nature.",
      materials: ["Natural bamboo", "Organic finishes", "Cotton threads"],
      isHandmade: true
    },
    {
      id: 6,
      name: "Tribal Clay Pottery Set",
      price: 1199,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HUHVnNtqeG3L1yRMi89I3eGVXUvhZ1kmXvMiBdG42rv9sQAjPchvN98LL7MoKLLHY0U&usqp=CAU",
      description: "Handcrafted clay pottery with traditional tribal designs, perfect for home decoration and functional use.",
      artisan: "Mala Kumari",
      location: "Bokaro, Jharkhand",
      category: "pottery",
      rating: 4.5,
      reviews: 9,
      inStock: true,
      cultural_significance: "Traditional pottery making using techniques passed down through generations, featuring symbols of tribal culture.",
      materials: ["Natural clay", "Organic glazes", "Traditional pigments"],
      isHandmade: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCartValue = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Package className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl md:text-5xl text-gray-900">Local Artisan Marketplace</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Support local artisans and take home authentic pieces of Jharkhand's rich cultural heritage. Every purchase directly benefits tribal communities and preserves traditional crafts.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl text-orange-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-orange-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Districts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-orange-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Authentic</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-orange-600 mb-1">2K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Search and Cart */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, artisans, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <Button
            onClick={() => setIsCartOpen(true)}
            className="bg-orange-600 hover:bg-orange-700"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Cart ({getTotalCartItems()})
          </Button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Card key={product.id} className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <Button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white"
                  size="sm"
                  variant="ghost"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      favorites.includes(product.id)
                        ? "text-red-500 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                </Button>
                {product.isHandmade && (
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    Handmade
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge className="absolute bottom-4 left-4 bg-red-600">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl text-gray-900 mb-1">{product.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>by {product.artisan}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{product.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>

                  <p className="text-gray-700 text-sm line-clamp-2">
                    {product.description}
                  </p>

                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="text-sm text-orange-800 mb-1">Cultural Significance</h4>
                    <p className="text-xs text-orange-700">
                      {product.cultural_significance}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-x-2">
                      <span className="text-2xl text-gray-900">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                    <Badge variant={product.inStock ? "default" : "destructive"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>

                  <Button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="w-full bg-orange-600 hover:bg-orange-700"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl">Shopping Cart</h2>
                <Button
                  onClick={() => setIsCartOpen(false)}
                  variant="ghost"
                  size="sm"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="border rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm">{item.name}</h4>
                            <p className="text-xs text-gray-600">by {item.artisan}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-sm">₹{item.price}</span>
                              <div className="flex items-center space-x-2">
                                <Button
                                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                  size="sm"
                                  variant="outline"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm w-8 text-center">{item.quantity}</span>
                                <Button
                                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                  size="sm"
                                  variant="outline"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg">Total: ₹{getTotalCartValue()}</span>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                    Proceed to Checkout
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Free shipping on orders above ₹2000
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Support Message */}
        <div className="mt-16 text-center bg-orange-100 rounded-lg p-8">
          <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl text-gray-900 mb-2">Supporting Local Communities</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Every purchase you make directly supports tribal artisans and their families, helping preserve centuries-old crafting traditions while providing sustainable livelihoods to rural communities in Jharkhand.
          </p>
        </div>
      </div>
    </div>
  );
}