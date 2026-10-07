FATHER–DAUGHTER BALL · SPONSOR THANK-YOU BANNER
================================================

WHAT'S HERE
  index.html    the control room — open this in Chrome or Edge. The banner sits in a
                large 16:9 frame with one row of controls beneath it: pause and the
                sun/moon theme switch on the left, the slide name and list in the middle,
                previous / next and Fullscreen on the right. Fullscreen shows just the
                banner, ready to go; Esc brings the controls back.
  banner.html   the banner on its own (what the control room shows; you can open it
                directly too)
  sponsors.js   THE ONLY FILE YOU EDIT: sponsor names, tiers, logos, timing, wording
  logos/        one logo per sponsor (transparent PNG is best)
  assets/       artwork and fonts — leave as is
                (pair-1 … pair-3.webp are the three father & daughter paintings; the banner
                 moves to the next one each time the slideshow completes a full loop)

Keep these together in one folder. The page loads everything by relative
path, so it works straight from a USB stick or the desktop, no internet needed.

TO ADD OR CHANGE A SPONSOR
  1. Put the logo in  logos/
  2. Open sponsors.js in any text editor (Notepad, TextEdit, VS Code)
  3. Add  { name: "Company", logo: "logos/company.png" },  to the right tier
  4. Save and reload the page

SCREEN SHAPE
  The banner is laid out as a 1920×1080 (16:9) TV picture. On a 16:9 screen
  it fills the screen edge to edge exactly as designed. In a browser window of
  any other shape it scales to fit with black bars around it, so what you see
  on the laptop is precisely what the room will see.

ON THE NIGHT (laptop → TV over HDMI)
  • Set the TV as an EXTENDED display at 1920×1080 (16:9).
  • Open index.html, drag the browser window onto the TV, pick the theme, then
    click Fullscreen (or press F). Only the banner goes fullscreen.
  • In fullscreen the same keys work, and faint arrows / a moon-sun / a fullscreen
    button appear in the corners while the mouse moves. Esc returns to the controls.
  • Turn on Do Not Disturb so notifications don't appear on the TV.
  • Keep the laptop plugged in. The page asks the laptop to stay awake, but
    it's worth also setting the laptop's sleep timer to "Never" for the evening.

KEYS & CLICKS
  F   fullscreen (or double-click)  M   Evening ↔ Midnight theme
  →   or Space   next slide         ←   previous slide
  Home  back to the overview        P   pause / resume the slideshow
  Click anywhere to go to the next slide (click near the left edge to go back).
  Faint arrows at the screen edges, and a fullscreen button and moon/sun in the
  bottom-right corner, appear only while the mouse is moving; they vanish when
  it stops. The first time you move the mouse in a window that isn't yet
  fullscreen, a small reminder of the keys shows for a few seconds.
  If the show is paused, a "Paused" label stays on screen so it can't be left
  stopped by accident.

  Browsers only allow fullscreen after a key press or click, so the page can't
  go fullscreen on its own — click Fullscreen (or press F) once it's on the TV.

  The slideshow loops continuously all night and keeps running even if the
  laptop's accessibility "reduce motion" setting is on (that only calms the
  decorative twinkle). If the browser tab is hidden it pauses, and resumes the
  moment it's visible again.

LINK OPTIONS (add to the end of the file name in the address bar)
  index.html?midnight     start in the Midnight theme
  index.html?slide=3      start on slide 3 (0 is the overview)
  index.html?still        a frozen frame with no animation, for screenshots
