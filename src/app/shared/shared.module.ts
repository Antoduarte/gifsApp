import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [CommonModule],
    exports: [SidebarComponent],
    declarations: [SidebarComponent]
})

export class SharedModule{

}