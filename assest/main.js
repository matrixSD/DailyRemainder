var quoteOptions = [{
    quote: "“العوارض والمِحن هي كالحر والبرد، فإذا علِم العبد أنه لا بدَّ منهما، لم يغضب لوُرودهما، ولم يَغتمَّ لذلك، ولم يَحزن ”",
    name: "ابن القيم"
  }, {
    quote: "“ليتنا أنا وأنت جئنا العالم قبل اختراع التلفزيون والسينما لنعرف هل هذا حب حقًا أم أننا نتقمص ما نراه”",
    name: "احمد خالد توفيق"
  }, {
    quote: "“ إن السعادة تنتقل بالعدوى ..لا تنتظر عدوى أحد .. كن حاملاً لهذا الميكروب.”",
    name: "انيس منصور"
  }, {
    quote: "“ لا أحد فى هذه الدنيا يساوى أن تتعذب وحدك بسببه ومن أجله، لا أحد صدقنى، فليس لك إلا نفسك، إلا جسمك، ألا عقلك ،إلا راحتك، فأنت ضرورى جدًا لنفسك، أنت ضرورى لبقائك ولست ضروريًا لأى أحد آخر، فكما كانت الدنيا قبلك، فسوف تبقى بعدك  وربما أحسن فأهرب من نفسك إلى نفسك، نصيحه منى ولا علاج غير ذلك.”",
    name: "انيس منصور"
  }, {
    quote: "“كلما شعرت أنني أملك زمام الأمور رمتني الحياة بصفعة تجعلني أستفيق من هذا الكبر، كأنها تصيح في تنبهني بأنني لا شيء على الأطلاق، وأنه مهما اتخذت احتياطاتي وتنبهت لكل ما يحدث من حولي فانها اكبر مني واقوى مني كثيراً، وتقف تغيظني وهي تقول: وريني بقى شطارتك وحداقتك. ”",
    name: "ميرنا الهلباوي"
  }, {
    quote: "“الواقع أننا المسئولون بالدرجة الأولى والثانية وحتى الأخيرة عن نظرة الغرب السيئة لنا ، وتعامله المتعالى معنا ، إذ إننا قد أهدرنا الكثير من قيمنا وتقاليدنا وخالفنا الكثير من مما نؤمن به ، فى محاولة للتلبّس بزى الغرب والتشبه بأساليبه ، ثم فوجئنا عندما جد الجد ، أنه هذا لم يكسبنا ذرة واحدة من احترامه ، لأن العبد الذى ينحنى دوماً أمام سيده لا يمكن أن يكسب بانحنائه رضا سيده أو احترامه ، بل سيكسب شعوره الدائم بأنه مجرد عبد لا يحق له أن يرقى لما هو أفضل. ”",
    name: "نبيل فاروق"
  }, {
    quote: "“ لا يستطيع الانسان مطلقا أن يتوقف عن الحلم. الحلم غذاء الروح كما ان الاطعمة غذاء الجسم. نرى غالبا خلال وجودنا أحلامنا تخيب، ورغباتنا تحبط، لكن يجب الاستمرار في الحلم وألا ماتت الروح فينا.”",
    name: "باولو كويلو"
  }, {
    quote: "“الحب الحقيقى هو الحب الى كل الناس بتتعب فيه كل يوم وكل ثانيه عشان يعرفوا يوصلوا لنقطة تخلى الحياة شبه حلوة لإن ببساطه شديدة الحياة عمرها مابتبقى حلوة بس بتبقى احلى مع حد مقدر وجودك في الدنيا. ”",
    name: "محمد صادق"
  }, {
    quote: "“ربما ليست كل النهايات سعيدة و لكنها حتمًا ستصل للسعادة يومًاً ما.”",
    name: "ساندرا سراج"
  }, {
    quote: "“إنه القدر سيدي يضع أمامنا طرقاً شتي، ويوحي لنا بأننا نملك اختيار طريقنا، ثم نكتشف نهاية الأمر أنه من أختار لنا طريقًا ساقتنا إليه أقدامنا باختياراتنا نحن”",
    name: "عمرو عبدالحميد"
  }, ];
  
  function initialize_generate() {
    var sweetspot = Math.floor((Math.random() * quoteOptions.length));
    for (var i = 0; i <= quoteOptions.length; i++) {
  
      if (i === sweetspot) {
        var quoteHtml = generate_html(quoteOptions[i]);
        $(".quote").empty().append(quoteHtml);
        //console.log("test");
        var tweet_code = generate_tweet(quoteOptions[i]);
        console.log(tweet_code);
        $("#tweet_sect").empty().append(tweet_code); //only include tweet link when button pressed, doesn't make sense for anyone to tweet my placeholder quote that only makes sense within the scope of this app.
      }
    }
  }
  
  function generate_html(quoteObj) {
  
    var quoteHtml = "<i> " + quoteObj["quote"] + " </i> <br> <b> - " + quoteObj["name"] + " </b>";
    return quoteHtml
  }
  
  function generate_tweet(quoteObj) {
    
      var tweetHtml = '<a href="https://twitter.com/intent/tweet?button_hashtag=Reminder&text=' + quoteObj["quote"] + '%20-%20' + quoteObj["name"] + '"' + 'class="twitter-hashtag-button">نشر علي تويتر </a> <script> !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');';
    
    return tweetHtml
  }
const quoteText = document.querySelector(".quote"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;

copyBtn.addEventListener("click", ()=>{
  navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", ()=>{
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});