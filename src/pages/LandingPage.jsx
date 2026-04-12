// import React, { useState, useEffect } from 'react';
// import { 
//   CheckCircle, Landmark, Book, Users, LineChart, 
//   Smartphone, CloudUpload, Shield, Headphones, 
//   ArrowRight, Mail, Phone, MapPin,
//   Star, Quote, Play, X, Rocket, Gem, Crown,
//   Menu, Moon, Sun, Award, Zap, BarChart
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Toaster, toast } from 'react-hot-toast';

// const LandingPage = () => {
//   const [showDemo, setShowDemo] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     college: '',
//     phone: ''
//   });

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//       easing: 'ease-in-out',
//     });
//   }, []);

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const features = [
//     { icon: <Landmark />, title: "8 Departments", desc: "CSE, ECE, MECH, CIVIL, EEE, ISE, AIML, CSBS", color: "#6366f1" },
//     { icon: <Book />, title: "8 Semesters", desc: "Complete feedback for all 8 semesters", color: "#ec4899" },
//     { icon: <Users />, title: "Student Management", desc: "Excel upload, section-wise students", color: "#14b8a6" },
//     { icon: <LineChart />, title: "Faculty Analytics", desc: "Track faculty performance", color: "#f59e0b" },
//     { icon: <Smartphone />, title: "Mobile Responsive", desc: "Works on all devices", color: "#8b5cf6" },
//     { icon: <CloudUpload />, title: "Cloud Based", desc: "Access from anywhere", color: "#06b6d4" },
//     { icon: <Shield />, title: "Secure", desc: "Enterprise-grade security", color: "#10b981" },
//     { icon: <Headphones />, title: "24/7 Support", desc: "Dedicated support team", color: "#ef4444" }
//   ];

//   const plans = [
//     {
//       name: "Starter",
//       price: "15,000",
//       period: "/year",
//       features: ["3 Departments", "4 Semesters", "Up to 500 Students", "Basic Reports", "Email Support"],
//       color: "#6366f1",
//       buttonColor: "#6366f1",
//       popular: false,
//       icon: <Rocket />
//     },
//     {
//       name: "Premium",
//       price: "35,000",
//       period: "/year",
//       features: ["8 Departments", "8 Semesters", "Up to 3000 Students", "Faculty Analytics", "Advanced Reports", "Export to Excel", "Priority Support"],
//       color: "#ec4899",
//       buttonColor: "#ec4899",
//       popular: true,
//       icon: <Gem />
//     },
//     {
//       name: "Enterprise",
//       price: "75,000",
//       period: "/year",
//       features: ["Unlimited Departments", "Unlimited Semesters", "Unlimited Students", "White-label Branding", "Custom Features", "24/7 Support", "On-site Training", "API Access"],
//       color: "#f59e0b",
//       buttonColor: "#f59e0b",
//       popular: false,
//       icon: <Crown />
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Dr. Rajesh Kumar",
//       position: "Principal, ABC Engineering College",
//       quote: "This system saved us hours of manual work. NAAC inspection was smooth!",
//       rating: 5,
//     },
//     {
//       name: "Prof. Priya Sharma",
//       position: "HOD CSE, XYZ College",
//       quote: "Faculty analytics helped us identify areas of improvement. Highly recommended!",
//       rating: 5,
//     },
//     {
//       name: "Dr. Anand Singh",
//       position: "Dean Academics, PQR University",
//       quote: "Best investment for NAAC accreditation. Support team is excellent!",
//       rating: 5,
//     }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast.success("Thank you! We'll contact you within 24 hours.");
//     setFormData({ name: '', email: '', college: '', phone: '' });
//   };

//   return (
//     <div style={{ fontFamily: 'Poppins, sans-serif', overflowX: 'hidden' }}>
//       <Toaster position="top-right" />
      
//       {/* Navigation */}
//       <motion.nav 
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           background: 'rgba(255,255,255,0.95)',
//           backdropFilter: 'blur(10px)',
//           padding: '15px 40px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//           zIndex: 1000,
//           flexWrap: 'wrap',
//           gap: '15px'
//         }}
//       >
//         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//           <motion.div 
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.5 }}
//             style={{ fontSize: '32px' }}
//           >
//             🌙
//           </motion.div>
//           <span style={{ fontSize: '24px', fontWeight: 'bold', background: 'linear-gradient(135deg, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//             Lonly
//           </span>
//           <span style={{ fontSize: '12px', background: '#6366f1', color: 'white', padding: '2px 8px', borderRadius: '20px' }}>Feedback System</span>
//         </div>
//         <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
//           {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item, idx) => (
//             <motion.a 
//               key={idx}
//               whileHover={{ scale: 1.05 }}
//               href={`#${item.toLowerCase()}`} 
//               style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}
//             >
//               {item}
//             </motion.a>
//           ))}
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '25px', cursor: 'pointer' }}
//           >
//             Get Demo
//           </motion.button>
//         </div>
//       </motion.nav>

