import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import About from '../components/About';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
