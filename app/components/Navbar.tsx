"use client";

import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const RESUME_LINK =
  "https://drive.google.com/file/d/1fIRciNluyWrowthGkYiNg2r-hRHd35GQ/view?usp=sharing";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: RESUME_LINK },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSectionLink = (href: string) => href.startsWith("#");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (!isSectionLink(href)) {
      setMobileOpen(false);
      return;
    }

    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1000"
        transition="all 0.3s cubic-bezier(0.22,1,0.36,1)"
        bg={scrolled ? "rgba(10,10,15,0.85)" : "transparent"}
        backdropFilter={scrolled ? "blur(20px)" : "none"}
        borderBottom={scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent"}
        py={scrolled ? "3" : "5"}
      >
        <Flex
          maxW="1200px"
          mx="auto"
          px={{ base: "6", md: "8" }}
          align="center"
          justify="space-between"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              cursor: "pointer",
              transition: "opacity 0.2s",
              fontFamily: "'Space Grotesk', sans-serif",
              textDecoration: "none",
            }}
            className="gradient-text"
          >
            {"<SK />"}
          </a>

          {/* Desktop Links */}
          <Flex
            gap="1"
            display={{ base: "none", md: "flex" }}
            align="center"
          >
            {NAV_LINKS.map((link) => {
              const isActive = isSectionLink(link.href) && activeSection === link.href.slice(1);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={isSectionLink(link.href) ? undefined : "_blank"}
                  rel={isSectionLink(link.href) ? undefined : "noopener noreferrer"}
                  onClick={(e) => handleClick(e, link.href)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "12px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: isActive ? "#a78bfa" : "rgba(255,255,255,0.6)",
                    background: isActive ? "rgba(139,92,246,0.1)" : "transparent",
                    transition: "all 0.2s",
                    cursor: "pointer",
                    position: "relative",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </Flex>

          {/* Mobile Hamburger */}
          <Box
            display={{ base: "flex", md: "none" }}
            cursor="pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            p="2"
            borderRadius="lg"
            color="rgba(255,255,255,0.7)"
            _hover={{ bg: "rgba(255,255,255,0.05)" }}
            transition="all 0.2s"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </Box>
        </Flex>
      </Box>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: "70px",
              left: "16px",
              right: "16px",
              zIndex: 999,
              background: "rgba(15,15,25,0.95)",
              backdropFilter: "blur(30px)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "16px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <Flex direction="column" gap="1">
              {NAV_LINKS.map((link) => {
                const isActive = isSectionLink(link.href) && activeSection === link.href.slice(1);

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={isSectionLink(link.href) ? undefined : "_blank"}
                    rel={isSectionLink(link.href) ? undefined : "noopener noreferrer"}
                    onClick={(e) => handleClick(e, link.href)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: isActive ? "#a78bfa" : "rgba(255,255,255,0.6)",
                      background: isActive ? "rgba(139,92,246,0.1)" : "transparent",
                      transition: "all 0.2s",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
