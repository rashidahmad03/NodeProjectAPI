import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor() {
this.modata = {
  Name: 'C Programing',
  URL: '/assets/img/certificate/C.jpg',
  Details: 'this update',
  Org: 'Sololear',
  pdf: [
    '/assets/certificate/C.pdf'
  ]
};

  }
  modata;
listcerti = {
  certificat: [
    {
      Name: 'Salesforce Platform Developer I',
      URL: '/assets/img/certificate/Salesforce_Platform_Developer_I.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/Salesforce_Platform_Developer_I.pdf'
      ]
    },
    {
      Name: 'C Programing',
      URL: '/assets/img/certificate/C.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/C.pdf'
      ]
    },
    {
      Name: 'DevOps',
      URL: '/assets/img/certificate/DevOps.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/DevOps.pdf'
      ]
    },
    {
      Name: 'Excel',
      URL: '/assets/img/certificate/Excel.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/Excel.pdf'
      ]
    },
    {
      Name: 'HTML',
      URL: '/assets/img/certificate/HTML.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/HTML.pdf'
      ]
    },
    {
      Name: 'Instagram',
      URL: '/assets/img/certificate/instagram.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/instagram.pdf'
      ]
    },
    {
      Name: 'Java',
      URL: '/assets/img/certificate/java.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/java collection framework.pdf',
        '/assets/certificate/Java Generics.pdf',
        '/assets/certificate/java.pdf'
      ]
    },
    {
      Name: 'JavaScript',
      URL: '/assets/img/certificate/Javascript.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/Javascript.pdf'
      ]
    },
    {
      Name: 'Basic Machine Learing',
      URL: '/assets/img/certificate/machine.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/machine.pdf'
      ]
    },
    {
      Name: 'NodeNode JS, Angular JS, Ajax',
      URL: '/assets/img/certificate/Node.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/Node JS, Angular JS, Ajax.pdf'
      ]
    },
    {
      Name: 'Python',
      URL: '/assets/img/certificate/Python.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/Python.pdf',
        '/assets/certificate/python module 1.pdf',
        '/assets/certificate/Python Module 2.pdf'
      ]
    },
    {
      Name: 'SQL',
      URL: '/assets/img/certificate/SQL.jpg',
      Details: 'this update',
      Org: 'Sololear',
      pdf: [
        '/assets/certificate/SQL.pdf'
      ]
    }
  ]
};

  ngOnInit() {
console.log(this.listcerti);
  }

  datamodel(v) {
    this.modata = v;
    console.log('mio   =' + v.Name);
  }
}

