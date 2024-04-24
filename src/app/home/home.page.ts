import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonNote, IonBadge, IonSearchbar } from '@ionic/angular/standalone';
import { ApiService } from '../api.service';
import { Plugin } from '../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonBadge, IonNote, IonList, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage implements OnInit {
  plugins: Plugin[] = [];
  search = '';
  constructor(private api: ApiService) { }

  async ngOnInit() {
    await this.api.init();
    this.filter();
    console.log(this.plugins[0]);
  }

  filter() {
    console.log(`Filter for ${this.search}`)
    this.plugins = this.filtered(this.api.getPlugins());
  }

  filtered(plugins: Plugin[]) {
    return plugins.filter(plugin => {
      return plugin.name.toLowerCase().includes(this.search.toLowerCase());
    });
  }
}
