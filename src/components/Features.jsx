import { scale } from "motion/react";
import Card from "./Card.jsx";
import { Mic, FileText, Brain, Target } from "lucide-react";
import { motion } from "motion/react";

//took AI's help to generate features
const features = [
  {
    icon: Mic,
    title: "AI-Powered Speaking Practice",
    description:
      "Practice speaking with our advanced AI that provides real-time feedback on pronunciation, fluency, and coherence just like a human examiner.",
  },
  {
    icon: FileText,
    title: "Realistic Mock Tests",
    description:
      "Take full-length practice tests that mirror the actual IELTS exam format with detailed performance analytics and improvement suggestions.",
  },
  {
    icon: Brain,
    title: "AI Band Score Prediction",
    description:
      "Get accurate band score predictions for all four skills with detailed explanations of your strengths and areas for improvement.",
  },
  {
    icon: Target,
    title: "Targeted Learning Path",
    description:
      "Receive personalized study plans based on your current level and target score, optimizing your preparation time for maximum results.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ translateY: -10, opacity: 0 }}
            whileInView={{ translateY: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance"
          >
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </motion.h2>
          <motion.p
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            Our comprehensive platform combines cutting-edge AI technology with
            proven IELTS preparation methods to give you the best chance of
            achieving your target score.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{  opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
