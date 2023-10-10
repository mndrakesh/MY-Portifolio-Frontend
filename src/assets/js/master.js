function uploadFile(){
    document.getElementById("eye").style.color="rgb(255,103,0)";
    document.getElementById("upload").style.color="rgb(255,103,0)";
    document.getElementById("val").style.color="rgb(255,103,0)";
    document.getElementById("val").removeAttribute("disabled");
  
  }
  
  function valid()
  {
  
    document.getElementById("val").setAttribute("value","✓  validated");
  
    document.getElementById("val").style.color="lime";
    document.getElementById("publish").removeAttribute("disabled");
    document.getElementById("publish").style.backgroundColor="rgb(255,103,0)"
  
    Command:toastr["success"]("No errors found in the uploaded master.")
   
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass" :"toast-top-right", 
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  
  }
  
  function publish()
  {
  swal({
    title: "Send to Member",
    text: "Are you sure want to publish this master for the submission cycle 2020? you willl not able to reverse the decision & link will become open for eligible memebers to submit",
    buttons: ["GO BACK", "I AM SURE"],
    dangerMode: true,
  })
  }
  