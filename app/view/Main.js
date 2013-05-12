Ext.define('AccordionListExample.view.Main',{
    extend: 'Ext.navigation.View',
    xtype: 'peliculaunic',
    
    requires: [
            'Ext.Label',
            'Ext.ux.AccordionList',
            'Ext.data.proxy.JsonP',
            'Ext.field.Select',
            'Ext.field.Slider',
            
            ],

    config: {
      ui: 'light',
            scrollable: false,
                title: 'Pelicula',
                iconCls: 'star',
                cls:'moviecls',
        
        items: [

        {
                            xtype : 'toolbar',
                            docked: 'top',
                            ui:'mainToolBar',
                            title:'Película',
                    items:{
                        html:'Regresar',
                        handler: function() {
                                        pv.pop();
                                    }}
                        },
            {
                xtype: 'container',
                ui: '',
                layout: {
                    type: 'vbox'
                },
                scrollable: 'vertical',
                listeners: {
                    'changeheight': function() {
                        this.element.redraw();
                    },
                    delegate: 'accordionlist'
                },
                items: [
                    {
                        xtype: 'container',
                        height: 222,
                        ui: 'light',
      
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'container',
                                height: 220,
                                ui: 'light',
                                width: 140,
                                layout: {
                                    type: 'vbox'
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        docked: 'top',
                                        id: 'ParentImagenPelicula',
                                        height: 194,
                                        items:{html: '<div id="pelicula"><img src= https://s3.amazonaws.com/palapadata/peliculas/norobaras.jpg height="175" width="119"></div>'}
                                        
                                    },
                                    {

                                        html:'<div id=botontrailer></div>',
                                        xtype:'button',
                                        ui:'plain',
                                        handler:  function () {
                                            var popup = new Ext.MessageBox({
                                                        fullscreen:true,
                                                        centered: true,
                                                
                                                        cls:'sinopsis',
                                                        width:300,

                                                        items:[
                                                        
                                                        {html:'<iframe id="ytplayer" type="text/html" width="280 " height="140" src="https://www.youtube.com/embed/'+tra+'" frameborder="0" allowfullscreen>'},
                                                        {
                                                    
                                                        xtype:'button',
                                                        
                                                        ui:'custom',
                                                        height:20,
                                                        style:'margin-left:auto;margin-right:auto;margin-top:10px;',
                                                        width:80,
                                                        html:'<div id="sinopsis"><h2>Cerrar</h2></div>',
                                                        handler:function(){
                                                            popup.destroy();
                                                                        }
                                                                        
                                                        }]
                                                    });
                                                popup.show();
                                        
                                        }
                                    }
                                    
                                ]
                            },
                            {
                                xtype: 'container',
                                height: 223,
                                id: 'Cinfo',
                                width: 163,
                                layout: {
                                    type: 'vbox'
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        height: 132,
                                        id: 'CInfoPelicula',
                                        width: 163,
                                        layout: {
                                            type: 'vbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'label',
                                                height: 90,
                                                id: 'ParentLPelicula',
                                                html: '<div id="titulo"><table><tr><td><h1>Superman</h1></td></tr><tr><td width="170px" height ="1px"><h2>Superman</h2></td></tr></table></div>',
                                                
                                                width: 163
                                            },
                                           
                                            {
                                                xtype: 'label',
                                                id: 'ParentInfoGeneral',
                                                html: 'Informacion',
                                                width: 164
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        id:'btncalificacion',
                                        ui:'custom',
                                        style:'margin-top:-8px;',
                                        height:80 ,
                                        html: '<div id=calificacion><table><TR> <TD><h1>Calificación de los usuarios:</h1></TD></TR><TR><TD><img src= /resources/images/estrellas0.png  height="23" width="146"></TD></TR><TR><TD><hr><h2>Añade tu calificación</h2></TD></TR>  </table> </div>',
                                        width: 170,
                                        handler:  function () {

                                            if(est===1)
                                            {
                                                alert('En peliculas por estrenar no se pueden realizar calificaciones');
                                            }
                                            else if(est===2)
                                            {
                                                alert('No se pueden realizar calificaciones desde perfil');
                                                
                                            }
                                            else{
                                                var popup = new Ext.Panel({
                                                        fullscreen:true,
                                                        centered: true,
                                                
                                                        cls:'sinopsis',
                                                        width:300,

                                                        items:[

                                                            {
                                                    xtype: 'label',     
                                                    html:'<div id="califica"><h1>Tu calificación:</h1></div>',
                                                    cls:'califica',

                                                },
                                                {   
                                                    id:'estrellascalific',
                                                    html:'<div id=calificacion><table><TR><TD><img src= /resources/images/estrellas1.png  height="30" ></TD></TR>',
                                                    style:'margin-left:50px;margin-top:10px;'
                                                },
                                                        {
                                                    xtype: 'sliderfield',

                                                    id: 'sel',
                                                    minValue: 0,
                                                    maxValue: 4,
                                                    
                                                    value: 0,
                                                    listeners:{
                                                        change:function(me, sl, thumb, newValue, oldValue, eOpts){
                                                             var itemb = Ext.getCmp('estrellascalific');

                                                             if(newValue===0){
                                                              
                                                              itemb.setHtml('<div id=calificacion><table><TR><TD><img src= /resources/images/estrellas1.png  height="30"></TD></TR></table> </div>');
                                                          }
                                                                   if(newValue===1){
                                                                
                                                              itemb.setHtml('<div id=calificacion><table><TR><TD><img src= /resources/images/estrellas2.png  height="30"></TD></TR></table> </div>');
                                                          }
                                                                  if(newValue===2){
                                                              
                                                              itemb.setHtml('<div id=calificacion><table><TR><TD><img src= /resources/images/estrellas3.png  height="30"></TD></TR></table> </div>');
                                                          }
                                                                  if(newValue===3){
                                                                
                                                              itemb.setHtml('<div id=calificacion><table><TR><TD><img src= /resources/images/estrellas4.png  height="30"></TD></TR></table> </div>');
                                                          }
                                                                  if(newValue===4){
                                                                
                                                              itemb.setHtml('<div id=calificacion><table><TR><TD><img src= /resources/images/estrellas5.png  height="30"></TD></TR></table> </div>');
                                                          }
                                                        }
                                                    }
                            
                                                },
                                                {
                                                    xtype: 'label',     
                                                    html:'<div id="califica"><h2>Desliza el botón para calificar</h2></div>',
                                                    cls:'califica',

                                                },

                                                        {
                                                    
                                                        xtype:'button',
                                                        ui:'customfb',
                                                        cls: 'fbLogin',
                                                        width:200,
                                                        style:'margin-left:auto;margin-right:auto;margin-top:10px;',
                                                        html:'<div id=rsocialb ><table><TR><TD><img src= /resources/images/fdefacebook.png ></TD><TD><h1><a>Guardar y compartir</a></h1></TD></TR></table></div>',
                                                            handler:function() {
                                                            var userid = FB.getUserID();

                                                                if(Ext.getCmp('sel').getValue()==-1)
                                                                {
                                                            Ext.Msg.alert('', 'No has calificado, has click en las estrellas para calificar.', Ext.emptyFn);
                                                                }
                                                                if(Ext.getCmp('sel').getValue()==0)
                                                                {
                                                                    postfb(1,'★');
                                                                    

                                                                }
                                                                if(Ext.getCmp('sel').getValue()==1)
                                                                {
                                                                    postfb(2,'★★');
                                                                    
                                                                }
                                                                if(Ext.getCmp('sel').getValue()==2)
                                                                {
                                                                    postfb(3,'★★★');
                                                                }
                                                                if(Ext.getCmp('sel').getValue()==3)
                                                                {
                                                                    postfb(4,'★★★★');
                                                                }
                                                                if(Ext.getCmp('sel').getValue()==4)
                                                                {
                                                                    postfb(5,'★★★★★');
                                                                }

                                                                function calificacion(calific,userid,idpelicula,postid){
                                                                    

                                                                    Ext.Ajax.request({
                                                                    url: 'sources/calificacion.php',
                                                                    params: {
                                                                    id:userid,
                                                                    idpelicula: idpelicula,
                                                                    postid: postid,
                                                                    calificacion:calific,
                                                                    
                                                                    
                                                                    },

                                                              success: function(response){
                                                                  var text = response.responseText;
                                                                 
                                                                  var itema = Ext.getCmp('btncalificacion');
            Ext.Ajax.request({
                      url: 'sources/calificacionpromedio.php',
                        params: {
                        idp:idp
                        },

                      success: function(response){
                          var text = response.responseText;
                          if(text >=1 && text <1.5){
                          
                          itema.setHtml('<div id=calificacion><table><TR> <TD><h1>Calificación de los usuarios:</h1></TD></TR><TR><TD><img src= /resources/images/estrellas1.png  height="23" width="146"></TD></TR><TR><TD><hr><h2>Añade tu calificación</h2></TD></TR>  </table> </div>');
                      }
                               if(text >=1.5 && text <2.5){
                            
                          itema.setHtml('<div id=calificacion><table><TR> <TD><h1>Calificación de los usuarios:</h1></TD></TR><TR><TD><img src= /resources/images/estrellas2.png  height="23" width="146"></TD></TR><TR><TD><hr><h2>Añade tu calificación</h2></TD></TR>  </table> </div>');
                      }
                              if(text >=2.5 && text<3.5){
                          
                          itema.setHtml('<div id=calificacion><table><TR> <TD><h1>Calificación de los usuarios:</h1></TD></TR><TR><TD><img src= /resources/images/estrellas3.png  height="23" width="146"></TD></TR><TR><TD><hr><h2>Añade tu calificación</h2></TD></TR>  </table> </div>');
                      }
                              if(text >=3.5 && text<4.5){
                            
                          itema.setHtml('<div id=calificacion><table><TR> <TD><h1>Calificación de los usuarios:</h1></TD></TR><TR><TD><img src= /resources/images/estrellas4.png  height="23" width="146"></TD></TR><TR><TD><hr><h2>Añade tu calificación</h2></TD></TR>  </table> </div>');
                      }
                              if(text >=4.5 && text<=5){
                            
                          itema.setHtml('<div id=calificacion><table><TR> <TD><h1>Calificación de los usuarios:</h1></TD></TR><TR><TD><img src= /resources/images/estrellas5.png  height="23" width="146"></TD></TR><TR><TD><hr><h2>Añade tu calificación</h2></TD></TR>  </table> </div>');
                      }
                     


                     },

                     failure : function(response) {
                           console.log('Error','Al traer la calificación');
                            

                     }
              });

                                                             },

                                                             failure : function(response) {
                                                                   console.log('Error','Error while submitting the form');
                                                                   console.log(response.responseText);
                                                             }
                                                      });
                                                                    var item3 = Ext.getCmp('calificacioneslista').getStore();
                                                                item3.getProxy().setUrl('sources/calificacionusuario.php?id='+userid);
                                                                item3.getProxy().url =item3.getProxy().getUrl();     
                                                                item3.load();


                                                                }





                                                                function postfb(numcalific, estrella) {
                                                                var accsstkn = FB.getAccessToken();
        
                                                                function publishStory() {
                                                                    
                                                                  FB.ui({
                                                                    access_token:accsstkn,
                                                                    method: 'feed',
                                                                    name: 'CinePass',
                                                                    caption: 'Le di a '+nomt+' una calificación de '+numcalific+' sobre 5, Califica tu tambien entra a cinepass.com.ec',
                                                                    display: 'dialog',
                                                                    description: estrella,
                                                                    link: 'http://cinepass.com.ec/',
                                                                    picture: 'http://s3.amazonaws.com/palapadata/peliculas/'+imgpeli,

                                                                  
                                                                  }, 

                                                                  

                                                                  function(response) {
                                                                    if (response && response.post_id) {
                                                                      alert('Su calificacion se guardo exitosamente');
                                                                        var postid = response.post_id;
                                                                        calificacion(numcalific,userid,idp,postid);
                                                                     
                                                                    
                                                                      return response.post_id;
                                                                    } else {
                                                                      alert('Su calificacion no ha sido guardada, Intente Nuevamente.');
                                                                    }
  
                                                                    }


                                                                  );
                                                                    
                                                                  return false;
                                                                }
                                                                FB.Canvas.setSize({ width: 300, height: 480 });
                                                                publishStory();
                                                                
                                                            

                                                            }

                                                                
                                                                
                                                            

                                                            }

                                                                        
                                                        },

                                                        {
                                                    
                                                        xtype:'button',
                                                        ui:'custom',
                                                        height:20,
                                                        style:'margin-left:auto;margin-right:auto;margin-top:10px;margin-bottom:10px;',
                                                        width:80,
                                                        html:'<div id="sinopsis"><h2>Cerrar</h2></div>',
                                                        handler:function(){
                                                            popup.destroy();
                                                                        }
                                                                        
                                                        }]
                                                    });
                                                popup.show();
                                        }
                                    }},
                                 {
                                        xtype: 'button',
                                        ui:'custom',
                                        style:'margin-top:3px;',
                                        height: 1,
                                        html: '<div id=rsocialb ><table><TR><TD><h1>Compartir</h1></TD><TD><img src= /resources/images/facebook.png  height="13" width="13"></TD><TD><img src= /resources/images/twitter.png  height="13" width="13"></TD><TD><img src= /resources/images/pinterest.png  height="13" width="13"></hr></TR></table></div>',
                                        width: 170,
                                        handler:  function (){
                                            var popup = new Ext.MessageBox({
                                                        fullscreen:true,
                                                        centered: true,
                                                
                                                        cls:'sinopsis',
                                                        width:300,

                                                        items:[
                                                        {
                                                    
                                                        xtype:'button',
                                                        style:'margin-left:auto;margin-right:auto;',
                                                        html: '<div id=rsocialb ><table><TR><TD><img src= /resources/images/fdefacebook.png ></TD><TD><h1><a>Comparte esta película</a></h1></TD></TR></table></div>',
                                                        ui:'customfb',
                                                        cls: 'fbLogin',
                                                        handler:function() {
                                                                var accsstkn = FB.getAccessToken();
                                                                
                                                                function publishStory() {
                                                                  FB.ui({
                                                                    access_token:accsstkn,
                                                                    method: 'feed',
                                                                    name: 'CinePass',
                                                                    caption: 'Toda la cartelera de tus cines favoritos en un solo lugar!',
                                                                    display:'touch',
                                                                    description: 'Haz click aqui para ver toda la informacion de '+nomt+'',
                                                                    link: 'https://cinepass.com.ec',
                                                                    picture: 'http://s3.amazonaws.com/palapadata/peliculas/'+imgpeli
                                                                  }, 
                                                                  
                                                                  function(response) {
                                                                    console.log('publishStory response: ', response);
                                                                  });
                                                                  return false;

                                                                }
                                                                publishStory();
                                                                
                                                            

                                                            }

                                                            
                                                                },
                                                        {
                                                    
                                                        xtype:'button',
                                                        html:'<a href="https://twitter.com/intent/tweet?hashtags=CinePass&original_referer=http%3A%2F%2Ftwitter.com%2Fabout%2Fresources%2Fbuttons&related=CinePassEC&source=tweetbutton&text=Mira toda la informacion de '+nomt+'&url=http%3A%2F%2Fcinepass.com.ec" target="_blank"><div id=rsocialb ><table><TR><TD><img src= /resources/images/pajaritodetwitter.png></TD><TD><h1>Twittear esta película</h1></TD></TR></table></div></a>',
                                                        ui:'customtw',
                                                        style:'margin-left:auto;margin-right:auto;',
                                                        cls: 'fbLogin',
                                                    
                                                        /*handler: function() {
                                                                window.open('https://twitter.com/intent/tweet?hashtags=CinePass&original_referer=http%3A%2F%2Ftwitter.com%2Fabout%2Fresources%2Fbuttons&related=CinePassEC&source=tweetbutton&text=Mira toda la informacion de '+nomt+'&url=http%3A%2F%2Fcinepass.com.ec'); 
                                                                
                                                                            }*/
                                                                        
                                                                    

                                                    
                                                                        
                                                        },
                                                            {

                                                            xtype:'button',
                                                            style:'margin-left:auto;margin-right:auto;',
                                                            html:'<a href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fcinepass.com.ec&media=http%3A%2F%2Fs3.amazonaws.com%2Fpalapadata%2Fpeliculas%2F'+imgpeli+'&description=Mira%20las%20carteleras%20de%20todos%20tus%20cines%20favoritos%20en CinePass! http://cinepass.com.ec" target="_blank"><div id=rsocialb ><table><TR><TD><img src= /resources/images/pdepinterest.png ></TD><TD><h1>Pinear esta película</h1></TD></TR></table></div></a>',
                                                            ui:'custompt',
                                                            cls: 'fbLogin',
                    
                                                            /*handler: function() {
      window.open('http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fcinepass.com.ec&media=http%3A%2F%2Fs3.amazonaws.com%2Fpalapadata%2Fpeliculas%2F'+img+'&description=Mira%20las%20carteleras%20de%20todos%20tus%20cines%20favoritos%20en CinePass! http://cinepass.com.ec'); 
                                                                                }*/





                                                            },
                                                        
                                                        {
                                                    
                                                        xtype:'button',
                                                        ui:'custom',

                                                        height:20,
                                                        style:'margin-left:auto;margin-right:auto;margin-top:10px;',
                                                        width:80,
                                                        html:'<div id="sinopsis"><h2>Cerrar</h2></div>',
                                                        handler:function(){
                                                            popup.destroy();
                                                                        }
                                                                        
                                                        }]
                                                    });
                                                popup.show();
                                        
                                        }

                                    }
                                ]
                            }
                        ]
                    },
                {xtype:'container',
                id: 'ParentSinopsis',
                height:'auto',
                width:300,
                style:'margin-top:25px',
                items:[ {
                    html:'<div id="sinopsis"><table><TR><TD><h1>Director:</h1></td><td><h2>Steven Spilberg</h2></td></tr><tr><td  valign="top"><h1>Elenco:</h1></td><td><h3>Tom Cruise</h3></td></tr></table><h2>La película está basada en la vida real de dos atletas británicos que se preparan para competir en los Juegos Olímpicos de París 1924. Dos jóvenes corredores de diferentes clases socialles Harold Abrahams, un determinado judío y Eric Liddell, devoto cristiano, compiten en las Olimpiadas</h2></div>'
                },
                {xtype:'button',
                ui:'plain',
                html: '<div id="vermas">ver más</div>',
                style:'margin-top:-17px;margin-left:250px;',
                height:20,
                width:62,
                handler:function(){
                            var popup1 = new Ext.MessageBox({
                                        height:'91%',
                                        width:'95%',
                                        cls:'sinopsis',
                                        scrollable:'vertical',
                                        items:[{
                                            html:'<div id="sinopsis"><h1>'+sin+'</h1></div>',
                                        },{     xtype:'button',
                                                    ui:'custom',
                                                height:20,
                                                style:'margin-left:auto;margin-right:auto;margin-top:10px;',
                                                width:80,
                                                html:'<div id="sinopsis"><h2>Cerrar</h2></div>',
                                            handler:function(){
                                                popup1.destroy();
                                            }
                                            }]
                                    });
                                popup1.show();
                }
                
                
                },
                {
                    xtype:'button',
                    id:'porestrenarbtn',
                    ui:'customfv',
                    cls: 'btnlogin',

                    height: 35,
                    style:'margin-left:10px;margin-bottom:10px;',
                    html: '<div id=rsocialbfv ><table><TR><TD><h1>Añade a tus estrenos por ver!&nbsp&nbsp&nbsp&nbsp&nbsp</h1></TD><TD><img src= /resources/images/corazon.png ></TD></TR></table></div><br><br>',
                    width: 300,
                    hidden:true,
                    handler:  function () {

                                                var userid = FB.getUserID();
                                                if(userid===''||userid===0)
                                                {
                                                    alert('Entra a perfil y loggeate a Facebook para acceder a todas los beneficios que tiene CinePass para ti')

                                                }
                                                else{postfb();}


                                                                function postfb() {
                                                                var accsstkn = FB.getAccessToken();

                                                                
                                                                function publishStory() {
                                                                  FB.ui({
                                                                    access_token:accsstkn,
                                                                    method: 'feed',
                                                                    name: 'CinePass',
                                                                    caption: 'He añadido a '+nomt+' a mi lista de estrenos esperados',
                                                                    display:'touch',
                                                                    description: nompeli,
                                                                    link: 'https://cinepass.com.ec',
                                                                    picture: 'http://s3.amazonaws.com/palapadata/peliculas/'+imgpeli
                                                                  }, 
                                                                  

                                                                  function(response) {
                                                                    if (response && response.post_id) {
                                                                      alert('Su película se guardo exitosamente');
                                                                        var postid = response.post_id;
                                                                        calificacion(userid,idp,postid);
                                                                     
                                                                    
                                                                      return response.post_id;
                                                                    } else {
                                                                      alert('Su película no ha sido guardada, Intente Nuevamente.');
                                                                    }
  
                                                                    }


                                                                  );
                                                                  return false;
                                                                }
                                                                publishStory();
                                                                
                                                            

                                                            }


                                                function calificacion(userid,idpelicula,postfb){
                                                    Ext.Ajax.request({
                                                    url: 'sources/agregaestrenos.php',
                                                    params: {
                                                    idfb:userid,
                                                    idpelicula: idpelicula,
                                                    
                                                    },

                                              success: function(response){
                                                  var text = response.responseText;
                                                  alert('Se ha añadido exitosamente', text);
                                                   userid = FB.getUserID();
                                                    var item1 = Ext.getCmp('favporestrenar').getStore();
                                                    item1.getProxy().setUrl('sources/estrenosusuarios.php?id='+userid);
                                                    item1.getProxy().url =item1.getProxy().getUrl();     
                                                    item1.load();
                                                    
                                             },

                                             failure : function(response) {
                                                   alert('Error','Error al agregar intente nuevamente');
                                                   console.log(response.responseText);
                                             }
                                      });
                                                }

                                        
                                        }
                },

                    {xtype:'container',
                    height:'auto',
                    id:'horarioscont',
                    width:300,
                    scrollable:false,
                    style:'margin-top:10px',
                    cls:'salascls',
                    items:[ {
                    html:'<hr>',    
                    width:400,
                    },{cls:'peliculascls',
                        html:'<div id=titulos><h1>Horarios de:</h1></div>',
                        style:'margin-left:-10px',
                        
                            },
        
                            {
                                                xtype: 'selectfield',
                                                id:'selectorfecha',
                                                ui:'plain',
                                                cls:'selector',
                                                height:32,
                                                width:175,
                                                style:'margin-top:-35px;margin-left:140px;padding-top:-20px',
                                                options: [
                                                    {text: 'Hoy',  value: 'hoy'},
                                                    {text: 'Mañana', value: 'manana'},
                                                    {text: 'Pasado Mañana',  value: 'pasado'}
                                                ],
                                                listeners:{
                                                

                                                change:function(selectbox,newValue,oldValue){
                                                    
                                                    horarioslistas(newValue);
                                                    

                                                    function horarioslistas(fecha){
                                                        var item2 = Ext.getCmp('parenthorarios').getStore();
                                                        item2.getProxy().setUrl('/sources/cinespeliculaciudad'+fecha+'.php?ciudad='+city+'&pelicula='+idp);
                                                        item2.getProxy().url =item2.getProxy().getUrl();
                                                        item2.load();     
                
                                                    }


                                                },



                                            }

                                            },
                                            {
                                                xtype:'accordionlist',
                                                height:'auto',
                                                Scrollable:false,
                                                id:'parenthorarios',
                                                listScrollable: false,
                                                cls:'salascls',
                                                minHeight:300,


                                                width:320,
                                                  headerItemTpl: [
                                                    '<tpl if="this.isExpanded(values)">',
                                                        '<div class="down"></div>',
                                                        '<div <tpl if="values.year">style="font-style:italic;"</tpl>>',
                                                        '<div id=sala><hr><table><tr><td><img src= https://s3.amazonaws.com/palapadata/logos/{Imagen} width="70" height="70"></td><td><h1>{Nombre}<\h1><h4>{Direccion}<\h4><h2>{Telefono}<\h2><H3>Selecciona aqui para ver el horario{Hora}</h3></td></tr></table>', 
                                                        '<div>{Horaespanol}</div>',
                                                        '<div>{Horasubtitulada}</div>',
                                                        '</div>',
                                                    '<tpl else>',
                                                        '<div class="right"></div>',
                                                        '<div <tpl if="values.year">style="font-style:italic;"</tpl>>',
                                                        '<div id=sala><hr><table><tr><td><img src= https://s3.amazonaws.com/palapadata/logos/{Imagen} width="70" height="70"></td><td><h1>{Nombre}<\h1><h4>{Direccion}<\h4><h2>{Telefono}<\h2><H3>Selecciona aqui para ver el horario{Hora}</h3></td></tr></table></div>',
                                                    '</tpl>'
                                                ].join(''),
                                                contentItemTpl: [
                                                    '<div>',
                                                        '<div>{Horaespanol}</div>',
                                                        '<div>{Horasubtitulada}</div>',
                                                    '</div>'
                                                ].join(''),
                                                listeners:{
                                                    initialize: function() {
                                                        this.load();
                                                        this.addCls('PL-view');
                                                    },
                                                    itemtap:function(){
                                                    
                          
                                                    }},
                                                    
                                                store: Ext.create('AccordionListExample.store.PL'),
                                                listScrollable: false,

                            
                                                /*{
                                                    
                                                    autoLoad: true,
                                                    fields: ['Nombre', 'Direccion', 'Telefono','Imagen','IdCine','IdPelicula'],

                                                    proxy: {
                                                        type: 'ajax',
                                                        url: 'sources/cinespeliculaciudadhoy.php?ciudad='+city+'&pelicula=109',//Url peliculas
                                                         reader: {
                                                             type: 'json',
                                                             rootProperty: 'items'
                                                         }
                                                    },
                                                    listeners :{
                                                        afterrender : function(cmp){
                                                           cmp.refresh();
                                                        }
                                                    }

                                                }*/
                                            }
                            ]
                    }
                    
                        
            ]
                
                }

                ]
            }
        
        ]
        
    }

});




