import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewDataManagerService } from '../../allrecipe/addedrecipe/service/newdata-manager.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: '../../newrecipe/view/add-recipe-form.component.html',
  styleUrls: ['../../newrecipe/view/add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  selectedFile: File

  constructor(private newDataManagerService: NewDataManagerService, private route: Router, private formBuilder: FormBuilder, private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) {
  }

  recipeForm = this.formBuilder.group({
    recipeName: ['', Validators.required],
    preprationTime: [''],
    noOfServes: ['', Validators.required, Validators.max(10), Validators.min(1)],
    complexity: ['', Validators.required],
    metatags: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    ingredients: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    instructions: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    youtubeURL: ['', Validators.required],
    photo: ['']

  });

  get metatags() {
    return this.recipeForm.get('metatags') as FormArray;
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get instructions() {
    return this.recipeForm.get('instructions') as FormArray;
  }

  addMetaTags() {
    this.metatags.push(this.formBuilder.control(''));
  }

  addIngredients() {
    this.ingredients.push(this.formBuilder.control(''));
  }

  addInstructions() {
    this.instructions.push(this.formBuilder.control(''));
  }


  ngOnInit() {
  }


  onClickAddRecipe() {
    // TODO: Use EventEmitter with form value
    const recipeData = this.recipeForm.value
    console.warn(recipeData.photo);
    // this.newDataManagerService.addRecipe(recipeData.recipeName,recipeData.preprationTime,recipeData.noOfServes,
    //   recipeData.complexity, recipeData.metatags, recipeData.youtubeURL, recipeData.ingredients, recipeData.instructions);
    this.addRecipeToFeedList(recipeData.recipeName, recipeData.preprationTime, recipeData.noOfServes,
      recipeData.complexity, recipeData.metatags, recipeData.youtubeURL, recipeData.ingredients, recipeData.instructions)
    //  this.route.navigate(['/recipes'])
  }

  addRecipeToFeedList(recipeName, preprationTime, serves, complexity, metaTags, youtubeUrl, ingredients, instructions) {
    this.spinnerService.show();//show the spinner
    const body = {
      'name': recipeName,
      'preparationTime': preprationTime,
      'serves': serves,
      'complexity': complexity,
      'metaTags': metaTags,
      'ytUrl': youtubeUrl
    }
    this.http.post('http://35.160.197.175:3006/api/v1/recipe/add',
      body
    ).subscribe((response) => {
      console.log(response['id'])
      console.log('succcessfully servive')
      const getRecipeId = response['id']
      this.addIngredientsAndInstructions(getRecipeId, ingredients, instructions)
    })
  }

  addIngredientsAndInstructions(recipeId, ingredients, instructions) {
    for (var i in ingredients) {
      this.http.post('http://35.160.197.175:3006/api/v1/recipe/add-ingredient',
        { 'ingredient': ingredients[i], 'recipeId': recipeId }).subscribe((response) => {
          console.log(response)
          console.log("Add Ingredients Successfully")
        })
    }
    for (var i in instructions) {
      this.http.post('http://35.160.197.175:3006/api/v1/recipe/add-instruction',
        { 'instruction': instructions[i], 'recipeId': recipeId }).subscribe((response) => {
          console.log(response)
          console.log("Add Instructions Successfully")
        })
    }
    this.addRecipeImage(recipeId)

  }

  onFileChanged(event) {

    this.selectedFile = event.target.files[0]
   
  }

  addRecipeImage(recipeId){
    this.spinnerService.hide();//show the spinner
    const uploadData = new FormData();
    uploadData.append('photo', this.selectedFile);
    uploadData.append("recipeId", recipeId)
    // const formData = new FormData();
    // const  photo = {
    //   uri: photoUri,
    //   type: 'image/png',
    //   name: 'photo.png',
    // }
    // formData.append("photo", photo.uri);
    
    this.http.post('http://35.160.197.175:3006/api/v1/recipe/add-update-recipe-photo',
    uploadData).subscribe((response) => {
      console.log(response['generatedError'])
      console.log("Add Photo Successfully")
    })
  }
 
}
