# compliantcontact
# Overvew
This project creates a contact list and creates functions to be able to manipulate a contact list.

# Installation
Provide the following scripts in your html file:
```
  <script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
  <script src="contacts.js"></script>
```

# Usage
Here are example calls to the analytic functions: 
```
<script>
     // Create a contact list.
     var contactList = new ContactList();

     // Create some contacts.
     var philip = new Contact("Philip", "Johnson", "1680 East-West Rd., Honolulu, HI", "96734", "808-956-3489");
     var henri = new Contact("Henri", "Casanova", "1680 East-West Rd., Honolulu, HI", "96734", "808-956-2649");
     var edo = new Contact("Edo", "Biagioni", "1680 East-West Rd., Honolulu, HI", "96734", "808-956-3891");
     var kim = new Contact("Kim", "Binsted", "1680 East-West Rd., Honolulu, HI", "96734", "808-956-6107");

     // Exercise the call() feature
     console.log(philip.numCalls());  // should return 0.
     philip.call();
     console.log(philip.numCalls()); // should return 1.

     // Add the contacts to the contact list.
     contactList.addContact(philip);
     contactList.addContact(henri);
     contactList.addContact(edo);
     contactList.addContact(kim);

     // Invoke the ContactList functions.
     console.log(contactList.numContacts()); // print 4
     console.log(contactList.findContact("Casanova")); //  print the henri Contact instance.
     contactList.deleteContact("Philip", "Johnson"); //  delete philip's Contact instance.
     console.log(contactList.listContacts()); //  string containing contacts in sorted order by last name.
   </script>
```
Consult the contacts.js file for more information about these functions.

# Credits
I am using Reed Shinsato's code for this project. Also uses the [Underscore] (http://underscorejs.org) library.
