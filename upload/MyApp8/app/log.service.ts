import { Injectable } from '@angular/core';


export class LogService {

  constructor() { 
    console.log("LogService Object is created");
  } 

  log(msg: any)   { 
    console.log(msg); 
  }

  error(msg: any) { 
    console.error(msg);
  }

  warn(msg: any)  { 
    console.warn(msg); 
  }

}
