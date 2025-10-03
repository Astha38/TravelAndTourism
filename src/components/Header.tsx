import { Button } from "./ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from './logo.png'; 

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "Home", isUSP: false },
    { id: "destinations", label: "Destinations", isUSP: false },
    { id: "hotels", label: "Hotels", isUSP: false },
    { id: "transport", label: "Transport", isUSP: false },
    { id: "food", label: "Food", isUSP: false },
    { id: "guides", label: "Guides", isUSP: false },
    { id: "ai-story", label: "AI Story", isUSP: true },
    { id: "artisan-shop", label: "Artisan Shop", isUSP: true },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <div className="para">
            <b><h3 className="text-xl text-blue-600"> JHK-YATRA</h3></b>
            <p className="text-xs text-blue-600">Jharkhand Smart Tourism</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-3 py-2 rounded-md transition-colors text-base ${
                  activeSection === item.id
                    ? item.isUSP
                      ? "text-white bg-gradient-to-r from-purple-600 to-pink-600"
                      : "text-blue-600 bg-blue-50"
                    : item.isUSP
                    ? "text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => onSectionChange("login")}
              className="text-blue-600 border-blue-600 hover:bg-blue-50"
            >
              Login
            </Button>
            <Button
              onClick={() => onSectionChange("signup")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md w-full text-left transition-colors ${
                    activeSection === item.id
                      ? item.isUSP
                        ? "text-white bg-gradient-to-r from-purple-600 to-pink-600"
                        : "text-blue-600 bg-blue-50"
                      : item.isUSP
                      ? "text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      onSectionChange("login");
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      onSectionChange("signup");
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}