import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonSearchbar, IonToolbar, IonCard, IonItem, IonCardHeader, IonCardTitle, IonCardContent, IonCol, IonRow, IonGrid, IonCardSubtitle, IonImg, IonChip, IonLabel, IonAccordion, IonList, IonAccordionGroup } from '@ionic/angular/standalone';
import { GooglebookService } from '../Services/googlebook.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonAccordionGroup, IonList, IonAccordion,
    IonLabel,
    IonChip,
    IonImg,
    IonRow,
    IonCol,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol, 
    IonCardSubtitle, IonSearchbar,
    IonImg, IonItem,
    IonAccordion, IonLabel, IonChip,]
})
export class DashboardPage implements OnInit {

  googleBookService: GooglebookService = inject(GooglebookService);

  books: {
    title: string,
    authors: string,
    description: string,
    imageLinks: {
      smallThumbnail: string
    },
    language: string,
    pageCount: number,
    publisher: string,
    publishedDate: string,
    categories: string
  }[] = [];

  constructor() { }

  ngOnInit() {
    console.log('DashboardPage ngOnInit');
  }

  loadBooks(query: string){
    this.books = [];
    this.googleBookService.getBooks(query).subscribe((data : any) => {
      console.log(data);
      this.books = data.items.map((item: any) => {
        return {
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          imageLinks: item.volumeInfo.imageLinks,
          language: item.volumeInfo.language,
          pageCount: item.volumeInfo.pageCount,
          publisher: item.volumeInfo.publisher,
          publishedDate: item.volumeInfo.publishedDate,
          categories: item.volumeInfo.categories
          };
      });
      console.log('books', this.books);
    });
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    console.log('query', query);
    this.loadBooks(query);
  }

}
