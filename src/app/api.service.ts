import { Injectable } from '@angular/core';
import { Plugin } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://capacitorjs.com/directory/plugin-data-raw.json';
  private plugins: Plugin[] = [];
  constructor() {
    this.init();
  }

  async init(): Promise<void> {
    const res = await fetch(this.url);
    this.plugins = await res.json();
    for (const plugin of this.plugins) {
      plugin.notes = [];
      for (const item of plugin.success) {
        if (item.startsWith('capacitor-')) {
          const v = item.replace('capacitor-ios-', '').replace('capacitor-android-', '');
          if (!plugin.notes.includes(v)) {
            plugin.notes.push(v);
          }
        }
      }
    }

  }

  getPlugins(): Plugin[] {
    return this.plugins;
  }

}
