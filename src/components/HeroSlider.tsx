import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Pelatihan K3 Profesional & Tersertifikasi",
    subtitle: "Tingkatkan kompetensi SDM perusahaan Anda dengan program pelatihan terpercaya",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200",
  },
  {
    id: 2,
    title: "Sertifikasi K3 Berstandar Nasional",
    subtitle: "Dapatkan sertifikat resmi yang diakui oleh Kementerian Ketenagakerjaan",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
  },
  {
    id: 3,
    title: "Konsultasi K3 untuk Perusahaan Anda",
    subtitle: "Solusi lengkap untuk memenuhi standar keselamatan dan kesehatan kerja",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-primary-foreground">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Lihat Program
                  </Button>
                  <Button size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground hover:bg-background/20">
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
