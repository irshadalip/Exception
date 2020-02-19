import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewDataManagerService } from '../../allrecipe/addedrecipe/service/newdata-manager.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CustomValidators } from '../validators';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: '../../newrecipe/view/add-recipe-form.component.html',
  styleUrls: ['../../newrecipe/view/add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  selectedFile: File
  recipeForm: FormGroup
  constructor(private newDataManagerService: NewDataManagerService, private route: Router, private formBuilder: FormBuilder, private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      recipeName: new FormControl(null, Validators.required),
      preprationTime: new FormControl(null, [Validators.required, CustomValidators.validRecipePreprationTime]),
      noOfServes: new FormControl(null, [Validators.required, CustomValidators.validNoOfServes]),
      metatags: new FormArray([]),
      complexity: new FormControl('', [Validators.required]),
      youtubeURL: new FormControl(null, [Validators.required, CustomValidators.validYouTubeUrl]),
      ingredients: new FormArray([]),
      instructions: new FormArray([]),
    });
    this.recipeForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }


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
    const control = new FormControl(null, Validators.required);
    this.metatags.push(control);
  }

  addIngredients() {
    const control = new FormControl(null, Validators.required);
    this.ingredients.push(control);
  }

  addInstructions() {
    const control = new FormControl(null, Validators.required);
    this.instructions.push(control);
  }



  onClickAddRecipe() {
    const recipeData = this.recipeForm.value
    console.warn(recipeData);
    this.addRecipeToFeedList(recipeData.recipeName, recipeData.preprationTime, recipeData.noOfServes,
      recipeData.complexity, recipeData.metatags, recipeData.youtubeURL, recipeData.ingredients, recipeData.instructions)
  }

  addRecipeToFeedList(recipeName, preprationTime, serves, complexity, metaTags, youtubeUrl, ingredients, instructions) {
    this.spinnerService.show();
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

  addRecipeImage(recipeId) {
    this.spinnerService.hide();
    const uploadData = new FormData();
    uploadData.append('photo', this.selectedFile);
    uploadData.append("recipeId", recipeId)

    this.http.post('http://35.160.197.175:3006/api/v1/recipe/add-update-recipe-photo',
      uploadData).subscribe((response) => {
        console.log(response['generatedError'])
        console.log("Add Photo Successfully")
        this.route.navigate(['/recipes']);
      })
  }

}
