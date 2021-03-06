import { Component, Input } from '@angular/core';
import { MonsterCard } from 'src/app/models/doors/monster-card';

@Component({
  selector: 'app-monster-edit',
  templateUrl: './monster-edit.component.html',
  styleUrls: ['./monster-edit.component.css']
})

export class MonsterEditComponent {
  @Input()
  card: MonsterCard;
}
