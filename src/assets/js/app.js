function toggleClearButton() {
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearButton');
       
    if (searchInput.value.length > 0) {
      clearButton.disabled = false;
      

    } else {
      clearButton.disabled = true;
    
    }

    performSearch(searchInput.value);
  }

  function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    toggleClearButton();
  }

 




 /*  INPUT TWO =============================================================================*/


 function toggleClearButton_1() {
  const searchInput_1 = document.getElementById('searchInput_1');
  const clearButton_1 = document.getElementById('clearButton_1');
     
  if (searchInput_1.value.length > 0) {
    clearButton_1.disabled = false;
    

  } else {
    clearButton_1.disabled = true;
  
  }

  performSearch(searchInput_1.value);
}

function clearSearch_1() {
  const searchInput_1 = document.getElementById('searchInput_1');
  searchInput_1.value = '';
  toggleClearButton_1();
}



 /*  SELECT INPUT =============================================================================*/


 function toggleClearButton_2() {
  const searchInput_2 = document.getElementById('searchInput_2');
  const clearButton_2 = document.getElementById('clearButton_2');
     
  if (searchInput_2.value === "Eligible" || searchInput_2.value === "Inactive") {
    clearButton_2.disabled = false;
  } else {
    clearButton_2.disabled = true;
  }
}

function clearSearch_2() {
  const searchInput_2 = document.getElementById('searchInput_2');
  searchInput_2.value = '';
  toggleClearButton_2();
}


/*=====================================================================================*/



function toggleClearButton_3() {
  const searchInput_3 = document.getElementById('searchInput_3');
  const clearButton_3 = document.getElementById('clearButton_3');
     
  if (searchInput_3.value.length > 0) {
    clearButton_3.disabled = false;
    

  } else {
    clearButton_3.disabled = true;
  
  }

  performSearch(searchInput_3.value);
}

function clearSearch_3() {
  const searchInput_3 = document.getElementById('searchInput_3');
  searchInput_3.value = '';
  toggleClearButton_3();
}




/*========================================TABLE CHECK==================================================*/




function selectAllRows() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const rowCheckboxes = document.getElementsByClassName('rowCheckbox');
    const clear = document.getElementById('clear');

    for (let i = 0; i < rowCheckboxes.length; i++) {
        rowCheckboxes[i].checked = selectAllCheckbox.checked;
    }

    clear.disabled = !selectAllCheckbox.checked && !isAnyRowSelected();
}

function isAnyRowSelected() {
    const rowCheckboxes = document.getElementsByClassName('rowCheckbox');
    for (let i = 0; i < rowCheckboxes.length; i++) {
        if (rowCheckboxes[i].checked) {
            return true;
        }
    }
    return false;
}

function clearSelectedRows() {
    const rowCheckboxes = document.getElementsByClassName('rowCheckbox');
 
    for (let i = 0; i < rowCheckboxes.length; i++) {
        rowCheckboxes[i].checked = false;
    }
    document.getElementById('selectAll').checked = false;
    document.getElementById('clear').disabled = true;
}

function checkClearButton() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const clear = document.getElementById('clear');

    selectAllCheckbox.checked = isAnyRowSelected();
    clear.disabled = !selectAllCheckbox.checked && !isAnyRowSelected();
   
}




/**=========================================================calender============================================================ */





$(function() {
  $("#datePickerButton").on("click", function() {
    $("#customDateInput").datepicker("show");
  });

  $("#customDateInput").datepicker({
    dateFormat: "dd-mm-yy",
    onSelect: function(dateText) {
      $("#inactive_clear_Button").prop("disabled", false); // Enable the "Clear" button
      // Do something with the selected date if needed
    },
  });

  $("#inactive_clear_Button").on("click", function() {
    $("#customDateInput").datepicker("setDate", null); // Clear the date selection
    $(this).prop("disabled", true); // Disable the "Clear" button
  });
});


//==================================================Last_policy=====================================//

