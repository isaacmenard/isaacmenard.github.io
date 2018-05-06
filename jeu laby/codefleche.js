 function ajoutflechedroite() {
                        //utilisation de la fonction:
                        //var lignea = 2
                        //var colonnea = 6
                        //ajoutflechedroite();
                        var flechea = document.createElement('div');
                        var traieb = document.createElement('div');
                        var textediv = document.createTextNode('');
                        var textediv2 = document.createTextNode('');
                        flechea.appendChild(textediv);
                        traieb.appendChild(textediv2);
                        document.body.appendChild(flechea);
                        document.body.appendChild(traieb);
                        var crealigne = crealigne + 1
                        flechea.id = 'flechea'
                        traieb.id = 'traieb'
                        var x = $('.point_' + lignea + '_' + colonnea).offset().left;
                        var y = $('.point_' + lignea + '_' + colonnea).offset().top;
                        var elmt = document.getElementById('flechea');
                        // x pour la hauteur
                        var x1 = x + 170
                        var y1 = y - 172
                        elmt.style.position = 'absolute';
                        elmt.style.top = x1 + "px";
                        elmt.style.left = y1 + "px";
                        var elmts = document.getElementById('traieb');
                        // x pour la hauteur
                        var x2 = x + 177
                        var y2 = y - 205
                        elmts.style.position = 'absolute';
                        elmts.style.top = x2 + "px";
                        elmts.style.left = y2 + "px";
                        flechea.id = 'flechefinia'
                        traieb.id = 'traiefinib'

                    }

                    function ajoutflechehaut() {
                        //utilisation de la fonction:
                        //var lignea = 2
                        //var colonnea = 6
                        //ajoutflechedroite();
                        var flechea = document.createElement('div');
                        var traieb = document.createElement('div');
                        var textediv = document.createTextNode('');
                        var textediv2 = document.createTextNode('');
                        flechea.appendChild(textediv);
                        traieb.appendChild(textediv2);
                        document.body.appendChild(flechea);
                        document.body.appendChild(traieb);
                        var crealigne = crealigne + 1
                        flechea.id = 'flecheahaut'
                        traieb.id = 'traiebhaut'
                        var x = $('.point_' + lignea + '_' + colonnea).offset().left;
                        var y = $('.point_' + lignea + '_' + colonnea).offset().top;
                        var elmt = document.getElementById('flecheahaut');
                        // x pour la hauteur
                        var x1 = x + 192
                        var y1 = y - 158
                        elmt.style.position = 'absolute';
                        elmt.style.top = x1 + "px";
                        elmt.style.left = y1 + "px";
                        var elmts = document.getElementById('traiebhaut');
                        // x pour la hauteur
                        var x2 = x + 197
                        var y2 = y - 151
                        elmts.style.position = 'absolute';
                        elmts.style.top = x2 + "px";
                        elmts.style.left = y2 + "px";
                        flechea.id = 'flechefiniahaut'
                        traieb.id = 'traiefinibhaut'
                    }

                    function ajoutflechebas() {
                        //utilisation de la fonction:
                        //var lignea = 2
                        //var colonnea = 6
                        //ajoutflechedroite();
                        var flechea = document.createElement('div');
                        var traieb = document.createElement('div');
                        var textediv = document.createTextNode('');
                        var textediv2 = document.createTextNode('');
                        flechea.appendChild(textediv);
                        traieb.appendChild(textediv2);
                        document.body.appendChild(flechea);
                        document.body.appendChild(traieb);
                        var crealigne = crealigne + 1
                        flechea.id = 'flecheabas'
                        traieb.id = 'traiebbas'
                        var x = $('.point_' + lignea + '_' + colonnea).offset().left;
                        var y = $('.point_' + lignea + '_' + colonnea).offset().top;
                        var elmt = document.getElementById('flecheabas');
                        // x pour la hauteur
                        var x1 = x + 153
                        var y1 = y - 158
                        elmt.style.position = 'absolute';
                        elmt.style.top = x1 + "px";
                        elmt.style.left = y1 + "px";
                        var elmts = document.getElementById('traiebbas');
                        // x pour la hauteur
                        var x2 = x + 123
                        var y2 = y - 151
                        elmts.style.position = 'absolute';
                        elmts.style.top = x2 + "px";
                        elmts.style.left = y2 + "px";
                        flechea.id = 'flechefiniabas'
                        traieb.id = 'traiefinibbas'
                    }

                    function ajoutflechegauche() {
                        //utilisation de la fonction:
                        //var lignea = 2
                        //var colonnea = 6
                        //ajoutflechegauche();
                        var flechea = document.createElement('div');
                        var traieb = document.createElement('div');
                        var textediv = document.createTextNode('');
                        var textediv2 = document.createTextNode('');
                        flechea.appendChild(textediv);
                        traieb.appendChild(textediv2);
                        document.body.appendChild(flechea);
                        document.body.appendChild(traieb);
                        var crealigne = crealigne + 1
                        flechea.id = 'flecheagauche'
                        traieb.id = 'traiebgauche'
                        var x = $('.point_' + lignea + '_' + colonnea).offset().left;
                        var y = $('.point_' + lignea + '_' + colonnea).offset().top;
                        var elmt = document.getElementById('flecheagauche');
                        // x pour la hauteur
                        var x1 = x + 170
                        var y1 = y - 134
                        elmt.style.position = 'absolute';
                        elmt.style.top = x1 + "px";
                        elmt.style.left = y1 + "px";
                        var elmts = document.getElementById('traiebgauche');
                        // x pour la hauteur
                        var x2 = x + 177
                        var y2 = y - 129
                        elmts.style.position = 'absolute';
                        elmts.style.top = x2 + "px";
                        elmts.style.left = y2 + "px";
                        flechea.id = 'flechefiniagauche'
                        traieb.id = 'traiefinibgauche'

                    }