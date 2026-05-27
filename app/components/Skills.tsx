"use client";

import { useRef, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MotionBox, fadeInUp, staggerContainer } from "./MotionBox";
import {
  Code2, Database, Globe, Palette, Server,
  Terminal, Cloud, Layers, Cpu, Monitor,
  Lightbulb, Clock3, Repeat2,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Globe size={20} />,
    color: "#6366f1",
    skills: [
      { name: "React.js / Next.js", level: 95, icon: <Code2 size={16} /> },
      { name: "TypeScript / JavaScript", level: 92, icon: <Terminal size={16} /> },
      { name: "Tailwind CSS / Chakra UI", level: 90, icon: <Palette size={16} /> },
      { name: "HTML5 / CSS3 / WCAG", level: 93, icon: <Layers size={16} /> },
    ],
  },
  {
    title: "State & Data",
    icon: <Server size={20} />,
    color: "#2dd4bf",
    skills: [
      { name: "Redux Toolkit / Hooks", level: 90, icon: <Server size={16} /> },
      { name: "React Query / REST APIs", level: 88, icon: <Database size={16} /> },
      { name: "GraphQL", level: 45, icon: <Layers size={16} /> },
      { name: "OAuth2 / Auth", level: 70, icon: <Terminal size={16} /> },
    ],
  },
  {
    title: "Backend",
    icon: <Cloud size={20} />,
    color: "#f59e0b",
    skills: [
      { name: "Node / Express.js", level: 50, icon: <Cpu size={16} /> },
      { name: "AWS Lambda / Jenkins / S3 / EC2", level: 45, icon: <Cloud size={16} /> },
      { name: "MongoDB / SQL", level: 45, icon: <Database size={16} /> },
      { name: "Mongoose / Routes / Models", level: 45, icon: <Monitor size={16} /> },
    ],
  },
  
  // {
  //   title: "DevOps & Tools",
  //   icon: <Cloud size={20} />,
  //   color: "#f59e0b",
  //   skills: [
  //     { name: "Jest / Cypress / RTL", level: 85, icon: <Cpu size={16} /> },
  //     { name: "Docker / Jenkins / GH Actions", level: 82, icon: <GitBranch size={16} /> },
  //     { name: "AWS Lambda / S3 / EC2", level: 80, icon: <Cloud size={16} /> },
  //     { name: "Webpack / Vite / Lighthouse", level: 88, icon: <Terminal size={16} /> },
  //   ],
  // },
];

const SOFT_SKILLS = [
  {
    title: "Problem-Solving",
    description: "Breaking complex product issues into clear, practical, user-focused solutions.",
    icon: <Lightbulb size={22} />,
    color: "#facc15",
  },
  {
    title: "Time Management",
    description: "Prioritizing work, meeting deadlines, and keeping delivery calm under pressure.",
    icon: <Clock3 size={22} />,
    color: "#38bdf8",
  },
  {
    title: "Adaptability",
    description: "Learning quickly, adjusting to changing needs, and staying effective across teams.",
    icon: <Repeat2 size={22} />,
    color: "#a78bfa",
  },
];

function AnimatedBar({ level, color }: { level: number; color: string }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <Box
      ref={barRef}
      w="full"
      h="4px"
      bg="rgba(255,255,255,0.06)"
      borderRadius="full"
      overflow="hidden"
    >
      <Box
        h="full"
        borderRadius="full"
        bg={`linear-gradient(90deg, ${color}, ${color}88)`}
        w={`${width}%`}
        transition="width 1.2s cubic-bezier(0.22,1,0.36,1)"
        position="relative"
      >
        <Box
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          w="8px"
          h="8px"
          borderRadius="full"
          bg={color}
          boxShadow={`0 0 10px ${color}80`}
          opacity={width > 0 ? 1 : 0}
          transition="opacity 0.3s 1s"
        />
      </Box>
    </Box>
  );
}

