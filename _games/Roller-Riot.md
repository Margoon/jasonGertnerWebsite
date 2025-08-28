---
layout: game
title: Roller Riot
permalink: /games/roller-riot/
date: 2019-09-26
archived: false

squareIcon: "/assets/games/roller_riot/rollerRiotIcon512.png"
buttonColor: "#F9A11B"

trailer: "https://www.youtube.com/embed/GxEqPNBImyw"

screenshots:
    - "/assets/games/roller_riot/rollerRiotShot1.jpg"
    - "/assets/games/roller_riot/rollerRiotShot2.jpg"
    - "/assets/games/roller_riot/rollerRiotShot3.jpg"
    - "/assets/games/roller_riot/rollerRiotShot4.jpg"

links:
    steam: "https://store.steampowered.com/app/1255380/Roller_Riot/"
    googlePlay: "https://play.google.com/store/apps/details?id=com.MassDiGI.Banoffee"
    apple: "https://apps.apple.com/us/app/roller-riot/id1468113228"

---

## Info
  <p><strong>Released:</strong> September 26th 2019 </p>
  <p><strong>Genre:</strong> Action Brawler</p>
  <p><strong>Created by:</strong> MassDigi </p>
  <p><strong>Role:</strong> Lead Programmer </p>
  <p><strong>Engine:</strong> Unity </p>
  <p><strong>Team Size:</strong> 7 </p>

## Description
Crazy cyborgs are causing chaos in the city and have made their way towards the Roller Derby District. You are the last one standing. Punch, kick and roll your way through a frenzy of different enemies hell bent on taking you down. Show them that you are a force to be reckoned with and that they chose the wrong street. And don’t forget to use your cyber upgrades to take down more enemies!

## Pre-Production
I worked as Lead Programmer on Roller Riot during SIP19, or the Summer Innovation Program run by MassDiGI. I was placed on a random team and we had to make a mobile game with very clear comps from start to mostly finished by the end of the program. During pre-production, I made four different white boxes; the first two were scrapped, and for a short time it looked like we were going to settle on the third one. The only problem was it was wildly off comp at this point, and did not resemble the original game we were basing it off at all anymore. We only had a couple days left so we had to make something fast or choose one of the white boxes we had. Then we found a sub-genre of games we really liked, and tons of games in it that would be perfect for us to take our own spin on: tap based action brawlers! I made another white box for it, and at our first playtest it got a lot of attention. We had now chosen the game we'd work on for the rest of the summer, which for most of the summer was called Punch 'Em.
<p>
This pre-production period was something I hadn't done before, and I'm glad I did! We created a MOSCOW, a Kanban board, an art bible and coding bible. All of this was modified over the summer, but laying out a base before we started working was super helpful and gave everyone a good sense of what we were doing and where we were heading.
</p>

## Production
During development, I made a lot of the core systems of the game: the Player, Game Manager, most general UI functions, analytics implementation, enemy class, power-up system, and other things along the way. This was the first time I really had to make sure the code I was making was legible to the other programmers on the team because usually I either work in other systems, am the only programmer, or have joined a team midway and adhere to their coding rules. I was really glad that both programmers on the team understood my code! I was also Build Manager, so I made two builds every week for Android and iOS, and provided patch notes for everything that was changed.
<p>
During the summer, we showed Roller Riot to many different developers and industry veterans for feedback. It was extremely helpful, because they were able to pinpoint things that we didn't notice that needed to be fixed. We also had design problems that we could discuss with them, and they were able to help us fix them! One of our biggest design problems was that early on when you missed an enemy in the game, you would go forward slightly so you'd be closer to enemies and get hit. Players saw this and thought they could progress to different sections, but they weren't supposed to do that. We expressed this to Réjon Taylor-Foster, and he said movement should either be in the game clearly, or not at all. After discussing it more, we decided that missing woudln't move you but you'd be in the miss state for longer.
</p>  
<p>
Overall, I'm really happy with what we made, and I couldn't have asked for a better team to do it with! Working with them was an experience I'll never forget.
</p>

## Live Ops
After the summer, I continued work on Roller Riot as the producer. Now instead of focusing on building the game, we were looking at how people played the game. We wanted to understand why people would stop playing, and how we could get them to play longer and multiple times. A big thing we focused on was fixing the game's difficulty curve. We had four ad campaigns for Roller Riot, and each time we'd change something about the game. For the first campaign we just launched the game to see the current state of the game. On the second campaign we changed how enemies indicate when they can be hit. Before when they were in range they'd get blue afterimage-like effects. For this campaign we changed it to radars appearing on their heads, which helped a lot. For the third campaign we're changing which waves enemies will spawn on, because we're worried the player is getting overwhelmed too fast. Here are all the graphs:

<p>     
<img class="shot" src="../img/roller_riot/rollerRiotCampaign1.png">
<img class="shot" src="../img/roller_riot/rollerRiotCampaign2.png">
</p>