import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbTramite from '../public/images/works/tramite.png'
import thumbRecordVisits from '../public/images/works/Recordvisits.png'
import thumbConsultationProcess from '../public/images/works/consultationprocess.png'
import thumbMettYourObstetrician from '../public/images/works/mettyourobstetrician.png'
import thumbOnlineSkill from '../public/images/works/online skill.png'
import thumbHelpDesk from '../public/images/works/helpdesk.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fonstSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="virtualParts"
              title="Virtual Parts Table"
              thumbnail={thumbTramite}
            >
              System that allows efficient document management, such as
              administration through modules in the administrator option.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="recordVisits"
              title="Record of visits"
              thumbnail={thumbRecordVisits}
            >
              Informative application that records the visits made to the
              organization, in order to obtain control of income and outputs.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="consultation"
              title="Consultation process"
              thumbnail={thumbConsultationProcess}
            >
              Computer application that performs consultations of the
              documentary procedures entered in an old web system.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="mettyourobstetrician"
              title="Mett your obstetrician"
              thumbnail={thumbMettYourObstetrician}
            >
              Computer application that allows you to search for obstetrics
              professionals throughout Perú.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="onlineskill"
              title="Online skill"
              thumbnail={thumbOnlineSkill}
            >
              Informatic application that allows the online skill of Obtretic
              professionals.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="helpdesk"
              title="Help desk"
              thumbnail={thumbHelpDesk}
            >
              Computer application that allows you to manage computer incidents
              within an organization, with different manageable modules.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
