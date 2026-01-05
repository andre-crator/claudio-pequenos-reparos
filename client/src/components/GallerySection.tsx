import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    before: "/images/service-electrical.jpg",
    after: "/images/hero-bg.jpg",
    title: "Instalação Elétrica Completa",
    description: "Renovação total da fiação e tomadas em sala de estar"
  },
  {
    before: "/images/service-painting.jpg",
    after: "/images/hero-bg.jpg",
    title: "Pintura e Acabamento",
    description: "Transformação de ambiente com pintura profissional"
  },
  {
    before: "/images/service-plumbing.jpg",
    after: "/images/hero-bg.jpg",
    title: "Reforma Hidráulica",
    description: "Atualização completa de banheiro com novas torneiras"
  },
  {
    before: "/images/service-furniture.jpg",
    after: "/images/hero-bg.jpg",
    title: "Montagem e Organização",
    description: "Montagem de móveis e organização de espaço"
  }
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-gray-600 text-lg">
            Veja a transformação que o Cláudio realiza em cada projeto. 
            Deslize a imagem para comparar antes e depois.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Before/After Slider */}
          <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-col-resize group"
            onMouseMove={handleMouseMove}
          >
            {/* After Image */}
            <img
              src={currentItem.after}
              alt="Depois"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentItem.before}
                alt="Antes"
                className="w-full h-full object-cover"
                style={{ width: `${(100 / sliderPosition) * 100}%` }}
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white transition-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                <div className="flex gap-1">
                  <ChevronLeft className="w-5 h-5 text-primary" />
                  <ChevronRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold">
              ANTES
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold">
              DEPOIS
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-8 text-center">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">
              {currentItem.title}
            </h3>
            <p className="text-gray-600 mb-8">{currentItem.description}</p>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-primary text-white hover:bg-red-700 transition-colors shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-primary text-white hover:bg-red-700 transition-colors shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Counter */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            Projeto {currentIndex + 1} de {galleryItems.length}
          </div>
        </div>
      </div>
    </section>
  );
}
