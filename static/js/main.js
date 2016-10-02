var questions = [
    "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10", "q11", "q12", "q13", "q14", "q15", "q16", "q17", "q18", "q19"
];

var properAnswers = [
    "q1_1", "q2_3", "q3_1", "q4_3", "q5_3", "q6_1", "q7_1",
    "q8_3", "q9_3", "q10_2", "q11_3", "q12_3", "q13_4", "q14_3",
    "q15_2", "q16_4", "q17_1", "q18_2", "q19_3"
];

function viewResult() {
    var result = 0;
    for (i = 0; i < questions.length; i++) {
        var answer = $('input[name=' + questions[i] + ']:checked', '#myForm');
        if (answer.length > 0) {
            if (jQuery.inArray(answer.get(0).id, properAnswers) !== -1) {
                result++;
            }
        }
    }
    if (result < 4) {
        lose(result);
    } else {
        win(result)
    }
}

function win(score) {
    $('#intro').hide();
    $('#results_win').slideDown();
    $('#results_score_win').text(score);

    $('html, body').animate({
        scrollTop: $('#results_win').offset().top
    }, 500, function () {
        $('#quiz').hide();
    });
}

function lose(score) {
    $('#intro').hide();
    $('#results_lose').slideDown();
    $('#results_score_lose').text(score);

    $('html, body').animate({
        scrollTop: $('#results_lose').offset().top
    }, 500, function () {
        $('#quiz').hide();
    });
}

$(document).ready(function () {
    $('#start-quiz').on('click', function () {
        var quiz = $('#quiz');

        quiz.slideDown();
        $('html, body').animate({
            scrollTop: quiz.offset().top
        }, 500);
    });

    $('#try-again').on('click', function () {
        location.reload();
    });
});

function shareFb() {
    FB.init({
        appId      : 712683602217065,
        status     : true,
        xfbml      : true
    });
    FB.ui({
        method: 'share',
        mobile_iframe: true,
        href: 'https://betsafe.com'
    }, function(response){});
}

function goToBetsafe() {
    window.location.href = 'https://betsafe.com';
}

$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});