class ContactPerson {

  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Invalid Name..";
    }
  }


  get address() {
    return this._address;
  }
  set address(address) {
    let addressRegex = RegExp("[\w',-\\/.\s]");
     if (addressRegex.test(address)) {
      this._address = address;
    } else {
      throw "Invalid Address..";
    }
  }


  get city() {
    return this._city;
  }
  set city(city) {
    this._city = city;
  }


  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }


  get zipCode() {
    return this._zip;
  }
  set zipCode(zipCode) {
    let zipCodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
    if (zipCodeRegex.test(zipCode)){
      this._zipCode = zipCode;
    } else {
      throw "Invalid Zipzode."
    }
  }


  get phone(){
    return this._phone;
  }
  set phone(phone){
  let phoneRegex = RegExp("^[0-9]{2}\\s{1}[7-9]{1}[0-9]{9}$");
  if (phoneRegex.test(phone)){
    this._phone = phone;
  } else {
    throw "Invalid Phone Number";
  }
  }

  toString(){
    return "Id = " + this.id +  ",  \nName = " + this.name + ",  \nAddress = " + this.address + ", \nPhone = " + this.phone + ", \nCity = " + this.city + ", \nState = " + this.state + ", \nZip = " + this.zipCode;
  }
}


window.addEventListener("DOMContentLoaded", (event) => {
    nameValidation();
    addressValidation();
    zipcodeValidation();
    phoneValidation();
  });

    //UC4

  const nameValidation = () => {
    const name = document.querySelector("#name");
    name.addEventListener ("input", function () {
      if (name.value.length == 0) {
        setTextValue(".name-error", "");
        return;
      }
      try {
        new ContactPerson().name = name.value;
        setTextValue(".name-error", "");
      } catch (error) {
        setTextValue(".name-error", error);
      }
    });
  };

  const addressValidation = () => {
    const address = document.querySelector("#address");
    address.addEventListener("input", function () {
      if (address.value.length == 0) {
        setTextValue(".address-error", "");
        return;
      }
      try {
        new ContactPerson().address = address.value;
        setTextValue(".address-error", "");
      } catch (error) {
        setTextValue(".address-error", error);
      }
    });
  };

  const zipcodeValidation = () => {
    const pin = document.querySelector('#pin');
    pin.addEventListener("input", function () {
      if (pin.value.length == 0){
        setTextValue(".pin-error", " ");
        return;
      }
      try {
        new ContactPerson().pin = pin.value;
        setTextValue(".pin-error", " ");
      } catch (error) {
        setTextValue(".pin-error", error);
      }
    });
  };

  const phoneValidation = () => {
  const phone = document.querySelector("#phone");
    phone.addEventListener("input", function() {
      if (phone.value.length == 0){
        setTextValue(".phone-error", " ");
        return;
      }
      try{
        new ContactPerson().phone = phone.value;
        setTextValue(".phone-error", " ");
      } catch (error) {
        setTextValue(".phone-error", error);
      }
    });
  };

  // UC5
  function resetForm() {
    alert("The form will reset");
  }

  const save = () => {
    try {
    let contactPerson = createContactPerson();
    createAndUpdateStorage(contactPerson);
    } catch (error) {
    alert(error);
    }
  };


  const createAndUpdateStorage = (contactPerson) =>{
    let contactList = JSON.parse(localStorage.getItem("contactList"));
    if (contactList != undefined) {
      contactList.push(contactPerson);
    } else {
      contactList = [contactPerson];
    }
    alert(contactPerson.toString());
    alert("Contacts Created Succesfully");
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }


  const createContactPerson = () => {
    let contactPerson = new ContactPerson();
    contactPerson.id = new Date().getTime();

      try {
        contactPerson.name = getInputValueById("#name");
      } catch (error) {
        setTextValue(".name-error", error);
        throw error;
      }

      try {
        contactPerson.phone = getInputValueById("#phone");
      } catch (error) {
        setTextValue(".phone-error", error);
        throw error;
      }

      try {
        contactPerson.address = getInputValueById("#address");
      } catch (error) {
        setTextValue(".address-error", error);
        throw error;
      }

      let city = getInputValueById("#city");
      if (city != "Select City") {
        contactPerson.city = city;
      } else {
        throw "Please select city";
      }

      let state = getInputValueById("#state");
      if (state != "Select State") {
        contactPerson.state = state;
      } else {
        throw "Please select state";
      }

      try {
        contactPerson.pin= getInputValueById("#pin");
      } catch (error) {
        setTextValue(".pin-error", error);
        throw error;
      }

      alert(contactPerson.toString());
      return contactPerson;
  };

    //setting and declaring the error-output
    const setTextValue = (id, value) => {
      const element = document.querySelector(id);
      element.textContent = value;
    };

    //Getting values
    const getInputValueById = property => {
      let value = document.querySelector(property).value;
      return value;
    };