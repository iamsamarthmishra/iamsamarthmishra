import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Samarth Mishra - Develoepr & Cybersecurity Analyst',
  description: 'This is the portfolio of Samarth Mishra, and I am a professional and enthusiastic programmer passionate about problem-solving and exploring new technologies. As a quick learner with a self-motivated attitude, I excel in cybersecurity, ethical hacking, web development, and app development. My core skill is based on JavaScript, and I love utilizing it to create dynamic web applications. Dedicated to making the web more open and accessible, I am available for job opportunities that align with my skills and interests. I am eager to contribute my knowledge and enthusiasm to your team.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
