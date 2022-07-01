import { Center } from '@chakra-ui/react';
import { BreadcrumbForReadPage } from '../../component/breadcrumb';
import NatureBooksComponent from '../../component/nature';
import AdventureBooksComponent from '../../component/adventure'

const Read = () => {
    return (
        <div>
            <Center>
                <BreadcrumbForReadPage
                    currentPage={'Read'} />
            </Center>
            <AdventureBooksComponent />
            <NatureBooksComponent />
        </div>

    )
}

export default Read;
