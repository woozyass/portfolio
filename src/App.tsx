import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

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

const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const smoothScroll = {
  duration: 1000,
  smooth: true,
  offset: -50,
  spy: true,
  hashSpy: true,
  delay: 100,
  isDynamic: true,
  spyThrottle: 500
};

const AppContainer = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-weight: 400;
  min-height: 100vh;
  line-height: 1.5;
  scroll-behavior: smooth;
  overflow-x: hidden;
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
`;

const ServicesContainer = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 2rem;
`;

const ResumeButton = styled.button`
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
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    &::before {
      transform: translateX(100%);
    }
  }
`;

const ProjectsSection = styled(Section)`
  background-color: #000000;
  flex-direction: column;
  gap: 60px;
  overflow: hidden;
  position: relative;
  padding: 80px 0;
`;

const ProjectsContainer = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;
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
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  font-weight: 300;
  letter-spacing: 0.2px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
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
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

const GalleryImage = styled.img<{ isLarge?: boolean }>`
  width: 100%;
  height: ${props => props.isLarge ? '100%' : '100%'};
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }
`;

const LargeImageContainer = styled.div`
  grid-row: span 2;
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

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
  text-align: center;
`;

const bubbleSplit = keyframes`
  0% {
    clip-path: circle(50% at 50% 50%);
    transform: scale(1);
  }
  50% {
    clip-path: circle(40% at 50% 50%);
    transform: scale(1.1);
  }
  100% {
    clip-path: circle(0% at 50% 50%);
    transform: scale(0);
  }
`;

const bubbleMorph = keyframes`
  0% {
    clip-path: circle(50% at 50% 50%);
    transform: scale(1);
    opacity: 1;
  }
  50% {
    clip-path: ellipse(30% 50% at 50% 50%);
    transform: scale(1.1);
    opacity: 0.5;
  }
  100% {
    clip-path: circle(0% at 50% 50%);
    transform: scale(0);
    opacity: 0;
  }
`;

const bubbleFloat = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.02);
  }
`;

const shine = keyframes`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`;

const ContactContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const ContactButton = styled.button<{ isHovered: boolean }>`
  position: relative;
  width: 120px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:hover {
    width: 300px;
    height: 80px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
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

const App: React.FC = () => {
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
  const [isTyping, setIsTyping] = useState(false);
  const linkRefs = useRef<{ [key: string]: Link | null }>({});
  const [isContactHovered, setIsContactHovered] = useState(false);
  const infoText = "Hi, I'm Christian! I build apps and website :D";

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
        const isPunctuation = /[.,!?—]/.test(char);
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

  const handleScroll = (to: string) => {
    const element = document.getElementById(to);
    if (element) {
      scroll.scrollTo(element.offsetTop, smoothScroll);
    }
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleResumeClick = () => {
    window.open('/Alejandro_CV.pdf', '_blank');
  };

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
            I'm Christian—a Front-end Web Developer and Designer from the Philippines. My love for building and designing websites started during a Web Dev subject back in college. Since then, I've spent countless hours cramming, binge-watching YouTube tutorials, and messing around with code 'til everything finally clicked. For over five years now, I've been crafting websites using WordPress, and more recently, diving deeper into JavaScript and JS frameworks to level up my skills. I'm all about creating sites that don't just work—they feel smooth, look fresh, and leave a mark. Let's build something awesome!
          </AboutText>
          <ResumeButton onClick={handleResumeClick}>
            Resume
          </ResumeButton>
        </ServicesContainer>
      </ServicesSection>

      <ProjectsSection id="projects" isVisible={visibleSections.projects}>
        <ProjectsContainer>
          <ProjectCard>
            <ProjectTitle>Rental Platform</ProjectTitle>
            <ProjectDescription>
              Developed a full-stack rental platform that connects property owners with potential tenants. 
              The platform features a modern, user-friendly interface with advanced search capabilities, 
              real-time availability tracking, and secure payment processing.
            </ProjectDescription>
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
                  alt="Rental Platform Home"
                  onClick={() => handleImageClick('/photos/photos_home.png')}
                  isLarge={true}
                />
              </LargeImageContainer>
              <GalleryImage 
                src="/photos/photos_listing.png" 
                alt="Rental Platform Listing"
                onClick={() => handleImageClick('/photos/photos_listing.png')}
              />
              <GalleryImage 
                src="/photos/photos_main.png" 
                alt="Rental Platform Main"
                onClick={() => handleImageClick('/photos/photos_main.png')}
              />
            </GalleryContainer>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>E-commerce Platform</ProjectTitle>
            <ProjectDescription>
              Built a comprehensive e-commerce solution with features like real-time inventory management,
              secure payment processing, and an intuitive admin dashboard. The platform includes advanced
              product filtering, user reviews, and a responsive design optimized for all devices.
            </ProjectDescription>
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
                  alt="E-commerce Home"
                  onClick={() => handleImageClick('/photos/photos-home-2.png')}
                  isLarge={true}
                />
              </LargeImageContainer>
              <GalleryImage 
                src="/photos/photos-listing-2.png" 
                alt="E-commerce Products"
                onClick={() => handleImageClick('/photos/photos-listing-2.png')}
              />
              <GalleryImage 
                src="/photos/photos-main-2.png" 
                alt="E-commerce Cart"
                onClick={() => handleImageClick('/photos/photos-main-2.png')}
              />
            </GalleryContainer>
          </ProjectCard>
        </ProjectsContainer>
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
              <Icon onClick={() => window.open('https://www.linkedin.com/in/john-christian-a-842882249/', '_blank')}>
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

export default App; 