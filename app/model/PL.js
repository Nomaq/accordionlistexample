Ext.define('AccordionListExample.model.PL', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: ['Nombre', 'Direccion', 'Telefono','Imagen','IdCine','IdPelicula',
                
                                                                                        
                                                
                                                {name: 'Horaespanol', mapping: 'espanol [0]', convert: 
                                                function(value, record) {
                                                    
                                                    if (value == null){
                                                        return null;
                                                    }
                                                     else {
                                                        
                                                        var nada = value.nada;
                                                        var tresd = value.tresd;
                                                        var vip = value.vip;
                                                        var xd = value.xd;
                                                        var tresdvip = value.tresdvip;
                                                        var tresdxd = value.tresdxd;
                                                        var gtmax = value.gtmax;
                                                        var tresdgtmax = value.tresdgtmax;
                                                        var horarray = '';

                                                        if(nada != null){

                                                        horarray=horarray+'<div id=horarios><h1>ESPAÑOL</h1></div><br>';
                                                        
                                                     for (var i = 0; i < nada.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+nada[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                        }
                                                        if(tresd != null){
                                                        horarray=horarray+'<div id=horarios><h1>ESPAÑOL 3D</h1></div><br>';
                                                    
                                                     for (var i = 0; i < tresd.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+tresd[i].Hora+'<div>';
                                                     

                                                                                        }
                                                                        }
                                                        if(vip != null){
                                                        horarray=horarray+'<div id=horarios><h1>ESPAÑOL VIP</h1></div><br>';
                                                        

                                                     for (var i = 0; i < vip.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+vip[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                        }
                                                        if(xd != null){
                                                        horarray=horarray+'<div id=horarios><h1>ESPAÑOL XD</h1></div><br>';
                                                     for (var i = 0; i < xd.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+xd[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                        }
                                                        if(tresdvip != null){
                                                        horarray=horarray+'<div id=horarios><h1>ESPAÑOL 3D VIP</h1></div><br>';
                                                         for (var i = 0; i < tresdvip.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+tresdvip[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                }
                                                                if(tresdxd != null){
                                                            horarray=horarray+'<div id=horarios><h1>ESPAÑOL 3D XD</h1></div><br>';
                                                         for (var i = 0; i < tresdxd.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+tresdxd[i].Hora+'<div>';
                                                     

                                                                                            }
                                                            }
                                                            if(gtmax != null){
                                                            horarray=horarray+'<div id=horarios><h1>ESPAÑOL GTMAX</h1></div><br>';
                                                        for (var i = 0; i < gtmax.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+gtmax[i].Hora+'<div>';
                                                     

                                                                                            }
                                                            }
                                                            if(tresdgtmax != null){
                                                                horarray=horarray+'<div id=horarios><h1>ESPAÑOL 3D GTMAX</h1></div><br>';
                                                        for (var i = 0; i < tresdgtmax.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+tresdgtmax[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                    }


                                                        

                                                        
                                                       
                                                            for (var i = 0; i < value.length; i++) {
                                                      

                                                       horarray = horarray+'<div id=hora>'+value[i].Hora+'<div>';


                                                    }
                                                       
                                                    }
                                                    horarray = horarray; 
                                                    
                                                    return horarray;
                                                }},
                                               {name: 'Horasubtitulada', mapping: 'ingles [0]', convert: 
                                                function(value, record) {
                                                    
                                                    if (value == null){
                                                        return null;
                                                    }
                                                     else {
                                                        
                                                        var nada = value.nada;
                                                        var tresd = value.tresd;
                                                        var vip = value.vip;
                                                        var xd = value.xd;
                                                        var tresdvip = value.tresdvip;
                                                        var tresdxd = value.tresdxd;
                                                        var gtmax = value.gtmax;
                                                        var tresdgtmax = value.tresdgtmax;
                                                        var horarray = '';

                                                        if(nada != null){

                                                        horarray=horarray+'<div id=horarios><h1>SUBTITULADA</h1></div><br>';
                                                        
                                                     for (var i = 0; i < nada.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+nada[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                        }
                                                        if(tresd != null){
                                                        horarray=horarray+'<div id=horarios><h1>SUBTITULADA 3D</h1></div><br>';
                                                    
                                                     for (var i = 0; i < tresd.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+tresd[i].Hora+'<div>';
                                                     

                                                                                        }
                                                                        }
                                                        if(vip != null){
                                                        horarray=horarray+'<div id=horarios><h1>SUBTITULADA VIP</h1></div><br>';
                                                        

                                                     for (var i = 0; i < vip.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+vip[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                        }
                                                        if(xd != null){
                                                        horarray=horarray+'<div id=horarios><h1>SUBTITULADA XD</h1></div><br>';
                                                     for (var i = 0; i < xd.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+xd[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                        }
                                                        if(tresdvip != null){
                                                        horarray=horarray+'<div id=horarios><h1>SUBTITULADA 3D VIP</h1></div><br>';
                                                         for (var i = 0; i < tresdvip.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+tresdvip[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                }
                                                                if(tresdxd != null){
                                                            horarray=horarray+'<div id=horarios><h1>SUBTITULADA 3D XD</h1></div><br>';
                                                         for (var i = 0; i < tresdxd.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+tresdxd[i].Hora+'<div>';
                                                     

                                                                                            }
                                                            }
                                                            if(gtmax != null){
                                                            horarray=horarray+'<div id=horarios><h1>SUBTITULADA GTMAX</h1></div><br>';
                                                        for (var i = 0; i < gtmax.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+gtmax[i].Hora+'<div>';
                                                     

                                                                                            }
                                                            }
                                                            if(tresdgtmax != null){
                                                                horarray=horarray+'<div id=horarios><h1>SUBTITULADA 3D GTMAX</h1></div><br>';
                                                        for (var i = 0; i < tresdgtmax.length; i++) {
                                                       horarray = horarray+'<div id=hora>'+tresdgtmax[i].Hora+'<div>';
                                                     

                                                                                            }
                                                                    }


                                                        

                                                        
                                                       
                                                            for (var i = 0; i < value.length; i++) {
                                                      

                                                       horarray = horarray+'<div id=hora>'+value[i].Hora+'<div>';


                                                    }
                                                       
                                                    }
                                                    horarray = horarray; 
                                                    
                                                    return horarray;
                                                }}
                                                                            

        ],
    }
});