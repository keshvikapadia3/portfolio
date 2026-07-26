function Footer({ email }) {

    return (

        <footer
            id="contact"
            className="footer"
        >

            <p>Information Technology Student</p>

            <p>Email : {email} </p>
            <p>

                © {new Date().getFullYear()}

                {" "}

                All Rights Reserved.

            </p>

        </footer>

    );

}

export default Footer;