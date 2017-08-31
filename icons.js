
$(document).ready(function () {

  const displayIcons = (list) => {
    let contentHTML = '';
    for (let i = 0; i < list.length; i++) {
      contentHTML += `
      <div class='col-12 col-md-4 col-lg-3 mb-3'>
        <div class='card p-3'>
            <span class='card-text'>
              <i class='mi ${list[i].class}'></i>.${list[i].class}
            </span>
        </div>
      </div>
      `;
    }

    if (contentHTML.length === 0) {
      contentHTML = '<div class="col"><p>No icons match your search. Sorry :\'(</p></div>';
    }

    $('#icons').html(contentHTML);
    $('.card').hover(function () {
      $(this).addClass('transition');
    }, function () {
      $(this).removeClass('transition');
    });

  };

  $.ajax({
    url: './icons.json', success: (icons) => {

      $('#search-text').on('input', (e) => {
        var search = $('#search-text').val().toLowerCase();
        var results = $.grep(icons, (el) => {
          return el.class.toLowerCase().indexOf(search) > -1;
        });

        displayIcons(results);

      });

      displayIcons(icons);

      console.log('icons', icons.length);
    }
  });

});