import Vocab from '../../component/mainVocab';
import { Center, Container } from '@chakra-ui/react';
import { BreadcrumbForLearnPage } from '../../component/breadcrumb';
import { useEffect } from 'react';

const Learn = () => {

  useEffect(() => {
    document.title = 'Learn - Baca Merdeka'
  }, [])

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
