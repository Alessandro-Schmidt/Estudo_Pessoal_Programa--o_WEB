var array_filmes = [["Goodbye Lenin!", "adeus_lenin.jpg", "Wolfgang Becker", "2003", "Cinema Alemão", false], ["Captain America: Civil War", "civil_war.jpg", "Russo Brothers", "2016", "MCU", false], ["Loki", "Loki-Novo-Poster-1-691x1024.jpg", "Kate Herron", "2021", "MCU", false], ["Inglorious Basterds", "inglorous.jpg", "Quentin Tarantino", "2009", "2ª Guerra Mundial", true], ["American Psycho", "american.jpg","Mary Harron", "2000", "Terror Psicológico", true]]



window.onload = function(){
    fLocalCriaCards();
}

function fLocalCriaCards(){
    for (var i=0; i<array_filmes.length; i++){
        var conteudo = ""; 
        conteudo+='<div class="div-card">'; 
        conteudo+='<div class="div-poster">';
        conteudo+='<img src="img_cards/'+array_filmes[i][1]+'" alt="Filme">';
        conteudo+='</div>';
        conteudo+='<div class="div-titulo">';
        conteudo+='<div class="div-texto">';
        conteudo+= array_filmes[i][0];
        conteudo+='</div>';
        conteudo+='</div>';
        conteudo+='<div class="div-descricao">';
        conteudo+='<b>Diretor: </b>'+array_filmes[i][2]+'<br>';
        conteudo+='<b>Ano de lançamento: </b>'+array_filmes[i][3] +'<br>';
        conteudo+='<b>Gênero: </b>'+array_filmes[i][4] +'<br>';
        conteudo+='</div>';
        conteudo+='<div class="div-rodape">';
        conteudo+='<button class="button-rodape">Comprar</button>';
        conteudo+='</div>';
        conteudo+='</div>'; 

        document.getElementById("filmes").innerHTML+=conteudo; 
    }
}