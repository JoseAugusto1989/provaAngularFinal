import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Music } from './music';
import { MusicService } from './music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})

  export class MusicComponent implements OnInit {
    musicList : Music[] = []
    newMusic : Music = {} as Music

    constructor(private service: MusicService) {}

    ngOnInit() {
      this.loadData()
    }

    loadData() {
      this.service.getMusicList().subscribe(items => {
        this.musicList = items
      })
    }

    saveData(form: NgForm) {
      if (this.newMusic.id) {
        this.service.updateMusic(this.newMusic).subscribe(item => {
          form.resetForm()
          this.newMusic = {} as Music
          this.loadData()
        })
      } else {
        this.service.createMusic(this.newMusic).subscribe(item => {
          form.resetForm()
          this.newMusic = {} as Music
          this.loadData()
        })
      }
    }

    countMusic() {
      if (label === "samba") {
        this.musicList ++
      }
    }

}
