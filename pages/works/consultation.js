import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import Layout from '../../components/layouts/article'

const Consultation = () => {
  return (
    <Layout title="consultationProcedure">
      <Container>
        <Title>Consultation Process</Title>
        <p>
          System that can be coupled with any type of database (MySQL, SQL
          Server, Oracle), in order to display the information to the user
          outside the organization.
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Respositorio</Meta>
            <Link href="https://gitlab.com/app-tramite-virtual/app-consulta-tramite">
              https://gitlab.com/app-tramite-virtual/app-consulta-tramite
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataform</Meta>
            <span>Windows/macOS/Linux/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Php 7.2, JavaScript, JQuery, Boostrap, MySql</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/consulta-consulta.png" alt="srv" />
      </Container>
    </Layout>
  )
}

export default Consultation
