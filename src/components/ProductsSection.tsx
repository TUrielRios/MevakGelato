"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import helado1 from "../../assets/helados/helado1.png"
import helado2 from "../../assets/helados/helado2.png"
import helado3 from "../../assets/helados/helado3.png"
import helado4 from "../../assets/helados/helado4.png"
import members1 from "../../assets/members/members1.png"
import members2 from "../../assets/members/members2.png"
import members3 from "../../assets/members/members3.png"
import VideoBackground from "./VideoBackground"
import videoParty from "../../assets/videos/videoparty.mp4"

interface Product {
  id: number
  name: string
  description: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "COOKIES & CREAM",
    description:
      "Helado a base de crema chantilly sembrado con un veteado de cookies exclusivamente desarrollado en Italia.",
    image: helado1,
  },
  {
    id: 2,
    name: "PISTACHIO DREAM",
    description: "Helado artesanal de pistacho italiano con trozos de pistachos tostados.",
    image: helado2,
  },
  {
    id: 3,
    name: "CHOCOLATE TRUFFLE",
    description: "Helado de chocolate belga con trozos de trufa y salsa de chocolate premium.",
    image: helado3,
  },
  {
    id: 4,
    name: "VANILLA BEAN",
    description: "Helado de vainilla con semillas de vainilla de Madagascar.",
    image: helado4,
  },
]

interface NewsItem {
  id: number
  tag: string
  title: string
  description: string
  image: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    tag: "LANZAMIENTOS",
    title: "DESCUBRIÍ EUROPA EN CADA BOCADO",
    description:
      "El sabor del lujo europeo. Todo un viaje sensorial, El mejor chocolate belga, veteado con caramelo con una base de Pistachos. Una verdadera obra maestra del sabor.",
    image: members1,
  },
  {
    id: 2,
    tag: "LANZAMIENTOS",
    title: "MEMBRESÍA OMAKASE",
    description:
      "Dos entregas mensuales con 5 potes de 120 g, especialmente seleccionados para vos por nuestro Maestro Heladero. Ideal para quienes disfrutan de la innovación."
,    image: members2,
    },
  {
    id: 3,
    tag: "LANZAMIENTOS",
    title: "MEMBRESÍA TRADICIONAL",
    description:
"Una entrega mensual de 4 potes de 250 g: tres a elección y uno sorpresa del menú Omakase. Perfecta para los amantes de lo clásico con un toque especial.",
      image: members3,
    },
]

// Custom hook for scroll animations
const useInView = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting)
      }, options)

      const currentRef = ref.current
      if (currentRef) {
        observer.observe(currentRef)
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef)
        }
      }
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setIsVisible(true)
      return () => {}
    }
  }, [options])

  return [ref, isVisible]
}

