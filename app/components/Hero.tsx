"use client";

import { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MotionBox, fadeInUp } from "./MotionBox";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { EMAIL_COMPOSE_LINK, EXTERNAL_LINK_PROPS } from "./contactLinks";

const ROLES = [
  "Frontend Engineer",
  "MERN Stack Developer",
  "React & Next.js Expert",
  "Performance Optimizer",
  "TypeScript Enthusiast",
];

/** Replace with your Google Doc link: File → Share → “Anyone with the link” → copy link */
const RESUME_LINK =
  "https://drive.google.com/file/d/1FS_u45nUbvPfy3ymMV53Q38UrTg_UxiE/view?usp=drive_link";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 0);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      as="section"
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      pt={{ base: "70px", md: "80px" }}
      px={{ base: "4", md: "0" }}
    >
      {/* Animated background orbs */}
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)"
        animation="float-slow 8s ease-in-out infinite"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-15%"
        right="-10%"
        w="600px"
        h="600px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)"
        animation="float-slow 10s ease-in-out infinite 2s"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="40%"
        right="20%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)"
        animation="float 6s ease-in-out infinite 1s"
        pointerEvents="none"
      />

      {/* Grid pattern overlay */}
      <Box
        position="absolute"
        inset="0"
        backgroundImage="radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)"
        backgroundSize="40px 40px"
        pointerEvents="none"
      />

      <Flex
        direction="column"
        align="center"
        textAlign="center"
        maxW="900px"
        mx="auto"
        px={{ base: "4", md: "8" }}
        position="relative"
        zIndex="1"
        gap={{ base: "4", md: "6" }}
      >
        {/* Badge */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Box
            display="inline-flex"
            alignItems="center"
            gap="2"
            px="4"
            py="1.5"
            borderRadius="full"
            bg="rgba(99,102,241,0.1)"
            border="1px solid rgba(99,102,241,0.2)"
            fontSize="xs"
            fontWeight="600"
            color="#a78bfa"
            letterSpacing="0.05em"
            textTransform="uppercase"
          >
            <Box w="6px" h="6px" borderRadius="full" bg="#6366f1" animation="glow-pulse 2s infinite" />
            Available for opportunities
          </Box>
        </MotionBox>

        {/* Greeting */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="rgba(255,255,255,0.5)"
            fontWeight="400"
          >
            Hey there! I&apos;m
          </Text>
        </MotionBox>

        {/* Name */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <Text
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="900"
            lineHeight="1.05"
            letterSpacing="-0.04em"
            className="gradient-text"
            fontFamily="'Space Grotesk', sans-serif"
          >
            Sumit Kumar
          </Text>
        </MotionBox>

        {/* Typing role */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
        >
          <Flex
            align="center"
            justify="center"
            gap="2"
            minH="40px"
          >
            <Text
              fontSize={{ base: "md", md: "xl" }}
              fontWeight="500"
              color="rgba(255,255,255,0.4)"
            >
              I&apos;m a
            </Text>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              fontWeight="600"
              color="#2dd4bf"
              minW={{ base: "160px", md: "260px" }}
              textAlign="left"
              borderRight="2px solid #6366f1"
              pr="1"
              animation="typing-cursor 1s infinite"
            >
              {displayText}
            </Text>
          </Flex>
        </MotionBox>

        {/* Description */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          maxW="600px"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="rgba(255,255,255,0.4)"
            lineHeight="1.8"
          >
            3+ years architecting high-scale React.js, Next.js, and TypeScript applications
            for CRM and Hospitality Tech domains. Expert in Core Web Vitals, browser rendering optimization,
            and delivering measurable performance outcomes.
          </Text>
        </MotionBox>

        {/* CTA Buttons */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.75 }}
        >
          <Flex
            gap="3"
            direction={{ base: "column", sm: "row" }}
            align="center"
            mt="2"
            w={{ base: "full", sm: "auto" }}
          >
            <button
              onClick={() => handleScroll("#projects")}
              style={{
                padding: "12px 28px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.3s",
                border: "none",
                width: "100%",
                maxWidth: "220px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              View My Work
            </button>
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 28px",
                borderRadius: "12px",
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                transition: "all 0.3s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                justifyContent: "center",
                width: "100%",
                maxWidth: "220px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <Download size={16} style={{ flexShrink: 0 }} />
              Download Resume
            </a>
          </Flex>
        </MotionBox>

        {/* Social Links */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <Flex gap="3" mt="2">
            {[
              { icon: <Github size={18} />, href: "https://github.com/sumit-krk", label: "GitHub" },
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/sumitkrk/", label: "LinkedIn" },
              { icon: <Mail size={18} />, href: EMAIL_COMPOSE_LINK, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...EXTERNAL_LINK_PROPS}
                aria-label={s.label}
                style={{
                  padding: "12px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.4)",
                  transition: "all 0.3s",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {s.icon}
              </a>
            ))}
          </Flex>
        </MotionBox>
      </Flex>

      {/* Scroll indicator */}
      <Box
        position="absolute"
        bottom="8"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="2"
        animation="scroll-down 2s ease infinite"
        cursor="pointer"
        onClick={() => handleScroll("#about")}
      >
        <Text fontSize="xs" color="rgba(255,255,255,0.3)" letterSpacing="0.1em" textTransform="uppercase">
          Scroll
        </Text>
        <ChevronDown size={16} color="rgba(255,255,255,0.3)" />
      </Box>
    </Box>
  );
}
