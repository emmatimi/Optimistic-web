
import React from 'react';
// FIX: Import `Variants` type from `framer-motion` to resolve type error.
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// FIX: Add `Variants` type to ensure compatibility with framer-motion.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const BlogPage: React.FC = () => {
    return (
        <div className="bg-brand-light min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                     <motion.h1 
                        className="text-4xl font-serif font-bold text-brand-dark"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Journal
                    </motion.h1>
                    <motion.p 
                        className="text-gray-600 mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Tips, tricks, and insights for your natural beauty journey.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {BLOG_POSTS.map((post) => (
                        <motion.div 
                            key={post.id} 
                            className="bg-white rounded-lg shadow-md overflow-hidden group"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <Link to="#" className="block">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-1">{post.date} &bull; {post.author}</p>
                                    <h2 className="text-xl font-serif font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{post.title}</h2>
                                    <p className="text-gray-600 mt-2">{post.excerpt}</p>
                                    <p className="text-brand-primary font-semibold mt-4 inline-block">Read More &rarr;</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BlogPage;
