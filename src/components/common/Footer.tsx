import styled from "styled-components";
import logo from "../../assets/images/logo.png";

function Footer() {
    return (
        <FooterStyle>
            <h1 className="logo">
                <img src={logo} alt="book store" />
            </h1>
            <div>copyright(c), 2026, Book Store.</div>
        </FooterStyle>
    );
}

const FooterStyle = styled.footer`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.lg};
    border-top: 1px solid ${({ theme }) => theme.color.background}
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    .logo {
        img {
            width: 140px;
        }
    }

    .copyright {
        p {
            font-size: .75rem;
            color: ${({ theme }) => theme.color.text};
        }
    }
`;

export default Footer;
