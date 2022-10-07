// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useState } from "react";

const ContactForm = ({ fnAddContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const inputOnChangeHandler = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    fnAddContact(newContact);
    setNewContact({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });
  };

  return (
    <Card sx={{ bgcolor: "#F3F1EB", width: "85%" }}>
      <Box
        component="form"
        onSubmit={formOnSubmitHandler}
      >
        <CardContent sx={{ "& > :not(style)": { m: 1, width: "97%", pb: 0 } }}>
          <TextField
            required
            name="name"
            value={newContact.name}
            onChange={inputOnChangeHandler}
            id="filled-basic"
            label="Name"
            variant="filled"
            autoFocus
          />
          <TextField
            required
            name="phone"
            value={newContact.phone}
            onChange={inputOnChangeHandler}
            id="filled-basic"
            label="Phone"
            variant="filled"
          />
          <TextField
            required
            name="email"
            value={newContact.email}
            onChange={inputOnChangeHandler}
            id="filled-basic"
            label="Email"
            variant="filled"
          />
          <TextField
            required
            name="photo"
            value={newContact.photo}
            onChange={inputOnChangeHandler}
            id="filled-basic"
            label="Photo URL"
            variant="filled"
          />
        </CardContent>
        <CardActions>
          <Button type="submit" size="large" sx={{ color: "#2F7C32" }}>
            ADD NEW
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ContactForm;
