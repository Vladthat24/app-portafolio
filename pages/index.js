import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  List,
  ListItem,
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

import {
  IoLogoDeviantart,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoLinkedin,
  IoLogoJavascript
} from 'react-icons/io5'

import { TbBrandPhp, TbBrandPython } from 'react-icons/tb'
import { FaJava } from 'react-icons/fa'
import {
  DiDjango,
  DiLaravel,
  DiReact,
  DiBootstrap,
  DiJqueryLogo,
  DiMsqlServer
} from 'react-icons/di'
import { SiSemanticuireact, SiMysql, SiOracle } from 'react-icons/si'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Perú!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Yosshi Condori M.
            </Heading>
            <p>Vlad Hat - Developer </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ycondori.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Yosshi C. M. is a full-stack developer from Peru, dedicated to
            implement/develop new computer technologies. His hobbies include
            traveling around the country, making the most of his time with his
            family (KVL).{' '}
            <NextLink href="/works/virtualParts">
              <Link>Virtual Parts Table</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio{' '}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Lima, Perú
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Studying the eighth cycle of Computer and Systems Engineering
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>I work as a developer at DIRIS LIMA SUR -
            MINSA
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Work on projects independently as a full-stack developer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music, Movie, Programming, Comics, Libros, Viajes
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Technologies
          </Heading>
          <BioYear>Leanguage</BioYear>
          <SimpleGrid columns={[4]} gap={4}>
            <Section>
              <TbBrandPhp size={48} />
            </Section>
            <Section>
              <TbBrandPython size={48} />
            </Section>
            <Section>
              <FaJava size={48} />
            </Section>
            <Section>
              <IoLogoJavascript size={48} />
            </Section>
          </SimpleGrid>

          <BioYear> Framework</BioYear>
          <SimpleGrid columns={[6]} gap={6}>
            <Section>
              <DiDjango size={48} />
            </Section>
            <Section>
              <DiLaravel size={48} />
            </Section>
            <Section>
              <DiReact size={48} />
            </Section>
            <Section>
              <DiBootstrap size={48} />
            </Section>
            <Section>
              <DiJqueryLogo size={48} />
            </Section>
            <Section>
              <SiSemanticuireact size={48} />
            </Section>
          </SimpleGrid>

          <BioYear> Database Engine</BioYear>
          <SimpleGrid columns={[3]} gap={3}>
            <Section>
              <SiMysql size={48} />
            </Section>
            <Section>
              <DiMsqlServer size={48} />
            </Section>
            <Section>
              <SiOracle size={48} />
            </Section>
          </SimpleGrid>
          <BioSection>
            <BioYear>Others</BioYear>
            Windows Server, AWS EC2, Linux Ubuntu
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Vladthat24" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @vladhat24
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://gitlab.com/vladhatlab" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGitlab} />}
                >
                  @VladHat
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/yosshi-condori-mendieta-80708b1b7"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Y. Condori
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDeviantart} />}
                >
                  @Dev VlatHat
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
