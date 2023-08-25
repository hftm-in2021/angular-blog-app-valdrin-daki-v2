import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { BlogStateService } from './state/blog-state.service';

type InvalidFormGroup = {
  title: FormControl<string | null>;
  content: FormControl<string | null>;
};

type CreatdeBlog = {
  title: string;
  content: string;
};

@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.scss'],
})
export class AddBlogPageComponent implements OnInit {
  form!: FormGroup<InvalidFormGroup>;

  constructor(public blogStateService: BlogStateService) {}

  ngOnInit() {
    this.form = new FormGroup<InvalidFormGroup>({
      title: new FormControl<string | null>('an existing title', [
        Validators.required,
        Validators.maxLength(10),
        customeValidator,
      ]),
      content: new FormControl<string | null>(null),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.blogStateService.addBlog(this.form.value as CreatdeBlog);
    }
  }
}

const customeValidator = (
  control: UntypedFormControl
): ValidationErrors | null => {
  if (control.value === 'Felice') {
    return { NotUseNameFromDev: true };
  }
  return null;
};
