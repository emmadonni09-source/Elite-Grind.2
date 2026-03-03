/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Menu, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Facebook,
  ShieldCheck,
  Truck,
  RotateCcw,
  Clock,
  ShoppingBag,
  Plus,
  Trash2,
  Settings,
  MessageCircle,
  X
} from 'lucide-react';
import { Product, PRODUCTS } from './items';

// --- Components ---

const Navbar = ({ onToggleFilters, searchQuery, setSearchQuery }: { onToggleFilters: () => void; searchQuery: string; setSearchQuery: (q: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-bg py-6'} border-b border-border/50`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`flex gap-6 items-center flex-1 ${isSearchOpen ? 'hidden sm:flex' : 'flex'}`}>
          <button onClick={onToggleFilters} className="flex items-center gap-2 group">
            <Menu className="w-5 h-5 cursor-pointer group-hover:text-muted transition-colors" />
            <span className="mono text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Explore</span>
          </button>
        </div>

        <div className={`flex flex-col items-center flex-1 ${isSearchOpen ? 'hidden md:flex' : 'flex'}`}>
          <h1 className="text-2xl font-black tracking-tighter italic uppercase leading-none">
            Elite<span className="text-muted">Grind Sports</span> 
          </h1>
        </div>

        <div className="flex gap-6 items-center justify-end flex-1">
          <div className={`flex items-center gap-2 transition-all duration-300 ${isSearchOpen ? 'w-full max-w-[300px]' : 'w-5'}`}>
            {isSearchOpen && (
              <input 
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH..."
                className="w-full bg-transparent border-b border-border mono text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-fg pb-1"
                onBlur={() => !searchQuery && setIsSearchOpen(false)}
              />
            )}
            <Search 
              className="w-5 h-5 cursor-pointer hover:text-muted transition-colors flex-shrink-0" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative flex flex-col h-full border border-transparent hover:border-border transition-all duration-300 p-2 cursor-pointer"
    >
      <div className="aspect-square overflow-hidden bg-zinc-900 relative rounded-sm">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-[12px] font-bold tracking-tight leading-snug group-hover:underline decoration-1 underline-offset-4 uppercase italic">{product.name}</h3>
        <div className="mt-auto pt-3 flex justify-between items-end">
          <p className="mono text-muted text-[8px] uppercase tracking-widest">{product.category}</p>
          <p className="font-mono font-extrabold text-xs tracking-tighter">${product.price}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const [activeImage, setActiveImage] = useState(product.image);
  const images = product.images || [product.image];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative bg-bg border border-border/50 w-full md:w-[85vw] lg:w-[70vw] max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl rounded-[2.5rem] flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 z-30 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full transition-all border border-white/10 group"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="w-full md:w-1/2 bg-zinc-900 relative flex flex-col aspect-square md:aspect-auto">
          <div className="flex-grow overflow-hidden h-full">
            <img 
              src={activeImage} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {images.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-6 overflow-x-auto custom-scrollbar pb-2">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-16 h-16 border-2 rounded-xl overflow-hidden transition-all shadow-lg ${activeImage === img ? 'border-fg scale-110' : 'border-white/10 opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto custom-scrollbar">
          <div>
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <p className="mono text-[9px] text-muted uppercase tracking-[0.4em]">{product.brand}</p>
                <p className="text-lg font-mono font-black tracking-tighter">${product.price}</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-tight">{product.name}</h2>
            </div>

            <div className="space-y-6">
              {product.availableSizes && (
                <div>
                  <h4 className="mono text-[9px] font-bold uppercase tracking-widest mb-3 text-muted">Sizes</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.availableSizes.map(size => (
                      <div key={size} className="px-2.5 py-1 border border-border text-[9px] font-bold mono rounded-md">
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 space-y-2.5">
            <a 
              href={`https://wa.me/231881467439?text=Hi, I'm interested in the ${product.name} (${product.brand})`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#25D366] text-white hover:opacity-90 transition-opacity text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Order
            </a>
            <a 
              href="https://www.instagram.com/elitegrind_sports?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3.5 border border-fg text-fg hover:bg-fg hover:text-bg transition-all text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sizeType, setSizeType] = useState<'US' | 'EU'>('US');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = 
      filter === 'all' || 
      (filter === 'Sneakers' && p.category === 'shoes') || 
      (filter === 'Clothes' && p.category === 'clothing');
    
    // If filter is a brand (from the expandable menu)
    const isBrandFilter = !['all', 'Sneakers', 'Clothes'].includes(filter);
    const matchesBrand = !isBrandFilter || p.brand.toUpperCase() === filter.toUpperCase();

    const matchesSize = !selectedSize || p.availableSizes?.includes(selectedSize);

    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesBrand && matchesSize && matchesSearch;
  });

  const usSizes = ['4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '14', '15'];
  const euSizes = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'];

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onToggleFilters={() => setShowFilters(!showFilters)} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Expandable Filters */}
      <motion.div 
        initial={false}
        animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
        className="overflow-hidden bg-zinc-900/50 border-b border-border fixed top-[72px] left-0 right-0 z-40 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="mono text-[10px] font-bold text-fg mb-6 uppercase tracking-widest border-b border-border pb-2">Brands</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {['NIKE', 'JORDAN', 'ADIDAS', 'YEEZY', 'NEW BALANCE', 'KOBE', 'EYBL', 'SUPREME', 'OFF-WHITE', 'TRAVIS SCOTT', 'BAPE', 'STUSSY'].map(brand => (
                <button 
                  key={brand} 
                  onClick={() => {
                    setFilter(brand);
                    setShowFilters(false);
                  }}
                  className={`text-left text-[11px] font-bold transition-colors py-1 uppercase tracking-tight ${filter === brand ? 'text-fg' : 'text-muted hover:text-fg'}`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6 border-b border-border pb-2">
              <div className="flex gap-4 items-center">
                <h3 className="mono text-[10px] font-bold text-fg uppercase tracking-widest">
                  Sizes {filter === 'Clothes' ? '' : `(${sizeType})`}
                </h3>
                {filter !== 'Clothes' && (
                  <div className="flex gap-2">
                    {(['US', 'EU'] as const).map(type => (
                      <button 
                        key={type}
                        onClick={() => setSizeType(type)}
                        className={`mono text-[9px] font-bold uppercase tracking-widest ${sizeType === type ? 'text-fg' : 'text-muted hover:text-fg'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {selectedSize && (
                <button 
                  onClick={() => setSelectedSize(null)}
                  className="mono text-[10px] font-bold text-muted hover:text-fg uppercase tracking-widest"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
              {(filter === 'Clothes' ? ['S', 'M', 'L', 'XL', 'XXL'] : (sizeType === 'US' ? usSizes : euSizes)).map(size => (
                <button 
                  key={size} 
                  onClick={() => {
                    setSelectedSize(size === selectedSize ? null : size);
                    setShowFilters(false);
                  }}
                  className={`aspect-square border flex items-center justify-center text-[10px] font-bold transition-all ${selectedSize === size ? 'bg-fg text-bg border-fg' : 'border-border hover:bg-fg hover:text-bg'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Banner Section */}
      <section className="relative h-[25vh] flex items-center overflow-hidden bg-bg border-b border-border mt-[72px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/sneaker-store-2/1920/1080?grayscale&blur=1" 
            className="w-full h-full object-cover opacity-20"
            alt="Banner Background"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl mb-2 leading-tight tracking-tighter font-black uppercase italic">
              Elite<span className="text-muted">Grind</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Product Display */}
        <main className="w-full">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">Inventory</h2>
            <div className="flex gap-4 border-b border-border pb-2">
              {['all', 'Sneakers', 'Clothes'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`mono text-[10px] uppercase font-bold tracking-widest transition-colors ${filter === cat ? 'text-fg' : 'text-muted hover:text-fg'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map(product => (
              <div key={product.id}>
                <ProductCard product={product} onClick={() => setSelectedProduct(product)} />
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      {/* Location Section */}
      <section className="bg-zinc-900 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl mb-8 uppercase italic font-black tracking-tighter">Our <span className="text-muted">Location</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="p-10 border border-border bg-black/40 flex flex-col justify-center">
              <h5 className="mono text-muted mb-4 uppercase tracking-[0.3em] text-[10px] font-bold">Elite Grind</h5>
              <p className="text-2xl font-black mb-2 italic uppercase tracking-tighter">Gurley Street, Monrovia </p>
              <p className="text-xs text-muted mb-8 mono uppercase tracking-widest"></p>
              <button className="w-full py-4 border border-fg text-fg hover:bg-fg hover:text-bg transition-all text-[10px] font-black uppercase tracking-[0.2em]">
                Contact for Details
              </button>
            </div>
            <div className="p-10 border border-border bg-black/40 flex flex-col justify-center items-center">
              <h5 className="mono text-muted mb-6 uppercase tracking-[0.3em] text-[10px] font-bold">Contact & Orders</h5>
              <div className="space-y-6 w-full">
                <a href="https://www.instagram.com/elitegrind_sports?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 group">
                  <Instagram className="w-5 h-5 group-hover:text-muted transition-colors" />
                  <span className="mono text-[11px] font-bold uppercase tracking-widest group-hover:text-muted transition-colors">@elitegrind_sports</span>
                </a>
                <div className="flex items-center justify-center gap-3">
                  <span className="mono text-[11px] font-bold uppercase tracking-widest">+231 88 146 7439</span>
                </div>
                <a 
                  href="https://wa.me/231881467439" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white hover:opacity-90 transition-opacity text-[10px] font-black uppercase tracking-[0.2em]"
                >
                  <MessageCircle className="w-4 h-4" /> Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg pt-24 pb-12 border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-6">
            <p className="mono text-[10px] text-muted">© 2026 ELITE GRIND. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mono text-[10px] text-muted">
              <a href="#" className="hover:text-fg transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-fg transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