//       {/* Hero Section */}
//       <div style={{
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '100px 40px 60px',
//         textAlign: 'center',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           style={{ maxWidth: '800px' }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '14px', color: '#a5b4fc' }}>
//               ✨ Created by Lonly Journey ✨
//             </span>
//           </motion.div>
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             style={{ fontSize: '56px', color: 'white', marginBottom: '20px', fontWeight: 'bold' }}
//           >
//             Complete Student Feedback<br />
//             <span style={{ background: 'linear-gradient(135deg, #a5b4fc, #f0abfc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Management System</span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}
//           >
//             NAAC/NBA approved feedback system. Used by 50+ colleges across India.
//           </motion.p>
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
//           >
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setShowDemo(true)} 
//               style={{ padding: '15px 30px', fontSize: '18px', background: 'white', color: '#6366f1', border: 'none', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}
//             >
//               Watch Demo <Play size={18} />
//             </motion.button>
//             <motion.a 
//               whileHover={{ scale: 1.05 }}
//               href="#contact" 
//               style={{ padding: '15px 30px', fontSize: '18px', background: 'transparent', color: 'white', border: '2px solid white', borderRadius: '50px', cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
//             >
//               Get Quote <ArrowRight size={18} />
//             </motion.a>
//           </motion.div>
          
