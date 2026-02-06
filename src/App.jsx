import React, { useState, useEffect } from 'react';
import { Instagram, Mail, Calendar, ArrowRight, Star, Moon, Leaf, MapPin, ChevronDown } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tactileStyles = {
    paperTexture: "bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] opacity-[0.05] pointer-events-none fixed inset-0 z-[100] mix-blend-multiply",
    debossedText: "drop-shadow-[1px_1px_0px_rgba(255,255,255,0.02)] [text-shadow:1px_1px_1px_rgba(0,0,0,0.4)]",
    embossedMedallion: `
      rounded-full
      shadow-[
        -1px_-1px_2px_rgba(255,255,255,0.04),
        1px_1px_2px_rgba(0,0,0,0.15),
        inset_1px_1px_2px_rgba(255,255,255,0.02),
        inset_-1px_-1px_2px_rgba(0,0,0,0.1)
      ]
    `,
    pressedButton: "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15),inset_-1px_-1px_2px_rgba(255,255,255,0.1)]",
    pressedButtonEmerald: "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]",
  };

  const BrandLogo = ({ className = "", isFooter = false }) => {
    if (isFooter) {
      return (
        <div className={`flex flex-row items-baseline gap-1.5 ${className}`}>
          <span className="font-light tracking-[0.15em] text-lg capitalize">
            MariZav Jewelry
          </span>
        </div>
      );
    }

    return (
      <div className={`flex flex-col items-center ${className}`}>
        <span className="font-light tracking-[0.2em] leading-none text-lg uppercase">
          MariZav
        </span>
        <span className="font-extralight opacity-90 text-[#8C7A5E] uppercase tracking-[0.6em] text-[8px] mt-1">
          jewelry
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F4EFE7] text-[#2E4A3C] font-serif selection:bg-[#D6C4A6]/30 overflow-x-hidden relative">

      {/* Текстура бумаги */}
      <div className={tactileStyles.paperTexture}></div>

      {/* Фиксированная навигация */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 flex items-center border-b ${
          isScrolled
          ? 'bg-[#EFE7D5]/95 backdrop-blur-md border-[#2E4A3C]/10 h-[65px]'
          : 'bg-[#F2EBDC] border-transparent h-[75px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 w-full flex justify-between items-center">
          <div className="flex items-center gap-4 opacity-40">
            <Leaf size={12} strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.15em] uppercase hidden md:block font-sans">Independent jeweler · Netherlands</span>
          </div>

          <a href="#" className="hover:opacity-70 transition-opacity transform duration-500">
            <BrandLogo />
          </a>

          <div className="flex items-center gap-6 md:gap-10">
            <a href="#collection" className="text-[10px] tracking-[0.2em] uppercase hover:text-[#D6C4A6] transition-colors hidden md:block font-sans">Collection</a>
            <a href="#custom" className="text-[10px] tracking-[0.2em] uppercase hover:text-[#D6C4A6] transition-colors hidden md:block font-sans">Custom</a>
            <a href="#contact" className="text-[10px] tracking-[0.2em] uppercase border-b border-[#2E4A3C]/20 pb-0.5 hover:border-[#D6C4A6] transition-all font-sans">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero-секция */}
      <header className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#2E4A3C] text-[#FDFBF7] mt-0">
        <div className="absolute inset-0 bg-[#2E4A3C]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] opacity-[0.08] pointer-events-none mix-blend-soft-light"></div>

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden pt-[70px]">
          <div className={`w-[65vh] h-[65vh] ${tactileStyles.embossedMedallion} opacity-60`}></div>
          <div className={`absolute w-[62vh] h-[62vh] rounded-full shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.02),inset_1px_1px_2px_rgba(0,0,0,0.1)] opacity-40`}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-[70px]">
          <div className="flex justify-center mb-10">
             <div className="w-px h-12 bg-black/10 shadow-[-1px_0_0_rgba(255,255,255,0.03)]"></div>
          </div>

          <h1 className={`text-4xl md:text-7xl font-light mb-6 tracking-tight leading-[1.2] text-[#F0E9D2] ${tactileStyles.debossedText}`}>
            Jewelry made slowly <br />
            <span className="italic font-light text-[#D6C4A6]/80">Worn for a lifetime</span>
          </h1>

          <p className="text-xs md:text-sm font-sans font-light tracking-[0.2em] mb-12 text-[#D6C4A6]/60 max-w-md mx-auto leading-loose uppercase">
            Handcrafted in silver and gold <br />
            Made in the Netherlands
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="#collection" className={`bg-[#D6C4A6] text-[#2E4A3C] px-12 py-4 text-[10px] tracking-[0.4em] uppercase rounded-[30px] ${tactileStyles.pressedButtonEmerald} hover:bg-[#E5D9C3] transition-all transform hover:-translate-y-0.5 active:translate-y-0`}>
                See the collection
              </a>
              <a href="#custom" className={`px-12 py-4 text-[10px] tracking-[0.4em] uppercase rounded-[30px] border border-[#D6C4A6]/30 text-[#D6C4A6] transition-all hover:bg-white/5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]`}>
                Request a custom piece
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* О бренде / Философия */}
      <section id="about" className="py-16 px-10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative p-4 rounded-full border border-[#2E4A3C]/5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]">
              <Leaf className="text-[#D6C4A6] opacity-60" size={24} strokeWidth={1} />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-[0.06em] leading-snug">
              Made by hand
            </h2>
            <div className="w-12 h-px bg-[#D6C4A6]/40 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl leading-[2] text-[#2E4A3C]/80 font-serif font-light max-w-2xl mx-auto italic">
              Each piece is shaped slowly by me in the Netherlands. I work in small batches, focusing on detail, balance and finishing.
            </p>
          </div>
        </div>
      </section>

      {/* Коллекция (In Progress State) */}
      <section id="collection" className="py-32 relative border-t border-[#2E4A3C]/5 bg-white/20">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.6em] uppercase text-[#D6C4A6] font-bold">The Signature</p>
            <h2 className="text-3xl font-light tracking-[0.2em] uppercase">Core Collection</h2>
            <div className="pt-6">
              <p className="text-[#2E4A3C]/40 font-serif font-light text-base tracking-wide italic">
                The collection is currently in progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Кастомные заказы (Quiet Studio State - Tightened Spacing) */}
      <section id="custom" className="py-20 bg-[#364D41] text-[#FDFBF7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-10 relative z-10 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4 tracking-[0.1em] uppercase text-[#F0E9D2]">
                Custom pieces
              </h2>
              <div className="w-12 h-px bg-[#D6C4A6]/20 mx-auto mb-6"></div>
              <p className="text-[#D6C4A6]/80 font-serif font-light text-base leading-[1.8] max-w-lg mx-auto italic">
                If you have an idea, I can help shape it in silver or gold. <br />
                We begin with a short message and a simple conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {[
                { title: "Message", desc: "Share your thoughts or a simple reference." },
                { title: "Sketch", desc: "We discuss the shape and confirm the details." },
                { title: "Making", desc: "The piece is crafted and finished by hand." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#D6C4A6]">{item.title}</h4>
                  <p className="text-[11px] text-[#D6C4A6]/40 font-sans leading-relaxed tracking-wide px-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className={`bg-[#D6C4A6] text-[#2E4A3C] px-14 py-4 text-[9px] tracking-[0.5em] uppercase rounded-[40px] ${tactileStyles.pressedButtonEmerald} hover:bg-white transition-all`}>
                  Send a message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер (Refined & Minimal Studio) */}
      <footer id="contact" className="bg-[#2E4A3C] text-[#FDFBF7] pt-14 pb-8 relative">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">

            {/* Left side: Single Line Logo & Tagline */}
            <div className="space-y-3">
              <BrandLogo isFooter={true} />
              <p className="text-[#D6C4A6]/40 font-serif text-[12px] leading-relaxed italic">
                Made slowly, by hand.
              </p>
            </div>

            {/* Right side: Contact Simple List with Icons */}
            <div className="space-y-2.5 font-sans text-[11px] tracking-[0.15em] text-[#D6C4A6]/60 uppercase">
              <div className="flex items-center gap-2.5 text-white/80">
                <MapPin size={14} strokeWidth={1.2} className="opacity-50" />
                <span>The Netherlands</span>
              </div>

              <a
                href="mailto:hello@marizavjewelry.nl"
                className="flex items-center gap-2.5 hover:text-white transition-all group"
              >
                <Mail size={14} strokeWidth={1.2} className="opacity-50 group-hover:opacity-80 transition-opacity" />
                <span className="group-hover:underline underline-offset-4 decoration-[#D6C4A6]/20">hello@marizavjewelry.nl</span>
              </a>

              <a
                href="https://www.instagram.com/marizav.jewelry/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-all group"
              >
                <Instagram size={14} strokeWidth={1.2} className="opacity-50 group-hover:opacity-80 transition-opacity" />
                <span className="group-hover:underline underline-offset-4 decoration-[#D6C4A6]/20">@marizav.jewelry</span>
              </a>
            </div>

          </div>

          <div className="pt-6 border-t border-[#FDFBF7]/5">
            <p className="text-[8px] tracking-[0.4em] uppercase text-[#D6C4A6]/20">
              &copy; 2026 MariZav Jewelry
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