// Animation components
const FadeInUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => {
  const [ref, isVisible] = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} transition-all duration-1000 ease-out`}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const FloatingElement = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode
  className?: string 
}) => {
  return <div className={`${className} animate-float`}>{children}</div>
}

const ProductsSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videosrc = videoParty
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  // Check for mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setIsMobile(window.innerWidth < 768)
    }
    
    if (typeof window !== "undefined") {
      handleResize() // Initial check
      window.addEventListener("resize", handleResize)
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollY(window.scrollY)
        console.log("Scroll Y:", scrollY, isMobile)
      }
    }
    
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const calculateItemsToShow = () => {
    if (windowWidth < 640) return 1
    if (windowWidth < 1024) return 2
    return 3
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    const itemsToShow = calculateItemsToShow()
    setCurrentIndex((prev) => (prev < products.length - itemsToShow ? prev + 1 : prev))
  }



  // Add animation CSS styles
  useEffect(() => {
    if (typeof document === "undefined") return

    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      @keyframes slowZoom {
        from { transform: scale(1); }
        to { transform: scale(1.1); }
      }
      
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 1s ease-out forwards;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-pulse {
        animation: pulse 2s ease-in-out infinite;
      }
      
      .animate-slowZoom {
        animation: slowZoom 15s ease-in-out infinite alternate;
      }
      
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
      
      .hover-grow {
        transition: transform 0.3s ease;
      }
      
      .hover-grow:hover {
        transform: scale(1.05);
      }
      
      .image-zoom {
        transition: transform 0.5s ease;
      }
      
      .image-zoom:hover {
        transform: scale(1.1);
      }
      
      .slide-up {
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      
      .slide-up-show {
        transform: translateY(0);
        opacity: 1;
      }
      
      .slide-up-hide {
        transform: translateY(20px);
        opacity: 0;
      }
      
      /* Cursor animation - only show on non-touch devices */
      @media (hover: hover) and (pointer: fine) {
        .custom-cursor {
          width: 0px;
          height: 0px;
          border: 0px solid #1f9e97;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.2s ease;
        }
        
        .cursor-grow {
          transform: scale(2);
          background-color: rgba(31, 158, 151, 0.2);
        }
      }
      
      /* Parallax effect */
      .parallax {
        transition: transform 0.1s ease-out;
      }
    `
    document.head.appendChild(style)

    // Only add custom cursor on non-touch devices
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const cursor = document.createElement("div")
      cursor.className = "custom-cursor"
      document.body.appendChild(cursor)

      const moveCursor = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }

      document.addEventListener("mousemove", moveCursor)

      // Add hover effect for buttons
      const buttons = document.querySelectorAll("button")
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          cursor.classList.add("cursor-grow")
        })
        button.addEventListener("mouseleave", () => {
          cursor.classList.remove("cursor-grow")
        })
      })

      return () => {
        document.head.removeChild(style)
        document.body.removeChild(cursor)
        document.removeEventListener("mousemove", moveCursor)
      }
    } else {
      return () => {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <>
      {/* Lab Section */}
      <section className="min-h-screen bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeInUp>
              <div className="mb-8 md:mb-12 lg:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-2">NUESTRO</h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600">LABORATORIO</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nuestro laboratorio de inspiración es donde la magia sucede. Un espacio dedicado a la innovación y
                creatividad, donde nuestros maestros heladeros experimentan con nuevos sabores y texturas para brindarte
                experiencias únicas.
              </p>
              <button className="bg-[#1f9e97] text-white px-6 sm:px-8 py-3 hover:bg-[#1a8a84] transition-colors relative overflow-hidden group w-full sm:w-auto">
                <span className="relative z-10">DESCUBRÍ MÁS</span>
                <span className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-700 ease-out opacity-20"></span>
              </button>
            </FadeInUp>

            <FadeInUp delay={300} className="mt-8 md:mt-0">
              <div className="relative">
                <img
                  src="https://images.rappi.com.ar/products/2113353893-1739309917913.jpg?d=300x300&e=webp&q=10"
                  alt="Inspiration Lab"
                  className="w-full rounded-lg shadow-xl hover-grow mx-auto max-w-md md:max-w-full"
                />
                <FloatingElement className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                  <p className="text-xl sm:text-2xl font-black text-[#1f9e97] animate-pulse">+50</p>
                  <p className="text-sm sm:text-base text-gray-600">Sabores Únicos</p>
                </FloatingElement>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full h-screen">
        <VideoBackground videoSrc={videosrc} />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <FadeInUp className="text-center px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-wide leading-tight animate-pulse">
              <span className="playfair">
                PARTY <span className="text-teal-600">SERVICE</span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl montserrat max-w-xl mx-auto animate-fadeIn">
              Hacé de tu evento algo inolvidable con nuestro servicio premium. Ofrecemos una experiencia personalizada
              con nuestros helados y personal especializado.
            </p>
            <div className="mt-8">
              <button className="px-6 sm:px-8 py-3 border-2 border-white bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-wider relative overflow-hidden group w-full sm:w-auto">
                <span className="relative z-10">COTIZÁ TU EVENTO</span>
                <span className="absolute inset-0 w-0 bg-teal-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
            </div>
          </FadeInUp>
        </div>
      </section>

{/* Products Section */}
<section className="min-h-screen bg-white py-20 px-8 relative">
  <div className="max-w-7xl mx-auto">
    <FadeInUp>
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-2 text-center md:text-left">
          CONOCÉ
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 text-center md:text-left">
          NUESTROS <span className="font-black">PRODUCTOS</span>
        </h3>
      </div>
    </FadeInUp>

    <div className="relative w-full">
      {/* Desktop view */}
      <div className="hidden md:flex items-center justify-between gap-8 overflow-visible">
        <button
          onClick={handlePrevious}
          className="absolute left-[-70px] z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} className="text-gray-900" />
        </button>

        <div
          className="flex gap-8 transition-transform duration-500 w-full"
          style={{ transform: `translateX(-${currentIndex * 280}px)` }}
        >
          {products.map((product, index) => (
            <FadeInUp key={product.id} delay={index * 100}>
              <div
                className="relative h-full-screen w-60 group"
                onMouseEnter={() => setActiveProduct(product.id)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                <div className="w-60 h-60 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-70 h-60 image-zoom shadow-lg transition-transform duration-500"
                  />
                </div>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
                    activeProduct === product.id ? "opacity-100 translate-y-[-30px]" : "opacity-0 translate-y-0"
                  }`}
                >
                  <div className="bg-[#1f9e97] w-48 h-48 p-6 flex flex-col items-center justify-center text-center text-white shadow-xl animate-fadeIn">
                    <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                    <p className="text-xs">{product.description}</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-76px] z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          disabled={currentIndex >= products.length - 3}
        >
          <ChevronRight size={24} className="text-gray-900" />
        </button>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col items-center gap-6">
        {products.map((product, index) => (
          <FadeInUp key={product.id} delay={index * 100}>
            <div className="w-full flex flex-col items-center gap-4 bg-white p-4 shadow-lg rounded-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-40 h-40 rounded-full object-cover"
              />
              <div className="text-center">
                <h4 className="font-bold text-lg text-teal-600">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Divider */}
      <section className="bg-teal-600 py-2 sm:py-5"></section>

      {/* News Section */}
      <section className="bg-white py-12 sm:py-20">
        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array(12)
              .fill("MEMBERS!")
              .map((text, i) => (
                <span 
                  key={i} 
                  className={`text-4xl sm:text-5xl md:text-6xl font-black mx-2 sm:mx-4 ${i % 2 === 0 ? "text-teal-600" : "text-gray-200"}`}
                >
                  {text}
                </span>
              ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <FadeInUp key={item.id} delay={index * 150}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-4 sm:mb-6 relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <span className="text-xs sm:text-sm text-[#1f9e97] tracking-wider relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1f9e97] group-hover:after:w-full after:transition-all after:duration-300">
                      {item.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight text-[#1f9e97] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsSection