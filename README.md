# timetracker.tools

The public site for [Time Tracker](https://timetracker.tools): a home page,
privacy policy and terms of service, as Google's OAuth consent screen
requires. Plain HTML and CSS, served by GitHub Pages from `main` with the
custom domain in `CNAME`.

Pages:

- `index.html` – home page
- `privacy.html` – privacy policy (served at `/privacy`)
- `terms.html` – terms of service (served at `/terms`)

The software it describes lives in
[time-tracking-google-calendar-mcp](https://github.com/cranthony/time-tracking-google-calendar-mcp)
(the server) and [time-tracker-client](https://github.com/cranthony/time-tracker-client)
(the app). When either changes what it accesses or stores, update the
privacy policy here and bump its effective date.
