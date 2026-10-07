/* =====================================================================
   FATHER–DAUGHTER BALL · SPONSOR BANNER — the only file you need to edit
   =====================================================================

   HOW TO ADD A SPONSOR
     1. Drop their logo into the  logos/  folder (a transparent PNG is best;
        a logo on a white background is fine too).
     2. Add a line to the right tier below:
            { name: "Company Name", logo: "logos/company-name.png" },
     3. Save, then reload the page. The overview re-fits itself and the
        sponsor gets a slide of their own.

   OPTIONS (all optional)
     logo:  "logos/file.png"   leave it out and the slide shows the name in type
     tile:  "#1a1a1a"          for a logo that has its OWN dark background baked
                               in — the card behind it takes that colour so the
                               edges disappear
     note:  "Your own thank-you line for this sponsor"
     size:  1.2                makes this sponsor's logo card larger (or 0.9 smaller) on
                               its own slide — handy for very thin, wide wordmarks
     extra: 5                  keeps this sponsor's slide up 5 seconds longer than its tier

   TIERS
     The first tier is the headline sponsor (largest, in gold).
     Tiers with a single sponsor that follow it share one elegant row on the
     overview. Tiers with several sponsors become the balanced list.
     Add a tier by copying one of the blocks below.

   FATHER & DAUGHTER PAINTINGS
     Set  paintings: true  below to show them on the overview, or false for the
     overview without them (the Rotary crest stays on the left). To compare without editing,
     add ?paintings or ?nopaintings to the end of the address.
     Four paintings rotate, one per full loop of the slideshow, starting with couple-2. They live in
     assets/ and are listed in index.html (search for "couples") — adding one
     needs its size, the top of dad's head and the candle flame positions, so
     that's a job for whoever set this up rather than a quick edit.

   KEYS WHILE IT PLAYS
     F  fullscreen      M  Evening ↔ Midnight      P  pause / resume
     →  or Space  next slide      ←  previous      Home  overview
   ===================================================================== */

const BANNER = {
  event:   "The Father–Daughter Ball",
  message: "to the generous sponsors who made this evening possible",

  // the father & daughter paintings on the overview. false = the overview without
  // them: the Rotary crest on the left, the message beside it
  paintings: true,

  hostKicker: "Proudly hosted by",
  host:       "Rotary Club of Vernon Silver Star",
  motto:      "Service Above Self",

  // seconds each slide stays up, and how long the cross-fade takes.
  // The overview stays up 3× as long as a general sponsor slide.
  // premier > gold > royal (blue) > silver > general
  timing: { premier: 16, gold: 13, royal: 11, silver: 10, general: 8, fade: 1.8 },

  // default thank-you lines on the sponsor slides (a sponsor's own `note` wins)
  notes: {
    premier: "Our deepest thanks for making this evening possible",
    tier:    "With sincere thanks for your generous support",
    general: "With sincere thanks for your generous support",
  },

  tiers: [
    { tier: "Premier Sponsor", sponsors: [
        { name: "A&W", logo: "logos/aw.png" },
    ]},
    { tier: "Gold Sponsor", sponsors: [
        { name: "Nixon Wenger LLP", logo: "logos/nixon-wenger.png", size: 1.22 },
    ]},
    { tier: "Royal Blue Sponsor", sponsors: [
        { name: "The Emily Dahl Foundation", logo: "logos/emily-dahl-foundation.png" },
    ]},
    { tier: "Silver Sponsor", sponsors: [
        { name: "Lexus", logo: "logos/lexus.png" },
    ]},
    { tier: "General Sponsors", sponsors: [
        { name: "Beach Radio 107.5",                   logo: "logos/beach-radio.png" },
        { name: "Valley Grills",                       logo: "logos/valley-grills.png" },
        { name: "Okanagan Spring Brewery",             logo: "logos/okanagan-spring-brewery.png" },
        { name: "Elephant Storage Centre",             logo: "logos/elephant-storage-centre.png" },
        { name: "Oopsie Daisy Flowers",                logo: "logos/oopsie-daisy-flowers.png" },
        { name: "Cotton’s Chocolates",            logo: "logos/cottons-chocolates.png", tile: "#26150e" },
        { name: "Hadwin’s HVAC, Plumbing & Electrical", logo: "logos/hadwins.png", size: 1.16, extra: 5 },
        { name: "Nixon Earthworks",                    logo: "logos/nixon-earthworks.png" },
        { name: "Bassani Tech",                        logo: "logos/bassani-tech.png", tile: "#140b0e" },
        { name: "Spallumcheen Golf & Country Club",    logo: "logos/spallumcheen-golf.png" },
    ]},
  ],
};
