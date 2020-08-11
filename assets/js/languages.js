var translator = new LwcTranslator({
  querySelector: "html",
  translationSettings: "/assets/js/languages.json",
  translationFolder: "/assets/js/languages/",
  initialLanguageCode: 'en-GB',
  onError: (err) => {
    console.log(err);
  }
});

if (!window.localStorage['defaultLanguage'])
window.localStorage['defaultLanguage'] = 'en-UK';

$('.container').prepend('<p class="alert alert-danger">Your Default Language is ' + window.localStorage['defaultLanguage'] + "</p>");

$('html').lwcTranslator({
languageSettingsFile: '/assets/js/languages.json',
languageFolderPath: '/assets/js/languages/',
defaultLanguage: window.localStorage['defaultLanguage'],
onLanguageSettingsLoaded: function(settings) {
  for (let i = 0; i < settings.length; i++) {
    if (settings[i].filename == window.localStorage['defaultLanguage'])
      $('select').append('<option value="'+settings[i].filename+'" selected>'+settings[i].name+'</option>');
    else
      $('select').append('<option value="'+settings[i].filename+'">'+settings[i].name+'</option>');
  }

  $('select').change(function(){
    window.localStorage['defaultLanguage'] = $(this).val();
    window.location.reload();
  });
}
});