import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const PageWrapper = styled.div`
  background-color: #000000;
  min-height: 100vh;
  padding: 1px 0; /* Prevents margin collapse */
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
`;

const ResumeContainer = styled.div`
  background-color: #000000;
  color: #f8f8f8;
  padding: 4rem;
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 8px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.12);

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0.25rem;
    font-size: 0.8rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ContactInfo = styled.p`
  font-size: 1.1rem;
  color: #bdbdbd;
  text-shadow: 0 1px 2px rgba(0,0,0,0.10);

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
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
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
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
  color: #f8f8f8;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Degree = styled.p`
  font-size: 1.1rem;
  color: #bdbdbd;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
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
  color: #f8f8f8;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
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
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 0.1rem;
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const JobLocation = styled.p`
  font-size: 1rem;
  color: #bdbdbd;
  text-align: right;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const JobCompany = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 0.25rem;
  color: #d6d6d6;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const JobDate = styled.p`
  font-size: 1rem;
  color: #bdbdbd;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const JobDescription = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #ededed;
  text-shadow: 0 1px 2px rgba(0,0,0,0.10);

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
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
  color: #f8f8f8;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ReferenceDetail = styled.p`
  font-size: 1rem;
  color: #bdbdbd;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.8rem;
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
  @media (max-width: 480px) {
    font-size: 10px;
    gap: 6px;
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

const DownloadButton = styled.a`
  display: inline-block;
  margin: 1rem 0 2rem 0;
  padding: 0.4rem 1.2rem;
  background: transparent;
  color: #fff;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #555;
  transition: background 0.18s, color 0.18s, border 0.18s;
  cursor: pointer;

  &:hover {
    background: #222;
    color: #fff;
    border: 1px solid #888;
  }
`;

const HomeButton = styled(RouterLink)`
  display: inline-block;
  margin: 0 0 1.2rem 0;
  padding: 0.3rem 1rem 0.3rem 0;
  background: none;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.97rem;
  font-weight: 500;
  text-decoration: underline;
  transition: color 0.18s;
  cursor: pointer;

  &:hover {
    color: #8ecae6;
    text-decoration: underline;
  }
`;

const Resume: React.FC = () => {
  return (
    <PageWrapper>
      <ResumeContainer>
        <HomeButton to="/">← Home</HomeButton>
        <Header>
          <Name>John Christian Alejandro</Name>
          <ContactInfo>(+63) 977-423-8913 | alejandro.jchristian@gmail.com</ContactInfo>
        </Header>
        <DownloadButton href="JCJA_Portfolio.pdf" download>
          Download PDF
        </DownloadButton>

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
            <div className="job-header-wrapper">
              <JobHeader>
                <JobTitle>Full-Stack Developer</JobTitle>
                <JobCompany>Fitera Systems, Inc.</JobCompany>
                <JobLocation>Ortigas, Pasig City</JobLocation>
                <JobDate>May 2025 – Present</JobDate>
              </JobHeader>
            </div>
            <JobDescription>
              <li>Developed and maintained the company website using React and Node.js.</li>
              <li>Created new postings for company updates and ensured website reliability.</li>
            </JobDescription>
          </ExperienceEntry>

          <ExperienceEntry>
            <div className="job-header-wrapper">
              <JobHeader>
                <JobTitle>Software Developer</JobTitle>
                <JobCompany>Speedrent Technologies</JobCompany>
                <JobLocation>Kuala Lumpur, Malaysia</JobLocation>
                <JobDate>Oct 2023 – Present</JobDate>
              </JobHeader>
            </div>
            <JobDescription>
              <li>Developed user-facing features using Next.js to ensure seamless user experiences.</li>
              <li>Optimized components for performance across various devices and browsers.</li>
              <li>Collaborated with backend developers and designers to enhance usability.</li>
            </JobDescription>
          </ExperienceEntry>

          <ExperienceEntry>
            <div className="job-header-wrapper">
              <JobHeader>
                <JobTitle>Teammate - Subject Matter Expert</JobTitle>
                <JobCompany>TaskUs</JobCompany>
                <JobLocation>Ortigas, Pasig City</JobLocation>
                <JobDate>Jun 2022 – Aug 2023</JobDate>
              </JobHeader>
            </div>
            <JobDescription>
              <li>Produced quality service with by-the-book information.</li>
              <li>Assisted customers daily without compromising adherence and performance.</li>
              <li>Provided assistance to teammates to ensure team growth and stability in scores.</li>
            </JobDescription>
          </ExperienceEntry>

          <ExperienceEntry>
            <div className="job-header-wrapper">
              <JobHeader>
                <JobTitle>Agent - Subject Matter Expert</JobTitle>
                <JobCompany>Conduit Global</JobCompany>
                <JobLocation></JobLocation>
                <JobDate>Dec 2019 – Jun 2021</JobDate>
              </JobHeader>
            </div>
            <JobDescription>
              <li>Provided book information and ensured strict adherence to agents.</li>
              <li>Supplied knowledge, resources, and information to support agents.</li>
              <li>Assisted advisors with material requests and account updates.</li>
              <li>Ensured accuracy of the content and coached agents on customer interaction.</li>
            </JobDescription>
          </ExperienceEntry>

          <ExperienceEntry>
            <div className="job-header-wrapper">
              <JobHeader>
                <JobTitle>Customer Service Representative</JobTitle>
                <JobCompany>GICF</JobCompany>
                <JobLocation>Pasig City</JobLocation>
                <JobDate>Jun 2018 – Jul 2019</JobDate>
              </JobHeader>
            </div>
            <JobDescription>
              <li>Provided excellent customer service to shopping company customers.</li>
              <li>Kept records of customer interactions, processed accounts, and filed documents.</li>
              <li>Followed communication procedures, guidelines, and policies.</li>
              <li>Went the extra mile to engage customers and provide satisfaction.</li>
              <li>Helped customers with concerns and provided solutions to their problems.</li>
              <li>Produced sales leads.</li>
            </JobDescription>
          </ExperienceEntry>

          <ExperienceEntry>
            <div className="job-header-wrapper">
              <JobHeader>
                <JobTitle>Customer Service Representative</JobTitle>
                <JobCompany>Sequential Technology International</JobCompany>
                <JobLocation>Eastwood, Quezon City</JobLocation>
                <JobDate>Jan 2016 – Apr 2017</JobDate>
              </JobHeader>
            </div>
            <JobDescription>
              <li>Handled customer inquiries and provided timely solutions.</li>
              <li>Maintained high customer satisfaction ratings through effective communication.</li>
              <li>Assisted in troubleshooting and resolving technical issues for clients.</li>
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
              <ReferenceDetail>TaskUs</ReferenceDetail>
              <ReferenceDetail>Email: vince.ong@taskus.com</ReferenceDetail>
            </ReferenceEntry>
            <ReferenceEntry>
              <ReferenceName>William Henry Federis</ReferenceName>
              <ReferenceDetail>White Cloak</ReferenceDetail>
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