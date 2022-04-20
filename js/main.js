class CommonHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header d-flex"></div>
                    <a href="/">
                        <img class="logo" src="./img/logo.png" alt="logo">
                    </a>
            </header>
        `
    }
}
customElements.define("load-header", CommonHeader);


class CommonNav extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <nav class="bg-gray">
                <div class="shadow-bottom">
                    <div class="container">
                        <div class="navigation-container">
                            <a href="./pages/products.html" class="navigation-item">Produkte</a>
                            <a href="./pages/service.html" class="navigation-item">Dienstleistungen</a>
                            <a href="./pages/about-us.html" class="navigation-item">Über uns</a>
                            <a href="./pages/contact.html" class="navigation-item">Kontakt</a>
                        </div>

                        <div class="mobile-container">
                            <a href="../index/index.html">
                                <button type="button" class="mobile-button">
                                    <img class="logo-small-mobile" src="./img/logo-small.png">
                                </button>
                            </a>
                            <a style="text-decoration: none;" href="./pages/products.html"><button type="submit" class="mobile-button">Produkte</button></a>
                            <a style="text-decoration: none;" href="./pages/service.html"><button type="submit"  class="mobile-button">Dienstleistungen</button></a>
                            <a style="text-decoration: none;" href="./pages/about-us.html"><button type="submit" class="mobile-button">Über uns</button></a>
                            <a style="text-decoration: none;" href="./pages/contact.html"><button type="submit"  class="mobile-button">Kontakt</button></a>
                        </div>
                    </div>
                </div>
            </nav>
        `
    }
}
customElements.define("load-nav", CommonNav);


class CommonFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-dark-gray">
                <div class="shadow-top-bottom bg-light-gray">
                    <div class="footer container">
                        <div class="footer-item">Hilfe und Kontakt
                            <div>
                                <p>Hast du Fragen?</p>
                                <p>Dann schreib uns</p>

                                <form action="./pages/contact.html">
                                    <button class="help-button" type="submit">
                                        Kontaktieren
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="footer-item">Über uns
                            <ul class="no-ul">
                                <li><a href="./pages/about-us.html#schuber-holding" class="footer-list-item">Schuber Holding</a></li>
                                <li><a href="./pages/about-us.html#impressum" class="footer-list-item">Impressum</a></li>
                                <li><a href="./pages/about-us.html#design" class="footer-list-item">Herstellung</a></li>
                                <li><a href="./pages/about-us.html#design" class="footer-list-item">Design</a></li>
                                <li><a href="./pages/about-us.html#team" class="footer-list-item">Team</a></li>
                            </ul>
                        </div>
                        <div class="footer-item">Showroom
                            <div class="t">
                                In unserem Showroom in Rümlang finden Sie alle unsere Produkte der diesjährigen Serie
                                ausgestellt. Kommen Sie vorbei und lassen Sie Sich inspirieren!
                            </div>
                        </div>
                        <div class="footer-item">
                            <iframe class="showroom-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.0599726847345!2d8.529486615568427!3d47.449770379174645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479075324b8ecacf%3A0xfa035d391896a3d1!2sLindenstrasse%2016%2C%208153%20R%C3%BCmlang!5e0!3m2!1sen!2sch!4v1639128906747!5m2!1sen!2sch" allowfullscreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    Schuber Lampen © 2021
                </div>
            </footer>
        `
    }
}
customElements.define("load-footer", CommonFooter);