import React from 'react';
import { Button } from '@react95/core';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
  padding-bottom: 5px;
`;

const SubSectionTitle = styled.h3`
  margin-top: 15px;
  margin-bottom: 5px;
`;

const StyledUl = styled.ul`
  margin-left: 20px;
  list-style-type: disc;
`;

const StyledLi = styled.li`
  margin-bottom: 5px;
`;

function Resume({ content }) {
  const { workExperience, education, entrepreneurship, accolades, skills } = content;

  return (
    <div>
      <SectionTitle>EDUCATION</SectionTitle>
      {education.map((ed, idx) => (
        <div key={idx}>
          <p>
            <b>{ed.institution}</b> – {ed.location}
          </p>
          <p>{ed.degree} {ed.graduationDate}</p>
          {ed.details && ed.details.map((detail, detailIdx) => (
            <p key={detailIdx}>{detail}</p>
          ))}
          <br />
        </div>
      ))}

      <SectionTitle>PROFESSIONAL EXPERIENCE</SectionTitle>
      {workExperience.map((exp, idx) => (
        <div key={idx}>
          <p>
            <b>{exp.company}</b> – {exp.location}
          </p>
          <p>{exp.jobTitle} {exp.period}</p>
          <StyledUl>
            {exp.accomplishments.map((a, accomplishmentIdx) => (
              <StyledLi key={accomplishmentIdx}>{a}</StyledLi>
            ))}
          </StyledUl>
          <br />
        </div>
      ))}

      {entrepreneurship && (
        <>
          <SectionTitle>ENTREPRENEURSHIP</SectionTitle>
          {entrepreneurship.map((entry, idx) => (
            <div key={idx}>
              <p>
                <b>{entry.company}</b> – {entry.location}
              </p>
              <p>{entry.jobTitle} {entry.period}</p>
              <StyledUl>
                {entry.accomplishments.map((a, accomplishmentIdx) => (
                  <StyledLi key={accomplishmentIdx}>{a}</StyledLi>
                ))}
              </StyledUl>
              <br />
            </div>
          ))}
        </>
      )}

      {accolades && (
        <>
          <SectionTitle>ACCOLADES</SectionTitle>
          {accolades.map((acc, idx) => (
            <div key={idx}>
              <SubSectionTitle>
                {acc.event} – {acc.location} ({acc.date})
              </SubSectionTitle>
              <p><b>{acc.award}</b></p>
              <StyledUl>
                {acc.details.map((d, detailIdx) => (
                  <StyledLi key={detailIdx}>{d}</StyledLi>
                ))}
              </StyledUl>
              <br />
            </div>
          ))}
        </>
      )}

      {skills && skills.technical && (
        <>
          <SectionTitle>SKILLS</SectionTitle>
          <SubSectionTitle>Technical</SubSectionTitle>
          <p>{skills.technical.join(', ')}</p>
        </>
      )}
      <StyledLink href={content.resumeLink} download>
        <Button style={{ fontSize: '14px', marginTop: '20px' }} className="pointer">
          Download Resume
        </Button>
      </StyledLink>
    </div>
  );
}

export default Resume;
