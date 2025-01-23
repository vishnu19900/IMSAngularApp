import { Component } from '@angular/core';

@Component({
  selector: 'app-fisrt-page',
  templateUrl: './fisrt-page.component.html',
  styleUrls: ['./fisrt-page.component.css']
})
export class FisrtPageComponent {
  myFruits=[]=['Apple','Mango','grapes','papaya']
  myFruitsList=[]=[{'name':'Apple','value':10},
    {'name':'Mango','value':20},
    {'name':'grapes','value':30},
    {'name':'papaya','value':40},
  ]
}
