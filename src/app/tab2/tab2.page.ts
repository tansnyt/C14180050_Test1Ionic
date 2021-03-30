import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FotoService } from '../services/foto.service';

export interface filefoto {
  name: string, // filepath
  path: string // webviewpath
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private afStorage: AngularFireStorage, public fotoService: FotoService) { }

  async ngOnInit() {
    await this.fotoService.loadFoto();
  }

  TambahFoto() {
    this.fotoService.tambahFoto();
  }

  uploadFoto(index: number) {
    const imgFilepath = `imgLatihanStorage/${this.fotoService.dataFoto[index].filePath}`;

    this.afStorage.upload(imgFilepath, this.fotoService.dataFoto[index].dataImage).then(() => {
      alert("Photo Uploaded");
    });

  }
}
