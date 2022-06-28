import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BreadcrumbProps } from '../../types/types';

export const BreadcrumbForLegendsContent = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={10} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/read'>Read</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/read/legends'>Legends</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export const BreadcrumbForFunFactContent = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={10} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/read'>Read</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/fun-fact'>FunFact</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}
