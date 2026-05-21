"use client";

import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MotionBox, fadeInUp, staggerContainer } from "./MotionBox";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const FILTERS = ["All", "SaaS", "Web"];

const PROJECTS = [
  {
    title: "Vriti.ai",
    description:
      "Vriti.ai is an AI-powered job portal featuring resume parsing, AI-based job recommendations, profile-based auto-apply, AI interviews, and end-to-end job application tracking, enhancing candidate and recruiter experience while improving hiring efficiency by 40%.",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "GraphQL",
      "Real-time Architecture",
    ],
    category: "SaaS",
    github: "https://github.com/sumit-krk",
    live: "https://vriti.ai/",
  },
  {
    title: "Social Vaarta",
    description:
      "Social Vaarta is an AI-powered social media management platform that enables users to manage multiple social accounts from a centralized dashboard, automate posting, and analyze reactions & comments, reducing daily social media efforts by 50%.",
    tags: [
      "React.js",
      "TypeScript",
      "GraphQL",
      "TanStack Table",
      "TanStack Virtual",
      "Optimistic UI",
    ],
    category: "SaaS",
    github: "https://github.com/sumit-krk",
    live: "https://social.vaarta.ai/login",
  },
  {
    title: "Visionary AI",
    description:
      "Visionary AI is a generative AI platform that creates text, images, and videos based on user prompts, leveraging powerful AI models to generate high-quality, pixel-perfect outputs with enhanced accuracy.",
    tags: [
      "Next.js",
      "SSR",
      "Server-side Caching",
      "Next.js Image Optimization",
      "Lighthouse Performance Scores",
    ],
    category: "SaaS",
    github: "https://github.com/sumit-krk",
    live: "https://visionary.vaarta.ai/login",
  },
  // {
  //   title: "Staffing",
  //   description:
  //     "Staffing is a job portal (Part of the Vriti website) that provides end-to-end solutions for posting Vendor and contract-specific jobs and it also works upon providing resources on permanent and contract basis.",
  //   tags: [
  //     "Next.js",
  //     "Redux Toolkit",
  //     "SSR",
  //     "REST APIs",
  //     "Performance Optimization",
  //     "TypeScript",
  //   ],
  //   category: "SaaS",
  //   github: "https://github.com/anjalimadd",
  //   live: "https://staffing.vriti.ai/",
  // },
  {
    title: "Portfolio Website",
    description:
      "This premium dark-themed portfolio built with Next.js 16, Chakra UI v3, and Framer Motion with interactive animations.",
    tags: ["Next.js", "Chakra UI", "Framer Motion", "TypeScript"],
    category: "Web",
    github: "https://github.com/sumit-krk/Mern_Portfolio",
    live: "#"
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <Box
      as="section"
      id="projects"
      py={{ base: "14", md: "20" }}
      px={{ base: "4", md: "8" }}
      position="relative"
    >
      {/* Background glow */}
      <Box
        position="absolute"
        top="30%"
        left="-8%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)"
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
          mb={{ base: "10", md: "12" }}
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="#8b5cf6"
            mb="3"
          >
            Portfolio
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            color="white"
            fontFamily="'Space Grotesk', sans-serif"
          >
            Featured{" "}
            <Text as="span" className="gradient-text">
              Projects
            </Text>
          </Text>
        </MotionBox>

        {/* Filter Tabs */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          mb="10"
        >
          <Flex justify="center" gap="2" flexWrap="wrap">
            {FILTERS.map((f) => (
              <Box
                key={f}
                as="button"
                px="5"
                py="2"
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
                cursor="pointer"
                transition="all 0.3s"
                bg={activeFilter === f ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.03)"}
                color={activeFilter === f ? "#a78bfa" : "rgba(255,255,255,0.5)"}
                border={activeFilter === f ? "1px solid rgba(99,102,241,0.3)" : "1px solid rgba(255,255,255,0.06)"}
                _hover={{
                  bg: activeFilter === f ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.06)",
                  color: activeFilter === f ? "#a78bfa" : "rgba(255,255,255,0.7)",
                }}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </Box>
            ))}
          </Flex>
        </MotionBox>

        {/* Project Grid */}
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap="6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Box
                  borderRadius="2xl"
                  overflow="hidden"
                  className="glass"
                  transition="all 0.4s cubic-bezier(0.22,1,0.36,1)"
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 60px rgba(99,102,241,0.15)",
                  }}
                  cursor="default"
                  h="full"
                  display="flex"
                  flexDirection="column"
                  position="relative"
                  role="group"
                >
                  {/* Card Content */}
                  <Flex direction="column" p="5" gap="3" flex="1">
                    <Flex align="center" justify="space-between" flexWrap="wrap" gap="2">
                      <Flex align="center" gap="2">
                        <Text fontWeight="700" fontSize="md" color="white">
                          {project.title}
                        </Text>
                        <Box
                          px="2.5"
                          py="0.5"
                          borderRadius="full"
                          bg="rgba(0,0,0,0.3)"
                          fontSize="xs"
                          fontWeight="600"
                          color="rgba(255,255,255,0.8)"
                        >
                          {project.category}
                        </Box>
                      </Flex>
                      <Flex align="center" gap="2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: "6px",
                            borderRadius: "8px",
                            background: "rgba(255,255,255,0.06)",
                            color: "rgba(255,255,255,0.6)",
                            transition: "all 0.2s",
                            display: "inline-flex",
                          }}
                        >
                        {project.category !== "SaaS" && <Github size={14} />}
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: "6px",
                            borderRadius: "8px",
                            background: "rgba(255,255,255,0.06)",
                            color: "rgba(255,255,255,0.6)",
                            transition: "all 0.2s",
                            display: "inline-flex",
                          }}
                        >
                          <ExternalLink size={14} />
                        </a>
                        <ArrowUpRight
                          size={16}
                          color="rgba(255,255,255,0.3)"
                          style={{ transition: "all 0.3s" }}
                        />
                      </Flex>
                    </Flex>
                    <Text fontSize="sm" color="rgba(255,255,255,0.4)" lineHeight="1.7" flex="1">
                      {project.description}
                    </Text>
                    <Flex gap="2" flexWrap="wrap" mt="1">
                      {project.tags.map((tag) => (
                        <Box
                          key={tag}
                          px="2.5"
                          py="1"
                          borderRadius="md"
                          bg="rgba(99,102,241,0.08)"
                          border="1px solid rgba(99,102,241,0.15)"
                          fontSize="xs"
                          fontWeight="500"
                          color="rgba(167,139,250,0.8)"
                        >
                          {tag}
                        </Box>
                      ))}
                    </Flex>
                  </Flex>
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}
