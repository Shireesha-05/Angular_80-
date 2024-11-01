import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  userData: any;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      userId: [''],
      id: [''],
      title: [''],
      completed: [false]
    });
  }

  ngOnInit(): void {
    
    const id = this.route.snapshot.params['id'];
  // Use the ID to fetch the user data
  this.api.getApi().subscribe((data: any) => {
    this.userData = data.find((user: { id: number; }) => user.id === parseInt(id));
    this.populateForm();
  });
  }

  populateForm(): void {
    if (this.userData) {
      this.editForm.patchValue({
        userId: this.userData.userId,
        id: this.userData.id,
        title: this.userData.title,
        completed: this.userData.completed
      });
    }
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const userData=this.editForm.value;
      // Handle form submission
      console.log(this.editForm.value);
      // You can call your API service here to update the data
      this.api.updateUser(userData).subscribe((data: any) => {
        console.log('User data updated successfully!');
        
      });
      // alert("updated");
      this.router.navigate(['home']);
    }
  }
}
