import React from "react"; 
import { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";

const something;

export default function ContactList() { 

    useEffect(()=>{
        const [contacts, setContact] = useState(something);
        async function fetchContacts() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const parsedResponse = await response.json();
                setContact(parsedResponse);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts()
    },[]);

  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {contacts.map((contact) => {
                return <ContactRow key={contact.id} contact={contact} />;
            })}
          </tbody>
        </table>
    ); 
}

