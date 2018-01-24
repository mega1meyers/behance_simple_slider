
    $(document).ready(function(){
      $.getJSON("http://www.behance.net/v2/projects/802937?api_key=9bGfqXBPylfFFd5DPzYPVvswcdzO1Ots&callback=?", function(result){
          // console.log(result)
          console.log(result.project.modules)
          var zObjArry = result.project.modules


            function createLI(value){
                var imgTag = $('<img>')
                imgTag.attr('src', value.src)
                $('<figure>').appendTo("#result").append(imgTag)

            }
      //be sure to make the counter a var so it stays within scope
      for (var i = 0; i < zObjArry.length; i++){
            var currentObj = zObjArry[i]
          console.log('currentObj[i]', currentObj)
          createLI(currentObj)
            //for (var j = 0; j = currentObj.length; j++){}
          }
      });
      $("h1").fadeIn(1600)
        $("h2").fadeIn(2100)
    });
