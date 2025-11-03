"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import ContactForm from "../components/ContactForm"
import { contactInfo } from "../data/contact"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-12 px-4 bg-white dark:bg-gray-900 transition-colors duration-500 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Let’s work together
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? I’m always open to new collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left Panel: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Email */}
            <div className="group">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                Email
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-1 group"
              >
                <span className="break-all">{contactInfo.email}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>

            {/* Phone */}
            <div className="group">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                Phone
              </p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-1 group"
              >
                <span>{contactInfo.phone}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                Location
              </p>
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {contactInfo.location}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block pt-8">
              <div className="w-16 h-1 bg-blue-100 dark:bg-blue-700" />
            </div>
          </motion.div>

          {/* Right Panel: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 shadow-sm transition-colors duration-500">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Send a message
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Fill out the form below and I’ll get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
