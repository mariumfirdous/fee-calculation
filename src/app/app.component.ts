import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = {
    "Exam Fee": {
      "INDIAN": {
        "ALL_COURSES​": {
          "ALL_LEVEL​": {
            "amount": 400
          }
        }
      },
      "FOREIGN": {
        "ALL_COURSES​": {
          "ALL_LEVEL​": {
            "amount": 100
          }
        }
      },
      "NRI": {
        "ALL_COURSES​": {
          "ALL_LEVEL​": {
            "amount": 600
          }
        }
      },
      "SAARC": {
        "ALL_COURSES​": {
          "ALL_LEVEL​": {
            "amount": 600
          }
        }
      }
    },
    "Application Fee": {
      "INDIAN": {
        "ALL_COURSES​": {
          "UG": {
            "amount": 200
          },
          "UG-DIPLOMA": {
            "amount": 300
          },
          "PG": {
            "amount": 500
          }
        }
      },
      "FOREIGN": {
        "ALL_COURSES​": {
          "UG": {
            "amount": 400
          },
          "UG-DIPLOMA": {
            "amount": 400
          },
          "PG": {
            "amount": 700
          }
        }
      }
    }
  }

  feeType: string = "";
  nationality: string = "";
  course: string = "";
  level: string = "";

  totalFee: number = 0;

  nationalityArr: Array<string> = [];
  courseArr: Array<string> = [];
  levelArr: Array<string> = [];

  finalData: any = [];

  feeTypeSelected(){
    if(this.feeType == "Exam Fee"){
      this.finalData = this.data["Exam Fee"];
      this.nationalityArr = ["INDIAN","FOREIGN","NRI","SAARC"];
    }else
    if(this.feeType == "Application Fee"){
      this.finalData = this.data["Application Fee"];
      this.nationalityArr = ["INDIAN","FOREIGN"];
    }
  }
  nationSelected(){
    this.finalData = this.finalData[this.nationality];
    this.courseArr = ["Medical","Dental","Ayurveda"];

  }
  courseSelected(){
    if(this.finalData["ALL_COURSES​"]){
      this.finalData = this.finalData["ALL_COURSES​"];
      }else{
      this.finalData = this.finalData[this.course];
      }
    this.levelArr = ["UG","UG-DIPLOMA","PG","Ph.D"];
  }

  levelSelected(){
    if(this.finalData["ALL_LEVEL​"]){
    this.finalData = this.finalData["ALL_LEVEL​"];
    }else{
    this.finalData = this.finalData[this.level];
    }
  }

  showFee(){
    this.totalFee = this.finalData["amount"];
    console.log(this.totalFee);
  }

}
