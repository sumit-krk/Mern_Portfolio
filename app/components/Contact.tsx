"use client";

import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MotionBox, fadeInUp, fadeInLeft, fadeInRight } from "./MotionBox";
import { Send, MapPin, Mail, Phone, Github, Linkedin, Loader2 } from "lucide-react";
import { EMAIL_ADDRESS, EMAIL_COMPOSE_LINK, EXTERNAL_LINK_PROPS } from "./contactLinks";

const SOCIAL_LINKS = [
  { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/sumit-krk", color: "#a78bfa" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "http://linkedin.com/in/sumitkrk", color: "#6366f1" },
  { icon: <Mail size={20} />, label: "Email", href: EMAIL_COMPOSE_LINK, color: "#2dd4bf" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Contact: ${formState.name}`,
          from_name: "Portfolio Website",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError("Failed to send. Please try again or email directly.");
      }
    } catch {
      setError("Network error. Please try again or email directly.");
    } finally {
      setSending(false);
    }
  };

  const inputStyles = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.03)",
    color: "#e2e8f0",
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "all 0.3s",
  } as const;

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: "14", md: "20" }}
      px={{ base: "4", md: "8" }}
      position="relative"
    >
      {/* Background glows */}
      <Box
        position="absolute"
        bottom="10%"
        left="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="10%"
        right="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Box maxW="1100px" mx="auto">
        {/* Header */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          textAlign="center"
          mb={{ base: "12", md: "16" }}
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="#6366f1"
            mb="3"
          >
            Get in Touch
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            color="white"
            fontFamily="'Space Grotesk', sans-serif"
          >
            Let&apos;s Build Something{" "}
            <Text as="span" className="gradient-text-teal">
              Amazing
            </Text>
          </Text>
          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.4)"
            mt="4"
            maxW="500px"
            mx="auto"
            lineHeight="1.8"
          >
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
            Drop me a message and I&apos;ll get back to you as soon as possible.
          </Text>
        </MotionBox>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "8", lg: "12" }}
        >
          {/* Left – Contact Info */}
          <MotionBox
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            flex="1"
          >
            <Flex direction="column" gap="6">
              {/* Info Cards */}
              {[
                { icon: <Mail size={18} />, label: "Email", value: EMAIL_ADDRESS, color: "#6366f1", href: EMAIL_COMPOSE_LINK },
                { icon: <MapPin size={18} />, label: "Location", value: "Jaipur, India", color: "#2dd4bf" },
                { icon: <Phone size={18} />, label: "Phone", value: "+91 8229857645", color: "#f59e0b" },
              ].map((info) => {
                const card = (
                  <Flex
                    align="center"
                    gap="4"
                    p="4"
                    borderRadius="xl"
                    className="glass"
                    transition="all 0.3s"
                    _hover={{
                      bg: "rgba(255,255,255,0.05)",
                      transform: "translateX(4px)",
                    }}
                  >
                    <Flex
                      align="center"
                      justify="center"
                      w="10"
                      h="10"
                      borderRadius="xl"
                      bg={`${info.color}15`}
                      color={info.color}
                      flexShrink="0"
                    >
                      {info.icon}
                    </Flex>
                    <Box>
                      <Text fontSize="xs" color="rgba(255,255,255,0.35)" fontWeight="600" mb="0.5">
                        {info.label}
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.7)" fontWeight="500">
                        {info.value}
                      </Text>
                    </Box>
                  </Flex>
                );

                if (info.href) {
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      {...EXTERNAL_LINK_PROPS}
                      aria-label={`Open email to ${EMAIL_ADDRESS}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {card}
                    </a>
                  );
                }

                return <Box key={info.label}>{card}</Box>;
              })}

              {/* Social Links */}
              <Box mt="4">
                <Text fontSize="xs" fontWeight="700" color="rgba(255,255,255,0.3)" letterSpacing="0.1em" textTransform="uppercase" mb="4">
                  Find me on
                </Text>
                <Flex gap="3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      {...EXTERNAL_LINK_PROPS}
                      aria-label={s.label}
                      className="glass"
                      style={{
                        padding: "12px",
                        borderRadius: "12px",
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
              </Box>
            </Flex>
          </MotionBox>

          {/* Right – Contact Form */}
          <MotionBox
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            flex="1.2"
          >
            <Box
              as="form"
              onSubmit={handleSubmit}
              p={{ base: "6", md: "8" }}
              borderRadius="2xl"
              className="glass"
              position="relative"
              overflow="hidden"
            >
              {/* Top accent */}
              <Box
                position="absolute"
                top="-1px"
                left="15%"
                right="15%"
                h="1px"
                bg="linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)"
              />

              <Flex direction="column" gap="5">
                <Box>
                  <Text as="label" fontSize="xs" fontWeight="600" color="rgba(255,255,255,0.4)" mb="2" display="block">
                    Your Name
                  </Text>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    style={inputStyles}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(99,102,241,0.4)";
                      e.target.style.boxShadow = "0 0 20px rgba(99,102,241,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.06)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </Box>

                <Box>
                  <Text as="label" fontSize="xs" fontWeight="600" color="rgba(255,255,255,0.4)" mb="2" display="block">
                    Email Address
                  </Text>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    style={inputStyles}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(99,102,241,0.4)";
                      e.target.style.boxShadow = "0 0 20px rgba(99,102,241,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.06)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </Box>

                <Box>
                  <Text as="label" fontSize="xs" fontWeight="600" color="rgba(255,255,255,0.4)" mb="2" display="block">
                    Message
                  </Text>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    style={{ ...inputStyles, resize: "vertical" as const, minHeight: "120px" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(99,102,241,0.4)";
                      e.target.style.boxShadow = "0 0 20px rgba(99,102,241,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.06)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </Box>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    width: "100%",
                    padding: "14px 0",
                    borderRadius: "14px",
                    background: sent ? "linear-gradient(135deg, #10b981, #2dd4bf)" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: sending ? "not-allowed" : "pointer",
                    opacity: sending ? 0.7 : 1,
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    border: "none",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {sending ? (
                    <>
                      <Box animation="spin-slow 1s linear infinite" display="inline-flex">
                        <Loader2 size={16} />
                      </Box>
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      ✓ Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {error && (
                  <Text
                    fontSize="xs"
                    color="#f87171"
                    textAlign="center"
                    mt="2"
                  >
                    {error}
                  </Text>
                )}
              </Flex>
            </Box>
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  );
}
