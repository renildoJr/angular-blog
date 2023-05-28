import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbsyfOOH4z4PDLqMmRavTyAjYKwSU2SGA_Q&usqp=CAU"
  contentTitle:string = "Minha Notícia"
  contentDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis fugiat maiores. Accusamus iure sed id tempora quos in rem temporibus quasi, officiis reprehenderit doloribus odio impedit totam libero nam."
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id")
    )

      this.setValuesToComponet(this.id)
  }

  setValuesToComponet(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
  }

  

}
