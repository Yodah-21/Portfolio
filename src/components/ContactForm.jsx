import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // CLIENT-SAFE access to env vars
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured correctly.");
      setLoading(false);
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(serviceId, templateId, payload, publicKey);
      setSent(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
        setIsOpen(false);
      }, 1700);
    } catch (err) {
      setError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

  return (
    <div className="flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Contact Us
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg w-[90%] max-w-md space-y-4 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {!sent && !loading && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {sent ? (
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center py-6"
                >
                  <CheckCircle className="text-green-500 w-14 h-14 mb-2" />
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Message Sent!
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-center text-gray-900 dark:text-gray-100">
                    Contact Us
                  </h2>

                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-3"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" variants={item} />
                    <motion.input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-900" variants={item} />
                    <motion.input type="text" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-900" variants={item} />
                    <motion.input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className="w-full px-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-900" variants={item} />
                    <motion.textarea name="message" rows="3" placeholder="Message" required value={formData.message} onChange={handleChange} className="w-full px-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-900 resize-none" variants={item} />

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <motion.button type="submit" disabled={loading} className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center justify-center transition" variants={item}>
                      {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
                    </motion.button>
                  </motion.form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
