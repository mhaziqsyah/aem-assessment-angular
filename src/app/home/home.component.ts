import { Router } from '@angular/router';
import { UserDataService } from './../user-data.service';
import { baseUrl } from './../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from "node_modules/chart.js";
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 chartDonut = [];
 nameDonut = [];
 chartBar = [];
 tableUsers:any;
 data = [];

  constructor(private http: HttpClient, private userData: UserDataService, 
    private route: Router, public authService: AuthServiceService) {


   }



  ngOnInit() {


    this.userData.getData()
    .subscribe(res => {
      this.tableUsers = res.tableUsers;

      this.chartDonut = res.chartDonut;
      var labelsDonut =  this.chartDonut.map(function(e) {
        return e.name;
     });
     var dataDonut =  this.chartDonut.map(function(e) {
        return e.value;
     });;

      var pieChart = new Chart("pieChart", {
        type: 'doughnut',
        data: {
          labels: labelsDonut,
          datasets: [{
            label: '# of Votes',
            data: dataDonut,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
              
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  

      this.chartBar = res.chartBar;
      console.log(this.chartBar);
      var labelsBar =  this.chartBar.map(function(e) {
        return e.name;
     });
     var dataBar =  this.chartBar.map(function(e) {
        return e.value;
     });;

      var barChart = new Chart("barChart", {
        type: 'bar',
        data: {
          labels: labelsBar,
          datasets: [{
            label: '# of Votes',
            data: dataBar,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

    },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.route.navigate(['/login'])
          }
        }
      }
    )
  }

}
