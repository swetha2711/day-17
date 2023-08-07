var div=document.getElementById('countdown')
 
setTimeout(function(){
     div.innerHTML=10
       setTimeout(function(){
           div.innerHTML=9
           setTimeout(function(){
              div.innerHTML=8
               setTimeout(function(){
                   div.innerHTML=7
                   setTimeout(function(){
                      div.innerHTML=6
                       setTimeout(function(){
                          div.innerHTML=5
                           setTimeout(function(){
                             div.innerHTML=4
                               setTimeout(function(){
                                  div.innerHTML=3
                                   setTimeout(function(){
                                      div.innerHTML=2
                                       setTimeout(function(){
                                          div.innerHTML=1
                                               setTimeout(function(){
                                                   div.innerHTML='Happy Independence Day';
                                               },1000)
                                           },1000)
                                       },1000)
                                   },1000)
                                 
                               },1000)
                           },1000)
                       },1000)
                   },1000)
               },1000)
           },1000)
       },1000)