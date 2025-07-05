import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Mail,
    MapPin,
    Send,
    AlertCircle,
    CheckCircle2,
    LinkedinIcon,
} from "lucide-react";
import { sendMessage } from "../../services/sendMessage.tsx";
import { Bubbles } from "../Project/Project.tsx";

const ContactSection: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState<{
        submitted: boolean;
        error: boolean;
        message: string;
    } | null>(null);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
        },
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        // Clear error when user types
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }

        // Clear form status when user makes changes after submission
        if (formStatus) {
            setFormStatus(null);
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: "", email: "", message: "" };

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        } else if (form.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await sendMessage({
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                });

                setFormStatus({
                    submitted: true,
                    error: false,
                    message: "Your message has been sent successfully!",
                });

                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });

                setTimeout(() => {
                    setFormStatus(null);
                }, 5000);
            } catch (error) {
                console.error("Error sending message:", error);
                setFormStatus({
                    submitted: false,
                    error: true,
                    message:
                        "There was an error sending your message. Please try again later.",
                });
            }
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="text-primary-600 dark:text-primary-400" />,
            title: "Email",
            value: "vivekmukhi07@gmail.com",
            link: "mailto:vivekmukhi07@gmail.com",
        },
        {
            icon: <LinkedinIcon className="text-primary-600 dark:text-primary-400" />,
            title: "LinkedIn",
            value: "Mukhi Vivek",
            link: "https://www.linkedin.com/in/mukhi-vivek-b70aa8250/",
        },
        {
            icon: <MapPin className="text-primary-600 dark:text-primary-400" />,
            title: "Location",
            value: "Gujarat, IN",
            link: "https://maps.google.com/?q=Gujarat,+IN",
        },
    ];

    return (
        <section 
            id="contact" 
            className="py-20 bg-gradient-to-b from-blue-800 to-blue-900" 
            ref={ref}>

            

            <div className="container mx-auto px-4 md:px-6">

                

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Get In Touch
                        </h2>
                        <div className="h-1 w-20 bg-primary-400 mx-auto mb-6"></div>
                        <p className="text-gray-200 dark:text-gray-300 max-w-6xl mx-auto text-md">
                            Have a project in mind or want to discuss potential opportunities?
                            I'd love to hear from you!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                        {/* Contact Info */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-2 order-2 lg:order-1"
                        >
                            <div className="bg-blue-900/80 dark:bg-dark-800 rounded-xl p-6 shadow-md mb-8">
                                <h3 className="text-xl font-semibold mb-6 text-white">
                                    Contact Information
                                </h3>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.link}
                                            target={item.title === "Location" ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="flex items-start hover:bg-blue-800/60 dark:hover:bg-dark-700 p-3 rounded-lg transition-colors"
                                            whileHover={{ x: 5 }}
                                        >
                                            <div className="p-2 bg-primary-400/20 dark:bg-primary-900/30 rounded-lg mr-4">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-white dark:text-white">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-200 dark:text-gray-300">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-900/80 dark:bg-dark-800 rounded-xl p-6 shadow-md">
                                <h1 className="font-semibold text-2xl text-white">Working Status</h1>
                                <div className="mt-6 pt-6 border-t border-blue-700 dark:border-dark-700">
                                    <p className="text-gray-200 dark:text-gray-400 text-lg">
                                        I'm currently available for freelance work and full-time
                                        positions.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-3 order-1 lg:order-2"
                        >
                            <div className="bg-blue-900/80 dark:bg-dark-800 rounded-xl p-6 md:p-8 shadow-md">
                                <h3 className="text-xl font-semibold mb-6 text-white">
                                    Send Me a Message
                                </h3>

                                {formStatus && (
                                    <motion.div
                                        className={`mb-6 p-4 rounded-lg ${formStatus.error
                                                ? "bg-red-200/80 dark:bg-red-900/20 text-red-900 dark:text-red-300"
                                                : "bg-green-200/80 dark:bg-green-900/20 text-green-900 dark:text-green-300"
                                            }`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <div className="flex items-center">
                                            {formStatus.error ? (
                                                <AlertCircle className="mr-2" size={20} />
                                            ) : (
                                                <CheckCircle2 className="mr-2" size={20} />
                                            )}
                                            <p>{formStatus.message}</p>
                                        </div>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium mb-2 text-white"
                                            >
                                                Your Name <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={form.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.name
                                                        ? "border-red-400 dark:border-red-400"
                                                        : "border-blue-700 dark:border-dark-600"
                                                    } bg-blue-950/80 dark:bg-dark-700 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-400`}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-400">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium mb-2 text-white"
                                            >
                                                Your Email <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.email
                                                        ? "border-red-400 dark:border-red-400"
                                                        : "border-blue-700 dark:border-dark-600"
                                                    } bg-blue-950/80 dark:bg-dark-700 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-400`}
                                                placeholder="you@example.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-400">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium mb-2 text-white"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            value={form.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-blue-700 dark:border-dark-600 bg-blue-950/80 dark:bg-dark-700 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium mb-2 text-white"
                                        >
                                            Message <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className={`w-full px-4 py-3 rounded-lg border resize-none ${errors.message
                                                    ? "border-red-400 dark:border-red-400"
                                                    : "border-blue-700 dark:border-dark-600"
                                                } bg-blue-950/80 dark:bg-dark-700 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-400`}
                                            placeholder="Your message here..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-400">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="btn btn-primary w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 text-white"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Send size={18} />
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                    
                </motion.div>
            </div>

            <Bubbles />
            
        </section>
    );
};

export default ContactSection;