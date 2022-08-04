import { Component, OnInit } from '@angular/core';
import { Contractor } from 'src/app/model/Contractor';
import { ContractorService } from 'src/app/service/contractor-service.service';

@Component({
  selector: 'app-contractors-tables',
  templateUrl: './contractors-tables.component.html',
  styleUrls: ['./contractors-tables.component.css']
})
export class ContractorsTablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    ContractorService: ContractorService;
  }

  Contractors: Contractor[] = [
    {
      Id: 1,
      Name: 'Darlene Robertson',
      TypeOfContract: 'Traditional',
      StartDate: 'Mar 4.2021',
      Amount: 200,
      Status: 'active',
      ProfilePicture: 'assets/images/Ellipse 29.svg'
    },
    {
      Id: 2,
      Name: 'Darlene Robertson',
      TypeOfContract: 'Traditional',
      StartDate: 'Mar 4.2021',
      Amount: 200,
      Status: 'active',
      ProfilePicture: 'assets/images/Ellipse 41.svg'
    },
    {
      Id: 3,
      Name: 'Darlene Robertson',
      TypeOfContract: 'Traditional',
      StartDate: 'Mar 4.2021',
      Amount: 200,
      Status: 'Signature pending',
      ProfilePicture: 'assets/images/Ellipse 43.svg'
    }
  ];
}
