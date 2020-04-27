import React from 'react';
import {
  ContentWrapper,
  LeftColumn,
  RightColumn,
} from 'screens/Home/home.styled';
import HeaderBar from 'components/HeaderBar';
import SectionItem from 'components/SectionItem';
import SubsectionItem from 'components/SubsectionItem';
import ListWrapper from 'components/ListWrapper';
import {
  AdditionalSkills,
  Look4AppTechnologies,
  Look4AppResponsibilities,
  HypermediaTechnologies,
  HypermediaResponsibilities,
  NetbullsTechnologies,
  NetbullsResponsibilities,
  ScriptingLanguages,
  Frameworks,
} from 'helpers/mocks';
import Footer from 'components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <HeaderBar title="Weronika Fiedoruk" subtitle="Front-end developer" />
      <ContentWrapper>
        <LeftColumn>
          <SectionItem title="Education">
            <SubsectionItem
              title="Front-end development - post-graduate studies, finished"
              firstLine="Białystok University of Technology"
              secondLine="2016-2017"
            />
            <SubsectionItem
              title="Anthropology, Public Relations and advertising, Bachelor degree"
              firstLine="University of Białystok"
              secondLine="2013-2016"
            />
          </SectionItem>
          <SectionItem title="Practical skills">
            <SubsectionItem title="SCRIPTING LANGUAGES AND CONCEPTS">
              <ListWrapper items={ScriptingLanguages} />
            </SubsectionItem>
            <SubsectionItem title="FRAMEWORKS, TOOLS AND LIBRARIES">
              <ListWrapper items={Frameworks} />
            </SubsectionItem>
          </SectionItem>
          <SectionItem title="Additional skills">
            <ListWrapper items={AdditionalSkills} />
          </SectionItem>
        </LeftColumn>
        <RightColumn>
          <SectionItem title="Professional experience">
            <SubsectionItem
              title="FRONT-END DEVELOPER"
              firstLine="Netbulls | 2019 - current"
              secondLine="Taking part in a maintenance project for a trading company in UK - CRM platform and mobile application."
            >
              <ListWrapper
                listTitle="Technologies"
                items={NetbullsTechnologies}
              />
              <ListWrapper
                listTitle="Responsibilities"
                items={NetbullsResponsibilities}
              />
            </SubsectionItem>
            <SubsectionItem
              title="FRONT-END DEVELOPER"
              firstLine="Look4App | 2018 - 2019"
              secondLine="Participated in projects: front-end app - social platform for professional development, front-end app - fundraising portal for cryptocurrency trading."
            >
              <ListWrapper
                listTitle="Technologies"
                items={Look4AppTechnologies}
              />
              <ListWrapper
                listTitle="Responsibilities"
                items={Look4AppResponsibilities}
              />
            </SubsectionItem>
            <SubsectionItem
              title="FRONT-END DEVELOPER"
              firstLine="Hypermedia (part of Dentsu Aegis group) | 2017 - 2018"
              secondLine="Participated in various e-commerce and marketing front-end apps, primarily targeted for US-based top brands."
            >
              <ListWrapper
                listTitle="Technologies"
                items={HypermediaTechnologies}
              />
              <ListWrapper
                listTitle="Responsibilities"
                items={HypermediaResponsibilities}
              />
            </SubsectionItem>
          </SectionItem>
        </RightColumn>
      </ContentWrapper>
      <Footer footerContent=" I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended. " />
    </>
  );
};

export default Home;
