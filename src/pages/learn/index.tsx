import Vocab from '../../component/mainVocab';
import { Center, Container } from '@chakra-ui/react';
import { BreadcrumbForLearnPage } from '../../component/breadcrumb';

const Learn = () => {
  return (
      <Container minH='90vh' maxW='6xl' mb={10}>
        <Center>
          <BreadcrumbForLearnPage
          currentPage={'Learn'} />
        </Center>
        <Vocab/>
      </Container>
  )
}

export default Learn;
