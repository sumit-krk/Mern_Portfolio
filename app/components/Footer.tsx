"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="footer"
      position="relative"
      pt="8"
      pb="6"
      px={{ base: "4", md: "8" }}
    >
      {/* Top gradient border */}
      <Box
        position="absolute"
        top="0"
        left="10%"
        right="10%"
        h="1px"
        bg="linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(139,92,246,0.3), transparent)"
      />

      <Box maxW="1100px" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap="5"
        >
          {/* Left – Brand */}
          <Flex direction="column" align={{ base: "center", md: "start" }} gap="1">
            <Text
              fontWeight="800"
              fontSize="xl"
              className="gradient-text"
              fontFamily="'Space Grotesk', sans-serif"
            >
              {"<SK />"}
            </Text>
            <Text fontSize="xs" color="rgba(255,255,255,0.3)">
              Crafting digital experiences
            </Text>
          </Flex>

          {/* Center – Quick Links */}
          <Flex gap={{ base: "3", md: "6" }} flexWrap="wrap" justify="center">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.35)",
                  transition: "color 0.2s",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </Flex>

          {/* Right – Social + Back to top */}
          <Flex align="center" gap="3">
            {[
              { icon: <Github size={15} />, href: "https://github.com/sumit-krk" },
              { icon: <Linkedin size={15} />, href: "https://www.linkedin.com/in/sumitkrk/" },
              { icon: <Mail size={15} />, href: "mailto:sumitkumar308786@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "8px",
                  borderRadius: "8px",
                  color: "rgba(255,255,255,0.3)",
                  transition: "all 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                {s.icon}
              </a>
            ))}

            {/* Back to top */}
            <Box
              onClick={handleScrollTop}
              p="2"
              borderRadius="lg"
              bg="rgba(99,102,241,0.1)"
              color="#818cf8"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                bg: "rgba(99,102,241,0.2)",
                transform: "translateY(-2px)",
              }}
              ml="2"
            >
              <ArrowUp size={15} />
            </Box>
          </Flex>
        </Flex>

        {/* Copyright */}
        <Flex
          justify="center"
          align="center"
          gap="1"
          mt="8"
          pt="6"
          borderTop="1px solid rgba(255,255,255,0.04)"
        >
          <Text fontSize="xs" color="rgba(255,255,255,0.2)">
            © {new Date().getFullYear()} Sumit Kumar. Made with
          </Text>
          <Heart size={12} color="#ef4444" fill="#ef4444" />
          <Text fontSize="xs" color="rgba(255,255,255,0.2)">
            and lots of ☕
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
