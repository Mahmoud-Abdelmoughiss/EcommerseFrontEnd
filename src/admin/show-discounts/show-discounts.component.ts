import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/helpers/interfaces/idiscount';
import { DiscountService } from 'src/helpers/services/discount.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-show-discounts',
  templateUrl: './show-discounts.component.html',
  styleUrls: ['./show-discounts.component.scss']
})
export class ShowDiscountsComponent implements OnInit {

  textDirection;
  activeStatuscolor:string="indigo";
  discountsList:IDiscount[]=[];
  errorMessage:string="";
  discountName:string="";
  discountActivestatus:string="";
  isEnglishLang:boolean;
  // categoryId:any;
  // isShownSuccessAlert:boolean=false;
  // isShownErrorAlert:boolean=false;

  // getAllCategoryState:string="";
  // deleteState:string=""
  // isDeleted:boolean=false;

  constructor(private sharedService:SharedService,private discountService:DiscountService,private location:Location) 
  {
    this.textDirection = this.sharedService.textDirection;
    this.isEnglishLang=this.textDirection=='ltr'?true:false;
   }

  ngOnInit(): void {
    this.getAlldiscounts();
  }
  activeState:string="";
  activeStatusTransform(isActive:boolean){
     if(isActive){
      this.activeStatuscolor = "#005221"
      if(this.isEnglishLang){
        this.activeState = "This Discount is Active";
      }else{
        this.activeState = "هذا الخصم مفعل";
      }
     }else{
      this.activeStatuscolor = "#8a0000"
      if(this.isEnglishLang){
        this.activeState = "This Discount is Inactive";
      }else{
        this.activeState = "هذا الخصم غير مفعل"
      }
     }
  }
  getAlldiscounts(){
    this.discountService.getAllDiscounts().subscribe(
      (data)=>{
        this.discountsList=data;
      },
      (error)=>{
        this.errorMessage = error;
      }
    )
  }
  

  // getItemNameInSelectedLang(id:any){
  //   this.subCategoryName = (localStorage.getItem('lang')=="ar"?this.subCategoriesList.
  //   find(x=>x.id==id)?.nameAr:this.subCategoriesList.find(x=>x.id==id)?.name)||"";
  //   this.categoryId = id;
  // }

  back(){
    this.location.back();
  }

}