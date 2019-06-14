import React from 'react';
import styled from 'styled-components';
import {theme, breakpoints} from '../../theme';
import {Image, Flex, Box} from 'rebass';
import brain from '../../images/brain.gif';
import batteries from '../../images/batteries.gif';
import separator from '../../images/separator.svg';
import {ButtonLink} from '../links';

const OuterContainer = styled.section`
  background-color: ${theme.colors.white};
  box-shadow: 0 0px 11px 5px #33333312;
  padding: 70px 20px;
`;

const Content = styled(Flex)`
  max-width: 900px;
  margin: auto;
  flex-direction: column;
`;

const FeatureImage = styled(Image)`
  width: 150px;
  margin: auto;
  padding-bottom: 20px;
`;

const Separator = styled(Image)`
  width: 18px;
  margin: 0 10px;
  transform: rotate(90deg);
  margin: auto;

  @media screen and (min-width: ${breakpoints.TABLET}) {
    transform: rotate(0deg);
    margin: ${theme.space[7]}px ${theme.space[3]}px 0;
  }
`;

const TextBox = styled(Box)`
  max-width: 500px;
`;

const Features = () => {
  return(
    <OuterContainer>
      <Content>
        <Box alignSelf="center"><h2>Node-Tap Features</h2></Box>
        <Flex pb={4} flexDirection={['column', 'column', 'row']} alignItems="center">
          <Flex px={4} flexDirection="column">
            <FeatureImage src={brain}/>
            <Box alignSelf="center"><h3>No Fancy DSL to Learn</h3></Box>
            <TextBox p={2}>
              <p>
                The whole API is very small, even though it's a powerful framework.  `t.test()`, `t.end()`, and a handful of assertion methods.  This results in having to write and remember less than `describe('foo', () => it('is a string or null', () => expect(foo).to.be.a.string().or.null())))
             </p>
            </TextBox>
          </Flex>
          <Separator src={separator}/>
          <Flex px={4} flexDirection="column">
            <FeatureImage src={batteries}/>
            <Box alignSelf="center"><h3>Batteries Included</h3></Box>
            <TextBox p={2}>
              <p>
                The whole API is very small, even though it's a powerful framework.  `t.test()`, `t.end()`, and a handful of assertion methods.  This results in having to write and remember less than `describe('foo', () => it('is a string or null', () => expect(foo).to.be.a.string().or.null())))
              </p>
            </TextBox>
          </Flex>
        </Flex>
        <ButtonLink to="/docs/">Get Started</ButtonLink>
      </Content>
    </OuterContainer>
  );
}

export default Features;

// export const query = graphql`
//   query {
//     allMarkdownRemark(filter: {frontmatter: {type: {eq: "features"}}}) {
//       nodes {
//         fields {
//           slug
//         }
//         html
//       }
//     }
//   }
// `;