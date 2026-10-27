# Contributing / 参与贡献

Thank you for helping make geography and history easier to explore. Issues and pull requests in English or Chinese are welcome. The app currently uses Chinese; README.en.md provides an English introduction.

## Useful first contributions

- Correct a date, place, source link or explanation.
- Improve keyboard navigation, mobile layouts or rendering performance.
- Add a well-sourced conflict, annual event or geography note.
- Test the WebGL renderer and touch controls on a real device.

## Local workflow

1. Fork the repository and create a focused branch.
2. Serve `dist/` over HTTP: `python3 -m http.server 8080 --directory dist`.
3. Make one coherent change. Avoid editing bundled vendor code.
4. With Node.js 20+, run `node --test tests/*.test.mjs`.
5. Open a pull request explaining the change, validation and any remaining limitations. Include before/after screenshots for visible changes.

## Historical content

Provide a reliable source URL, year, location and a short explanation. Distinguish documented facts from interpretations. Represent people and regions with care, including the civilian consequences of war. Modern country borders must not be presented as historical territory; illustrative routes must be labeled as such. Do not invent data to fill gaps.

Campaign data lives in `dist/campaigns.js`; conflict summaries, geography notes and quiz questions live in `dist/content.js`. New data must retain source links and pass coordinate/date checks.

## Licensing

Contributions are provided under the project's MIT license. Retain third-party attribution. Only contribute material you have permission to share; link to historical sources instead of copying substantial passages.
