import React,{useState,useEffect,useRef} from "react";
import { motion } from "motion/react";

import men1 from "../assets/men-1.jpg";
import men2 from "../assets/men-2.jpg";
import men3 from "../assets/men-3.jpg";
import men4 from "../assets/men-4.jpg";
import men5 from "../assets/men-5.jpg";
import men6 from "../assets/men-6.jpg";

import women1 from "../assets/woman-1.jpg";
import women2 from "../assets/woman-2.jpg";
import women3 from "../assets/woman-3.jpg";
import women4 from "../assets/woman-4.jpg";
import women5 from "../assets/woman-5.jpg";
import women6 from "../assets/woman-6.jpg";


const Testimonials = () => {
   
  const cardsData = [
    {
      name: "Sarah Chen",
      score: "Band 8.5",
      country: "China",
      text: "ExcelIELTS transformed my preparation completely. The AI feedback was incredibly accurate and helped me identify exactly what I needed to improve.",
      image: women1,
    },
    {
      name: "Ahmed Hassan",
      score: "Band 7.5",
      country: "Egypt",
      text: "The speaking practice sessions were game-changing. I went from being nervous about speaking to feeling completely confident on test day.",
      image: men1,
    },
    {
      name: "Maria Rodriguez",
      score: "Band 8.0",
      country: "Spain",
      text: "The mock tests were so realistic that the actual IELTS felt familiar. The detailed analytics helped me focus on my weak areas effectively.",
      image: women2,
    },
    {
      name: "David Kim",
      score: "Band 8.0",
      country: "South Korea",
      text: "The personalized study plan was perfect for my busy schedule. I achieved my target score in just 3 months of focused preparation.",
      image: men2,
    },
    {
      name: "Emma Thompson",
      score: "Band 7.5",
      country: "UK",
      text: "As a native speaker, I was surprised how much the writing section feedback helped me structure my essays better for the IELTS format.",
      image: women3,
    },
    {
      name: "Carlos Silva",
      score: "Band 8.5",
      country: "Brazil",
      text: "The AI pronunciation feedback was incredibly detailed. It helped me improve my accent and speak more clearly during the test.",
      image: men3,
    },
  ];

  const cardsData2 = [
    {
      name: "Li Wei",
      score: "Band 7.0",
      country: "Vietnam",
      text: "The platform's writing modules helped me structure my essays perfectly for Task 2. My score jumped a whole band in just three weeks!",
      image: women4,
    },
    {
      name: "Omar Al-Farsi",
      score: "Band 8.0",
      country: "Saudi Arabia",
      text: "I appreciated the flexibility. Being able to access high-quality mock tests late at night made studying around my work schedule possible.",
      image: men4,
    },
    {
      name: "Priya Sharma",
      score: "Band 9.0",
      country: "India",
      text: "The comprehensive listening practice was the best part. The varied accents prepared me for everything the real exam could throw at me.",
      image: women5,
    },
    {
      name: "Alex Johnson",
      score: "Band 7.5",
      country: "Canada",
      text: "The AI analysis tool for my speaking samples was phenomenal. It gave me granular feedback that improved my accent clarity immediately.",
      image: men5,
    },
    {
      name: "Yumi Tanaka",
      score: "Band 8.5",
      country: "Japan",
      text: "The interface is very intuitive and clean. It made the entire, stressful process of preparing for IELTS feel much more manageable.",
      image: women6,
    },
    {
      name: "Ricardo Mendes",
      score: "Band 9.0",
      country: "Portugal",
      text: "Achieving a perfect 9.0 was beyond my expectations! The expert video lessons covering tricky grammar points were the key to my success.",
      image: men6,
    },
  ];

  const CreateCard = ({ card }) => (
    <div
      className="
            p-7 rounded-xl mx-4 
            shadow-xl hover:shadow-2xl transition-all duration-300 
            w-90  shrink-0 
            bg-gray-900/50 backdrop-blur-md 
            border border-gray-700/50 
            hover:border-violet-600
        "
    >
      {/* Header: Image, Name, Score Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            className="size-12 rounded-full object-cover"
            src={card.image}
            alt={`${card.name} testimonial`}
          />
          <div className="flex flex-col">
            <p className="text-white font-semibold text-lg">{card.name}</p>
            <span className="text-xs text-gray-500">{card.country}</span>
          </div>
        </div>
        {/* Score Badge */}
        <span
          className="
                    bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent
                    text-sm font-bold px-3 py-1 rounded-full 
                    border border-gray-700
                "
        >
          {card.score}
        </span>
      </div>

      {/* Testimonial Text */}
      <div>
        <p className="text-base italic text-gray-300 leading-relaxed">
          "{card.text}"
        </p>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-16 overflow-hidden">
      <motion.h2
        initial={{ translateY: -100, opacity: 0 }}
        whileInView={{ translateY: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-white mb-8"
      >
        Success Stories
      </motion.h2>

      <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-inner {
                    animation: marqueeScroll 60s linear infinite; /* Slowed down animation */
                }
                .marquee-reverse {
                    animation-direction: reverse;
                }

                .marquee-row:hover .marquee-inner {
        animation-play-state: paused;
    }
            `}</style>


        <div className="space-y-6">
        {/* Marquee Row 1 (Left to Right) */}
        <div className="marquee-row w-full mx-auto max-w-full overflow-hidden relative pt-4 pb-2">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent"></div>

          <div className="marquee-inner flex transform-gpu min-w-[200%]">
            {/* Map the data twice for seamless loop */}
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={`row1-${index}`} card={card} />
            ))}
          </div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        </div>

        {/* Marquee Row 2 (Right to Left) */}
        <div className="marquee-row w-full mx-auto max-w-full overflow-hidden relative pt-2 pb-4">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent"></div>

          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%]">
            {/* Map the data twice for seamless loop */}
            {[...cardsData2, ...cardsData2].map((card, index) => (
              <CreateCard key={`row2-${index}`} card={card} />
            ))}
          </div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        </div>
      </div>
        
    
      
    </section>
  );
};

export default Testimonials;
