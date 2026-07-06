import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-scroll';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import Resume from './Resume';

const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
  50% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
  }
  100% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
`;

const AppContainer = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-weight: 400;
  min-height: 100vh;
  line-height: 1.5;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: auto;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 15px;
    gap: 15px;
    right: 0;
    left: 0;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 10px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  padding: 5px 10px;
  white-space: nowrap;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 3px 8px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 2px 6px;
  }
`;

const NavLinkText = styled.span<{ isGlowing: boolean }>`
  display: inline-block;
  transition: all 0.3s ease;
  animation: ${props => props.isGlowing ? glowAnimation : 'none'} 1.5s ease-in-out infinite;
  white-space: nowrap;
`;

const Section = styled.section<{ isVisible: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const InfoSection = styled.section<{ isVisible: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #000000;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '50px'});
  transition: all 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ServicesSection = styled.section<{ isVisible: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #000000;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '50px'});
  transition: all 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ServicesContainer = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const SharedButtonStyles = css`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ResumeButton = styled(RouterLink)`
  width: 120px;
  height: 40px;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 35px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 30px;
    font-size: 0.9rem;
  }
`;

const ProjectsSection = styled(Section)`
  background-color: #000000;
  flex-direction: column;
  gap: 60px;
  overflow: hidden;
  position: relative;
  padding: 80px 0;
  overflow-x: hidden;
  overflow-y: visible;
  margin-bottom: 0;

  @media (max-width: 768px) {
    gap: 40px;
    padding: 60px 0;
  }

  @media (max-width: 480px) {
    gap: 30px;
    padding: 40px 0;
    font-size: 1.2rem;
    min-height: 50px;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px 0;
  width: 100%;
  max-width: 1400px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  margin: 0 auto;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    flex: 0 0 calc((100% - 800px) / 2);
    min-width: calc((100% - 800px) / 2);
  }
  
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 15px 0;
    
    &::before,
    &::after {
      flex: 0 0 calc((100% - 600px) / 2);
      min-width: calc((100% - 600px) / 2);
    }
  }

  @media (max-width: 480px) {
    gap: 15px;
    padding: 10px 0;
    
    &::before,
    &::after {
      flex: 0 0 calc((100% - 400px) / 2);
      min-width: calc((100% - 400px) / 2);
    }
  }
`;

const NavigationButton = styled.button<{ direction: 'left' | 'right'; disabled: boolean }>`
  position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 10;
  opacity: ${props => props.disabled ? 0.3 : 1};

  &:hover {
    background: ${props => props.disabled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
    transform: ${props => props.disabled ? 'translateY(-50%)' : 'translateY(-50%) scale(1.1)'};
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    ${props => props.direction === 'left' ? 'left: 5px;' : 'right: 5px;'}

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const ProjectsWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const ContactSection = styled.section<{ isVisible: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '50px'});
  transition: all 0.6s ease-out;
  position: relative;
  overflow: hidden;
  z-index: 20;
  margin: 0;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
  @media (max-width: 480px) {
    min-height: 100vh;
    height: 100vh;
    position: relative;
    margin: 0;
  }
`;

const InfoContainer = styled.div`
  text-align: center;
`;

const InfoText = styled.div`
  font-size: 2.5rem;
  text-align: center;
  line-height: 1.5;
  min-height: 100px;
  color: white;
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 2rem;
    min-height: 80px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    min-height: 60px;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: white;
  margin-left: 4px;
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 800px;
  flex: 0 0 800px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  scroll-snap-align: center;

  @media (max-width: 768px) {
    width: 600px;
    flex: 0 0 600px;
    padding: 30px;
  }

  @media (max-width: 480px) {
    width: 400px;
    flex: 0 0 400px;
    padding: 20px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  font-weight: 300;
  letter-spacing: 0.2px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 15px;
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 20px;
  }
`;

const TechBadge = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #ffffff;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 500;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
    font-size: 0.6rem;
  }
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`;

const GalleryImage = styled.img<{ isLarge?: boolean }>`
  width: 100%;
  height: auto;
  aspect-ratio: ${props => props.isLarge ? '16 / 9' : '16 / 9'};
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const LargeImageContainer = styled.div`
  grid-row: span 2;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const ProjectLink = styled.a`
  color: #8ecae6;
  text-decoration: none;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(142, 202, 230, 0.3);
  background: rgba(142, 202, 230, 0.08);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(142, 202, 230, 0.15);
    border-color: rgba(142, 202, 230, 0.5);
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;

const WebsitePreviewWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const WebsitePreviewContainer = styled.div`
  width: 100%;
  min-height: 420px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #1a1a1a;
  position: relative;
`;

const WebsitePreview = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
`;

const DevPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  text-align: center;
  padding: 2rem;
`;

const Modal = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
`;

const ContactContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const ContactButton = styled.button<{ isHovered: boolean }>`
  ${SharedButtonStyles}

  width: 120px;
  height: 40px;
  letter-spacing: 2px;

  &:hover {
    width: 300px;
    height: 80px;
    /* Keep shared hover styles */
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
`;

const ContactText = styled.span<{ isHovered: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.isHovered ? 0 : 1};
  transform: translate(-50%, -50%) scale(${props => props.isHovered ? 0.8 : 1});
  font-size: 14px;
`;

const ContactIcons = styled.div<{ isHovered: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 120px;
  opacity: ${props => props.isHovered ? 1 : 0};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-50%, -50%) scale(${props => props.isHovered ? 1 : 0.8});

  @media (max-width: 768px) {
    gap: 80px;
  }

  @media (max-width: 480px) {
    gap: 60px;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px;

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    padding: 6px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    padding: 4px;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 15px;
    left: 15px;
    font-size: 12px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    left: 10px;
    font-size: 10px;
    gap: 4px;
  }
`;

const FooterText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.8;
`;

const EmailLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Portfolio: React.FC = () => {
  const [hoveredStates, setHoveredStates] = useState<{ [key: string]: number | null }>({
    info: null,
    services: null,
    projects: null,
    contact: null
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState({
    info: false,
    services: false,
    projects: false,
    contact: false
  });
  const [displayedInfoText, setDisplayedInfoText] = useState('');
  const linkRefs = useRef<{ [key: string]: Link | null }>({});
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const infoText = "Hi, I'm Christian! I build apps and websites :D";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (!visibleSections.info) return;

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentIndex < infoText.length) {
        setDisplayedInfoText(infoText.slice(0, currentIndex + 1));
        currentIndex++;
        
        const randomDelay = Math.random() * 100 + 50;
        const char = infoText[currentIndex - 1];
        const isPunctuation = /[.,!?]/.test(char);
        const delay = isPunctuation ? randomDelay * 2 : randomDelay;
        
        timeoutId = setTimeout(typeNextChar, delay);
      }
    };

    setDisplayedInfoText('');
    typeNextChar();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visibleSections.info]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, text: string, section: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const charWidth = rect.width / text.length;
    const index = Math.floor(x / charWidth);
    setHoveredStates(prev => ({
      ...prev,
      [section]: index
    }));
  };

  const handleMouseLeave = (section: string) => {
    setHoveredStates(prev => ({
      ...prev,
      [section]: null
    }));
  };

  const renderNavLink = (to: string, text: string) => (
    <NavLink 
      to={to} 
      smooth={true} 
      duration={500}
      ref={(el: Link | null): void => {
        linkRefs.current[to] = el;
      }}
      onMouseMove={(e: React.MouseEvent<HTMLButtonElement>) => handleMouseMove(e, text, to)}
      onMouseLeave={() => handleMouseLeave(to)}
    >
      {text.split('').map((char, index) => (
        <NavLinkText 
          key={index} 
          isGlowing={hoveredStates[to] === index}
        >
          {char}
        </NavLinkText>
      ))}
    </NavLink>
  );

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const checkScrollPosition = () => {
    if (projectsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = projectsContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsContainerRef.current) {
      const container = projectsContainerRef.current;
      const scrollAmount = 800;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
      
      setTimeout(checkScrollPosition, 500);
    }
  };

  useEffect(() => {
    const container = projectsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <AppContainer>
      <NavBar>
        {renderNavLink('info', '/info')}
        {renderNavLink('services', '/about')}
        {renderNavLink('projects', '/projects')}
        {renderNavLink('contact', '/contact')}
      </NavBar>

      <InfoSection id="info" isVisible={visibleSections.info}>
        <InfoContainer>
          <InfoText>
            {displayedInfoText}
            <Cursor />
          </InfoText>
        </InfoContainer>
      </InfoSection>

      <ServicesSection id="services" isVisible={visibleSections.services}>
        <ServicesContainer>
          <AboutText>
            I'm Christian, a Fullstack Web Developer and Designer from the Philippines. I build end-to-end web experiences from clean, responsive UIs to reliable backends, and I also work with ServiceNow for enterprise workflows and automation. Let's build something awesome!
          </AboutText>
          <ResumeButton to="/resume">
            Resume
          </ResumeButton>
        </ServicesContainer>
      </ServicesSection>

      <ProjectsSection id="projects" isVisible={visibleSections.projects}>
        <ProjectsWrapper>
          <NavigationButton 
            direction="left" 
            disabled={!canScrollLeft}
            onClick={() => scrollProjects('left')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </NavigationButton>
          <ProjectsContainer ref={projectsContainerRef}>
            <ProjectCard>
              <ProjectTitle>Freight / Trucking Platform</ProjectTitle>
              <ProjectDescription>
                A live freight and trucking platform for managing logistics operations.
                Built as a full production website serving real business needs in the Philippines.
              </ProjectDescription>
              <ProjectLinks>
                <ProjectLink href="https://lfxph.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  lfxph.com
                </ProjectLink>
              </ProjectLinks>
              <TechStack>
                <TechBadge>React</TechBadge>
                <TechBadge>Node.js</TechBadge>
                <TechBadge>Full Stack</TechBadge>
              </TechStack>
              <WebsitePreviewWrapper>
                <WebsitePreviewContainer>
                  <WebsitePreview
                    src="https://lfxph.com"
                    title="LFXPH Freight Platform"
                    loading="lazy"
                  />
                </WebsitePreviewContainer>
              </WebsitePreviewWrapper>
            </ProjectCard>

            <ProjectCard>
              <ProjectTitle>POS System: Stoq</ProjectTitle>
              <ProjectDescription>
                A point-of-sale system currently in active development.
                Designed for inventory management, sales tracking, and streamlined retail operations.
              </ProjectDescription>
              <ProjectLinks>
                <ProjectLink href="https://github.com/woozyass/stoq" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </ProjectLink>
              </ProjectLinks>
              <TechStack>
                <TechBadge>React</TechBadge>
                <TechBadge>Node.js</TechBadge>
                <TechBadge>POS</TechBadge>
              </TechStack>
              <DevPlaceholder>
                <span>🚧 Still in Development</span>
                <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Check back soon for screenshots</span>
              </DevPlaceholder>
            </ProjectCard>

            <ProjectCard>
              <ProjectTitle>Rentahanan</ProjectTitle>
              <ProjectDescription>
                A full-stack rental platform that connects property owners with potential tenants.
                Features a modern interface with advanced search, real-time availability tracking,
                and secure payment processing.
              </ProjectDescription>
              <ProjectLinks>
                <ProjectLink href="https://github.com/woozyass/rentahananv1" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </ProjectLink>
              </ProjectLinks>
              <TechStack>
                <TechBadge>JavaScript</TechBadge>
                <TechBadge>React</TechBadge>
                <TechBadge>Node.js</TechBadge>
                <TechBadge>Express</TechBadge>
                <TechBadge>MongoDB</TechBadge>
              </TechStack>
              <GalleryContainer>
                <LargeImageContainer>
                  <GalleryImage 
                    src="/photos/photos_home.png" 
                    alt="Rentahanan Home"
                    onClick={() => handleImageClick("/photos/photos_home.png")}
                    isLarge={true}
                  />
                </LargeImageContainer>
                <GalleryImage 
                  src="/photos/photos_listing.png" 
                  alt="Rentahanan Listing"
                  onClick={() => handleImageClick("/photos/photos_listing.png")}
                />
                <GalleryImage 
                  src="/photos/photos_main.png" 
                  alt="Rentahanan Main"
                  onClick={() => handleImageClick("/photos/photos_main.png")}
                />
              </GalleryContainer>
            </ProjectCard>

            <ProjectCard>
              <ProjectTitle>Anti Sneaker Sneaker Club</ProjectTitle>
              <ProjectDescription>
                A comprehensive e-commerce platform with real-time inventory management,
                secure payment processing, and an intuitive admin dashboard. Includes advanced
                product filtering, user reviews, and a responsive design optimized for all devices.
              </ProjectDescription>
              <ProjectLinks>
                <ProjectLink href="https://github.com/woozyass/ASSC" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </ProjectLink>
              </ProjectLinks>
              <TechStack>
                <TechBadge>React</TechBadge>
                <TechBadge>Node.js</TechBadge>
                <TechBadge>PostgreSQL</TechBadge>
                <TechBadge>Redux</TechBadge>
                <TechBadge>Stripe</TechBadge>
              </TechStack>
              <GalleryContainer>
                <LargeImageContainer>
                  <GalleryImage 
                    src="/photos/photos-home-2.png" 
                    alt="ASSC Home"
                    onClick={() => handleImageClick("/photos/photos-home-2.png")}
                    isLarge={true}
                  />
                </LargeImageContainer>
                <GalleryImage 
                  src="/photos/photos-listing-2.png" 
                  alt="ASSC Products"
                  onClick={() => handleImageClick("/photos/photos-listing-2.png")}
                />
                <GalleryImage 
                  src="/photos/photos-main-2.png" 
                  alt="ASSC Cart"
                  onClick={() => handleImageClick("/photos/photos-main-2.png")}
                />
              </GalleryContainer>
            </ProjectCard>
          </ProjectsContainer>
          <NavigationButton 
            direction="right" 
            disabled={!canScrollRight}
            onClick={() => scrollProjects('right')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M9.59 7.41L11 6l6 6-6 6-1.41-1.41L13.17 12z"/>
            </svg>
          </NavigationButton>
        </ProjectsWrapper>
      </ProjectsSection>

      <ContactSection id="contact" isVisible={visibleSections.contact}>
        <ContactContainer>
          <ContactButton
            isHovered={isContactHovered}
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          >
            <ContactText isHovered={isContactHovered}>CONTACT</ContactText>
            <ContactIcons isHovered={isContactHovered}>
              <Icon onClick={() => window.open('https://www.linkedin.com/in/jcalejandro/', '_blank')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Icon>
              <Icon onClick={() => handleEmailClick('alejandro.jchristian@gmail.com')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
              </Icon>
            </ContactIcons>
          </ContactButton>
        </ContactContainer>
      </ContactSection>

      <Footer>
        <FooterText>Christian</FooterText>
        <EmailLink href="mailto:alejandro.jchristian@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
          </svg>
          alejandro.jchristian@gmail.com
        </EmailLink>
        <FooterText>ALL RIGHTS RESERVED © 2025</FooterText>
      </Footer>

      <Modal isOpen={!!selectedImage}>
        {selectedImage && (
          <>
            <CloseButton onClick={handleCloseModal}>×</CloseButton>
            <ModalImage src={selectedImage} alt="Full size project screenshot" />
          </>
        )}
      </Modal>
    </AppContainer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App; 