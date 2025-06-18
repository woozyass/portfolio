import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #00ff00;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InfoSection = styled(Section)`
  background: #000000;
`;

const InfoText = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  line-height: 1.5;
  min-height: 100px;
`;

const ServicesSection = styled(Section)`
  background: #000000;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const ProjectsSection = styled(Section)`
  background: #000000;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #00ff00;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #00cc00;
  }
`;

const ContactSection = styled(Section)`
  background: #000000;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  width: 100%;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const FormTextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background: #00ff00;
  color: #000000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #00cc00;
  }
`;

const ResumeButton = styled.button`
  padding: 1rem 2rem;
  border: 2px solid #00ff00;
  border-radius: 8px;
  background: transparent;
  color: #00ff00;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  backdrop-filter: blur(5px);
  background: rgba(0, 255, 0, 0.1);

  &:hover {
    background: rgba(0, 255, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const App: React.FC = () => {
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
  const infoText = "Hi, I'm Christian! I build apps and website :D";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex < infoText.length) {
        setDisplayedInfoText((prev) => prev + infoText[currentIndex]);
        currentIndex++;
        const delay = Math.random() * 100 + 50;
        setTimeout(typeText, delay);
      }
    };
    typeText();
  }, []);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleResumeClick = () => {
    window.open('/Alejandro_CV.pdf', '_blank');
  };

  const renderNavLink = (to: string, text: string) => (
    <NavLink 
      to={to} 
      smooth={true} 
      duration={500}
      ref={(el: Link | null): void => {
        linkRefs.current[to] = el;
      }}
    >
      {text}
    </NavLink>
  );

  return (
    <AppContainer>
      <NavBar>
        {renderNavLink('info', '/info')}
        {renderNavLink('services', '/about')}
        {renderNavLink('projects', '/projects')}
        {renderNavLink('contact', '/contact')}
      </NavBar>

      <InfoSection id="info" className={visibleSections.info ? 'visible' : ''}>
        <InfoText>{displayedInfoText}</InfoText>
        <ResumeButton onClick={handleResumeClick}>Resume</ResumeButton>
      </InfoSection>

      <ServicesSection id="services" className={visibleSections.services ? 'visible' : ''}>
        <ServicesTitle>About Me</ServicesTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceTitle>Front-end Development</ServiceTitle>
            <ServiceDescription>
              I specialize in creating responsive and interactive user interfaces using modern web technologies.
            </ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>UI/UX Design</ServiceTitle>
            <ServiceDescription>
              I design intuitive and engaging user experiences that make applications both beautiful and functional.
            </ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Mobile Development</ServiceTitle>
            <ServiceDescription>
              I build cross-platform mobile applications that deliver native-like experiences.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <ProjectsSection id="projects" className={visibleSections.projects ? 'visible' : ''}>
        <ProjectsGrid>
          <ProjectCard>
            <ProjectImage src="/project1.jpg" alt="Project 1" onClick={() => handleImageClick('/project1.jpg')} />
            <ProjectInfo>
              <ProjectTitle>Project 1</ProjectTitle>
              <ProjectDescription>
                A responsive web application built with React and TypeScript.
              </ProjectDescription>
              <ProjectLink href="#" target="_blank">View Project</ProjectLink>
            </ProjectInfo>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src="/project2.jpg" alt="Project 2" onClick={() => handleImageClick('/project2.jpg')} />
            <ProjectInfo>
              <ProjectTitle>Project 2</ProjectTitle>
              <ProjectDescription>
                A mobile app developed using React Native and Firebase.
              </ProjectDescription>
              <ProjectLink href="#" target="_blank">View Project</ProjectLink>
            </ProjectInfo>
          </ProjectCard>
        </ProjectsGrid>
      </ProjectsSection>

      <ContactSection id="contact" className={visibleSections.contact ? 'visible' : ''}>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactForm>
          <FormInput type="text" placeholder="Name" required />
          <FormInput type="email" placeholder="Email" required />
          <FormTextArea placeholder="Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactSection>
    </AppContainer>
  );
};

export default App; 