"use client";

import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MotionBox, fadeInUp, staggerContainer } from "./MotionBox";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Marktine Technologies",
    role: "Software Engineer",
    period: "Mar 2023 — Mar 2026",
    location: "Jaipur, India",
    color: "#6366f1",
    description:
      "Leading frontend development of multi-workspace CRM & Productivity PWA architecture",
    highlights: [
      "Solely architected and developed the entire front-end of an enterprise-grade SaaS platform from scratch using React.js, Next.js, and TypeScript, managing everything from complex UI state to seamless API integrations.",
      "Engineered a multi-channel Social Integration system enabling users to securely link 7+ major platforms (LinkedIn, Instagram, Facebook, Pinterest, YouTube, Telegram, and X/Twitter) within 3-4 clicks, streamlining cross-platform authorization.",
      "Developed a unified Social Composer & Scheduler module that allowed simultaneous post creation, scheduling, and multi-network publishing from a single dashboard, improving daily content operations efficiency by 50%.",
      "Integrated Generative AI & Machine Learning APIs to build an advanced automated engagement engine, reducing manual social media operational time by up to 70%.",
      "Implemented NLP-driven sentiment and reaction filters (Positive, Negative, Neutral) for post comments and likes, enabling the system to auto-reply using custom pre-defined template libraries or context-aware AI-generated responses.",
      "Built a robust Real-time Social Analytics Dashboard using advanced data-visualization techniques to display high-volume metrics like Unique Impressions (359k+ data points), Engagement Rates, and Custom Tracking.",
      "Designed complex Frontend state management workflows for asynchronous ML API responses, prompt-based media updates, and custom post configuration controls (Marketing, Sales, and Recruitment objectives).",
      "Optimized application performance through code-splitting, lazy loading, and efficient rendering, resulting in a 40% improvement in page rendering speed and a 35% reduction in production bundle size."
    ],
  },
  {
    company: "Nobroker",
    role: "Frontend Developer",
    period: "Feb 2022 — Aug 2022",
    location: "Bengaluru, India",
    color: "#2dd4bf",
    description:
      "Built high-traffic hotel management dashboard with SSR optimizations.",
    highlights: [
      "Spearheaded the integration of third-party event modules and interactive gamification systems within the ecosystem, successfully boosting monthly user engagement and retention by 30% MoM (Month-on-Month).",
      "Resolved 100+ complex UI defects and 10+ critical logical bottlenecks related to high-volume data pagination, infinite scrolling, and nested page navigation, significantly improving application stability.",
      "Optimized core interface workflows and client-side rendering, resulting in a seamless, lag-free user experience and higher user satisfaction scores.",
      "Collaborated closely with cross-functional teams to design high-converting, interactive interfaces that allowed users to participate in events and win rewards, driving organic platform growth.",
      "Refactored legacy code segments to ensure smooth routing and state persistence across deeply nested user journeys."
    ],
  },
  // {
  //   company: "CS Mock",
  //   role: "Frontend Developer",
  //   period: "Sept 2023 — Oct 2024",
  //   location: "Noida, India",
  //   color: "#f59e0b",
  //   description:
  //     "Optimized ed-tech platform performance and scalable state architecture.",
  //   highlights: [
  //     "Architected centralized Redux state management integrating RESTful API endpoints, enabling real-time data-driven UI updates and cutting average data-fetch latency by 30%",
  //     "Diagnosed rendering bottlenecks using React Profiler and Chrome DevTools; restructured component tree with memoization, dynamic imports, and minification to reduce JavaScript bundle size by 40% and improve Time-to-Interactive by seconds",
  //     "Built an automated asset optimization pipeline with WebP image conversion and intersection-observer lazy loading, lifting mobile Lighthouse Performance scores by 25 points across key device profiles",
  //   ],
  // },
  // {
  //   company: "CS Mock",
  //   role: "Frontend Developer Intern",
  //   period: "Jan 2023 — Jun 2023",
  //   location: "Noida, India",
  //   color: "#f59e0b",
  //   description:
  //     "Assisted in building an EdTech platform with React.js and Redux.",
  //   highlights: [
  //     "Assisted in building an EdTech platform with React.js and Redux, designed reusable components, debugged UI issues, and improved load time ",
  //     "Ensured cross-browser support and code quality with senior dev guidance, Participated in stand-ups, reviews, and agile processes to ship faster releases",
  //   ],
  // },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Box
      as="section"
      id="experience"
      py={{ base: "14", md: "20" }}
      px={{ base: "4", md: "8" }}
      position="relative"
    >
      {/* Background glow */}
      <Box
        position="absolute"
        top="40%"
        right="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Box maxW="900px" mx="auto">
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
            color="#f59e0b"
            mb="3"
          >
            Experience
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            color="white"
            fontFamily="'Space Grotesk', sans-serif"
          >
            My Professional{" "}
            <Text as="span" className="gradient-text">
              Journey
            </Text>
          </Text>
        </MotionBox>

        {/* Timeline */}
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          position="relative"
        >
          {/* Vertical Line */}
          <Box
            position="absolute"
            left={{ base: "20px", md: "30px" }}
            top="0"
            bottom="0"
            w="2px"
            bg="linear-gradient(180deg, rgba(99,102,241,0.3), rgba(45,212,191,0.3), rgba(245,158,11,0.3))"
          />

          <Flex direction="column" gap="6">
            {EXPERIENCES.map((exp, i) => (
              <MotionBox key={exp.company} variants={fadeInUp}>
                <Box
                  position="relative"
                  pl={{ base: "14", md: "20" }}
                >
                  {/* Timeline dot */}
                  <Box
                    position="absolute"
                    left={{ base: "12px", md: "22px" }}
                    top="28px"
                    w="18px"
                    h="18px"
                    borderRadius="full"
                    bg={exp.color}
                    boxShadow={`0 0 20px ${exp.color}40`}
                    border="3px solid #0a0a0f"
                    zIndex="1"
                  />

                  {/* Card */}
                  <Box
                    p={{ base: "5", md: "6" }}
                    borderRadius="2xl"
                    className="glass"
                    transition="all 0.3s"
                    _hover={{
                      bg: "rgba(255,255,255,0.05)",
                    }}
                    cursor="pointer"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    position="relative"
                    overflow="hidden"
                  >
                    {/* Top accent */}
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      w="3px"
                      h={expanded === i ? "100%" : "0%"}
                      bg={exp.color}
                      transition="height 0.4s cubic-bezier(0.22,1,0.36,1)"
                      borderRadius="full"
                    />

                    {/* Header */}
                    <Flex justify="space-between" align="start" mb="2">
                      <Box>
                        <Text fontWeight="700" fontSize="md" color="white" mb="1">
                          {exp.role}
                        </Text>
                        <Flex align="center" gap="4" flexWrap="wrap">
                          <Flex align="center" gap="1.5">
                            <Briefcase size={13} color={exp.color} />
                            <Text fontSize="sm" color={exp.color} fontWeight="600">
                              {exp.company}
                            </Text>
                          </Flex>
                          <Flex align="center" gap="1.5">
                            <Calendar size={13} color="rgba(255,255,255,0.35)" />
                            <Text fontSize="xs" color="rgba(255,255,255,0.35)">
                              {exp.period}
                            </Text>
                          </Flex>
                          <Flex align="center" gap="1.5">
                            <MapPin size={13} color="rgba(255,255,255,0.35)" />
                            <Text fontSize="xs" color="rgba(255,255,255,0.35)">
                              {exp.location}
                            </Text>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box
                        transition="transform 0.3s"
                        transform={expanded === i ? "rotate(180deg)" : "rotate(0deg)"}
                        color="rgba(255,255,255,0.3)"
                        mt="1"
                        flexShrink="0"
                      >
                        <ChevronDown size={18} />
                      </Box>
                    </Flex>

                    <Text fontSize="sm" color="rgba(255,255,255,0.4)" mt="2" lineHeight="1.7">
                      {exp.description}
                    </Text>

                    {/* Expanded Details */}
                    <Box
                      maxH={expanded === i ? "400px" : "0px"}
                      overflow="hidden"
                      transition="all 0.4s cubic-bezier(0.22,1,0.36,1)"
                      mt={expanded === i ? "4" : "0"}
                      opacity={expanded === i ? 1 : 0}
                    >
                      <Box
                        borderTop="1px solid rgba(255,255,255,0.06)"
                        pt="4"
                      >
                        <Flex direction="column" gap="2.5">
                          {exp.highlights.map((h, j) => (
                            <Flex key={j} align="start" gap="3">
                              <Box
                                w="5px"
                                h="5px"
                                borderRadius="full"
                                bg={exp.color}
                                mt="2"
                                flexShrink="0"
                                opacity="0.6"
                              />
                              <Text fontSize="sm" color="rgba(255,255,255,0.5)" lineHeight="1.7">
                                {h}
                              </Text>
                            </Flex>
                          ))}
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Flex>
        </MotionBox>
      </Box>
    </Box>
  );
}
