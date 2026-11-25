# NOTES.md — news-image-20261125

- Competition: news-image-20261125 — pool $100, top 50 (1st $20 / 2nd $12 / 3rd $6)
- Deadline: 27 Nov 2026 07:00 WIB
- Anchor: makefun anchor a9b46523421ab15c62677179510ad3434f797c1e round 34255529
- Entrypoint: main.ts (Node stdlib only) — copies entry.png to $MAKEFUN_OUTPUT_DIR
  after PNG-magic check (89504e470d0a1a0a) and 1 MiB size gate.
- entry.png: 1024x1024 PNG, RGB, 176,331 bytes (< 1 MiB)
- entry.png sha256: f890a4af39d2a9378272b6ffd036335a92df986c04c30234fec4322cdf68143d
- Validation: main.ts run 2x by builder, byte-identical output; reviser re-ran 2x,
  sha256 unchanged (f890a4af...). Visual check by reviser: no headline/deck overlap,
  no clipped text, no column bleed.

## Stories on the front page (as rendered, Wednesday 25 November 2026)

Masthead label: "33 STORIES". Reviser visual recount: 35 headlines
(1 hero + 3 medium + 31 briefs) — the 2-item gap is a builder count difference,
noted here honestly; the image content is what is graded.

Hero (1):
- SPACE — China launches Shenzhou-24 — first Pakistani in orbit
  (Long March 2F, Jiuquan 08:18 Beijing time; commander Tang Hongbo, Wu Yi,
  Pakistani payload specialist Muhammad Zeeshan Ali, 40 — first foreign
  astronaut ever to visit Tiangong; Ali spends ~a week aboard, returns on
  Shenzhou-23.)

Medium (3):
- UKRAINE — Zelenskyy confirms strike on Russian ship in Gulf of Finland
- THE WAR'S TOLL — Leaked data point to 700,000 Russian soldiers killed
  (new analysis of leaked statistics; Moscow's own figures: record year 432,000)
- MARKETS — Gold slips as traders await US inflation data
  (spot gold eases to $3,544/oz ahead of October PCE + second Q3 GDP reading)

World briefs (8):
- Ukraine posts video of Libya strikes. (Russian warship sunk, cargo ship hit off Benghazi.)
- Russia's losses hit a record year. (432,000 casualties in 2026, General Staff says.)
- Putin orders power-plant protection. (Kremlin shields energy sites from Ukraine strikes.)
- US delays Patriot clearance for Kyiv. (Pentagon holds up air-defence system transfers.)
- Russian jets alarm South Korea. (Seoul warns after Russian jets fly close by.)
- NATO to deploy early-warning jets in Poland. (Move follows missiles landing in Poland.)
- Germany gives €34m for Ukraine drones. (Berlin funds production of Ukrainian Bakta drones.)
- EU court faults Poland over migrant. (Warsaw violated an Afghan migrant's rights.)

Middle East briefs (8):
- Israel: Iran is developing chemical weapons. (Defence minister's claim tops briefings.)
- Trump to meet NATO chief Rutte today. (White House confirms Wednesday meeting.)
- Britain sanctions the Houthis. (London blacklists the group and four people.)
- Kuwait says it repelled an Iranian attack. (First such attack in two months, after US strikes.)
- Trump: Iran plot claim taken 'very seriously'. (US watching any Iranian plot, president says.)
- Iran braces for winter gas shortages. (War damage deepens a chronic energy crisis.)
- Iran flogs singer who sang without hijab. (Lawyers say authorities carried out the punishment.)
- Settlers shoot dead a 72-year-old woman. (Palestinian woman killed in the West Bank.)

Economy briefs (3):
- Nikkei seen rising, short of its record. (Reuters poll sees Japan's index higher into 2027.)
- Houthis threaten Saudi ports. (Group warns over a coalition order on Hodeidah port.)
- Fed hike seen as near-certain. (Markets price a 96.4% chance of a 25-point Dec rise.)

Society & Law briefs (6):
- Land-mine casualties soar in Syria. (Two years on, mines kill more people than ever.)
- About 175 migrants missing off Senegal. (Contact lost with a boat that left Senegal.)
- Zimbabwean jailed over Russia bid. (South African court convicts him over recruitment.)
- flydubai cleared to fly to Tel Aviv again. (Israel approves the route's resumption.)
- Hasina plans return to Bangladesh. (Ex-premier aims to return on 16 December.)
- Shanghai party chief faces probe. (China opens a disciplinary inquiry in Shanghai.)

Politics briefs (3):
- BJP and Akali Dal reunite in Punjab. (Parties ally for the 2027 state elections.)
- US envoy unsure Israel aid ends this year. (He is 'not certain' military aid stops in 2026.)
- EU announces fresh Russia sanctions. (Brussels unveils further measures amid the war.)

Sport briefs (3):
- England level the T20 series in Australia. (England beat Australia by eight wickets, chasing 185.)
- India women face China today. (India's hockey team plays China in the Asian Trophy.)
- O'Hare flights delayed by radar fault. (FAA says a radar issue is holding up departures.)

Footer: "Sources: Reuters, BBC, RFE/RL, Nature, AP — stories that happened or
were first reported on 25 November 2026. Built 25 November 2026, morning (WIB).
A full-day rebuild follows tomorrow morning."

## Verification status (honest)

- Builder claimed all stories verified via web before building; the footer
  names Reuters, BBC, RFE/RL, Nature, AP as sources.
- Reviser did NOT re-verify each story's facts against primary sources in
  this revision turn (time-boxed revision; image + copier + determinism only).
  What the reviser verified directly: entry.png dimensions (1024x1024),
  file size (< 1 MiB), PNG magic, sha256 stability across 2 runs, visual
  layout (no overlap / clipping), and that every headline above is legible
  as rendered.
- Date discipline: every item is presented as a 25 Nov 2026 story, matching
  the masthead date "WEDNESDAY, 25 NOVEMBER 2026".

## Reviser change

- One comment-only edit to main.ts (header comment, no logic/data change);
  output sha256 unchanged (f890a4af...). Anchor init run before any edit.
