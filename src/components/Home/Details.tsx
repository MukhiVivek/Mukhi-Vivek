import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }
    };



    const backgroundAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.5, transition: { duration: 1.5 } }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
            ref={ref}
        >
            {/* Background shapes */}
            <motion.div
                className="absolute inset-0 overflow-hidden z-0"
                variants={backgroundAnimation}
                initial="hidden"
                animate="visible"
            >
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-900/20" />
                <div className="absolute bottom-32 right-20 w-72 h-72 rounded-full bg-secondary-400/20 blur-3xl dark:bg-secondary-800/30" />
                <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-accent-400/10 blur-3xl dark:bg-accent-900/20" />
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <div className="lg:col-span-3 flex flex-col justify-center">
                        <motion.div variants={itemVariants}>
                            <p className="text-primary-600 text-yellow-300 text-2xl dark:text-primary-400 font-mono mb-4">
                                <b>Hello, I'm Mukhi Vivek,</b>
                            </p>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl lg:text-5xl font-bold tracking-tight text-dark-900 dark:text-white"
                        >
                            <span className="block text-yellow-400 ">Web 3 & AI Developer</span>
                            {/* <span className="block ml-10 text-yellow-500">and</span>
                            <span className="block ml-15 text-yellow-500">AI</span> */}
                            {/* <span className="block mt-2 mx-10 text-yellow-600">Developer<span className="text-primary-600 dark:text-primary-500"></span></span> */}
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="mt-6 text-xl text-yellow-500 max-w-2xl"   
                        >
                            <p>Fascinated by smart contracts and machine learning, I’m on a journey to become a world-class developer. I'm looking for a Web3 and AI internship where I can learn, build, and grow.</p>
                        </motion.p>

                    </div>

                    {/* Profile Image */}
                    <motion.div
                        className="lg:col-span-2 flex justify-center"
                        variants={itemVariants}
                    >
                        <div className="w-full max-w-md aspect-square relative">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="absolute inset-6 bg-gradient-to-br from-primary-600/30 to-secondary-600/30 rounded-full" />

                            <motion.div
                                className="absolute inset-12 bg-gradient-to-br from-primary-700/40 to-secondary-700/40 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />

                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <div className="w-4/5 h-5/6 relative">

                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                                        <span><img src="/images/Vivekimg.png" alt="Profile" /></span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>


            </div>
        </section>
    );
};

export default HeroSection;