import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'
const Resturant = () => {
  return (
    <Layout title="restaurant">
      <Container>
        <Title>
          Restaurant <Badge>2022</Badge>
        </Title>
        <p>
          System that allows to create virtual menus of a restaurant, in order
          to provide a unique experience to the customer, incorporating
          technology in the order flow.
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>
              <IoLogoGithub />
              Front-End
            </Meta>
            <Link href="https://github.com/Vladthat24/app-icard-react">
              https://github.com/Vladthat24/app-icard-react
              <ExternalLinkIcon mx="2px" />
            </Link>
            <br />
            <Meta>
              <IoLogoGithub />
              Back-End
            </Meta>
            <Link href="https://github.com/Vladthat24/app-icard-django">
              https://github.com/Vladthat24/app-icard-django
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataform</Meta>
            <span>Windows/macOS/Linuz/Android/iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React (Hooks, Formik, Yup), Django Rest Framework, JWT </span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/acceso-rest.png" alt="rest" />
        <WorkImage src="/images/works/pedidos-rest.png" alt="rest" />
        <WorkImage src="/images/works/mesapedidos-rest.png" alt="rest" />
        <WorkImage src="/images/works/usuario-rest.png" alt="rest" />
      </Container>
    </Layout>
  )
}
export default Resturant