export default function Skills() {
  return (
    <Box
      as="section"
      id="skills"
      py={{ base: "14", md: "20" }}
      px={{ base: "4", md: "8" }}
      position="relative"
    >
      {/* Background glow */}
      <Box
        position="absolute"
        bottom="10%"
        right="-5%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)"
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
          mb={{ base: "8", md: "12" }}
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="#2dd4bf"
            mb="3"
          >
            My Skills
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            color="white"
            fontFamily="'Space Grotesk', sans-serif"
          >
            Technologies I{" "}
            <Text as="span" className="gradient-text">
              work with
            </Text>
          </Text>
        </MotionBox>

        {/* Category Cards */}
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="6"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <MotionBox key={cat.title} variants={fadeInUp}>
              <Box
                p={{ base: "6", md: "7" }}
                borderRadius="2xl"
                className="glass"
                h="full"
                transition="all 0.4s cubic-bezier(0.22,1,0.36,1)"
                _hover={{
                  bg: "rgba(255,255,255,0.06)",
                  transform: "translateY(-6px)",
                  boxShadow: `0 20px 60px ${cat.color}15`,
                }}
                cursor="default"
                position="relative"
                overflow="hidden"
              >
                {/* Top gradient bar */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  h="2px"
                  bg={`linear-gradient(90deg, transparent, ${cat.color}, transparent)`}
                  opacity="0.5"
                />

                {/* Category header */}
                <Flex align="center" gap="3" mb="6">
                  <Flex
                    align="center"
                    justify="center"
                    w="10"
                    h="10"
                    borderRadius="xl"
                    bg={`${cat.color}18`}
                    color={cat.color}
                  >
                    {cat.icon}
                  </Flex>
                  <Text fontWeight="700" fontSize="lg" color="white">
                    {cat.title}
                  </Text>
                </Flex>

                {/* Skills list */}
                <Flex direction="column" gap="5">
                  {cat.skills.map((skill) => (
                    <Box key={skill.name}>
                      <Flex justify="space-between" align="center" mb="2">
                        <Flex align="center" gap="2">
                          <Box color={`${cat.color}99`}>{skill.icon}</Box>
                          <Text fontSize="sm" fontWeight="500" color="rgba(255,255,255,0.7)">
                            {skill.name}
                          </Text>
                        </Flex>
                        <Text fontSize="xs" fontWeight="600" color={cat.color}>
                          {skill.level}%
                        </Text>
                      </Flex>
                      <AnimatedBar level={skill.level} color={cat.color} />
                    </Box>
                  ))}
                </Flex>
              </Box>
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
      <Box maxW="1100px" mx="auto" mt={{ base: "14", md: "20" }}>
        {/* Header */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          textAlign="center"
          mb={{ base: "8", md: "12" }}
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="#2dd4bf"
            mb="3"
          >
            Soft Skills
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            color="white"
            fontFamily="'Space Grotesk', sans-serif"
          >
            Strengths{" "}
            <Text as="span" className="gradient-text">
              beyond code
            </Text>
          </Text>
        </MotionBox>

        {/* Soft Skills */}
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="6"
        >
          {SOFT_SKILLS.map((skill) => (
            <MotionBox key={skill.title} variants={fadeInUp}>
              <Box
                className="glass glow-border"
                p={{ base: "6", md: "7" }}
                borderRadius="2xl"
                h="full"
                minH="220px"
                position="relative"
                overflow="hidden"
                transition="all 0.35s cubic-bezier(0.22,1,0.36,1)"
                _hover={{
                  bg: "rgba(255,255,255,0.06)",
                  transform: "translateY(-6px)",
                  boxShadow: `0 20px 60px ${skill.color}18`,
                }}
              >
                <Box
                  position="absolute"
                  top="-40px"
                  right="-40px"
                  w="130px"
                  h="130px"
                  borderRadius="full"
                  bg={`${skill.color}14`}
                  filter="blur(4px)"
                  pointerEvents="none"
                />

                <Flex
                  align="center"
                  justify="center"
                  w="12"
                  h="12"
                  borderRadius="xl"
                  bg={`${skill.color}18`}
                  color={skill.color}
                  mb="6"
                  boxShadow={`0 0 28px ${skill.color}18`}
                >
                  {skill.icon}
                </Flex>

                <Text
                  fontSize="lg"
                  fontWeight="700"
                  color="white"
                  mb="3"
                  fontFamily="'Space Grotesk', sans-serif"
                >
                  {skill.title}
                </Text>

                <Text
                  fontSize="sm"
                  lineHeight="1.8"
                  color="rgba(255,255,255,0.55)"
                >
                  {skill.description}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}
