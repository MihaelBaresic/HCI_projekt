import BLOG from '../components/blog.js';
import ScrollX from '../components/scrollsnap.js';
import HeaderFooter2 from '../Layouts/HeaderFooter2.js';
import Link from 'next/link';

const Blog = () => {
    return (
        <>
            <HeaderFooter2>
                <BLOG/>
            </HeaderFooter2>
        </>
    );
};

export default Blog;