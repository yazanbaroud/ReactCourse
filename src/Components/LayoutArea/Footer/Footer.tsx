import "./Footer.css";

function Footer(): JSX.Element {
    const year = new Date().getFullYear()


    return (
        <div className="Footer">
			<p>All Rights Reserved © { year }</p>
        </div>
    );
}

export default Footer;
