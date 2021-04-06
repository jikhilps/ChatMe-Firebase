import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationserviceService {

  constructor() { }

  ValidateName(name, alt) {
    {
      {
        if (name.length > 0) {
          return (true)
        }
        else {
          if (alt) 
          { alert('You have entered an invalid data!') }
        }
        return (false)
      }
    }
  }

  ValidatePassword(name, alt) {
    {
      {
        if (name.length > 0) {
          return (true)
        }
        else {
          if (alt) 
          { alert('You have entered an invalid Password!') }
        }
        return (false)
      }
    }
  }

  ValidateTemple(name, alt) {
    {
      {
        if (name.length > 0) {
          return (true)
        }
        else {
          if (alt) 
          { alert('You have entered an invalid Temple Name!') }
        }
        return (false)
      }
    }
  }
  ValidateUserName(name, alt) {
    {
      {
        if (name.length > 2) {
          return (true)
        }
        else {
          if (alt) { alert('You have entered an invalid data!') }
        }
        return (false)
      }
    }
  }
  validatedate(date, alt) {
    {
      if (/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(date)) {
        return (true)
      }
      else { if (alt) { alert("You have entered an invalid Date!"); } }

      return (false)
    }
  }
  ValidateEmail(mail, alt) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    else {
      if (alt) {
        alert("You have entered an invalid email address!");
      }
    }
    return (false)
  }
  ValidateMobile(mobile, alt) {
    if (/^(\+[\d]{1,5}|0)?[6-9]\d{9}$/.test(mobile)) {
      return (true)
    }
    else {
      if (alt) {
        alert("You have entered an invalid mobile number!");
      }
      return (false)
    }
  }
  ValidateRate(name, alt) {
    {
      {
        if (name > 0) {
          return (true)
        }
        else { if(alt){alert(" Enter Rate"); }}
        return (false)
      }
    }
  }

  ValidateService(name, alt) {
    {
      {
        if (name.length > 0) {
          return (true)
        }
        else { if(alt){alert("Please Select Service"); }}
        return (false)
      }
    }
  }


  ValidateWebsite(name,IsRegistered, alt) {
    
    //   {
    //     if (name.length > 0) {
    //       return (true)
    //     }
    //     else { if(alt){alert("Please Select Service"); }}
    //     return (false)
    //   }
    // }

    if(IsRegistered==1)
    {
      return (true)
    }
    else
    {

      if(name.length>0)
      {
        return (true)
      }
       else 
       { 
         if(alt)
        {
          alert("Please Enter Webiste"); 
        }}
         return (false)
          

    }
  }
  ValidateNmuber(name, alt) {
    {
      {
        if (name > 0) {
          return (true)
        }
        else { if(alt){alert("Enter mandatory fields"); }}
        return (false)
      }
    }
  }

  ValidateMobileNumberForRegisteredTemple(name,IsRegistered,alt)
  {
    if(IsRegistered==0)
    {
      return (true)
    }
    else
    {
      if (/^(\+[\d]{1,5}|0)?[6-9]\d{9}$/.test(name)) {
        return (true)
      }
      else {
        if (alt) {
          alert("You have entered an invalid mobile number!");
        }
        return (false)
      }
    }
  
  }


  ValidateEmailForRegisteredTemple(name,IsRegistered,alt)
  {
    if(IsRegistered==0)
    {
      return (true)
    }
    else
    {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)) {
        return (true)
      }
      else {
        if (alt) {
          alert("You have entered an invalid email address!");
        }
      }
      return (false)
    }
  
  }
  ValidatePasswordForRegisteredTemple(name,IsRegistered,alt)
  {
    if(IsRegistered==0)
    {
      return (true)
    }
    else
    {
      if (name.length > 0) {
        return (true)
      }
      else {
        if (alt) 
        { alert('You have entered an invalid Password!') }
      }
      return (false)
    }
  
  }

  ValidateStringItems(name, alt,item) {
    {
      {
        if (name.length > 0) {
          return (true)
        }
        else {
          if (alt) 
          { alert('Please Enter '+item+' !') }
        }
        return (false)
      }
    }
  }
}
