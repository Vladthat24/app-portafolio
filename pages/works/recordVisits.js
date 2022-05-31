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
        <p></p>
      </Container>
    </Layout>
  )
}
