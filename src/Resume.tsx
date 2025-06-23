import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  background-color: #000000;
  min-height: 100vh;
  padding: 1px 0; /* Prevents margin collapse */
`;

const ResumeContainer = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 4rem;
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    margin: 0.5rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ContactInfo = styled.p`
  font-size: 1.1rem;
  color: #cccccc;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const EducationEntry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const SchoolName = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Degree = styled.p`
  font-size: 1.1rem;
  color: #cccccc;
`;

const SkillsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Skill = styled.li`
  font-size: 1.1rem;
  background-color: #1a1a1a;
  padding: 0.75rem;
  border-radius: 6px;
  text-align: center;
`;

const ExperienceEntry = styled.div`
  margin-bottom: 2rem;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 50%;
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
`;

const JobLocation = styled.p`
  font-size: 1rem;
  color: #cccccc;
  text-align: right;
`;

const JobCompany = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 0.25rem;
  color: #e0e0e0;
`;

const JobDate = styled.p`
  font-size: 1rem;
  color: #cccccc;
  margin-bottom: 1rem;
`;

const JobDescription = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #e0e0e0;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const ReferencesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ReferenceEntry = styled.div`
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 8px;
`;

const ReferenceName = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ReferenceDetail = styled.p`
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.5;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 10;

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    left: auto;
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
  }
`;

const FooterText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: white;
  }
`;

const Resume: React.FC = () => {
  return (
    <PageWrapper>
      <ResumeContainer>
        <Header>
          <Name>John Christian Alejandro</Name>
          <ContactInfo>(+63) 977-423-8913 | alejandro.jchristian@gmail.com</ContactInfo>
        </Header>

        <Section>
          <SectionTitle>Education</SectionTitle>
          <EducationEntry>
            <div>
              <SchoolName>Arellano University</SchoolName>
              <Degree>Bachelor of Science in Computer Science</Degree>
            </div>
          </EducationEntry>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsList>
            <Skill>HTML/CSS</Skill>
            <Skill>JavaScript</Skill>
            <Skill>ReactJS</Skill>
            <Skill>NextJS</Skill>
            <Skill>Flutter</Skill>
            <Skill>UI/UX Design</Skill>
            <Skill>Google Workspace</Skill>
            <Skill>Customer Service</Skill>
            <Skill>Technical Support</Skill>
          </SkillsList>
        </Section>

        <Section>
          <SectionTitle>Professional Experience</SectionTitle>
          <ExperienceEntry>
            <JobHeader>
              <JobTitle>Part-time Full Stack Developer</JobTitle>
              <JobLocation>Ortigas, Pasig City</JobLocation>
            </JobHeader>
            <JobCompany>Fitera</JobCompany>
            <JobDate>April 2025 - Present</JobDate>
            <JobDescription>
              <li>Developed the website of the company using React/NodeJS.</li>
              <li>Maintains website and creates new posting for company updates.</li>
            </JobDescription>
          </ExperienceEntry>

          <ExperienceEntry>
            <JobHeader>
              <JobTitle>Frontend Developer</JobTitle>
              <JobLocation>Kuala Lumpur, Malaysia</JobLocation>
            </JobHeader>
            <JobCompany>Speedrent Technologies</JobCompany>
            <JobDate>June 2023 - Present</JobDate>
            <JobDescription>
              <li>Developed user-facing features using Next.js to ensure seamless user experiences.</li>
              <li>Optimized components for performance across various devices and browsers.</li>
              <li>Collaborated with backend developers and designers to enhance usability.</li>
            </JobDescription>
          </ExperienceEntry>
          
          <ExperienceEntry>
            <JobHeader>
              <JobTitle>Teammate - Subject Matter Expert</JobTitle>
              <JobLocation>Ortigas, Pasig City</JobLocation>
            </JobHeader>
            <JobCompany>Task Us</JobCompany>
            <JobDate>June 2022 - August 2023</JobDate>
            <JobDescription>
              <li>Produced Quality service with by the book information.</li>
              <li>Assisted customers in a daily basis without compromising adherence and performance.</li>
              <li>Provides assistance to teammates to ensure team growth and stability in scores.</li>
            </JobDescription>
          </ExperienceEntry>

          <ExperienceEntry>
            <JobHeader>
              <JobTitle>Subject Matter Expert</JobTitle>
              <JobLocation>Pasig City</JobLocation>
            </JobHeader>
            <JobCompany>KGB Philippines</JobCompany>
            <JobDate>December 2019 - June 2022</JobDate>
            <JobDescription>
              <li>Providing the book information and ensuring strict adherence to agents.</li>
              <li>Providing knowledge, resources and information to support agents.</li>
              <li>Assist advisors with material requests and account updates.</li>
              <li>Ensuring accuracy of the content.</li>
              <li>Coaching and training agents on improving Customer Interaction and offering advisors guidance.</li>
              <li>Show a comprehensive knowledge of products and services and their competitive advantages through continuous self-improvement and following quality standards.</li>
            </JobDescription>
          </ExperienceEntry>

          <ExperienceEntry>
            <JobHeader>
              <JobTitle>Customer Service Representative</JobTitle>
              <JobLocation>Pasig City</JobLocation>
            </JobHeader>
            <JobCompany>GICF Inc</JobCompany>
            <JobDate>June 2018 - July 2019</JobDate>
            <JobDescription>
              <li>Providing excellent customer service to shopping company customers.</li>
              <li>Keep records of customer interactions, process customer accounts and file documents.</li>
              <li>Follow communication procedures, guidelines and policies.</li>
              <li>Taking and providing the extra mile to engaged customers to provide satisfaction.</li>
              <li>Helping them with their concerns and providing solutions to their problems.</li>
              <li>Produce sales leads.</li>
            </JobDescription>
          </ExperienceEntry>
        </Section>

        <Section>
          <SectionTitle>References</SectionTitle>
          <ReferencesContainer>
            <ReferenceEntry>
              <ReferenceName>Princeton Rafael Lim</ReferenceName>
              <ReferenceDetail>New Tawi-Tawi Trading</ReferenceDetail>
              <ReferenceDetail>Email: princeton.rael16@gmail.com</ReferenceDetail>
            </ReferenceEntry>
            <ReferenceEntry>
              <ReferenceName>Vince Gerald Ong</ReferenceName>
              <ReferenceDetail>Email: vince.ong@taskus.com</ReferenceDetail>
            </ReferenceEntry>
            <ReferenceEntry>
              <ReferenceName>William Henry Federis</ReferenceName>
              <ReferenceDetail>Senior Developer</ReferenceDetail>
              <ReferenceDetail>+639495918439</ReferenceDetail>
            </ReferenceEntry>
          </ReferencesContainer>
        </Section>
      </ResumeContainer>
      <Footer>
        <FooterText>Christian</FooterText>
        <IconLink href="https://www.linkedin.com/in/john-christian-a-842882249/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </IconLink>
        <IconLink href="mailto:alejandro.jchristian@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
          </svg>
          alejandro.jchristian@gmail.com
        </IconLink>
        <FooterText>ALL RIGHTS RESERVED © 2025</FooterText>
      </Footer>
    </PageWrapper>
  );
};

export default Resume; 