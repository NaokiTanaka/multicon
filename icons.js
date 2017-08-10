
$(document).ready(function () {

  const icons = [
    {
      "name": "Home",
      "class": "icon-home"
    },
    {
      "name": "Store",
      "class": "icon-store"
    },
    {
      "name": "Building",
      "class": "icon-building"
    },
    {
      "name": "Building2",
      "class": "icon-building2"
    },
    {
      "name": "User",
      "class": "icon-user"
    },
    {
      "name": "Users",
      "class": "icon-users"
    },
    {
      "name": "Edit",
      "class": "icon-edit"
    },
    {
      "name": "Edit plus",
      "class": "icon-edit-p"
    },
    {
      "name": "Bin",
      "class": "icon-bin"
    },
    {
      "name": "Floppy save",
      "class": "icon-floppy"
    },
    {
      "name": "Upload",
      "class": "icon-upload"
    },
    {
      "name": "download",
      "class": "icon-download"
    },
    {
      "name": "Folder",
      "class": "icon-folder"
    },
    {
      "name": "Calendar",
      "class": "icon-calendar"
    },
    {
      "name": "Time",
      "class": "icon-time"
    },
    {
      "name": "Timer",
      "class": "icon-timer"
    },
    {
      "name": "Config Setting",
      "class": "icon-config"
    },
    {
      "name": "Loupe magnify search",
      "class": "icon-loupe"
    },
    {
      "name": "Plane dashed",
      "class": "icon-plane-st"
    },
    {
      "name": "Report file",
      "class": "icon-report"
    },
    {
      "name": "Zip file",
      "class": "icon-zip"
    },
    {
      "name": "Music file",
      "class": "icon-music"
    },
    {
      "name": "PDF file",
      "class": "icon-pdf"
    },
    {
      "name": "Video file",
      "class": "icon-video"
    },
    {
      "name": "Image file",
      "class": "icon-image"
    },
    {
      "name": "Document file",
      "class": "icon-document"
    },
    {
      "name": "Signature",
      "class": "icon-signature"
    },
    {
      "name": "Checked",
      "class": "icon-checked"
    },
    {
      "name": "Copy",
      "class": "icon-copy"
    },
    {
      "name": "Print",
      "class": "icon-print"
    },
    {
      "name": "Plane",
      "class": "icon-plane"
    },
    {
      "name": "Mail",
      "class": "icon-mail"
    },
    {
      "name": "Box",
      "class": "icon-box"
    },
    {
      "name": "Laptop",
      "class": "icon-laptop"
    },
    {
      "name": "Phone iphone",
      "class": "icon-iphone"
    },
    {
      "name": "Keyboard",
      "class": "icon-keyboard"
    },
    {
      "name": "Camera",
      "class": "icon-camera"
    },
    {
      "name": "Scale",
      "class": "icon-scale"
    },
    {
      "name": "Check",
      "class": "icon-check"
    },
    {
      "name": "Plus",
      "class": "icon-plus"
    },
    {
      "name": "Minus",
      "class": "icon-minus"
    },
    {
      "name": "X",
      "class": "icon-x"
    },
    {
      "name": "Refresh",
      "class": "icon-refresh"
    },
    {
      "name": "Dots",
      "class": "icon-dots"
    },
    {
      "name": "Circle line Left",
      "class": "icon-circle-l"
    },
    {
      "name": "Circle line right",
      "class": "icon-circle-r"
    },
    {
      "name": "Hint",
      "class": "icon-hint"
    },
    {
      "name": "Info",
      "class": "icon-info"
    },
    {
      "name": "Warn",
      "class": "icon-warn"
    },
    {
      "name": "Chevron left",
      "class": "icon-chev-l"
    },
    {
      "name": "Chevron right",
      "class": "icon-chev-r"
    },
    {
      "name": "Arrow left",
      "class": "icon-arrow-l"
    },
    {
      "name": "Arrow Up",
      "class": "icon-arrow-up"
    },
    {
      "name": "Arrow right",
      "class": "icon-arrow-r"
    },
    {
      "name": "Arrow down",
      "class": "icon-arrow-d"
    },
    {
      "name": "Enter",
      "class": "icon-enter"
    },
    {
      "name": "Chevron double left",
      "class": "icon-chev-w-l"
    },
    {
      "name": "Chevron double up",
      "class": "icon-chev-w-up"
    },
    {
      "name": "Chevron double right",
      "class": "icon-chev-w-r"
    },
    {
      "name": "Chevron double down",
      "class": "icon-chev-w-d"
    },
    {
      "name": "Triangle line up",
      "class": "icon-tri-l-up"
    },
    {
      "name": "Triangle line down",
      "class": "icon-tri-l-down"
    },
    {
      "name": "Triangle up",
      "class": "icon-tri-up"
    },
    {
      "name": "Triangle down",
      "class": "icon-tri-down"
    },
    {
      "name": "Backspace",
      "class": "icon-backspace"
    },
    {
      "name": "Tongue face",
      "class": "icon-tongue"
    },
    {
      "name": "Neutral face",
      "class": "icon-neutral"
    },
    {
      "name": "Angry face",
      "class": "icon-angry"
    },
    {
      "name": "Confusing face",
      "class": "icon-confusing"
    },
    {
      "name": "Smile face",
      "class": "icon-smile"
    },
    {
      "name": "Girl face",
      "class": "icon-girl"
    },
    {
      "name": "Exit",
      "class": "icon-exit"
    },
    {
      "name": "Balloon",
      "class": "icon-balloon"
    },
    {
      "name": "Browser graph",
      "class": "icon-b-graph"
    },
    {
      "name": "Graph",
      "class": "icon-graph"
    },
    {
      "name": "Credit card",
      "class": "icon-creditcard"
    },
    {
      "name": "Bill",
      "class": "icon-bill"
    },
    {
      "name": "Bill dollar",
      "class": "icon-dollar"
    },
    {
      "name": "Bill euro",
      "class": "icon-euro"
    },
    {
      "name": "ID",
      "class": "icon-id"
    },
    {
      "name": "Age21",
      "class": "icon-age-21"
    },
    {
      "name": "Age19",
      "class": "icon-age-19"
    },
    {
      "name": "Age18",
      "class": "icon-age-18"
    },
    {
      "name": "Calendar2",
      "class": "icon-calendar2"
    },
    {
      "name": "Robot",
      "class": "icon-robot"
    },
    {
      "name": "Trophy",
      "class": "icon-trophy"
    },
    {
      "name": "Ticket",
      "class": "icon-ticket"
    },
    {
      "name": "Sun",
      "class": "icon-sun"
    },
    {
      "name": "Moon",
      "class": "icon-moon"
    },
    {
      "name": "Cloud",
      "class": "icon-cloud"
    },
    {
      "name": "Rain",
      "class": "icon-rain"
    },
    {
      "name": "Thunder",
      "class": "icon-thunder"
    },
    {
      "name": "Cloud upload",
      "class": "icon-c-up"
    },
    {
      "name": "Cloud download",
      "class": "icon-c-down"
    },
    {
      "name": "Map",
      "class": "icon-map"
    },
    {
      "name": "Truck",
      "class": "icon-truck"
    },
    {
      "name": "Language",
      "class": "icon-language"
    },
    {
      "name": "Scissor",
      "class": "icon-scissor"
    },
    {
      "name": "Thumbs down",
      "class": "icon-bad"
    },
    {
      "name": "Thumbs up",
      "class": "icon-good"
    },
    {
      "name": "USB",
      "class": "icon-usb"
    },
    {
      "name": "Battery full",
      "class": "icon-bat-full"
    },
    {
      "name": "Battery60",
      "class": "icon-bat-60"
    },
    {
      "name": "Battry30",
      "class": "icon-bat-30"
    },
    {
      "name": "Battery empty",
      "class": "icon-bat-emp"
    },
    {
      "name": "Collect mail",
      "class": "icon-collect"
    },
    {
      "name": "Return mail",
      "class": "icon-return"
    }
  ];

  let contentHTML = '';
  for (i = 0; i < icons.length; i++) {
    contentHTML += `
    <div class="col-12 col-md-4 col-lg-3 mb-3">
      <div class="card p-3">
          <span class="card-text">
            <i class="${icons[i].class}"></i>.${icons[i].class}
          </span>
      </div>
    </div>
    `

    // contentHTML = contentHTML + 'next div'
  }

  console.log('contentHTML', contentHTML)
  $("#icons").html(contentHTML);

});

// function search() {
  
//   var searchResult = '';
//   var searchText = document.getElementById("search-text");
//   if (searchText != '') {
//     $('multicons.name').each(function() {
//       targetText = $(this).text();
 
//       if (targetText.indexOf(searchText) != -1) {
//         searchResult.push(targetText);
//       }
//     });
 
//     for (var i = 0; i < searchResult.length; i ++) {
//       $('<span>').text(searchResult[i]).appendTo('#container');
//     }
//   }
// };

//   console.log('search');

$("search-text").on('keyup', function() {
  var search = this.value.toLowerCase();
  var result = $.grep(multicons, function(el){
    return el.multicons.toLowerCase().indexOf(search) > -1;
  }); 
});

console.log("result" ,result);

// 1 - Get value from search bar
// 2 a if searchValue === key.class, add class with display block 
// 2 b else, add class with display none (or fadeIn / fadeOut instead)
// 3 if searchValue empty, all display block class
// GET THIS SHIT DONE. PLEASE. BEFORE CHRISTMAS 2020