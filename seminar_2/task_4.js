"use strict";

new Vue({
  el: "#app",
  data: {
    newContact: {
      firstName: "",
      lastName: "",
      email: "",
    },
    contacts: [],
  },
  methods: {
    addContact: function (event) {
      event.preventDefault();
      if (this.isValidContact()) {
        this.contacts.push({
          firstName: this.newContact.firstName,
          lastName: this.newContact.lastName,
          email: this.newContact.email,
        });
        this.resetForm();
              }
    },
    isValidContact: function(){
        return (
            this.newContact.firstName.trim() !== '' && this.newContact.lastName.trim() !== '' && this.newContact.email.trim() !== '' 
        );
    },
    resetForm: function () {
        this.newContact.firstName = '';
        this.newContact.lastName = '';
        this.newContact.email = '';
    }
  },
});
