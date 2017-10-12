import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'ng-admin-image-edit',
  templateUrl: './admin-image-edit.component.html',
  styleUrls: ['./admin-image-edit.component.css']
})
export class AdminImageEditComponent implements OnInit, OnDestroy {
  id: any;
  params: any;

  constructor(private activatedRoute: ActivatedRoute,private imageService: ImageService) { }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.imageService.getImage(this.id).subscribe(
      data => {
       console.log(data);
      },
      error =>  console.log(<any>error));

  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }
}
