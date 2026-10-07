# FAH Intelligence: data sources and refresh procedure

Site: fah.rojasreport.com (Netlify project `fah-rojasreport`, this folder).
Cadence: quarterly, timed to the Lobbying Disclosure Act deadlines (Jan 20, Apr 20, Jul 20, Oct 20) and the FEC monthly filing on the 20th.
Last full refresh: October 2026 (data through Aug 31, 2026 for FEC; through Sept 2026 for FAH statements).

## Where the numbers live in the code

| Content | File | Notes |
|---|---|---|
| Headline stats (lobbying totals, firm count, PAHCF, FEDPAC) | `lib/data.ts` → `globalStats`, `pacStats` | Edit here first; home, lobbying and PAC pages read these. |
| Board roster, titles, FAH roles, 4 key stats per person | `lib/data.ts` → `boardMembers` | Key stats must match the StatBar on each dossier page. |
| Pillar titles, threat levels, one-line FAH position | `lib/data.ts` → `pillars` | Drives the home-page threat matrix and pillars index. |
| Outside lobbying firms | `lib/data.ts` → `lobbyingFirms` | From Senate LDA registrations. |
| Dossier narrative and tables | `app/board/<slug>/page.tsx` | One file per person. |
| Pillar narrative and tables | `app/pillars/<slug>/page.tsx` | One file per pillar. |
| AI agent facts | `netlify/functions/agent.ts` → `SYSTEM_PROMPT` | Keep in sync with `globalStats`. |
| AI agent knowledge base | `knowledge/*.md` | Empty as of Oct 2026. Drop source documents here; `scripts/build-knowledge.ts` chunks them at build. |
| Sitemap | `app/sitemap.ts` | Add any new route. |

## Primary sources by page

### Lobbying (`app/lobbying/page.tsx`)
- Senate LDA database, registrant "Federation of American Hospitals" (House/Senate registrant ID 32635): https://lda.senate.gov/filings/public/filing/search/ . Quarterly LD-2 gives the in-house expense line and each outside firm's income.
- OpenSecrets client summary (cross-check): https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000000199
- IRS Form 990, EIN 13-6226549: https://projects.propublica.org/nonprofits/organizations/136226549 (revenue, expenses, officer compensation; filed ~Nov each year for the prior tax year).
- FAH leadership and statements: https://fah.org/media-center/ and https://fah.org/blog/
- PAHCF Form 990, EIN 83-0939222: https://projects.propublica.org/nonprofits/organizations/830939222 ; PAHCF Action, EIN 84-3893369: https://projects.propublica.org/nonprofits/organizations/843893369

### PAC (`app/pac/page.tsx`)
- FEC committee summary, FEDPAC C00002261: https://www.fec.gov/data/committee/C00002261/ (set the two-year period; read Total receipts, Total disbursements, Contributions to other committees, Ending cash on hand).
- Disbursements by recipient: https://www.fec.gov/data/disbursements/?committee_id=C00002261&two_year_transaction_period=2026
- Receipts by donor/employer: https://www.fec.gov/data/receipts/?committee_id=C00002261&two_year_transaction_period=2026
- ProPublica Itemizer (friendlier view): https://projects.propublica.org/itemizer/committee/C00002261/2026
- Filing calendar: https://www.fec.gov/help-candidates-and-committees/dates-and-deadlines/

### Board (`app/board/*`)
- FAH board announcement (each October): https://www.fah.org/about-fah/board-of-directors/
- Public companies, SEC EDGAR full-text search: https://efts.sec.gov/LATEST/search-index?q= . Per company: 10-K (Feb) for revenue, net income, debt; DEF 14A (Mar–Apr) for CEO pay and pay ratio; 8-K for executive changes and settlements.
  - HCA (CIK 860730), Tenet (CIK 70318), UHS (CIK 352915), CHS (CIK 1108109), Encompass (CIK 785161), Ardent (ARDT, CIK 1756655).
  - Lifepoint, ScionHealth and Prime are private: use bond-investor releases, Moody's/S&P actions, and press.
- DOJ settlements: https://www.justice.gov/news (search company name); HHS OIG: https://oig.hhs.gov/fraud/enforcement/
- Congressional investigations: Senate Budget, Senate Finance, Senate HELP, House Ways & Means press pages.

### Pillars (`app/pillars/*`)
- Bills: https://www.congress.gov (verify Congress number, sponsor, introduction date, latest action).
- CMS rules: Federal Register (OPPS proposed rule each July, final each November; IPPS proposed April, final August; PFS proposed July, final November).
- No Surprises Act IDR data: https://www.cms.gov/nosurprises/policies-and-resources/reports and CRS reports.
- 340B: HRSA program data; OPA rebate pilot notices; court dockets.
- CON and scope: NCSL trackers; state legislature sites.
- Transparency: CMS enforcement actions page; PatientRightsAdvocate.org compliance reports (semiannual).
- Consolidation: Kaufman Hall quarterly M&A reports; FTC press releases; KFF.

## Refresh checklist

1. Pull the latest quarter's LD-2 for FAH and each outside firm. Update `globalStats`, the spend table and firm roster.
2. Pull the FEC summary for the current cycle. Update `pacStats`, the cycle table, the recipient tables (rebuild from disbursements, top 5 House and Senate by amount), and the member-company PAC-to-PAC table.
3. For each public board company, read the newest 10-K, DEF 14A and any 8-K since the last refresh. Update financials, pay, pay ratio, legal actions, deals. Confirm each person still holds the title and the FAH seat.
4. Check the FAH board page for roster changes (new officers each October).
5. For each pillar, check congress.gov for new actions on the listed bills and the Federal Register for the relevant rule cycle. Update threat level and summary in `lib/data.ts`.
6. Update every "Reviewed <month year>" line and the agent prompt.
7. Run `pnpm build` from this folder, open a PR to `main`, merge. Netlify deploys automatically.

## Known gaps after the October 2026 refresh

These could not be read from a primary document because the research environment could not reach the source sites. Each is marked on the relevant page or in the PR.
- 2026 Q1–Q3 LDA quarterly totals and per-firm LD-2 income.
- FEDPAC 2026-cycle itemized recipients and party split; 2024-cycle headline totals were carried forward unverified.
- FAH 2026 Chair-Elect and Treasurer after Martin Bonick left Ardent; Rob Jay's seat after moving to Executive Chairman.
- Lifepoint and Prime FY2025 financials.
- The AI agent knowledge folder is empty, so the widget answers only from its system prompt.
