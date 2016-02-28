$(document).ready(function(){

           $( ".text1" ).hide();
           $( ".text2" ).hide();
           $( ".text3" ).hide();
           
           $(".projekt1").mouseenter(function(){
               $( ".text1" ).show();       
           });
           $(".projekt1").mouseleave(function(){
               $( ".text1" ).hide();
           });

           $(".projekt2").mouseenter(function(){
               $( ".text2" ).show();       
           });
           $(".projekt2").mouseleave(function(){
               $( ".text2" ).hide();
           });
           
           $(".projekt3").mouseenter(function(){
               $( ".text3" ).show();       
           });
           $(".projekt3").mouseleave(function(){
               $( ".text3" ).hide();
           });
        });