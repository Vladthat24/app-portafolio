import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Visits = () => {
  return (
    <Layout title="recordVisits">
      <Container>
        <Title>
          Record Visits <Badge>2020</Badge>
        </Title>
        <p>
          System that is in charge of registering and informing in real time,
          about the visits that the company receives, as well as the time of
          entrance and exit, in order to have an optimal control of income.
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Respositorio</Meta>
            <Link href="https://github.com/Vladthat24/app-registro-visitas-V2.0">
              https://github.com/Vladthat24/app-registro-visitas-V2.0
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Php 7.2, JavaScript, JQuery, Boostrap, MySql</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/srv-consulta.png" alt="srv" />
        <WorkImage src="/images/works/srv-dashboard.png" alt="srv" />
        <WorkImage src="/images/works/panelregistro-srv.png" alt="srv"/>
      </Container>
    </Layout>
  )
}

export default Visits
