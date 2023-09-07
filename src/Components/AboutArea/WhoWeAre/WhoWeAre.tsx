import css from "./WhoWeAre.module.css"

function WhoWeAre(): JSX.Element {
    return (
        <div className={css.Container}>
			<p className={css.NiceText}>we are Northwind company</p>
            <p className={css.CoolText}>were open 24/7</p>
        </div>
    );
}

export default WhoWeAre;
