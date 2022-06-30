import Vocab from '../../component/mainVocab';
import { Center } from '@chakra-ui/react';
import { BreadcrumbForLearnPage } from '../../component/breadcrumb';

const Learn = () => {
  return (
      <div>
        <Center>
          <BreadcrumbForLearnPage
          currentPage={'Learn'} />
        </Center>
        <Vocab/>
      </div>
  )
}

export default Learn;
