import Vocab from '../../component/mainVocab';
import { Center, Container } from '@chakra-ui/react';
import { BreadcrumbForLearnPage } from '../../component/breadcrumb';

const Learn = () => {
  return (
    <>
      <Center>
        <BreadcrumbForLearnPage
          currentPage={'Learn'} />
      </Center>
      <Container minH='90vh' maxW='6xl'>
        <Vocab />
      </Container>
    </>
  )
}

export default Learn;
