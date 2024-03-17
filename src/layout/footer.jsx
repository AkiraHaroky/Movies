function Footer() {
    return (
        <footer className="page-footer deep-purple accent-1">
            <div className="footer-copyright">
                <div className="container">
                    ©{new Date().getFullYear()} Аникова ТКБО-03-22
                    <a className="grey-text text-lighten-4 right" href="!#">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}
export { Footer };
