import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

export const component = [
    CreateContactComponent, ViewContactComponent
]

@NgModule({
	declarations: component,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		IonicModule
	],
	exports: component
})
export class ComponentsModule {}