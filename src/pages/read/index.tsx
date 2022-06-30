import { Center } from '@chakra-ui/react';
import { BreadcrumbForReadPage } from '../../component/breadcrumb';
import FunFactComponent from '../../component/funFact';
import LegendsComponent from '../../component/legends'

const Read = () => {
    return (
        <div>
            <Center>
                <BreadcrumbForReadPage
                    currentPage={'Read'} />
            </Center>
            <LegendsComponent />
            <FunFactComponent />
        </div>

    )
}

export default Read;