//           {/* Stats */}
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '60px', flexWrap: 'wrap' }}>
//             {[
//               { value: "50+", label: "Colleges" },
//               { value: "1,00,000+", label: "Students" },
//               { value: "5,000+", label: "Faculty" },
//               { value: "99.9%", label: "Uptime" }
//             ].map((stat, idx) => (
//               <div 
//                 key={idx}
//                 data-aos="fade-up"
//                 data-aos-delay={idx * 100}
//                 style={{ textAlign: 'center' }}
//               >
//                 <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#a5b4fc' }}>{stat.value}</div>
//                 <div style={{ color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Features Section */}
//       <div id="features" style={{ padding: '80px 40px', background: '#f8fafc', textAlign: 'center' }}>
//         <div data-aos="fade-up">
//           <h2 style={{ fontSize: '36px', color: '#1e293b', marginBottom: '15px' }}>Why Choose Lonly?</h2>
//           <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '50px' }}>Everything you need for NAAC/NBA accreditation</p>
//         </div>
        
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
//           {features.map((feature, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ y: -10 }}
//               style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', textAlign: 'center', cursor: 'pointer' }}
//             >
//               <motion.div 
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.5 }}
//                 style={{ fontSize: '48px', color: feature.color, marginBottom: '15px', display: 'flex', justifyContent: 'center' }}
//               >
//                 {feature.icon}
//               </motion.div>
//               <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#1e293b' }}>{feature.title}</h3>
//               <p style={{ color: '#64748b' }}>{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* How It Works */}
//       <div style={{ padding: '80px 40px', textAlign: 'center', background: 'white' }}>
//         <div data-aos="fade-up">
//           <h2 style={{ fontSize: '36px', color: '#1e293b', marginBottom: '15px' }}>How It Works</h2>
//           <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '50px' }}>Simple 3-step process to get started</p>
//         </div>
        
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
//           {[
//             { step: "1", title: "Sign Up", desc: "Contact us and choose your plan", color: "#6366f1" },
//             { step: "2", title: "Setup", desc: "We set up your college portal in 24 hours", color: "#ec4899" },
//             { step: "3", title: "Start Collecting", desc: "Upload students and start collecting feedback", color: "#f59e0b" }
//           ].map((item, idx) => (
//             <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{ textAlign: 'center' }}>
//               <motion.div 
//                 whileHover={{ scale: 1.1 }}
//                 style={{ width: '70px', height: '70px', background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold', margin: '0 auto 20px' }}
//               >
//                 {item.step}
//               </motion.div>
//               <h3 style={{ fontSize: '22px', marginBottom: '10px', color: '#1e293b' }}>{item.title}</h3>
//               <p style={{ color: '#64748b' }}>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pricing Section */}
//       <div id="pricing" style={{ padding: '80px 40px', background: '#f8fafc', textAlign: 'center' }}>
//         <div data-aos="fade-up">
//           <h2 style={{ fontSize: '36px', color: '#1e293b', marginBottom: '15px' }}>Simple, Transparent Pricing</h2>
//           <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '50px' }}>No hidden fees. Cancel anytime.</p>
//         </div>
        
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
//           {plans.map((plan, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ y: -10 }}
//               style={{
//                 background: 'white',
//                 borderRadius: '20px',
//                 padding: '30px',
//                 boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)',
//                 position: 'relative',
//                 border: plan.popular ? `2px solid ${plan.color}` : '1px solid #e2e8f0',
//               }}
//             >
//               {plan.popular && (
//                 <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: plan.color, color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>
//                   Most Popular
//                 </div>
//               )}
//               <div style={{ fontSize: '40px', color: plan.color, marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
//                 {plan.icon}
//               </div>
//               <h3 style={{ fontSize: '24px', marginBottom: '10px', color: '#1e293b' }}>{plan.name}</h3>
//               <div style={{ fontSize: '36px', fontWeight: 'bold', color: plan.color }}>₹{plan.price}<span style={{ fontSize: '14px', color: '#64748b' }}>{plan.period}</span></div>
//               <ul style={{ listStyle: 'none', padding: 0, margin: '30px 0', textAlign: 'left' }}>
//                 {plan.features.map((feature, i) => (
//                   <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', color: '#475569' }}>
//                     <CheckCircle size={14} style={{ color: plan.color }} /> {feature}
//                   </li>
//                 ))}
//               </ul>
//               <motion.button 
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 style={{ width: '100%', padding: '12px', background: plan.buttonColor, color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
//               >
//                 Get Started
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>
        
//         <p data-aos="fade-up" style={{ marginTop: '30px', fontSize: '14px', color: '#64748b' }}>
//           * 30-day money-back guarantee. No questions asked.
//         </p>
//       </div>

//       {/* Testimonials */}
//       <div id="testimonials" style={{ padding: '80px 40px', textAlign: 'center', background: 'white' }}>
//         <div data-aos="fade-up">
//           <h2 style={{ fontSize: '36px', color: '#1e293b', marginBottom: '15px' }}>What Our Customers Say</h2>
//           <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '50px' }}>Trusted by leading colleges across India</p>
//         </div>
        
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
//           {testimonials.map((testimonial, idx) => (
//             <div 
//               key={idx}
//               data-aos="fade-up"
//               data-aos-delay={idx * 100}
//               style={{ background: '#f8fafc', padding: '30px', borderRadius: '20px', textAlign: 'left' }}
//             >
//               <Quote size={30} style={{ color: '#6366f1', marginBottom: '15px', opacity: 0.3 }} />
//               <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#334155' }}>{testimonial.quote}</p>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
//                 <div style={{ color: '#fbbf24', display: 'flex', gap: '2px' }}>
//                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" />)}
//                 </div>
//               </div>
//               <div style={{ fontWeight: 'bold', color: '#1e293b' }}>{testimonial.name}</div>
//               <div style={{ fontSize: '12px', color: '#64748b' }}>{testimonial.position}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div id="contact" style={{ padding: '80px 40px', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', color: 'white' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
//           <div data-aos="fade-right">
//             <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Ready to Get Started?</h2>
//             <p style={{ marginBottom: '30px', opacity: 0.9 }}>Schedule a free demo today and see how Lonly can transform your feedback collection process.</p>
            
//             <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
//               <Mail size={20} /> <span>hello@lonly.com</span>
//             </div>
//             <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
//               <Phone size={20} /> <span>+91 98765 43210</span>
//             </div>
//             <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
//               <MapPin size={20} /> <span>Bangalore, India</span>
//             </div>
//           </div>
          
//           <div data-aos="fade-left">
//             <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '20px' }}>
//               <h3 style={{ color: '#1e293b', marginBottom: '20px' }}>Request a Demo</h3>
//               <input 
//                 type="text" 
//                 placeholder="Your Name" 
//                 value={formData.name} 
//                 onChange={(e) => setFormData({...formData, name: e.target.value})} 
//                 style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '10px' }} 
//                 required 
//               />
//               <input 
//                 type="email" 
//                 placeholder="Email Address" 
//                 value={formData.email} 
//                 onChange={(e) => setFormData({...formData, email: e.target.value})} 
//                 style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '10px' }} 
//                 required 
//               />
//               <input 
//                 type="text" 
//                 placeholder="College Name" 
//                 value={formData.college} 
//                 onChange={(e) => setFormData({...formData, college: e.target.value})} 
//                 style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '10px' }} 
//                 required 
//               />
//               <input 
//                 type="tel" 
//                 placeholder="Phone Number" 
//                 value={formData.phone} 
//                 onChange={(e) => setFormData({...formData, phone: e.target.value})} 
//                 style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #e2e8f0', borderRadius: '10px' }} 
//                 required 
//               />
//               <motion.button 
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit" 
//                 style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
//               >
//                 Submit Request
//               </motion.button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer style={{ background: '#0f172a', color: 'white', padding: '40px', textAlign: 'center' }}>
//         <div data-aos="fade-up">
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
//             <span>🌙</span>
//             <span style={{ fontWeight: 'bold' }}>Lonly</span>
//           </div>
//           <p>&copy; 2024 Lonly Journey. All rights reserved.</p>
//           <p style={{ marginTop: '10px', opacity: 0.7, fontSize: '12px' }}>NAAC/NBA Approved Feedback Management System</p>
//         </div>
//       </footer>

//       {/* Demo Video Modal */}
//       {showDemo && (
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}
//         >
//           <motion.div 
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             style={{ background: 'white', borderRadius: '20px', padding: '20px', maxWidth: '800px', width: '90%' }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
//               <motion.button 
//                 whileHover={{ rotate: 90 }}
//                 onClick={() => setShowDemo(false)} 
//                 style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
//               >
//                 <X size={24} />
//               </motion.button>
//             </div>
//             <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
//               <iframe 
//                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px' }}
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
//                 title="Demo Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;

















import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, Landmark, Book, Users, LineChart, 
  Smartphone, CloudUpload, Shield, Headphones, 
  ArrowRight, Mail, Phone, MapPin,
  Star, Quote, Play, X, Rocket, Gem, Crown
} from 'lucide-react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster, toast } from 'react-hot-toast';

const LandingPage = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    phone: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  const features = [
    { icon: <Landmark />, title: "8 Departments", desc: "CSE, ECE, MECH, CIVIL, EEE, ISE, AIML, CSBS", color: "#f59e0b" },
    { icon: <Book />, title: "8 Semesters", desc: "Complete feedback for all 8 semesters", color: "#f59e0b" },
    { icon: <Users />, title: "Student Management", desc: "Excel upload, section-wise students", color: "#f59e0b" },
    { icon: <LineChart />, title: "Faculty Analytics", desc: "Track faculty performance", color: "#f59e0b" },
    { icon: <Smartphone />, title: "Mobile Responsive", desc: "Works on all devices", color: "#f59e0b" },
    { icon: <CloudUpload />, title: "Cloud Based", desc: "Access from anywhere", color: "#f59e0b" },
    { icon: <Shield />, title: "Secure", desc: "Enterprise-grade security", color: "#f59e0b" },
    { icon: <Headphones />, title: "24/7 Support", desc: "Dedicated support team", color: "#f59e0b" }
  ];

  const plans = [
    {
      name: "Starter",
      price: "15,000",
      period: "/year",
      features: ["3 Departments", "4 Semesters", "Up to 500 Students", "Basic Reports", "Email Support"],
      color: "#f59e0b",
      buttonColor: "#f59e0b",
      popular: false,
      icon: <Rocket />
    },
    {
      name: "Premium",
      price: "35,000",
      period: "/year",
      features: ["8 Departments", "8 Semesters", "Up to 3000 Students", "Faculty Analytics", "Advanced Reports", "Export to Excel", "Priority Support"],
      color: "#f59e0b",
      buttonColor: "#f59e0b",
      popular: true,
      icon: <Gem />
    },
    {
      name: "Enterprise",
      price: "75,000",
      period: "/year",
      features: ["Unlimited Departments", "Unlimited Semesters", "Unlimited Students", "White-label Branding", "Custom Features", "24/7 Support", "On-site Training", "API Access"],
      color: "#f59e0b",
      buttonColor: "#f59e0b",
      popular: false,
      icon: <Crown />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal, ABC Engineering College",
      quote: "This system saved us hours of manual work. NAAC inspection was smooth!",
      rating: 5,
    },
    {
      name: "Prof. Priya Sharma",
      position: "HOD CSE, XYZ College",
      quote: "Faculty analytics helped us identify areas of improvement. Highly recommended!",
      rating: 5,
    },
    {
      name: "Dr. Anand Singh",
      position: "Dean Academics, PQR University",
      quote: "Best investment for NAAC accreditation. Support team is excellent!",
      rating: 5,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you within 24 hours. ⚡");
    setFormData({ name: '', email: '', college: '', phone: '' });
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', overflowX: 'hidden' }}>
      <Toaster position="top-right" />
      
      {/* Navigation with Thunder Logo */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          padding: '15px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 1000,
          flexWrap: 'wrap',
          gap: '15px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <motion.div 
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            style={{ 
              fontSize: '32px',
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              padding: '8px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)'
            }}
          >
            ⚡
          </motion.div>
          <span style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            Lonly
          </span>
          <span style={{ 
            fontSize: '12px', 
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)', 
            color: 'white', 
            padding: '2px 8px', 
            borderRadius: '20px' 
          }}>
            Feedback System
          </span>
        </div>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
          {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item, idx) => (
            <motion.a 
              key={idx}
              whileHover={{ scale: 1.05 }}
              href={`#${item.toLowerCase()}`} 
              style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              background: 'linear-gradient(135deg, #f59e0b, #ea580c)', 
              color: 'white', 
              border: 'none', 
              padding: '8px 20px', 
              borderRadius: '25px', 
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            Get Demo ⚡
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section with Thunder Theme */}
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 40px 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated lightning bolts in background */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', opacity: 0.1 }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
              transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: '40px'
              }}
            >
              ⚡
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '8px 16px', borderRadius: '50px', fontSize: '14px', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.5)' }}>
              ⚡ Created by Lonly Journey ⚡
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '56px', color: 'white', marginBottom: '20px', fontWeight: 'bold' }}
          >
            Complete Student Feedback<br />
            <span style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Management System</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}
          >
            NAAC/NBA approved feedback system. Used by 50+ colleges across India.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDemo(true)} 
              style={{ padding: '15px 30px', fontSize: '18px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              Watch Demo <Play size={18} />
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#contact" 
              style={{ padding: '15px 30px', fontSize: '18px', background: 'transparent', color: 'white', border: '2px solid #f59e0b', borderRadius: '50px', cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              Get Quote <ArrowRight size={18} />
            </motion.a>
          </motion.div>
          
          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '60px', flexWrap: 'wrap' }}>
            {[
              { value: "50+", label: "Colleges" },
              { value: "1,00,000+", label: "Students" },
              { value: "5,000+", label: "Faculty" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#fbbf24' }}>{stat.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div id="features" style={{ padding: '80px 40px', background: '#f8fafc', textAlign: 'center' }}>
        <div data-aos="fade-up">
          <h2 style={{ fontSize: '36px', color: '#1e293b', marginBottom: '15px' }}>Why Choose Lonly? <span style={{ fontSize: '32px' }}>⚡</span></h2>
          <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '50px' }}>Everything you need for NAAC/NBA accreditation</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 30px -10px rgba(245, 158, 11, 0.2)' }}
              style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', textAlign: 'center', cursor: 'pointer', border: '1px solid rgba(245, 158, 11, 0.2)' }}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: '48px', color: feature.color, marginBottom: '15px', display: 'flex', justifyContent: 'center' }}
              >
                {feature.icon}
              </motion.div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#1e293b' }}>{feature.title}</h3>
              <p style={{ color: '#64748b' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div style={{ padding: '80px 40px', textAlign: 'center', background: 'white' }}>
        <div data-aos="fade-up">
          <h2 style={{ fontSize: '36px', color: '#1e293b', marginBottom: '15px' }}>How It Works ⚡</h2>
          <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '50px' }}>Simple 3-step process to get started</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { step: "1", title: "Sign Up", desc: "Contact us and choose your plan", color: "#f59e0b" },
            { step: "2", title: "Setup", desc: "We set up your college portal in 24 hours", color: "#f59e0b" },
            { step: "3", title: "Start Collecting", desc: "Upload students and start collecting feedback", color: "#f59e0b" }
          ].map((item, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{ textAlign: 'center' }}>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                style={{ width: '70px', height: '70px', background: `linear-gradient(135deg, #fbbf24, #f59e0b)`, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold', margin: '0 auto 20px', boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}
              >
                {item.step}
              </motion.div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px', color: '#1e293b' }}>{item.title}</h3>
              <p style={{ color: '#64748b' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" style={{ padding: '80px 40px', background: '#f8fafc', textAlign: 'center' }}>
        <div data-aos="fade-up">
          <h2 style={{ fontSize: '36px', color: '#1e293b', marginBottom: '15px' }}>Simple, Transparent Pricing ⚡</h2>
          <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '50px' }}>No hidden fees. Cancel anytime.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)',
                position: 'relative',
                border: plan.popular ? `2px solid #f59e0b` : '1px solid #e2e8f0',
              }}
            >
              {plan.popular && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  ⚡ Most Popular ⚡
                </div>
              )}
              <div style={{ fontSize: '40px', color: plan.color, marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                {plan.icon}
              </div>
              <h3 style={{ fontSize: '24px', marginBottom: '10px', color: '#1e293b' }}>{plan.name}</h3>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: plan.color }}>₹{plan.price}<span style={{ fontSize: '14px', color: '#64748b' }}>{plan.period}</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '30px 0', textAlign: 'left' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', color: '#475569' }}>
                    <CheckCircle size={14} style={{ color: plan.color }} /> {feature}
                  </li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', padding: '12px', background: `linear-gradient(135deg, #fbbf24, #f59e0b)`, color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
              >
                Get Started ⚡
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <p data-aos="fade-up" style={{ marginTop: '30px', fontSize: '14px', color: '#64748b' }}>
          * 30-day money-back guarantee. No questions asked.
        </p>
      </div>

      {/* Testimonials */}
      <div id="testimonials" style={{ padding: '80px 40px', textAlign: 'center', background: 'white' }}>
        <div data-aos="fade-up">
          <h2 style={{ fontSize: '36px', color: '#1e293b', marginBottom: '15px' }}>What Our Customers Say ⚡</h2>
          <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '50px' }}>Trusted by leading colleges across India</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              style={{ background: '#f8fafc', padding: '30px', borderRadius: '20px', textAlign: 'left', border: '1px solid rgba(245, 158, 11, 0.2)' }}
            >
              <Quote size={30} style={{ color: '#f59e0b', marginBottom: '15px', opacity: 0.5 }} />
              <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#334155' }}>{testimonial.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ color: '#fbbf24', display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" />)}
                </div>
              </div>
              <div style={{ fontWeight: 'bold', color: '#1e293b' }}>{testimonial.name}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>{testimonial.position}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" style={{ padding: '80px 40px', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
          <div data-aos="fade-right">
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Ready to Get Started? ⚡</h2>
            <p style={{ marginBottom: '30px', opacity: 0.9 }}>Schedule a free demo today and see how Lonly can transform your feedback collection process.</p>
            
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Mail size={20} /> <span>hello@lonly.com</span>
            </div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Phone size={20} /> <span>+91 98765 43210</span>
            </div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <MapPin size={20} /> <span>Bangalore, India</span>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '20px' }}>
              <h3 style={{ color: '#1e293b', marginBottom: '20px' }}>Request a Demo ⚡</h3>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                required 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                required 
              />
              <input 
                type="text" 
                placeholder="College Name" 
                value={formData.college} 
                onChange={(e) => setFormData({...formData, college: e.target.value})} 
                style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                required 
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                required 
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
              >
                Submit Request ⚡
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#0f172a', color: 'white', padding: '40px', textAlign: 'center' }}>
        <div data-aos="fade-up">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px', alignItems: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: '28px' }}
            >
              ⚡
            </motion.div>
            <span style={{ fontWeight: 'bold', fontSize: '20px', background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lonly</span>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: '28px' }}
            >
              ⚡
            </motion.div>
          </div>
          <p>&copy; 2024 Lonly Journey. All rights reserved. ⚡</p>
          <p style={{ marginTop: '10px', opacity: 0.7, fontSize: '12px' }}>NAAC/NBA Approved Feedback Management System</p>
        </div>
      </footer>

      {/* Demo Video Modal */}
      {showDemo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ background: 'white', borderRadius: '20px', padding: '20px', maxWidth: '800px', width: '90%' }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
              <motion.button 
                whileHover={{ rotate: 90 }}
                onClick={() => setShowDemo(false)} 
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
              >
                <X size={24} />
              </motion.button>
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px' }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;