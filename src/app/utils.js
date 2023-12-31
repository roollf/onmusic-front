import { Header, Footer } from '@/components';

export function HeaderGenerator() {
    return (
        <Header brand={"OnMusic"} menuItems={"Albums, Playlists, FAQ"} tagLine={"Music is our culture."} />
    )
}

export function FooterGenerator() {
    return (
        <Footer tagLine={"OnMusic © 2023"} />
    )
}