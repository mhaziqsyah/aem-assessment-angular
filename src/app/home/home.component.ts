import { baseUrl } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from "node_modules/chart.js";
import { data } from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

  constructor(private http: HttpClient) {

    var t=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyQGFlbWVuZXJzb2wuY29tIiwianRpIjoiYjVkNGIwNzItYWNkMy00ZjEyLWE5MGItMzQ4Yjk0MjM3NjRmIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzMzE4ZTcxMC05MzAzLTQ4ZmQtODNjNS1mYmNhOTU0MTExZWYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwiZXhwIjoxNjEzODM1NDA2LCJpc3MiOiJodHRwOi8vdGVzdGRlbW8uYWVtLWVuZXJzb2wuY29tIiwiYXVkIjoiaHR0cDovL3Rlc3RkZW1vLmFlbS1lbmVyc29sLmNvbSJ9.mAqufPF17rp5AxWlyXQJEYqPhwV0v2fDjwqTJTEZ8Z0`;
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + t);

    this.http.get(`${baseUrl}api/dashboard`, ).toPromise().then(data =>{
      console.log(data);
    })

   }

  ngOnInit() {
    var pieChart = new Chart("pieChart", {
      type: 'doughnut',
      data: {
        labels: ['Donut 1', 'Donut 2', 'Donut 3', 'Donut 4'],
        datasets: [{
          label: '# of Votes',
          data: [25.0, 22.0, 29.0, 8.0],
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

    var barChart = new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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
  }

}
