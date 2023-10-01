
//1つ目の動き .fadeInUpTrigger animate__animated animate__fadeInUp
$('').on('inview', function(event, isInView) {
    if (isInView) {//fadeInUpTriggerが表示領域に入った時
      $(this).addClass('');//クラス名が付与
    } else {//表示領域から出た時
      $(this).removeClass('');//クラス名が除去
    }
  });

//2つ目の動き .fadeInDownTrigger animate__animated animate__fadeInDown
$('').on('inview', function(event, isInView) {
    if (isInView) {//fadeInUpTriggerが表示領域に入った時
      $(this).addClass('');//クラス名が付与
    } else {//表示領域から出た時
      $(this).removeClass('');//クラス名が除去
    }
  });

