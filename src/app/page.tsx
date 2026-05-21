"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Clock, Coffee, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="BURRAH"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlay
      title="Crafted Daily. Remembered Forever."
      description="Luxury artisan sourdough, buttery pastries, and elevated coffee experiences — made fresh every single day at BURRAH."
      buttons={[
        {
          text: "Reserve a Table",
          href: "#contact",
        },
        {
          text: "Order Fresh Today",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-looking-pastries-through-glass-showcase-cafe_171337-17133.jpg"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-father-giving-thumbs-up-while-holding-plate-muffins_23-2148414896.jpg",
          alt: "Happy regular customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-parents-holding-plate-with-muffins_23-2148414888.jpg",
          alt: "Smiling customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-holding-baked-croissant-cake-stand_23-2148027952.jpg",
          alt: "Satisfied bakery guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-loving-couple-bakers-drinking-coffee-looking-aside_171337-14162.jpg",
          alt: "Bakery enthusiast",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-tanned-woman-elegant-blouse-drinking-coffee-cafe-smiling-camera_197531-22722.jpg",
          alt: "Morning coffee regular",
        },
      ]}
      avatarText="Join 500+ happy bakery regulars"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "The Muscat Review",
        "Gourmet Magazine",
        "City Food Guide",
        "Bakery Excellence",
        "Artisan Monthly",
        "Morning Coffee Club",
        "Bakery Enthusiasts",
      ]}
      title="Loved By Pastry Lovers Across Muscat"
      description="Rated 4.9 stars by Muscat's leading food critics and daily regulars."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="More Than a Bakery"
      metrics={[
        {
          icon: Star,
          label: "Experience Rating",
          value: "4.9★",
        },
        {
          icon: Clock,
          label: "Baked Fresh Daily",
          value: "100%",
        },
        {
          icon: Coffee,
          label: "Premium Quality",
          value: "Always",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Fresh Daily",
          tags: [
            "Artisan Techniques",
            "Premium Ingredients",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-croissant-decorated-with-drop-chocolate-blue-board_114579-83135.jpg",
        },
        {
          id: "f2",
          title: "Signature Sourdough",
          tags: [
            "Deep Flavor",
            "Perfect Crust",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-baked-bread-crust_23-2148359056.jpg",
        },
        {
          id: "f3",
          title: "Elevated Coffee",
          tags: [
            "Expertly Crafted",
            "Perfect Pairing",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-friends-having-good-time_23-2148395331.jpg",
        },
      ]}
      title="BURRAH Standard"
      description="Every detail designed around freshness, warmth, and unforgettable quality."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "Pastry",
          name: "Plain Croissant",
          price: "1.50 OMR",
          rating: 5,
          reviewCount: "120+",
          imageSrc: "http://img.b2bpic.net/free-photo/croissant-brown-plate-blue-background-high-quality-photo_114579-75363.jpg",
        },
        {
          id: "p2",
          brand: "Bread",
          name: "Signature Sourdough",
          price: "2.20 OMR",
          rating: 5,
          reviewCount: "250+",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-baker-s-hand-holding-round-rustics-bread_23-2147975067.jpg",
        },
        {
          id: "p3",
          brand: "Coffee",
          name: "Cappuccino",
          price: "1.80 OMR",
          rating: 5,
          reviewCount: "90+",
          imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-with-blade-wheat-drawn-foam_1232-1213.jpg",
        },
        {
          id: "p4",
          brand: "Pastry",
          name: "Fruit Tart",
          price: "2.00 OMR",
          rating: 5,
          reviewCount: "45+",
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-delicious-rustic-summer-berry-tartles_114579-10849.jpg",
        },
        {
          id: "p5",
          brand: "Pastry",
          name: "Danish Selection",
          price: "1.75 OMR",
          rating: 5,
          reviewCount: "60+",
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-tasty-cookies-wooden-board_114579-23659.jpg",
        },
        {
          id: "p6",
          brand: "Pastry",
          name: "Chocolate Almond",
          price: "2.10 OMR",
          rating: 5,
          reviewCount: "80+",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-donuts-concept_23-2148761706.jpg",
        },
      ]}
      title="Customer Favorites"
      description="Handcrafted selections baked to perfection every morning."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The croissants are crispy on the outside and soft on the inside. Absolutely love this place! Some of the best sourdough I've ever had."
      rating={5}
      author="Verified Guest"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-mother-with-apron-holding-plate-muffins_23-2148414889.jpg",
          alt: "Guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-portrait-female-baker-wearing-apron-looking-camera_23-2148189096.jpg",
          alt: "Guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-bistro_23-2149366429.jpg",
          alt: "Guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-showing-eclairs-bakery-counter_23-2148189123.jpg",
          alt: "Guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-desserts-tray-with-milk-tea_23-2148696267.jpg",
          alt: "Guest",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do you offer delivery?",
          content: "Yes, we offer local delivery through our website and partner platforms.",
        },
        {
          id: "q2",
          title: "Are you open on weekends?",
          content: "Yes, we are open seven days a week to serve you fresh pastries and coffee.",
        },
        {
          id: "q3",
          title: "Do you take table reservations?",
          content: "Absolutely, you can reserve a table via our online booking form.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about your BURRAH experience."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Visit Us"
      title="Your New Favorite Bakery"
      description="Fresh pastries, luxury atmosphere, and artisan quality. Visit us today to experience the BURRAH difference."
      buttons={[
        {
          text: "Visit BURRAH Today",
          href: "#",
        },
        {
          text: "Order Online",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="BURRAH"
      columns={[
        {
          title: "Bakery",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#products",
            },
            {
              label: "Hours",
              href: "#",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "TikTok",
              href: "#",
            },
            {
              label: "WhatsApp",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 BURRAH | Luxury Artisan Bakery"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
