import { Grid } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContact = (newContact) => {
    const objContact = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      photo: newContact.photo,
    };

    const newContacts = [...contacts, objContact];
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <Header />
      <Grid container sx={{ mt: 11, mx: 8 }}>
        <Grid item xs={5}>
          <ContactForm fnAddContact={addContact} />
        </Grid>
        <Grid item xs={7}>
          {contacts.map((contact, index) => (
            <Contact data={contact} key={index} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
