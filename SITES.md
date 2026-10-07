# Rojas Report site registry

Single source of truth for which domain is served by which repo and host.
Updated 2026-10-07 from DNS, Netlify deploy records, and GitHub.

Rule: every public site gets one row here. If a site is not in this table it does not exist.

## Live on a custom domain

| Domain | Host | Repo | Branch / path | Last production deploy | Notes |
|---|---|---|---|---|---|
| rojasreport.com, www | Netlify `therojasreport` | HollandHouseHellevoet/rojasreport | main | 2026-04-13 | Next.js. Deployed pages are rankings/reform/compare/scope, i.e. CON-law content. Confirm this is the intended front door. |
| fah.rojasreport.com | **GitHub Pages** | HollandHouseHellevoet/FAH-Rojas-Report | MAIN (root) | 2026-03-23 | Legacy static HTML. Being replaced by the Netlify build below. CNAME file in that repo holds the domain. |
| poh.rojasreport.com | Netlify `physicianownedhospital` | HollandHouseHellevoet/RojasReportIntelligence | main, `apps/poh` | 2026-04-14 | Monorepo app. |
| aha.rojasreport.com | Netlify `americanhospitalassociationtest` | HollandHouseHellevoet/AmericanHospitalAssociation | main | 2026-04-03 (repo pushed 2026-10-07) | Project name still says "test". |
| academic.rojasreport.com | Netlify `amcai` | HollandHouseHellevoet/AiandAmc | main | 2026-04-03 | Single page plus llms-full.txt. |
| hac.rojasreport.com | Netlify `hac-rojasreport` | HollandHouseHellevoet/HealthAdvisoryCommittee | main | 2026-04-02 | Member profile pages. |
| waysandmeans.rojasreport.com | Netlify `waysandmeans` | HollandHouseHellevoet/Waysandmeans | **`claude/member-healthcare-profiles-S1Km4`** | 2026-04-10 | Production is a feature branch, not main. Merge or repoint. |
| read.rojasreport.com | Substack | n/a | n/a | n/a | Newsletter. |
| medmerge.co | Netlify (project not in this team listing) | HollandHouseHellevoet/MedMerge- | ? | repo pushed 2026-10-07 | Not a Rojas Report property but same owner. |

## Built on Netlify, no custom domain attached

| Netlify project | URL | Repo | Branch / path | Last deploy | Notes |
|---|---|---|---|---|---|
| `fah-rojasreport` | fah-rojasreport.netlify.app | RojasReportIntelligence | main, `apps/fah` | 2026-03-28 | **Stale.** Head is 2026-04-02. Sibling `rojasreport-hub` from the same repo did deploy on 04-02, so this project's auto-build is off or a build failed. Local build of head passes. Needs fah.rojasreport.com attached, then DNS moved off GitHub Pages. |
| `rojasreport-hub` | rojasreport-hub.netlify.app | RojasReportIntelligence | main, `apps/hub` | 2026-04-02 | Hub page linking FAH and POH. No domain. Overlaps with `rojasreportnew`. |
| `rojasreportnew` | rojasreportnew.netlify.app | HollandHouseHellevoet/Rojasreportmain | `claude/rojas-report-hub-gJ7sO` | 2026-04-10 | Another hub (about/methodology/press/privacy/tips). Deploys from a feature branch. |
| `rojasreportconlaws` | rojasreportconlaws.netlify.app | HollandHouseHellevoet/rojasreport | main | 2026-04-13 | Same repo and commit as rojasreport.com. Duplicate. |
| `con-rojasreport` | con-rojasreport.netlify.app | HollandHouseHellevoet/CertificateofNeed | main | 2026-04-03 | Third CON-law build. 11 state profiles. |
| `nflrojasreport` | nflrojasreport.netlify.app | HollandHouseHellevoet/NFL | `claude/nfl-health-system-subdomain-RbjOf` | 2026-04-13 (repo pushed 2026-10-07) | Deploys from a feature branch. No nfl.rojasreport.com DNS record yet. |

## Repos with no detected deployment

Content or working repos, or sites whose host could not be identified from this session:
Physician-Owned-Hospitals-, TooBigToCare, Hospital-book-second-version-too-big-to-care, MainRR, ReadRojasReport, Rojas-report-oldsitedata, SEO-for-RR, Substack-Rojas-Report, Substack-ideas, Social-media-posts, MedicalPatents, landgrantcollective, AthenaHealth, Nutex, NutexAnalysis, brainstormnutex, Nutex-brainstorm-, PHA-NuTex-CMMI-opportunity-, Phaideas, MMBP, Businessplandeck, Proforma-financials-for-MedMerge, Captive-Models-Byron-Dutch, Corrector-, Rapssongs, AG, Holland-House-Capital-, hollandhouse (private).

## Known problems

1. **Three CON-law builds** (rojasreport.com, rojasreportconlaws, con-rojasreport) from two repos. Pick one.
2. **Two hubs** (rojasreport-hub, rojasreportnew) from two repos. Pick one.
3. **Three sites deploy production from `claude/...` feature branches** (waysandmeans, rojasreportnew, nflrojasreport). Merge to main and set Netlify's production branch to main, or new pushes to main will never go live.
4. **FAH has two builds and the old one owns the domain.** See the stale row above.
5. **Netlify project names** do not match domains (`amcai`, `americanhospitalassociationtest`, `physicianownedhospital`). Cosmetic, but it is why the mapping got lost.

## Deployment pattern (target state)

- One repo per site, or one app folder per site inside RojasReportIntelligence.
- Production branch is always `main`.
- Netlify project name equals the subdomain (`fah`, `aha`, `poh`...).
- Every site folder has a `netlify.toml` and a `DATA_SOURCES.md` listing the primary sources and the refresh cadence.
- Content that changes quarterly (lobbying totals, PAC totals, board rosters, financials) lives in a data file, not inline in page components, so a refresh is a data edit plus a build.
