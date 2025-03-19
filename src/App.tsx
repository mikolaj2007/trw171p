import React, { useState } from 'react';
import { Building2, MapPin, Phone, Mail, Clock, Search, Home, Building, TrendingUp, ChevronRight, Star, Users, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-secondary">TRUST</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-secondary hover:text-primary transition-colors">Strona główna</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Oferty</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">O nas</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Kontakt</a>
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                Zamów konsultację
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-pattern min-h-screen pt-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">Znajdź swój wymarzony dom</h1>
            <p className="text-2xl text-gray-200 mb-12">Profesjonalne pośrednictwo w obrocie nieruchomościami od 1995 roku</p>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Lokalizacja..."
                  className="flex-1 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select className="p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Typ nieruchomości</option>
                  <option>Mieszkanie</option>
                  <option>Dom</option>
                  <option>Działka</option>
                </select>
                <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Szukaj
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1500+</div>
              <div className="text-secondary">Sprzedanych nieruchomości</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-secondary">Zadowolonych klientów</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">28</div>
              <div className="text-secondary">Lat doświadczenia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-secondary">Wsparcie dla klientów</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Wyróżnione nieruchomości</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Odkryj najlepsze oferty nieruchomości w Twojej okolicy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden property-card transition-all duration-300">
                <img
                  src={`https://images.unsplash.com/photo-156${item}0517-f4e0ac4e6269?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt="Property"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary font-semibold">1,250,000 PLN</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Na sprzedaż</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Luksusowy apartament</h3>
                  <p className="text-gray-600 mb-4">ul. Przykładowa {item}23, Warszawa</p>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>120m²</span>
                    <span>3 pokoje</span>
                    <span>2 łazienki</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
              Zobacz wszystkie oferty
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nasze usługi</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Kompleksowa obsługa w zakresie obrotu nieruchomościami</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg">
              <Home className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Sprzedaż mieszkań</h3>
              <p className="text-gray-400 mb-6">Profesjonalna pomoc w sprzedaży Twojego mieszkania za najlepszą cenę</p>
              <a href="#" className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                Dowiedz się więcej
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg">
              <Building className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Zakup nieruchomości</h3>
              <p className="text-gray-400 mb-6">Znajdziemy dla Ciebie idealną nieruchomość dopasowaną do Twoich potrzeb</p>
              <a href="#" className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                Dowiedz się więcej
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg">
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Doradztwo</h3>
              <p className="text-gray-400 mb-6">Kompleksowe doradztwo w zakresie inwestycji w nieruchomości</p>
              <a href="#" className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                Dowiedz się więcej
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Co mówią o nas klienci</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Opinie naszych zadowolonych klientów</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Profesjonalna obsługa i świetne podejście do klienta. Polecam wszystkim, którzy szukają nieruchomości."
                </p>
                <div className="flex items-center">
                  <img
                    src={`https://i.pravatar.cc/150?img=${item}`}
                    alt="Client"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-secondary">Jan Kowalski</div>
                    <div className="text-gray-500 text-sm">Zadowolony klient</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Skontaktuj się z nami</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <span className="text-gray-600">ul. Przykładowa 123, 00-000 Warszawa</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <span className="text-gray-600">+48 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <span className="text-gray-600">kontakt@trust-nieruchomosci.pl</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-4" />
                  <span className="text-gray-600">Pon-Pt: 9:00 - 17:00</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Imię i nazwisko"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Wiadomość"
                    rows={4}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all">
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="ml-2 text-2xl font-bold">TRUST</span>
              </div>
              <p className="text-gray-400">
                Profesjonalne pośrednictwo w obrocie nieruchomościami od 1995 roku
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Szybkie linki</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Strona główna</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Oferty</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">O nas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Usługi</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Sprzedaż mieszkań</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Zakup nieruchomości</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Doradztwo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Wycena</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Zapisz się, aby otrzymywać najnowsze oferty</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Twój email"
                  className="flex-1 p-2 bg-white/5 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary px-4 rounded-r-lg hover:bg-opacity-90 transition-all">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TRUST Nieruchomości. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;