
// Business Logic for AddressBook -------
// CONSTRUCTOR:
// This contructor contains one property... which is an empty array. This is where entries are stored in the form of 'objects'
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
  // now each time a new AddressBook is created, it will have a currentId property that begins at 0. 
}
// PROTOTYPE:
// "an object from which other objects inherit methods"
// when executed JavaScript first searches the properties or methods on the object, and if it doesnt find them there it looks to the prototype for the "method."
// this new "method" is called addContact();
// it takes pushes the contact "function" to the "array" of AddressBook.contacts[]
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  // ^^This creates an id "property" on a contact object and assigns it a unique IDm 
  this.contacts.push(contact);
}
AddressBook.prototype.assignId = function(contact){
  this.currentId += 1;
  return this.currentId;
  // ^^This new "method will increment the this.currentId property on the AddressBook object by 1 and return the updated value. Mimics a database by creating sequentially incrementing ID values which are never repeated (making them unique)."
}
AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) { 
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
  // ^^this takes an "id" as an arguement. This will contain the unique ID we assigned to each Contact. The "method" then loops through the Address Book objects contacts array. Checking each entry's id against the id provided to the findContact() method as an arguement. When a match is found the method returns the contact object with that specific ID.
}
AddressBook.prototype.deleteContact = function(id)  {
  for (var i=0; i<this.contacts.length; i++){
    if (this.contacts[i]) {
      if (this.contacts[i].id == id)  {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// ----------------------------------------------------------------------

// Business Logic for Contacts
// CONSTRUCTOR FUNCTION:
function Contact (firstName, lastName, phoneNumber) {
  //                      ^^PROPERTIES^^
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
// PROTOTYPE:
 Contact.prototype.fullName = function () {
   return this.firstName + " " + this.lastName;
 }

// every time we create a variable using the "new" keyword. it calls the corresponding constructor, which provides the blueprint for creating an instnace of the constructor type, giving it certain properties... The new "instance" of the "type" also automatically gains access to all methods defined on the shared "prototype."

// ----------------------------------------------------------------------
//  INSTANCES OF THE CONSTRUCTOR FUNCTION TYPE
// These variables "call" the constructor function by using the "new" keyword, and "values" are provided as the argument.

 var addressBook = new AddressBook();
 var contact = new Contact("Ada", "Lovelace", "503-555-0100");
//                                ^^ PROPERTIES ^^
 var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
 addressBook.addContact(contact);
 addressBook.addContact(contact2);

// ^^^^^What this is doing: 
// * We create an AddressBook object.
// * We create a new Contact object with a firstName of "Ada", under the variable name contact.
// * We create another new Contact object, this time with a firstName of "Grace", under the variable name contact2.
// * We add the first Contact object to our AddressBook, using our new addContact() method.
// * We add the second Contact object to the AddressBook using the same new method.

// HOMEWORK ON FOR TUESDAY:
var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactList = $("ul#contacts");

}
// ^^Method to display info in DOM. Takes AdressBook as an argument. 

$(document).ready(function()  {
  $("form#new-contact").submit(function(event)  {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber= $("input#new-phone-number").val();
    var newContact = new Contact (inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addcontact(newContact);
    console.log(addressBook.contacts)
  })
})
// * created a new "object" named address Book. This is a GLOBAL VARIABLE because it is declared at the "top-level."
// * document ready and submit function
// assign variables to form-fields
// *create new contact "object," passing in the information as "arguements."
// add newContact to addressBook using the addContact() "method"
// log contacts to the console to check contact has been added. 

