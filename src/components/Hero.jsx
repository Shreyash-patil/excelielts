import { Play, Users, Award, TrendingUp } from "lucide-react";
import HeroImage from "../assets/heroImage.jpg";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Violet Abyss */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #000000 40%, #2b092b 100%)",
        }}
      />

      <section
        id="home"
        className="pt-25 pb-20 min-h-screen flex items-center "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.h1
                  initial={{ translateY: -100, opacity: 0 }}
                  whileInView={{ translateY: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold  leading-tight text-balance"
                >
                  Master Your{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                    IELTS Journey
                  </span>{" "}
                  with AI-Powered Preparation
                </motion.h1>
                <motion.p
                  initial={{ translateX: -100, opacity: 0 }}
                  whileInView={{ translateX: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg  max-w-xl text-pretty"
                >
                  Join thousands of successful students who achieved their
                  target band scores with our comprehensive IELTS preparation
                  platform featuring AI feedback, mock tests, and expert
                  guidance.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4"></div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-1">
                <motion.div
                  initial={{ translateY: 100, opacity: 0 }}
                  whileInView={{ translateY: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-5 w-5  mr-2" />
                    <span className="text-2xl font-bold ">50K+</span>
                  </div>
                  <p className="text-sm ">Students Trained</p>
                </motion.div>

                <motion.div
                  initial={{ translateY: 100, opacity: 0 }}
                  whileInView={{ translateY: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-5 w-5  mr-2" />
                    <span className="text-2xl font-bold ">8.5</span>
                  </div>
                  <p className="text-sm ">Average Band Score</p>
                </motion.div>

                <motion.div
                  initial={{ translateY: 100, opacity: 0 }}
                  whileInView={{ translateY: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5  mr-2" />
                    <span className="text-2xl font-bold ">95%</span>
                  </div>
                  <p className="text-sm ">Success Rate</p>
                </motion.div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br  p-8">
                <motion.img
                initial={{ translateX: 100, opacity: 0, rotate: 20 }}
                  whileInView={{ translateX: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 1 }}
                  src={HeroImage}
                  alt="Student studying IELTS with modern technology"
                  className="w-full h-100 rounded-xl object-cover"
                />

                {/* Floating Elements */}
                <motion.div
                  initial={{ translateX: 100, opacity: 0, rotate: 90 }}
                  whileInView={{ translateX: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute top-4  right-4  backdrop-blur-md rounded-lg p-3 border border-border/50"
                >
                  <div className="text-sm font-medium ">Band Score</div>
                  <div className="text-2xl font-bold text-violet-700">8.5</div>
                </motion.div>

                <motion.div
                  initial={{ translateX: -100, opacity: 0, rotate: -90 }}
                  whileInView={{ translateX: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-4 left-4  backdrop-blur-md rounded-lg p-3 border border-border/50"
                >
                  <div className="text-sm font-medium ">AI Accuracy</div>
                  <div className="text-2xl font-bold text-purple-700">99%</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
