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

const ContactInfo = styled.div`
  font-size: 1rem;
  color: #bdbdbd;
  text-shadow: 0 1px 2px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const ContactLine = styled.p`
  margin: 0;
`;

const ContactLink = styled.a`
  color: #8ecae6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProfileText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #ededed;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillCategory = styled.div``;

const SkillCategoryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #8ecae6;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  font-size: 0.95rem;
  background-color: #1a1a1a;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  color: #f8f8f8;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.65rem;
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

const FloatingDownloadButton = styled.a`
  position: static;
  margin-top: 2rem;
  z-index: 100;
  padding: 0.7rem 1.3rem;
  font-size: 1.05rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(0,0,0,0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px) scale(1.025);
    box-shadow: 0 6px 20px rgba(0,0,0,0.13);
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 76px;
    right: 12px;
    margin-top: 0;
    padding: 0.4rem 0.6rem;
    font-size: 0.88rem;
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

const DownloadButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

const Resume: React.FC = () => {
  return (
    <PageWrapper>
      <ResumeContainer>
        <HomeButton to="/">← Home</HomeButton>
        <Header>
          <Name>JOHN CHRISTIAN ALEJANDRO</Name>
          <ContactInfo>
            <ContactLine>📍 Pasig City, Metro Manila, Philippines</ContactLine>
            <ContactLine>📞 (+63) 977-423-8913</ContactLine>
            <ContactLine>✉️ <ContactLink href="mailto:alejandro.jchristian@gmail.com">alejandro.jchristian@gmail.com</ContactLink></ContactLine>
            <ContactLine>💻 GitHub: <ContactLink href="https://github.com/woozyass" target="_blank" rel="noopener noreferrer">github.com/woozyass</ContactLink></ContactLine>
            <ContactLine>🌐 Portfolio: <ContactLink href="/">View Portfolio</ContactLink></ContactLine>
            <ContactLine>🔗 LinkedIn: <ContactLink href="https://www.linkedin.com/in/jcalejandro/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jcalejandro</ContactLink></ContactLine>
          </ContactInfo>
        </Header>

        <Section>
          <SectionTitle>Professional Profile</SectionTitle>
          <ProfileText>
            Senior ServiceNow Developer with experience designing, developing, and maintaining enterprise ServiceNow solutions across ITSM and custom business applications. Experienced in building integrations, automating business processes through Flow Designer, configuring Service Portal components, and supporting Agile delivery as a Substitute Scrum Master. Strong background in full-stack web development using React, Next.js, and Node.js, complemented by several years of customer service and technical support experience.
          </ProfileText>
          <ProfileText>
            Skilled in translating business requirements into scalable technical solutions while collaborating with cross-functional teams to deliver high-quality enterprise applications.
          </ProfileText>
        </Section>

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
          <SectionTitle>Technical Skills</SectionTitle>
          <SkillsGrid>
            <SkillCategory>
              <SkillCategoryTitle>ServiceNow</SkillCategoryTitle>
              <SkillTags>
                {['ITSM', 'Flow Designer', 'IntegrationHub', 'Script Includes', 'Business Rules', 'Client Scripts', 'UI Policies', 'UI Actions', 'ACLs', 'Service Portal', 'Catalog Items', 'Record Producers', 'Workflows', 'Scripted REST APIs', 'Inbound Actions', 'Notifications', 'Update Sets'].map(skill => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Programming</SkillCategoryTitle>
              <SkillTags>
                {['JavaScript (ES6+)', 'HTML5', 'CSS3', 'React.js', 'Next.js', 'Node.js', 'Flutter'].map(skill => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Databases</SkillCategoryTitle>
              <SkillTags>
                {['MySQL', 'MongoDB'].map(skill => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Development Tools</SkillCategoryTitle>
              <SkillTags>
                {['Git', 'GitHub', 'Visual Studio Code', 'Postman'].map(skill => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Methodologies</SkillCategoryTitle>
              <SkillTags>
                {['Agile Scrum', 'SDLC', 'REST APIs'].map(skill => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Other Skills</SkillCategoryTitle>
              <SkillTags>
                {['UI/UX Design', 'Technical Documentation', 'Customer Support', 'Google Workspace'].map(skill => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
          </SkillsGrid>
        </Section>

        <Section>
          <SectionTitle>Professional Experience</SectionTitle>
          <ExperienceEntry>
            <div className="job-header-wrapper">
              <JobHeader>
                <JobTitle>Senior ServiceNow Developer</JobTitle>
                <JobCompany>Accenture Philippines</JobCompany>
                <JobLocation>BGC, Taguig City</JobLocation>
                <JobDate>October 2025 to Present</JobDate>
              </JobHeader>
            </div>
            <JobDescription>
              <li>Developed and configured enterprise ServiceNow solutions for multiple business requirements.</li>
              <li>Designed and implemented integrations between ServiceNow and external platforms using REST APIs and IntegrationHub.</li>
              <li>Built and maintained Flow Designer automations to streamline business processes.</li>
              <li>Configured Service Portal widgets, pages, themes, and catalogs according to project requirements.</li>
              <li>Developed Business Rules, Client Scripts, Script Includes, UI Policies, UI Actions, and Access Controls.</li>
              <li>Created and maintained Catalog Items, Record Producers, and Service Catalog workflows.</li>
              <li>Troubleshoot production issues and perform root cause analysis.</li>
              <li>Participated in sprint planning, backlog grooming, and Agile ceremonies.</li>
              <li>Served as Substitute Scrum Master, facilitating stand-ups, sprint ceremonies, and team coordination.</li>
              <li>Worked closely with business stakeholders, QA engineers, and developers to deliver scalable ServiceNow solutions.</li>
              <li>Assisted with platform upgrades, deployments, testing, and production releases.</li>
            </JobDescription>
          </ExperienceEntry>

          <ExperienceEntry>
            <div className="job-header-wrapper">
              <JobHeader>
                <JobTitle>Full-Stack Developer</JobTitle>
                <JobCompany>Fitera Systems, Inc.</JobCompany>
                <JobLocation>Ortigas, Pasig City</JobLocation>
                <JobDate>May 2025 to October 2025</JobDate>
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
                <JobDate>Oct 2023 to Oct 2025</JobDate>
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
                <JobTitle>Teammate, Subject Matter Expert</JobTitle>
                <JobCompany>TaskUs</JobCompany>
                <JobLocation>Ortigas, Pasig City</JobLocation>
                <JobDate>Jun 2022 to Aug 2023</JobDate>
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
                <JobTitle>Agent, Subject Matter Expert</JobTitle>
                <JobCompany>Conduit Global</JobCompany>
                <JobLocation></JobLocation>
                <JobDate>Dec 2019 to Jun 2021</JobDate>
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
                <JobDate>Jun 2018 to Jul 2019</JobDate>
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
                <JobDate>Jan 2016 to Apr 2017</JobDate>
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
          <DownloadButtonWrapper>
            <FloatingDownloadButton href="JCJA_Portfolio.pdf" download>
              Download PDF
            </FloatingDownloadButton>
          </DownloadButtonWrapper>
        </Section>
      </ResumeContainer>
      <div style={{ height: '40px' }} />
      <Footer>
        <FooterText>Christian</FooterText>
        <IconLink href="https://www.linkedin.com/in/jcalejandro/" target="_blank" rel="noopener noreferrer">
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