import { NgModule } from '@angular/core';
import { ShareModule} from './../../common/share.module';

import { FormListComponent } from './form-list/form-list.component';
import { FormPageComponent } from './form-page.component';

import { FormsService } from './forms.service';

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [FormPageComponent, FormListComponent],
  providers: [FormsService]
})
export class FormPageModule { }
