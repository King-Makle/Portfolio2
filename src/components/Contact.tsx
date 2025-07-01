import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  scrollY: number;
}

const Contact: React.FC<ContactProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef);
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error' | null;
    text: string;
  }>({ type: null, text: '' });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thanks for your message! I\'ll get back to you shortly.'
      });
      
      if (formRef.current) {
        formRef.current.reset();
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
      
      setTimeout(() => {
        setSubmitMessage({ type: null, text: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container-custom">
        <div className="section-heading-wrapper">
          <h2 className="section-title">Get In Touch</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className={`lg:col-span-2 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <h3 className="text-2xl font-bold mb-6 text-blue-500 dark:text-blue-400 relative inline-block">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"></span>
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing
              new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-500/10 p-3 rounded-full text-blue-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Email</h4>
                  <a href="mailto:hello@yourname.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    Michaelrichards1220@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-500/10 p-3 rounded-full text-blue-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Phone</h4>
                  <a href="tel:+11234567890" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    +1 (505) 362-0936
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-500/10 p-3 rounded-full text-blue-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Fort Collins, CO
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-3 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              {submitMessage.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center disabled:bg-blue-400"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={18} className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;