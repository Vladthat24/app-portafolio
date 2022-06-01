import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="virtualParts">
      <Container>
        <Title>
          Virtual Parts <Badge>2021</Badge>
        </Title>
        <P>
          System that allows efficient document management, such as
          administration through modules in the administrator option.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://tramite.crolimacallao.org.pe/tramite_nuevo.php">
              https://tramite.crolimacallao.org.pe/tramite_nuevo.php
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Php 7.2, JavaScript,JQuery, Boostrap, MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>Colaboration</Meta>
            <span>CatSoft - JLG SAC</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/nuevotramite-stdw.png" alt="tramite" />
        <WorkImage src="/images/works/stdw-usuario.png" alt="tramite" />
        <WorkImage src="/images/works/consultatramite-stdw.png" alt="tramite" />
        <WorkImage src="/images/works/reporteseguimiento-stdw.png" alt="tramite" />
      </Container>
    </Layout>
  )
}

export default Work
