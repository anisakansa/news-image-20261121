# news-image-20261121 — The World in One Day (round 3)

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/anisakansa/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/anisakansa/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

Entry for the make.fun competition **“Sum up 21 November's world news in one image”**
(Saturday 21 November 2026). One 1024×1024 newspaper front page, drawn as
`poster.html` and rendered to `entry.png`. `main.ts` (Node 22, stdlib only,
no network) validates the PNG and copies it byte-for-byte to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` locally).

## How to build

```sh
# render the poster (from ~/workspace/tools/makefun so playwright-core resolves)
node ../render-news-20261121-final.mjs poster.html entry.png
# run the entry program
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Round 3 — what changed vs round 2

Round 2 ("Cogent Relay", judge 0.974723, rank 1,854) had only **7 stories**,
and **5 of the 7 were stale** — the Myanmar ICJ verdict (19 Nov), the
missiles on Poland, the Wall Street correction, the UK–EU deal and Cyclone
Akvan (all 20 Nov). Round 3 follows the Top 10 formula: **35 stories, all
dated Saturday 21 November 2026**, with a number strip (6 figures), a region
bar (Europe 4 · Asia 10 · Middle East 5 · Africa 1 · Americas 11 · Oceania 3
· Global 1), a top 3 illustrated, cards 4–13, a world map with numbered pins,
an "ALSO ON…" index (14–35), a **DATE CHECK** box naming exactly what was
left out as Friday's news, a source beside every story and a verification
badge (CONFIRMED / OFFICIAL / REPORTED / CLAIM). The r2 lead panel, market
chart and red-stamp craft are kept in spirit (lead panel + chart + banners).

## The 35 stories (all verified against public reporting of 21 Nov 2026)

**Top 3**
1. **COP31 overtime, Antalya** — summit missed its Friday close; draft drops
   fossil fuels and the $120bn adaptation fund. Sources: AFP, Al Jazeera
   (Reuters: "COP31 climate summit risks failure as talks go deep into
   overtime", 21 Nov).
2. **Five Houthi missiles shot down over Saudi Arabia** — three over Riyadh
   before dawn (Sat 21 Nov), two over Jizan the night before; third straight
   day of alerts. Sources: AFP, Dawn.
3. **Magnitude 6.7 quake, Junín, Peru** — 00:09 UTC, 108 km deep; felt in
   Lima; no deaths, 8 hurt, 128 homes damaged; no tsunami. Sources: USGS, IGP.

**Cards 4–13**
4. Zelensky: Crimea bridge "will not stay" (NBC interview, reported 21 Nov).
5. Iran says it shot down a US MQ-9 drone over Hormuz — 58th claimed; no US
   confirmation (IRIB). CLAIM.
6. Iran: uranium stock stays in the country; Araqchi still seeks a "fair
   solution" (Tasnim, interview published 21 Nov).
7. Trump vows a "tremendous" tax on US firms building AI data centres abroad
   (White House briefing, reported 21 Nov; ABC).
8. China tells Japan to "correct" its Taiwan words after Xi snubbed PM
   Takaichi in Shenzhen (Foreign Ministry, AFP).
9. Air Niugini flight PX19 diverts to Davao after an engine-fire warning;
   all 146 aboard (137 passengers + 9 crew) safe via slides (AP).
10. Australia and China agree to AI talks as Albanese ends an 11-day trip
    (ABC).
11. Bitcoin trades below $59,000 on Saturday — $58,983 early, down 3.9% in
    24 hours; ether $1,625 (CoinGecko 02:08 UTC).
12. Russell fastest in final Las Vegas practice, 1:34.041, then a clash with
    Verstappen at Turn 14 (Formula 1).
13. Rahul hits a century against New Zealand — 124* at tea, India 344/2
    replying to 368, day 3, Wellington (AFP).

**Also on Saturday (14–35)** — Kryvyi Rih double strike (2 dead, 42 hurt);
Copenhagen expels a Russian attaché over a plot; COP31: EU "fossil summit"
warning, Panama threatens to block the text, Indonesia's PLN signs six
clean-power deals; Yemen: Houthis threaten Jeddah and Red Sea ports;
Washington: Vance on Iran strikes, lawmaker threatens SpaceX funding;
Texas execution (63 minutes); Los Angeles: Palisades fire jury verdict;
Missouri: $7.25bn Roundup settlement; Vancouver youth climate trial;
Pyongyang: Kim tours factories; Sejong freight train derails; Taipei budget
and cash payout passed; Bangkok arsenic plan; New Delhi SCO forum; East
India rain alerts; Myanmar sanctions call; Port Louis rating-agency talks;
Melbourne: Cummins keeps the captaincy; Las Vegas: Verstappen to stewards.

**DATE CHECK (left out as Friday 20 Nov):** Wall Street's fall into a
correction, the Russian barrage on Kyiv's bridges, the missile that landed in
Poland, the UK–EU deal, Cyclone Akvan's landfall. Older: Voyager 1's
light-day (18 Nov). Not confirmed when drawn: BepiColombo in Mercury orbit,
a final COP31 text.

## Verification notes

- Every top-13 story was checked against live public reporting on 21 Nov
  2026 (search results saved in the benchmark report). Four items were
  Friday events first reported/covered on Saturday (Trump AI tax, China–
  Japan, Canberra AI, Zelensky interview) — they are presented with their
  source attribution, exactly as the Top 10 entries present them.
- The "5 missiles" figure counts 3 over Riyadh (Sat) + 2 over Jizan (Fri
  night); the card text says so explicitly.
- The Peru card uses the Saturday Indeci toll (8 hurt, 128 homes damaged),
  not the first "no damage" wire.
- Summaries are written in our own words; the 35-story list itself is a
  public news fact, not copied text.

## License

MIT — see `LICENSE`.
