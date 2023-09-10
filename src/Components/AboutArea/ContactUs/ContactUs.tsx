import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import useTitle from "../../../Utils/UseTitle";
import "./ContactUs.css";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function ContactUs(): JSX.Element {
    useTitle("Contact Us")

    return (
        <div className="ContactUs">
            <form >
                <Typography variant="h3">Contact Us <ContactMailIcon fontSize="large"/></Typography>
                <TextField label="Name" variant="outlined" className="TextBox" />
                <TextField label="Email" type="email" variant="outlined" className="TextBox" />
                <TextField label="Phone" type="tel" variant="outlined" className="TextBox" />
                <TextField label="Message" variant="outlined" className="TextBox" />

                <FormControlLabel label="send me promotional emails" control={<Checkbox />} className="Flex" />

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary"> Send &nbsp; <ForwardToInboxIcon /></Button>
                    <Button type="reset" color="secondary"> Clear &nbsp; <HighlightOffIcon/></Button>
                </ButtonGroup>
            </form>
        </div>
    );
}

export default ContactUs;
