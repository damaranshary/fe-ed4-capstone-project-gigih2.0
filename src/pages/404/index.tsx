import { Button, Container, Heading, Image, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const NotFound404 = () => {
    return (
        <Container mt={24} minH='80vh' mb={10} centerContent>
            <Heading size='xl'>Nothing found here code: 404</Heading>
            <Image src='/images/404.jpg' alt='gambar 404' rounded='xl' mt={10} />
            <Link as={ReactRouterLink} to='/' mt={10}><Button>Kembali ke Halaman Utama</Button></Link>
        </Container>
    )
}

export default NotFound404;