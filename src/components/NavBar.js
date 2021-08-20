import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <h1 id = "titulo">
                    Antojitos Bajoneros
                    </h1>
                    <a href = "#">Home</a>
                    <a href = "#">Productos</a>
                    <a href = "#">Contactos</a>
                    <CartWidget />
                </nav>
            </header>
        </>
    )
}

export default NavBar