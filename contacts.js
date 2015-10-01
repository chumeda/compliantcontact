/**
 * Contact is a person and their info
 * @param firstName - first name of contact
 * @param lastName - last name of contact
 * @param address - address of contact
 * @param zipCode - zipcode for contact
 * @param phoneNumber - phone number of contact
 * @constructor - creates a contact
 */
function Contact(firstName, lastName, address, zipCode, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipCode = zipCode;
  this.phoneNumber = phoneNumber;

  this.counter = 0;

  /**
   * This increments the counter for number of calls made
   * @returns number of calls made
   */
  this.call = function() {
    this.counter++;
    return true;
  };

  /**
   * Gives the number of calls that were made
   * @returns number of calls made
   */
  this.numCalls = function() {
    return this.counter;
  };
}

/**
 * This is the list for all your contact information
 * @constructor creates a contact list
 */
function ContactList() {
  this.list = new Array();

  /**
   * accepts a Contact instance and adds it to an internal data structure
   * @param contact - see above for contact information
   */
  this.addContact = function(contact) {
    this.list.push(contact);
  };

  /**
   * returns the number of contacts in this ContactList()
   * @returns number of contacts in list
   */
  this.numContacts = function() {
    return this.list.length;
  };

  /**
   * passed a String and returns all of the Contacts with that lastName
   * @param lastName - last name you are searching for
   * @returns contact with correct last name
   */
  this.findContact = function(lastName) {
    return _.where(this.list, {lastName: lastName});

  };

  /**
   * passed a firstName and lastName and deletes all matching Contacts
   * @param firstName - first name of contact
   * @param lastName - last name of contact
   */
  this.deleteContact = function(firstName, lastName) {
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i].firstName === firstName && this.list[i].lastName === lastName)
      {
        this.list.splice(i, 1);
      }
    }
  };

  /**
   * Returns a string containing the contacts sorted by lastName
   * @returns {Array.<T>}
   */
  this.listContacts = function() {
    var buffer = this.list.slice(0);
    for(var i = 2; i < buffer.length; i++) {
      for(var k = i; k > 1 && buffer[k].lastName.toLowerCase().localeCompare(buffer[k - 1].lastName.toLowerCase()) > 0; k--) {
        var temp = buffer[k];
        buffer[k] = buffer[k - 1];
        buffer[k - 1] = temp;
      }
    }
    return buffer.reverse();
  };
}
