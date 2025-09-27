import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import lotus from "../assets/lotus.png";
import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      initial={{  opacity: 0 }}
      whileInView={{  opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="   text-gray-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2  rounded-lg">
                <img src={lotus} alt="logo" className="w-10 h-10" />
              </div>
              <span className="text-xl font-bold ">ExcelIELTS</span>
            </div>
            <p className=" text-sm text-pretty">
              Empowering students worldwide to achieve their IELTS goals with
              AI-powered preparation and expert guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className=" mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-300 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-gray-300 text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gray-300 text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold  mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold  mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 " />
                <span className=" text-sm">support@excelielts.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span className=" text-sm">+91 55512 3 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 " />
                <span className=" text-sm">
                  123 Education St, Learning City
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 border-gray-700 mt-12 pt-8 text-center">
          <p className=" text-sm">
            © {new Date().getFullYear()} ExcelIELTS Institute. All rights reserved. | Designed for
            educational excellence.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
