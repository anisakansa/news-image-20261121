# news-image-20261121 — The World in One Page

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

## The seven stories

The paper is dated Saturday 21 November 2026 and sums up the news cycle
leading into that morning — the stories every front page in the world was
carrying on 21 November. Each was verified against live reporting on
21 November 2026 (see sources).

1. **LEAD — ICJ: Myanmar committed genocide against the Rohingya.**
   Verdict delivered Thu 19 Nov in The Hague (9–6): the first time the ICJ
   has held a state guilty of genocide. Myanmar rejected it on Fri 20 Nov.
   Sources: [ReliefWeb / IIMM statement](https://reliefweb.int/report/myanmar/icj-judgment-marks-historic-step-towards-justice-rohingya-enmy),
   [Reuters via LA Post](https://www.lapost.com/content/myanmar-calls-icj-ruling-on-genocide-unfair).
2. **Russian missiles fall on Poland.** Two suspected Kh-101 missiles and a
   jet-powered drone came down in south-east Poland overnight Fri 20 Nov
   during a mass strike on Ukraine; NATO chief Mark Rutte called it a
   “grave violation”. No injuries. Sources:
   [AP via Reflector](https://www.reflector.com/news/national/russian-missiles-land-in-poland-as-europe-held-military-drills-nearby-nato-calls-it-a/article_66cef298-02e8-53b4-94cf-1d56092ea027.html),
   [Reuters via EuropeSays](https://www.europesays.com/poland/38733/).
3. **Markets enter correction; Nvidia sinks 14%.** Fri 20 Nov close: S&P 500
   −3.7% to 6,910.39, Dow −950 to 48,147.33 (both 10% off records), Nasdaq
   −5.28%, wiping out its 2026 gains; Nvidia −14% to a 52-week low after
   reports the SEC is examining its accounting. Same day, President Trump
   threatened a “tremendous tax” on US firms building AI data centres
   abroad. Sources: [KuCoin / Xinhua-CNBC](https://www.kucoin.com/news/flash/us-markets-plunge-nasdaq-falls-5-28-nvidia-drops-14),
   [Reuters via LA Post](https://www.lapost.com/content/trump-says-us-to-penalize-firms-building-data-centers-abroad).
4. **Britain and the EU seal a £17bn reset deal.** Summit in Brussels,
   Fri 20 Nov: food-export checks scrapped, carbon markets linked, youth
   mobility for 100,000 under-30s for up to three years; PM Andy Burnham
   called it a “win-win”. Source:
   [Reuters via SRN News](https://srnnews.com/britain-eu-set-to-agree-to-reset-but-divisions-persist/).
5. **SPORT — Wellington & Budapest.** Day 2, 1st Test, Basin Reserve:
   Jaiswal 85 and Rahul 52* put on 130 — India’s first century opening
   stand in New Zealand this century — India 159/1 replying to New
   Zealand’s 368 (Nicholls 175*). Chess: Alireza Firouzja beat Anish Giri
   in an armageddon tiebreak to win the Total Chess World Championship
   pilot in Budapest, $80,000. Sources:
   [Cricbuzz](https://www.cricbuzz.com/cricket-news/140982/nz-vs-ind-1st-test-yashasvi-jaiswal-kl-rahul-blunt-new-zealands-advantage-after-henry-nicholls-175-in-wellington-cricbuzzcom),
   [Chess.com](https://www.chess.com/news/view/firouzja-wins-2026-total-chess-world-championship-tour-pilot).
6. **COP31 spills into Saturday with no deal.** Final scheduled day Fri
   20 Nov in Antalya: the draft drops every mention of fossil fuels and
   the $120bn adaptation fund; talks among nearly 200 nations go into
   overtime on Saturday. Sources:
   [AP via Reflector](https://www.reflector.com/news/national/nations-demand-fossil-fuel-cuts-as-un-climate-talks-cop31-are-wrapping-up-in-turkey/article_69c3c67a-1596-5b3a-8378-065c6caa780d.html),
   [UN News — COP31](https://news.un.org/en/events/cop31).
7. **Cyclone Akvan hits India’s east coast.** Landfall near Gopalpur,
   Fri 20 Nov, winds 70–80 km/h; 300,000+ people evacuated in Odisha to
   9,341 shelters; no deaths in the first assessment. Source:
   [The Watchers](https://watchers.news/2026/11/20/cyclone-akvan-landfall-gopalpur-november-20-2026-deep-depression/),
   [Wikipedia / IMD](https://en.wikipedia.org/wiki/Cyclone_Akvan).

## Also verified, not featured (space)

- First Trump–Xi–Putin trilateral summit ends in Shenzhen, Thu 19 Nov,
  with a four-point “peace declaration” but no breakthrough on Ukraine,
  Iran or arms control.
  ([World Pulse Wire](https://worldpulsewire.com/2026/11/19/trump-xi-putin-trilateral-outcome/))
- India’s NSE becomes the world’s fifth-largest listed exchange operator
  by market value (~$59.7bn), overtaking Nasdaq and HKEX, Fri 20 Nov.
  ([Daily Prabhat / ANI](https://www.dailyprabhat.com/nse-becomes-worlds-fifth-largest-listed-exchange-by-market-cap-overtakes-nasdaq-and-hkex/))
- Indonesia’s 2026 forest fires could cost up to $30.9bn (CELIOS October
  estimate, Nov 2026 report).
  ([Asia Daily](https://asiadaily.org/news/19255/))

## License

MIT — see `LICENSE`.
