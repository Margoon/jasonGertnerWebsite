---
layout: main
title: GameMaker
permalink: /gamemaker/
---

<h1 class="page-header">GameMaker</h1>

<br />
<div class="games" id="games">
    {% assign all_games = site.games | sort: 'date' | reverse %}
    {% for game in all_games %}
      {% assign forIndex = forloop.index0 | modulo: 6 | plus: 1 %}
      {% if game.engine == "gamemaker" %}
      {% if game.franchise == include.franchise or include.franchise == false %}
        {% include button-game.html id=forIndex game=game franchise=include.franchise %}
      {% endif %}
      {% endif %}
    {% endfor %}
</div>
<br />
