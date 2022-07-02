import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BreadcrumbProps } from '../../types/types';

export const BreadcrumbForAdventureBookContent = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={24} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/read'>Read</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/read/adventure'>Petualangan</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export const BreadcrumbForNatureBookContent = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={24} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/read'>Read</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/read/nature'>Alam</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export const BreadcrumbForReadPage = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={24} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export const BreadcrumbForWatchPage = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={24} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export const BreadcrumbForWatchContent = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={24} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/watch'>Watch</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}


export const BreadcrumbForAdventurePage = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={24} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/read'>Read</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export const BreadcrumbForNaturePage = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={24} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/read'>Read</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export const BreadcrumbForLearnPage = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={24} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export const BreadcrumbForVocabContent = ({ currentPage }: BreadcrumbProps) => {
    return (
        <Breadcrumb mt={24} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/learn'>Learn</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to='/learn/vocabs'>Vocabulary</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}