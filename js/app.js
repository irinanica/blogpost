var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

$('#flashMessage').hide();
$('.blogPreviewArea').hide();

$('#previewButton').on('click', function(){
    const $titleInput = $('#blogTitleInput').val();
    const $contentInput = $('#blogContentInput').val();

    $('.blogPreviewArea').show();
    $('#blogTitlePreview').text($titleInput);
    $('#blogContentPreview').text($contentInput);
    $('#date').text(new Date().toLocaleDateString("en-US", options));
    $('#flashMessage').slideDown().delay(2000).slideUp();
    $('#blogTitleInput').val('');
    $('#blogContentInput').val('');
    $('#postButton').css("display", "block");
});