$(function() {
  $("#last_policy_btn").on("click", function() {
    $("#last_policy").datepicker("show");
  });

// 
  $("#last_policy").datepicker({
    dateFormat: "dd-mm-yy",
    onSelect: function(dateText) {
      // Do something with the selected date if needed
    },
  });
});

 //==================================================Due Date=====================================//


 $(function() {
  $("#due_date_btn").on("click", function() {
    $("#due_date").datepicker("show");
  });

// 
  $("#due_date").datepicker({
    dateFormat: "dd-mm-yy",
    onSelect: function(dateText) {
      // Do something with the selected date if needed
    },
  });
});


//=================================================Submission Date=====================================//


$(function() {
  $("#submission_date_btn").on("click", function() {
    $("#submission_date").datepicker("show");
  });

// 
  $("#submission_date").datepicker({
    dateFormat: "dd-mm-yy",
    onSelect: function(dateText) {
      $("#inactive_clear_Button1").prop("disabled", false); // Enable the "Clear" button
      // Do something with the selected date if needed
    },
  });

  $("#inactive_clear_Button1").on("click", function() {
    $("#submission_date").datepicker("setDate", null); // Clear the date selection
    $(this).prop("disabled", true); // Disable the "Clear" button
  });
});
    
      // Do something with the selected date if needed
   


//=================================================new-renewed=====================================//

$(function() {
  $("#new_renewed_btn").on("click", function() {
    $("#new_renewed").datepicker("show");
  });

// 
  $("#new_renewed").datepicker({
    dateFormat: "dd-mm-yy",
    onSelect: function(dateText) {
      // Do something with the selected date if needed
    },
  });
});


//========================================INACTIVE OPTION============================================================//






  document.addEventListener('DOMContentLoaded', function () {
    const statusSelect = document.getElementById('statusSelect');
    const dateFieldContainer = document.getElementById('dateFieldContainer');

    statusSelect.addEventListener('change', function () {
      if (statusSelect.value === 'inactive') {
        dateFieldContainer.style.display = 'block';
      } else {
        dateFieldContainer.style.display = 'none';
      }
    });
  });

//-----------------------------------------------//

  $(function() {
    $("#inactive_btn").on("click", function() {
      $("#inactive").datepicker("show");
    });
  
  // 
    $("#inactive").datepicker({
      dateFormat: "dd-mm-yy",
      onSelect: function(dateText) {
        // Do something with the selected date if needed
      },
    });
  });
  






// =====================================JavaScript to handle the show/hide functionality using jQuery================================================



$(document).ready(function () {
  $("#toggleButton").click(function () {
    $(".hide1, .hide2").toggle();
  });
});


/*===============================clear-sort-operation==========*/
$(function() {
  // Function to reset all datepickers to their default values (null)
  function resetDatePickers() {
    $("#customDateInput").datepicker("setDate", null);
    $("#last_policy").datepicker("setDate", null);
    $("#due_date").datepicker("setDate", null);
    $("#submission_date").datepicker("setDate", null);
    $("#new_renewed").datepicker("setDate", null);
  }

  // Function to reset all select elements to their default values (first option)
  function resetSelects() {
    $("select").prop("selectedIndex", 0);
  }

  // Function to disable the #inactive_clear_Button
  function disableInactiveClearButton() {
    $("#clearButton_2").prop("disabled", true); // Change from disableclearButton_2() to disableInactiveClearButton()
    $("#inactive_clear_Button").prop("disabled", true);
  }

  // Event listener for the Clear Sort button
  $("#clearSortButton").on("click", function() {
    // Reset all datepickers to their default values (null)
    resetDatePickers();
    // Reset all select elements to their default values (first option)
    resetSelects();
    // Disable the #inactive_clear_Button
    disableInactiveClearButton();
  });

  // Event listener for the select elements (to check if any select option is changed)
  $("select").on("change", function() {
    const selectValue = $(this).val();
    // Check if any select element is changed, and enable the #inactive_clear_Button accordingly
    if (selectValue === "Eligible" || selectValue === "Inactive") {
      $("#clearButton_2").prop("disabled", false);
    } else {
      $("#clearButton_2").prop("disabled", true);
    }
  });
});

